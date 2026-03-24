import Link from "next/link";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getNPostsFromStart } from "../lib/api";
import AboutMe from "../components/AboutMe";
import { useInView } from "../hooks/useInView";

export default function Index({ allPosts }) {
  const morePosts = allPosts;
  const [blogRef, blogInView] = useInView({ threshold: 0.1 });
  return (
    <Layout>
      <Container className="relative">
        <AboutMe />
        {/* <SideCircles /> */}
      </Container>
      <Container>
        <Intro />
        {morePosts.length > 0 && (
          <section aria-labelledby="latest-posts-title">
            <div
              ref={blogRef}
              className="flex items-center justify-between mb-8"
              style={{
                opacity: blogInView ? 1 : 0,
                transform: blogInView ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
              }}
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
