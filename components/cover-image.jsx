import Link from "next/link";
import Image from "next/image";

export default function CoverImage({ title, src, slug, style }) {
  const image = (
    <Image
      priority={true}
      src={src}
      alt={`Cover Image for ${title}`}
      className="object-cover rounded-2xl"
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
  return (
    <div className="sm:mx-0 aspect-w-16 aspect-h-9">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
