import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

function replaceLast(str, find, replace) {
  const lastIndex = str.lastIndexOf(find);
  if (lastIndex === -1) {
    return str;
  }
  const before = str.substring(0, lastIndex);
  const after = str.substring(lastIndex + find.length);
  return before + replace + after;
}

export const MarkdownCodeBlock = ({ className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  const formattedChildren = replaceLast(children, "\n", "");
  return match ? (
    <SyntaxHighlighter
      language={match[1]}
      PreTag="div"
      customStyle={{ margin: 0 }}
      style={nord}
      {...props}
    >
      {formattedChildren}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {formattedChildren}
    </code>
  );
};
