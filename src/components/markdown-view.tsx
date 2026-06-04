"use client";
import { getEmailUsername, isMailtoLink } from "@/lib/utils";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import HoverLink from "./hover-link";

export default function MarkdownView({ content }: { content: string }) {
  return (
    <Markdown
      // biome-ignore lint/correctness/noChildrenProp: this feels better for what i'm trying to achieve
      children={content}
      remarkPlugins={[[remarkGfm, { singleTilde: true }]]}
      components={{
        i({ children, ...props }) {
          return (
            <i
              className="italic text-accent-950 dark:text-accent-550"
              {...props}
            >
              {children}
            </i>
          );
        },
        em({ children, ...props }) {
          return (
            <i
              className="italic text-accent-800 dark:text-accent-300 underline underline-offset-4"
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
              className="text-4xl my-3 text-foreground-900 dark:text-foreground-300 font-medium tracking-tight font-alternate"
            >
              {children}
            </h1>
          );
        },
        h2({ children, ...props }) {
          return (
            <h2
              {...props}
              className="my-3 text-3xl text-foreground-900 dark:text-foreground-300 font-medium tracking-tight font-alternate"
            >
              {children}
            </h2>
          );
        },
        h3({ children, ...props }) {
          return (
            <h3
              {...props}
              className="my-3 font-medium text-foreground-900 dark:text-foreground-300 text-2xl tracking-tight font-alternate"
            >
              {children}
            </h3>
          );
        },
        h4({ children, ...props }) {
          return (
            <h4
              {...props}
              className="font-medium text-xl text-foreground-900 dark:text-foreground-200 my-3 tracking-tight font-alternate"
            >
              {children}
            </h4>
          );
        },
        h5({ children, ...props }) {
          return (
            <h5
              className="font-medium text-foreground-900 dark:text-foreground-300 my-3 text-lg tracking-tight font-alternate"
              {...props}
            >
              {children}
            </h5>
          );
        },
        p({ children, ...props }) {
          return (
            <p
              className="text-foreground-900 dark:text-foreground-300 my-4 text-base"
              {...props}
            >
              {children}
            </p>
          );
        },
        hr() {
          return (
            <div className="w-full my-6 h-px bg-background-100 dark:bg-background-900/30" />
          );
        },
        a({ children, href }) {
          const link = href || "";
          const isMailto = isMailtoLink(link);

          if (isMailto) {
            return (
              <Link
                href={link}
                className="flex items-center justify-start gap-1 rounded-sm px-3 py-1 dark:bg-accent-100 dark:text-accent-500"
              >
                {getEmailUsername(link.split(":")[1])}
              </Link>
            );
          }

          return (
            <HoverLink
              href={href || ""}
              target="_blank"
              className="dark:text-accent-300 text-accent-800 underline italic"
            >
              {children}
            </HoverLink>
          );
        },
      }}
    />
  );
}
