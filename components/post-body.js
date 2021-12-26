import { MDXRemote } from "next-mdx-remote";

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="prose prose-neutral lg:prose-xl dark:prose-invert">
        <MDXRemote {...content} />
      </div>
    </div>
  );
}
