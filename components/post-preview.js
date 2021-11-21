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
}) {
  return (
    <div className="flex flex-col p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-5 rounded-lg overflow-hidden">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className="text-xl font-title font-medium mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-md mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-md leading-tight mb-4 text-brand-light-grey font-sans">
        {excerpt}
      </p>
    </div>
  );
}
