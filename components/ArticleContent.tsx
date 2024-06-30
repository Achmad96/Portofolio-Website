import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IArticleContent {
  content: string;
  headingMap: any;
}
export default function ArticleContent({
  content,
  headingMap,
}: IArticleContent) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => (
          <h1
            {...props}
            id={
              props.children ? headingMap[props.children.toString()] : undefined
            }
          >
            {props.children}
          </h1>
        ),
        h2: ({ node, ...props }) => (
          <h2
            {...props}
            id={
              props.children ? headingMap[props.children.toString()] : undefined
            }
          >
            {props.children}
          </h2>
        ),
        h3: ({ node, ...props }) => (
          <h3
            {...props}
            id={
              props.children ? headingMap[props.children.toString()] : undefined
            }
          >
            {props.children}
          </h3>
        ),
      }}
    >
      {content}
    </Markdown>
  );
}
