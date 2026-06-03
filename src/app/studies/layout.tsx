import { BackButton, ContactForm } from "@/components";
import { allStudies } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import type { Metadata } from "next";
import Link from "next/link";

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
      <div className="w-[22%] h-full hidden md:lg:xl:flex md:lg:xl:flex-col items-start justify-start">
        <nav className="flex items-center justify-between p-3">
          <BackButton />
          <span className="text-lg mx-2">Case Studies</span>
        </nav>
        <div className="flex flex-col items-start justify-start">
          {studies.map((study, idx) => (
            <Link
              className="px-3 py-4 border-b hover:bg-background-900/20 border-b-solid border-b-background-900/30 w-full"
              href={study.url}
              key={`${idx}__${study._id}`}
            >
              <h1 className="text-sm font-medium text-foreground-200">
                {study.title}
              </h1>
              <p className="text-xs text-foreground-500">{study.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full md:lg:xl:w-[78%] h-full border-l border-l-solid border-l-background-900/35">
        {children}
      </div>
      <div className="flex md:lg:xl:hidden p-4 text-sm absolute bottom-0 left-0 w-full bg-background-900/40 backdrop-blur-2xl border-t border-t-solid border-t-background-900 items-center justify-end gap-3">
        <ContactForm>
          <button className="px-4 py-1 rounded-full bg-background-50 text-foreground-950">
            Get In Touch
          </button>
        </ContactForm>
      </div>
    </main>
  );
}
