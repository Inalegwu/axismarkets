import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axis Market Partners",
  description: "Data Driven Market Insights for Your Business",
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
      </body>
    </html>
  );
}
