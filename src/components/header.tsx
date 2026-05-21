"use client";

import { useScrollBlur } from "@/lib/hooks";
import { HamburgerMenu } from "@solar-icons/react/ssr";
import Link from "next/link";
import { DropdownMenu, HoverCard } from "radix-ui";
import ContactForm from "./contact-form";

export default function Header() {
  const isScrolled = useScrollBlur();

  return (
    <div
      className={`fixed z-30 w-full flex items-center bg-transparent justify-between py-5 px-10 transition ${isScrolled ? "backdrop-blur-md" : "backdrop-blur-none"}`}
    >
      <Link href="/" className="font-title text-3xl">
        Axis
      </Link>
      <nav className="hidden md:lg:xl:flex items-center justify-center gap-5">
        <Link href="/studies" className="navlink">
          Case Studies
        </Link>
        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <span className="navlink cursor-pointer">Partners</span>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content
              sideOffset={5}
              className={`w-120 transition-all z-40 rounded-sm ${isScrolled ? "bg-background-950 border border-solid border-background-900/50 text-foreground-50" : "bg-background-100 border border-solid border-background-300/50 text-foreground-950"} p-5 shadow-[hsl(206_22%_7%/35%)_0px_10px_38px_-10px,hsl(206_22%_7%/20%)_0px_10px_20px_-15px] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all`}
            >
              content
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      </nav>
      <nav className="flex md:lg:xl:hidden items-center justify-end gap-3">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="bg-white rounded-sm p-1 text-foreground-900">
              <HamburgerMenu weight="Outline" size={20} />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="min-w-30 rounded-sm bg-background-950 text-foreground-100 shadow-[0px_10px_38px_-10px_rgba(22,23,24,0.35),0px_10px_20px_-15px_rgba(22,23,24,0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
              sideOffset={10}
            >
              content
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </nav>
      <nav className="hidden md:lg:xl:flex items-center justify-end gap-3">
        <ContactForm>
          <button className="bg-background-50 text-foreground-950 px-4 text-sm py-1 rounded-full font-medium">
            Contact Us
          </button>
        </ContactForm>
      </nav>
    </div>
  );
}
