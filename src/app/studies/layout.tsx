import { BackButton } from "@/components";
import type { Metadata } from "next";

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
  return (
    <main className="flex items-center w-full h-screen overflow-hidden">
      <div className="w-[20%] h-full flex flex-col items-start justify-start">
        <nav className="flex items-center justify-between p-3">
          <BackButton />
          <span className="text-lg mx-2">Case Studies</span>
        </nav>
      </div>
      <div className="w-[80%] h-full border-l border-l-solid border-l-background-900/35">
        {children}
      </div>
    </main>
  );
}
