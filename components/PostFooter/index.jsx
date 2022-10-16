import Avatar from "../avatar";
import { PostSocial } from "../PostSocial";

export const PostFooter = ({ author, title, url, slug }) => {
  return (
    <footer className="max-w-3xl mx-auto">
      <PostSocial title={title} url={url} slug={slug} />
      <hr className="mb-4 md:mb-8 max-w-3xl mx-auto dark:border-stone-400" />
    </footer>
  );
};
