import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const MarkdownCodeBlock = ({ className, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <SyntaxHighlighter
      language={match[1]}
      PreTag="div"
      style={nord}
      {...props}
    />
  ) : (
    <code className={className} {...props} />
  );
};
