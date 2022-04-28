import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import calculateReadingTime from "reading-time";

const TWEET_RE = /<StaticTweet\sid="[0-9]+"\s\/>/g;
const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const tweetMatch = content.match(TWEET_RE);
  const tweetIDs = tweetMatch?.map((mdxTweet) => {
    const id = mdxTweet.match(/[0-9]+/g)[0];
    return id;
  });

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (field === "tweetIds") {
      items[field] = tweetIDs || [];
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  items.readTime = calculateReadingTime(content);

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getNPostsFromStart(numberOfPosts, fields = []) {
  const allPosts = getAllPosts(fields);
  const filteredPosts = allPosts.filter((post) => !post.draft);
  return filteredPosts.splice(0, numberOfPosts);
}
