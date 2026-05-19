"use client";

import { extractOGTag } from "@/lib/utils";
import { ArrowRight } from "@solar-icons/react/ssr";
import { load } from "cheerio";
import Link from "next/link";
import { Avatar, HoverCard } from "radix-ui";
import type React from "react";
import { useEffect, useState } from "react";

type Props = React.ComponentProps<typeof Link> & {
  side?: "top" | "right" | "bottom" | "left";
};

export default function HoverLink({ children, side, ...rest }: Props) {
  const [tags, setTags] = useState<Tag | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const page = await fetch(rest.href.toString())
        .then((res) => res.text())
        .catch((err) => console.log(err))
        .then((txt) => load(txt ? txt : ""));

      const tags = extractOGTag(page);

      setTags(tags);
    })();
  }, [rest.href]);

  if (!tags) {
    return null;
  }

  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <Link {...rest} className="underline text-teal-500 underline-offset-1">
          {children}
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="w-75 gap-3 mt-2 flex rounded-md border border-solid border-accent-900 bg-accent-950 text-accent-100 p-5 shadow-[hsl(206_22%_7%/35%)_0px_10px_38px_-10px,hsl(206_22%_7%/20%)_0px_10px_20px_-15px] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all"
          side={side}
          sideOffset={5}
        >
          <div className="flex">
            <Avatar.Root className="inline-flex size-11.25 select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle">
              <Avatar.Image
                className="size-full rounded-[inherit] object-cover"
                src={tags.image}
                alt={tags.title}
              />
              <Avatar.Fallback
                className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
                delayMs={600}
              >
                WI
              </Avatar.Fallback>
            </Avatar.Root>
          </div>
          <div className="flex flex-col items-start justify-start gap-1">
            <p className="text-sm font-medium">{tags.title}</p>
            <p className="text-xs">{tags.description}</p>
            <Link
              href={tags.url || ""}
              target="__blank"
              className="flex items-center justify-center gap-1 px-4 py-1 text-sm bg-teal-100/10 text-teal-500 mt-1 rounded-sm"
            >
              See
              <ArrowRight size={12} />
            </Link>
          </div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
