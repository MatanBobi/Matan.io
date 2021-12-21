import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-2 lg:gap-x-4 gap-y-6 md:gap-y-10 pb-16">
        {posts.map((post) => (
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
    </section>
  );
}
