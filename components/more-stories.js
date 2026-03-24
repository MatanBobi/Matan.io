import PostPreview from "../components/post-preview";
import { useInView } from "../hooks/useInView";

function AnimatedCard({ children, index }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="transition-none h-full"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function MoreStories({ posts, featured }) {
  if (featured && posts.length > 0) {
    const [first, ...rest] = posts;
    return (
      <section className="pb-12">
        <AnimatedCard index={0}>
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
        </AnimatedCard>
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rest.map((post, i) => (
              <AnimatedCard key={post.slug} index={i + 1}>
                <PostPreview
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  excerpt={post.excerpt}
                  readTime={post.readTime}
                />
              </AnimatedCard>
            ))}
          </div>
        )}
      </section>
    );
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 lg:gap-x-5 gap-y-5 md:gap-y-8 pb-12">
        {posts.map((post, i) => (
          <AnimatedCard key={post.slug} index={i % 3}>
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              readTime={post.readTime}
            />
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
