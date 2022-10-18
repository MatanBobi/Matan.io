import { MarkdownCodeBlock } from "./MarkdownCodeBlock";
import { MarkdownImage } from "./MarkdownImage";

const Link = (props) => {
  return (
    <a
      className="markdown-link"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
};

export const components = {
  img: MarkdownImage,
  // h1: Heading.H1,
  // h2: Heading.H2,
  // p: Text,
  a: Link,
  code: MarkdownCodeBlock,
  // inlineCode: Code
};
