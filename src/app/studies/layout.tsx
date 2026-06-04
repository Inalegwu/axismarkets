import { BackButton, ContactForm } from "@/components";
import { allStudies } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import type { Metadata } from "next";
import Link from "next/link";
import ThemeButton from "../../components/theme-button";

export const metadata: Metadata = {
  title: "Axis Market Partners | Case Studies",
  description:
    "Investment Case Studies Written and Curated by Axis Market Partners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const studies = allStudies.sort((a, b) =>
    // @ts-ignore: idfk
    compareDesc(new Date(a.date || ""), new Date(b.date, "")),
  );

  return (
    <main className="flex flex-col md:lg:xl:flex-row items-center w-full h-screen overflow-hidden">
      {/* sidebar navigation */}
      <div className="w-[22%] h-full hidden md:lg:xl:flex md:lg:xl:flex-col items-start justify-start">
        <nav className="flex items-center justify-start p-3 w-full border-b border-b-solid border-b-background-200 dark:border-b-background-900/30">
          <BackButton />
          <span className="text-xl mx-2 font-bold">Case Studies</span>
        </nav>
        <div className="flex flex-col items-start w-full h-full justify-start">
          {studies.map((study, idx) => (
            <Link
              className="px-3 py-4 border-b hover:bg-background-100/60 dark:hover:bg-background-900/20 border-b-solid border-b-background-200 dark:border-b-background-900/30 w-full"
              href={study.url}
              key={`${idx}__${study._id}`}
            >
              <h1 className="text-sm font-medium text-foreground-950 dark:text-foreground-200">
                {study.title}
              </h1>
              <p className="text-xs text-foreground-500">{study.subtitle}</p>
            </Link>
          ))}
        </div>
        <div className="w-full p-3 flex items-center justify-end">
          <ThemeButton />
        </div>
      </div>
      <div className="w-full md:lg:xl:w-[78%] h-full border-l border-l-solid border-l-background-200 dark:border-l-background-900/35">
        {children}
      </div>
      {/* bottom navigation */}
      <div className="flex md:lg:xl:hidden p-4 text-sm absolute bottom-0 left-0 w-full bg-background-100/50 dark:bg-background-900/40 backdrop-blur-2xl border-t border-t-solid border-t-background-300 dark:border-t-background-900/50 items-center justify-between gap-3">
        <ContactForm>
          <button className="px-4 py-1 rounded-full bg-background-50 text-foreground-950">
            Get In Touch
          </button>
        </ContactForm>
        <ThemeButton />
      </div>
    </main>
  );
}
