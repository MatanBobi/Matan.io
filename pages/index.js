import Head from "next/head";
import Link from "next/link";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import AboutMe from "../components/AboutMe";
import { SideCircles } from "../components/SideCircles";
import { Button } from "../components/Button";

export default function Index({ allPosts }) {
  const morePosts = allPosts;
  return (
    <>
      <Layout>
        <Head>
          <title>Matan.io</title>
        </Head>
        <Container className="relative">
          <AboutMe />
          <SideCircles />
        </Container>
        <Container>
          <Intro />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          <div className="pb-10 flex justify-center">
            <Link href="/blog" passHref>
              <Button>See more</Button>
            </Link>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
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
