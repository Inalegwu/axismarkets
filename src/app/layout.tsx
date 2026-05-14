import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ikwue Inalegwu",
  description: "Design Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased transition w-full no-scrollbar">
        {children}
        {/* <div className="absolute bottom-2 left-2 w-full flex items-center justify-between">
          <span className="text-xs text-color350 italic underline underline-offset-2">
            Some creatures do in fact change 🦇
          </span>
        </div> */}
      </body>
    </html>
  );
}
