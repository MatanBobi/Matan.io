import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  readTime,
}) {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]" passHref>
      <div className="flex flex-col p-4 rounded-lg border-brand-light-grey dark:border-brand-dark-grey border cursor-pointer">
        <div className="mb-4 rounded-lg overflow-hidden">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        <h3 className="text-2xl font-title font-bold mb-3 leading-snug">
          <span className="hover:underline">{title}</span>
        </h3>
        <div className="text-md mb-4">
          <DateFormatter dateString={date} /> - {readTime.text}
        </div>
        <p className="text-md leading-tight mb-4 text-brand-dark-grey dark:text-brand-light-grey font-sans">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}
