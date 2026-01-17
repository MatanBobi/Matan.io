import Link from "next/link";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getNPostsFromStart } from "../lib/api";
import AboutMe from "../components/AboutMe";
import { Button } from "../components/Button";

export default function Index({ allPosts }) {
  const morePosts = allPosts;
  return (
    <>
      <Layout>
        <Container className="relative">
          <AboutMe />
          {/* <SideCircles /> */}
        </Container>
        <Container>
          <Intro />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          <div className="pb-10 flex justify-center">
            <Link href="/posts">
              <Button>See more</Button>
            </Link>
          </div>
        </Container>
      </Layout>
    </>
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
