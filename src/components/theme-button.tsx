"use client";

import { useTheme } from "@/components/theme-provider";
import { Laptop, Moon, Sun } from "@solar-icons/react/ssr";

type Theme = "light" | "dark" | "system";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  const getButtonLabel = () => {
    switch (theme) {
      case "light":
        return <Moon size={16} weight="BoldDuotone" />;
      case "dark":
        return <Sun size={16} weight="BoldDuotone" />;
      case "system":
        return <Laptop size={16} weight="BoldDuotone" />;
    }
  };

  const cycleTheme = () => {
    const order: Theme[] = ["light", "dark", "system"];
    const currentIndex = order.indexOf(theme);
    const next = order[(currentIndex + 1) % order.length];
    setTheme(next);
  };

  return (
    <button
      onClick={cycleTheme}
      className="inline-flex items-center px-3 py-2 md:lg:xl:px-2 md:lg:xl:py-2 rounded-sm md:lg:xl:rounded-full border border-solid text-accent-500 border-neutral-300 dark:border-neutral-900 bg-background-100 dark:bg-background-900/30 p-2 text-sm font-medium shadow-sm transition"
    >
      {getButtonLabel()}
    </button>
  );
}
