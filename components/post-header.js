import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({
  title,
  coverImage,
  date,
  readTime,
  hideCoverImage,
  ogImage,
  slug,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 text-base md:text-lg text-brand-dark-grey dark:text-brand-light-grey md:mb-10">
          <DateFormatter dateString={date} />
          <span className="mx-2" aria-hidden="true">
            &middot;
          </span>
          <span>{readTime.text}</span>
        </div>
      </div>
      {!hideCoverImage && (
        <div className="mb-8 md:mb-14 sm:mx-0 p-3 bg-white dark:bg-brand-background rounded-2xl border-brand-light-grey dark:border-brand-dark-grey border">
          <CoverImage
            title={title}
            src={coverImage}
            slug={slug}
            height={620}
            width={1240}
          />
          {ogImage.credit ? (
            <div className="mt-3 text-sm text-brand-dark-grey dark:text-brand-light-grey">
              {ogImage.credit}
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
