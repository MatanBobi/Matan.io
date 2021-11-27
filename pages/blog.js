import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import { Input } from "../components/Input";

export default function Blog({ allPosts }) {
  const router = useRouter();
  const [filter, setFilter] = useState("");
  useEffect(() => {
    if (filter === router.query?.q || !router.isReady) return;
    let query;
    if (filter) {
      query = {
        ...router.query,
        q: filter,
      };
    } else {
      query = {};
    }

    router.replace({ pathname: router.pathname, query });
  }, [filter]);

  useEffect(() => {
    if (router.isReady && router.query?.q) {
      setFilter(router.query.q);
    }
  }, [router.isReady]);

  const filteredPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <Layout>
        <Head>
          <title>Matan.io</title>
        </Head>
        <Container className="my-8">
          <Input
            value={filter}
            onChange={(value) => {
              setFilter(value);
            }}
          />
        </Container>
        <Container>
          <MoreStories posts={filteredPosts} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
