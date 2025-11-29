import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import ErrorPage from "next/error";
import calculateReadingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import Container from "../../components/container";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import { MDXRemote } from "next-mdx-remote";
import { components } from "../../components/MDX";
import { PostFooter } from "../../components/PostFooter";
import { SideCircles } from "../../components/SideCircles";
import { PostSeo } from "../../components/PostSocial/PostSeo";
import Tweet from "../../components/Tweet";
import { getTweets } from "../../lib/twitter";
import { GiscusComments } from "../../components/GiscusComment";

export default function Post({ post, preview }) {
  const router = useRouter();
  const [permalink, setPermalink] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const host = window.location.host;
    const baseUrl = `https://${host}`;

    setPermalink(`${baseUrl}${router.asPath}`);
  }, [router.asPath]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const StaticTweet = ({ id }) => {
    const tweet = post.tweets.find((tweet) => tweet.id === id);
    return <Tweet {...tweet} />;
  };

  return (
    <Layout preview={preview}>
      {/* <SideCircles /> */}
      <Container className="max-w-4xl">
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Link
              href="/posts"
              className="flex items-center justify-center text-lg py-3.5 my-6 md:my-12 group"
              passHref
            >
              <div className="flex items-center my-10 cursor-pointer w-max rounded-full py-5 px-7 border-brand-light-grey dark:border-brand-dark-grey border font-bold">
                <div className="hidden dark:flex">
                  <Image
                    src="/assets/icons/arrow-back.svg"
                    height={24}
                    width={24}
                    alt="All posts"
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                </div>
                <div className="flex dark:hidden">
                  <Image
                    src="/assets/icons/arrow-back-light.svg"
                    height={24}
                    width={24}
                    alt="All posts"
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                </div>
                <span className="mx-2">All posts</span>
              </div>
            </Link>
            <article className="pb-4 relative">
              <PostSeo
                coverImage={post.ogImage.url}
                readTime={post.readTime.text}
                title={post.title}
                date={post.date}
                description={post.excerpt}
                keywords={post.keywords}
              />
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                ogImage={post.ogImage}
                date={post.date}
                readTime={post.readTime}
                hideCoverImage={post.hideCoverImage}
                slug={post.slug}
              />
              <div className="max-w-3xl mx-auto">
                {/* TODO: Add special selection color using selection:bg-fuchsia-300 selection:text-fuchsia-900 */}
                <div className="prose prose-neutral prose-a:leading-5 prose-p:relative prose-p:z-0 prose-pre:p-0 lg:prose-xl lg:prose-pre:p-0 dark:prose-invert prose-quoteless prose-code:p-0.5 prose-code:rounded-sm prose-code:font-normal prose-code:bg-slate-800/20 dark:prose-code:bg-slate-100/20 lg:prose-h2:text-2xl prose-h2:font-bold">
                  <MDXRemote
                    {...post.mdxSource}
                    components={{ ...components, StaticTweet }}
                  />
                </div>
              </div>
              <PostFooter
                author={post.author}
                url={permalink}
                slug={post.slug}
                title={post.title}
              />
            </article>
            {isMounted && <GiscusComments />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "excerpt",
    "ogImage",
    "coverImage",
    "hideCoverImage",
    "tweetIds",
    "keywords",
  ]);

  const tweets = await getTweets(post.tweetIds);
  const mdxSource = await serialize(post.content);

  const readTime = calculateReadingTime(post.content);
  return {
    props: {
      post: {
        ...post,
        readTime,
        mdxSource,
        tweets,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
