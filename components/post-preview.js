import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import ViewCounter from "./ViewCounter";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  readTime,
}) {
  return (
    <Link href={`/posts/${slug}`} className="flex flex-col p-4 rounded-2xl border-brand-light-grey hover:border-brand-dark-grey transition-all duration-200 border cursor-pointer bg-white dark:bg-brand-background dark:border-brand-dark-grey dark:hover:border-brand-light-grey">
      <div className="mb-2 overflow-hidden">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="text-brand-dark-grey dark:text-brand-light-grey my-2 flex items-center gap-2">
        <DateFormatter dateString={date} /> · {readTime.text} · <ViewCounter slug={slug} incrementOnMount={false} />
      </div>
      <h3 className="text-2xl font-title font-bold mb-3 leading-snug">
        <span>{title}</span>
      </h3>
      <p className="leading-tight mb-4 text-brand-dark-grey dark:text-brand-light-grey font-sans">
        {excerpt}
      </p>
    </Link>
  );
}
