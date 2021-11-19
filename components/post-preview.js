import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import { useEffect, useState } from "react";
const get_average_rgb = (src) => {
  /* https://stackoverflow.com/questions/2541481/get-average-color-of-image-via-javascript */
  return new Promise((resolve) => {
    let context = document.createElement("canvas").getContext("2d");
    context.imageSmoothingEnabled = true;

    let img = new Image();
    img.src = src;
    img.crossOrigin = "";

    img.onload = () => {
      context.drawImage(img, 0, 0, 1, 1);
      resolve(context.getImageData(0, 0, 1, 1).data.slice(0, 3));
    };
  });
};
export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  const [shadowColor, setShadowColor] = useState(null);
  useEffect(async () => {
    const color = await get_average_rgb(coverImage);
    setShadowColor(color);
  }, []);

  return (
    <div
      className="flex flex-col bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      style={
        shadowColor
          ? {
              boxShadow: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(${shadowColor[0]},${shadowColor[1]},${shadowColor[2]},0.32) 0px 8px 30px 0px`,
            }
          : {}
      }
    >
      <div className="mb-5 rounded-lg overflow-hidden">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className="text-xl font-medium mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-md mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-md leading-relaxed mb-4">{excerpt}</p>
      <div className="mt-auto">
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  );
}
