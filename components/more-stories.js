import PostPreview from "../components/post-preview";
import Button from "../components/button";
export default function MoreStories({ posts }) {
  return (
    <section>
      {/* <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 gap-y-20 md:gap-y-32 pb-16">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      <Button>Test</Button>
    </section>
  );
}
