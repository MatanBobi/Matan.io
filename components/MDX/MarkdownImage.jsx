import Image from "next/image";

export const MarkdownImage = (props) => (
  <div className="sm:mx-0 aspect-w-16 aspect-h-9">
    <Image
      alt={props.alt}
      {...props}
      className="object-contain"
      layout="fill"
    />
  </div>
);
