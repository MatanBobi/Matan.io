import Link from "next/link";
import { ViewTransition } from "react";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getNPostsFromStart } from "../lib/api";
import AboutMe from "../components/AboutMe";
export default function Index({ allPosts }) {
  const morePosts = allPosts;
  return (
    <Layout>
      <ViewTransition
        enter={{ 'nav-forward': 'nav-forward', 'nav-back': 'nav-back', default: 'none' }}
        exit={{ 'nav-forward': 'nav-forward', 'nav-back': 'nav-back', default: 'none' }}
        default="none"
      >
      <Container className="relative">
        <AboutMe />
        {/* <SideCircles /> */}
      </Container>
      <Container>
        <Intro />
        {morePosts.length > 0 && (
          <section aria-labelledby="latest-posts-title">
            <div
              className="flex items-center justify-between mb-8"
            >
              <h2
                id="latest-posts-title"
                className="font-title text-4xl md:text-5xl font-bold tracking-tight"
              >
                Blog
              </h2>
              <Link
                href="/posts"
                className="group hidden md:inline-flex items-center gap-1 text-brand-dark-grey dark:text-brand-light-grey hover:text-brand-black dark:hover:text-white transition-colors font-medium"
              >
                All posts{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
            <MoreStories posts={morePosts} featured />
          </section>
        )}
      </Container>
      </ViewTransition>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getNPostsFromStart(3, [
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "draft",
  ]);

  return {
    props: { allPosts },
  };
}
