import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
import { Button } from "../../components/Button";
import { PostSeo } from "../../components/PostSocial/PostSeo";

export default function Post({ post, preview }) {
  const router = useRouter();
  const [permalink, setPermalink] = useState("");
  useEffect(() => {
    const host = window.location.host;
    const baseUrl = `https://${host}`;

    setPermalink(`${baseUrl}${router.asPath}`);
  }, [router.asPath]);
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <SideCircles />
      <Container className="max-w-4xl">
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Button
              className="flex items-center justify-center text-lg py-3.5 my-6 md:my-12"
              onClick={() => router.back()}
            >
              <Image
                src="/assets/icons/arrow-back.svg"
                height={24}
                width={24}
                alt="Back"
              />
              Back
            </Button>
            <article className="pb-32 relative">
              <PostSeo
                coverImage={post.ogImage.url}
                readTime={post.readTime.text}
                title={post.title}
                date={post.date}
              />
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                readTime={post.readTime}
                hideCoverImage={post.hideCoverImage}
              />
              <div className="max-w-3xl mx-auto">
                <div className="prose prose-neutral prose-pre:p-0 lg:prose-xl lg:prose-pre:p-0 dark:prose-invert prose-quoteless prose-code:p-0.5 prose-code:rounded prose-code:font-normal prose-code:bg-slate-800 prose-code:bg-opacity-20 dark:prose-code:bg-slate-100 dark:prose-code:bg-opacity-20">
                  <MDXRemote {...post.mdxSource} components={components} />
                </div>
              </div>
              <PostFooter
                author={post.author}
                url={permalink}
                slug={post.slug}
                title={post.title}
              />
            </article>
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
    "ogImage",
    "coverImage",
    "hideCoverImage",
  ]);

  const mdxSource = await serialize(post.content);
  const readTime = calculateReadingTime(post.content);
  return {
    props: {
      post: {
        ...post,
        readTime,
        mdxSource,
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
