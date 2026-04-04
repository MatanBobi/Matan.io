import { ViewTransition } from "react";
import PostPreview from "../components/post-preview";

export default function MoreStories({ posts, featured }) {
  if (featured && posts.length > 0) {
    const [first, ...rest] = posts;
    return (
      <section className="pb-12">
        <div className="mb-6">
          <PostPreview
            key={first.slug}
            title={first.title}
            coverImage={first.coverImage}
            date={first.date}
            author={first.author}
            slug={first.slug}
            excerpt={first.excerpt}
            readTime={first.readTime}
            featured
          />
        </div>
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rest.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
                readTime={post.readTime}
              />
            ))}
          </div>
        )}
      </section>
    );
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 lg:gap-x-5 gap-y-5 md:gap-y-8 pb-12">
        {posts.map((post) => (
          <ViewTransition key={post.slug} default="none">
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              readTime={post.readTime}
            />
          </ViewTransition>
        ))}
      </div>
    </section>
  );
}
