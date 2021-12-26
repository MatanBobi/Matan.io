import { useRouter } from "next/router";
import ErrorPage from "next/error";
import calculateReadingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import Container from "../../components/container";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { components } from "../../components/MDX";

export default function Post({ post, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="pb-32">
              <Head>
                <title>{post.title} | Matan.io</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                readTime={post.readTime}
                hideCoverImage={post.hideCoverImage}
              />
              <div className="max-w-2xl mx-auto">
                <div className="prose prose-neutral lg:prose-xl dark:prose-invert">
                  <MDXRemote {...post.mdxSource} components={components} />
                </div>
              </div>
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
