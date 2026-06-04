"use client";

import { ArrowLeft } from "@solar-icons/react/ssr";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className="text-foreground-950 dark:text-foreground-500 p-1 flex items-center justify-center bg-background-200 dark:bg-background-900 rounded-sm"
      onClick={() => router.back()}
    >
      <ArrowLeft weight="Linear" size={14} />
    </button>
  );
}
