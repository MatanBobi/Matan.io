import { MarkdownCodeBlock } from "./MarkdownCodeBlock";
import { MarkdownImage } from "./MarkdownImage";
import ExternalLink from "../../public/assets/icons/external-link.svg";

const Link = (props) => {
  return (
    <a
      className="markdown-link"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}{" "}
      <ExternalLink role="presentation" className="m-1 h-5 w-5" />
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
