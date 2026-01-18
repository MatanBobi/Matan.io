#!/usr/bin/env node

/**
 * Generate thumbnail images for blog posts
 *
 * Usage:
 *   node scripts/generate-thumbnails.js              # Generate all thumbnails
 *   node scripts/generate-thumbnails.js [slug]       # Generate single thumbnail
 *
 * Requirements:
 *   - Dev server running at localhost:3000 (npm run dev)
 *   - Playwright installed (npx playwright install chromium)
 */

const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const OUTPUT_DIR = path.join(__dirname, "../public/assets/blog");

async function getPostSlugs() {
  const postsDir = path.join(__dirname, "../_posts");
  const files = fs.readdirSync(postsDir);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

async function generateThumbnail(browser, slug) {
  const page = await browser.newPage();

  // Set viewport to exact OG image dimensions
  await page.setViewportSize({ width: 1200, height: 630 });

  const url = `${BASE_URL}/posts/${slug}/thumbnail`;
  console.log(`📸 Generating thumbnail for: ${slug}`);

  try {
    await page.goto(url, { waitUntil: "networkidle" });

    // Hide Next.js dev indicator by injecting CSS that hides fixed elements in corners
    await page.addStyleTag({
      content: `
        /* Hide Next.js dev indicator and any similar overlays */
        nextjs-portal,
        [data-nextjs-dialog-overlay],
        [data-nextjs-toast],
        #__next-build-indicator,
        #devtools-indicator {
          display: none !important;
        }
      `,
    });

    // Also try to remove elements directly
    await page.evaluate(() => {
      // Find and remove any custom elements (Next.js dev tools are often custom elements)
      document.querySelectorAll("body > *").forEach((el) => {
        if (
          el.tagName.includes("-") ||
          el.tagName.toLowerCase() === "nextjs-portal"
        ) {
          el.remove();
        }
      });
    });

    // Ensure the output directory exists
    const outputPath = path.join(OUTPUT_DIR, slug);
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }

    const screenshotPath = path.join(outputPath, "og-image.png");

    await page.screenshot({
      path: screenshotPath,
      type: "png",
    });

    console.log(`   ✅ Saved: ${screenshotPath}`);
    return true;
  } catch (error) {
    console.error(`   ❌ Failed: ${error.message}`);
    return false;
  } finally {
    await page.close();
  }
}

async function main() {
  const specificSlug = process.argv[2];

  console.log("\n🖼️  Thumbnail Generator\n");

  // Check if server is running
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error();
  } catch {
    console.error("❌ Dev server not running. Start it with: npm run dev\n");
    process.exit(1);
  }

  const browser = await chromium.launch();

  try {
    let slugs;
    if (specificSlug) {
      slugs = [specificSlug];
    } else {
      slugs = await getPostSlugs();
    }

    console.log(`Found ${slugs.length} post(s) to process\n`);

    let success = 0;
    let failed = 0;

    for (const slug of slugs) {
      const result = await generateThumbnail(browser, slug);
      if (result) success++;
      else failed++;
    }

    console.log(`\n✨ Done! ${success} generated, ${failed} failed\n`);
  } finally {
    await browser.close();
  }
}

main().catch(console.error);
