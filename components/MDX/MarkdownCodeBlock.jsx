import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export const MarkdownCodeBlock = ({ className, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <SyntaxHighlighter
      language={match[1]}
      PreTag="div"
      style={nightOwl}
      {...props}
    />
  ) : (
    <code className={className} {...props} />
  );
};
