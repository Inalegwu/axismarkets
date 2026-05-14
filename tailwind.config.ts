import cornerShape from "@toolwind/corner-shape";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
"--color-accent-50": "#f6f6f6",
"--color-accent-100": "#ebebeb",
"--color-accent-200": "#d4d4d4",
"--color-accent-300": "#b6b6b6",
"--color-accent-400": "#969696",
"--color-accent-500": "#777777",
"--color-accent-600": "#636363",
"--color-accent-700": "#505050",
"--color-accent-800": "#3e3e3e",
"--color-accent-900": "#2b2b2b",
"--color-accent-950": "#1b1b1b",
      },
    },
  },
  plugins: [cornerShape],
} satisfies Config;
