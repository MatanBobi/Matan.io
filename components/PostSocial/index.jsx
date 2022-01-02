import Link from "next/link";
import { globals } from "../../lib/constants";

export const PostSocial = ({ title, url, slug }) => {
  const text = `I just read "${title}" by @matanbobi\n\n`;

  return (
    <div className="flex justify-between mt-4 mb-1 md:mb-2 md:mt-8">
      <Link
        target="_blank"
        rel="noreferrer noopener"
        href={`https://twitter.com/intent/tweet?${new URLSearchParams({
          url: url,
          text,
        })}`}
      >
        Tweet this article
      </Link>
      <Link
        href={`${globals.githubRepo}/edit/main/_posts/${slug}.mdx`}
        target="_blank"
        rel="noreferrer noopener"
      >
        Edit this article
      </Link>
    </div>
  );
};
