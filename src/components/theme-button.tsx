"use client";

import { Moon, Sun } from "@solar-icons/react/ssr";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const [darkMode, setDarkMode] = useState(() =>
    typeof window.localStorage !== "undefined"
      ? localStorage.getItem("theme") === "dark"
      : false,
  );

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="inline-flex items-center px-3 py-2 md:lg:xl:px-2 md:lg:xl:py-2 rounded-sm md:lg:xl:rounded-full border border-solid text-accent-500 border-neutral-300 dark:border-neutral-900 bg-background-100 dark:bg-background-900/30 p-2 text-sm font-medium shadow-sm transition"
    >
      {darkMode ? (
        <Sun size={16} weight="BoldDuotone" />
      ) : (
        <Moon size={16} weight="BoldDuotone" />
      )}
    </button>
  );
}
