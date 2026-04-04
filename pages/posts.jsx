import { useEffect, useState, startTransition } from "react";
import { ViewTransition } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import { Input } from "../components/Input";
import { Tag } from "../components/Tag";

export default function Blog({ allPosts }) {
  const router = useRouter();
  const [filter, setFilter] = useState("");

  const allTags = [
    ...new Set(allPosts.flatMap((post) => post.tags || [])),
  ].sort();

  const toggleTag = (tag) => {
    const selectedTags = new Set(router.query?.tags?.split(",") || []);

    if (selectedTags.has(tag)) {
      selectedTags.delete(tag);
    } else {
      selectedTags.add(tag);
    }

    const query = { ...router.query };
    if (selectedTags.size > 0) {
      query.tags = Array.from(selectedTags).join(",");
    } else {
      delete query.tags;
    }
    startTransition(() => {
      router.replace({ pathname: router.pathname, query }, undefined, {
        shallow: true,
      });
    });
  };
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

    startTransition(() => {
      router.replace({ pathname: router.pathname, query });
    });
  }, [filter]);

  useEffect(() => {
    if (router.isReady && router.query?.q) {
      setFilter(router.query.q);
    }
  }, [router.isReady]);

  const filteredPosts = allPosts.filter((post) => {
    const matchesTitle = post.title
      .toLowerCase()
      .includes(filter.toLowerCase());
    const selectedTags = new Set(router.query?.tags?.split(",") || []);
    const matchesTags =
      selectedTags.size === 0 ||
      (post.tags && post.tags.some((tag) => selectedTags.has(tag)));
    return matchesTitle && matchesTags;
  });
  return (
    <Layout>
      <ViewTransition
        enter={{ 'nav-forward': 'nav-forward', 'nav-back': 'nav-back', default: 'none' }}
        exit={{ 'nav-forward': 'nav-forward', 'nav-back': 'nav-back', default: 'none' }}
        default="none"
      >
      <Head>
        <title>All Posts | Matan Borenkraout</title>
        <meta
          name="keywords"
          content="JavaScript, TypeScript, React, Testing, Frontend Engineering, Engineering, Matan Borenkraout Blog"
        />
      </Head>
      <Container className="my-8">
        <div className="flex flex-col gap-8">
          <h1 className="font-title text-4xl md:text-5xl font-bold tracking-tighter">
            All posts
          </h1>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full md:w-2/6">
              <Input
                value={filter}
                onChange={(value) => {
                  setFilter(value);
                }}
                placeholder="Search posts…"
                aria-label="Search posts by title"
              />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-3">Filter by topic</h2>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Topic filters"
            >
              {allTags.map((tag) => (
                <Tag
                  tag={tag}
                  key={tag}
                  selected={
                    router.query?.tags?.split(",")?.includes(tag) || false
                  }
                  onClick={toggleTag}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Container>
        {filteredPosts.length > 0 ? (
          <MoreStories posts={filteredPosts} />
        ) : (
          <div className="py-16 text-center text-brand-dark-grey dark:text-brand-light-grey">
            <p className="text-xl">No posts found matching your search.</p>
            <button
              onClick={() => {
                setFilter("");
                startTransition(() => {
                  router.replace({ pathname: router.pathname }, undefined, {
                    shallow: true,
                  });
                });
              }}
              className="mt-4 underline underline-offset-4 hover:text-brand-black dark:hover:text-white transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </Container>
      </ViewTransition>
    </Layout>
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
    "draft",
    "tags",
  ]);
  const filteredPosts = allPosts.filter((post) => !post.draft);
  return {
    props: { allPosts: filteredPosts },
  };
}
