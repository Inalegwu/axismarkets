import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased transition w-full no-scrollbar">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
