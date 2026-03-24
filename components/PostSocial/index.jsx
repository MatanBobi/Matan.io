import Link from "next/link";
import { globals } from "../../lib/constants";

export const PostSocial = ({ title, url, slug }) => {
  const text = `I just read "${title}" by @matanbobi\n\n`;

  return (
    <div className="flex justify-between items-center mb-6 md:mb-8">
      <Link
        target="_blank"
        rel="noreferrer noopener"
        href={`https://twitter.com/intent/tweet?${new URLSearchParams({
          url: url,
          text,
        })}`}
        className="underline underline-offset-4 decoration-1 hover:decoration-2 text-brand-dark-grey dark:text-brand-light-grey hover:text-brand-black dark:hover:text-white transition-colors"
      >
        Tweet this article
      </Link>
      <Link
        href={`${globals.githubRepo}/edit/main/_posts/${slug}.mdx`}
        target="_blank"
        rel="noreferrer noopener"
        className="underline underline-offset-4 decoration-1 hover:decoration-2 text-brand-dark-grey dark:text-brand-light-grey hover:text-brand-black dark:hover:text-white transition-colors"
      >
        Edit on GitHub
      </Link>
    </div>
  );
};
