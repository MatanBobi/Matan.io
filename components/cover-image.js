import Link from "next/link";
import Image from "next/image";

export default function CoverImage({ title, src, slug, style }) {
  const image = (
    <Image
      priority={true}
      src={src}
      alt={`Cover Image for ${title}`}
      className="object-cover rounded-2xl"
      layout="fill"
    />
  );
  return (
    <div className="sm:mx-0 aspect-w-16 aspect-h-9">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
