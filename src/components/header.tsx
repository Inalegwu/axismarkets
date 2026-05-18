"use client";

import { useScrollBlur } from "@/lib/hooks";
import Link from "next/link";

export default function Header() {
  const isScrolled = useScrollBlur();

  return (
    <div
      className={`fixed z-20 w-full flex items-center bg-transparent justify-between py-5 px-10 transition ${isScrolled ? "backdrop-blur-md" : "backdrop-blur-none"}`}
    >
      <Link href="/" className="font-title text-3xl">
        Axis
      </Link>
      <nav className="flex items-center justify-center gap-3">
        <button className="navlink">Case Studies</button>
      </nav>
      <nav className="flex items-center justify-end gap-3">
        <button className="bg-background-50 text-foreground-950 px-4 text-sm py-1 rounded-full font-medium">
          Contact Us
        </button>
      </nav>
    </div>
  );
}
