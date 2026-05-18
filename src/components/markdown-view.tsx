import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import HoverLink from "./hover-link";

export default async function MarkdownView({ content }: { content: string }) {
  return (
    <Markdown
      // biome-ignore lint/correctness/noChildrenProp: this feels better for what i'm trying to achieve
      children={content}
      remarkPlugins={[[remarkGfm, { singleTilde: true }]]}
      components={{
        i({ children, ...props }) {
          return (
            <i className="italic text-accent-550" {...props}>
              {children}
            </i>
          );
        },
        em({ children, ...props }) {
          return (
            <i
              className="italic text-accent-300 underline underline-offset-4"
              {...props}
            >
              {children}
            </i>
          );
        },
        br() {
          return <div className="my-3" />;
        },
        h1({ children, ...props }) {
          return (
            <h1
              {...props}
              className="text-4xl font-medium underline underline-offset-2 text-accent-300 my-3"
            >
              {children}
            </h1>
          );
        },
        h2({ children, ...props }) {
          return (
            <h2
              {...props}
              className="my-3 text-3xl font-medium text-accent-300 underline underline-offset-2"
            >
              {children}
            </h2>
          );
        },
        h3({ children, ...props }) {
          return (
            <h3
              {...props}
              className="my-3 font-medium text-2xl text-accent-300 underline underline-offset-2"
            >
              {children}
            </h3>
          );
        },
        h4({ children, ...props }) {
          return (
            <h4
              {...props}
              className="font-medium text-accent-300 underline underline-offset-2 text-xl my-3"
            >
              {children}
            </h4>
          );
        },
        h5({ children, ...props }) {
          return (
            <h5
              className="font-medium my-3 text-accent-300 underline underline-offset-2 text-lg"
              {...props}
            >
              {children}
            </h5>
          );
        },
        p({ children, ...props }) {
          return (
            <p className="text-neutral-200 my-3" {...props}>
              {children}
            </p>
          );
        },
        a({ children, href }) {
          return (
            <HoverLink
              href={href || ""}
              target="_blank"
              className="text-accent-300 underline underline-offset-2 italic"
            >
              {children}
            </HoverLink>
          );
        },
      }}
    />
  );
}
