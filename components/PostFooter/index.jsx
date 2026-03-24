import Avatar from "../avatar";
import { PostSocial } from "../PostSocial";

export const PostFooter = ({ author, title, url, slug }) => {
  return (
    <footer className="max-w-3xl mx-auto mt-10">
      <hr className="mb-6 md:mb-8 dark:border-stone-400" />
      <PostSocial title={title} url={url} slug={slug} />
    </footer>
  );
};
