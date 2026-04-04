import DateFormatter from "../components/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  readTime,
  featured,
}) {
  if (featured) {
    return (
      <Link
        href={`/posts/${slug}`}
        className="group flex flex-col md:flex-row gap-6 p-5 rounded-2xl border border-brand-light-grey/60 hover:border-brand-dark-grey transition-all duration-200 cursor-pointer bg-white dark:bg-[#2a303c] dark:border-brand-dark-grey dark:hover:border-brand-light-grey/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
      >
        <div className="md:w-3/5 overflow-hidden rounded-xl">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>
        <div className="md:w-2/5 flex flex-col justify-center">
          <div className="text-sm text-brand-dark-grey dark:text-brand-light-grey mb-3">
            <DateFormatter dateString={date} />
            <span className="mx-1.5" aria-hidden="true">
              &middot;
            </span>
            <span>{readTime.text}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-title font-bold mb-3 leading-snug group-hover:underline underline-offset-4 decoration-2">
            {title}
          </h3>
          <p className="leading-relaxed text-brand-dark-grey dark:text-brand-light-grey font-sans line-clamp-3">
            {excerpt}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/posts/${slug}`}
      className="group flex flex-col h-full p-4 rounded-2xl border border-brand-light-grey/60 hover:border-brand-dark-grey hover:-translate-y-0.5 transition-all duration-200 cursor-pointer bg-white dark:bg-[#2a303c] dark:border-brand-dark-grey dark:hover:border-brand-light-grey/60 shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
    >
      <div className="mb-3 overflow-hidden rounded-xl">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="text-sm text-brand-dark-grey dark:text-brand-light-grey mb-2">
        <DateFormatter dateString={date} />
        <span className="mx-1.5" aria-hidden="true">
          &middot;
        </span>
        <span>{readTime.text}</span>
      </div>
      <h3 className="text-xl font-title font-bold mb-2 leading-snug group-hover:underline underline-offset-4 decoration-2">
        <span>{title}</span>
      </h3>
      <p className="leading-relaxed text-sm text-brand-dark-grey dark:text-brand-light-grey font-sans line-clamp-2">
        {excerpt}
      </p>
    </Link>
  );
}
