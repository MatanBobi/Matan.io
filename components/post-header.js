import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({
  title,
  coverImage,
  date,
  readTime,
  hideCoverImage,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-3xl mx-auto">
        <div className="mb-4 text-l md:text-xl lg:text-2xl dark:text-brand-light-grey md:mb-12">
          <DateFormatter dateString={date} /> - {readTime.text}
        </div>
      </div>
      {!hideCoverImage && (
        <div className="mb-8 md:mb-16 sm:mx-0 p-4 bg-white dark:bg-brand-background rounded-lg border-brand-light-grey dark:border-brand-dark-grey border">
          <CoverImage
            title={title}
            src={coverImage}
            height={620}
            width={1240}
          />
        </div>
      )}
    </>
  );
}
