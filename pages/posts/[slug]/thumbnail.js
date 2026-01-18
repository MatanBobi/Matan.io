import { getPostBySlug, getPostSlugs } from "../../../lib/api";
import { parseISO, format } from "date-fns";
import Image from "next/image";
import Head from "next/head";
import calculateReadingTime from "reading-time";

export default function Thumbnail({ post, readingTime }) {
  const formattedDate = format(parseISO(post.date), "LLLL d, yyyy");

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="dark">
        {/* Container sized for OG image: 1200x630 */}
        <div
          className="relative bg-brand-background text-white overflow-hidden"
          style={{ width: "1200px", height: "630px" }}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <Image
              src={post.coverImage}
              alt=""
              fill
              className="object-cover"
              priority
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-linear-to-t from-brand-background via-brand-background/30 to-brand-background/40" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-12">
            {/* Logo */}
            <div className="absolute top-8 left-12 flex text-5xl font-logo items-end">
              <span>bobi</span>
              <div className="relative bg-cyan w-6 h-2 bottom-2 mx-1 rounded-sm" />
            </div>

            {/* Post info */}
            <div className="max-w-5xl">
              <h1 className="font-title text-7xl font-bold leading-tight mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-3xl text-gray-300">
                <time dateTime={post.date}>{formattedDate}</time>
                <span className="text-brand-blue">•</span>
                <span>{readingTime?.text}</span>
              </div>
            </div>

            {/* Accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-brand-blue" />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "coverImage",
    "content",
  ]);

  const readTime = calculateReadingTime(post.content);
  console.log(readTime);
  return {
    props: {
      post,
      readingTime: readTime,
    },
  };
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug.replace(/\.mdx$/, ""),
      },
    })),
    fallback: false,
  };
}
