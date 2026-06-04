"use client";

import { ArrowLeft } from "@solar-icons/react/ssr";
import { useRouter } from "next/navigation";

export default function BackButtomSm() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex md:lg:xl:hidden bg-white dark:bg-background-900 shadow-sm dark:shadow-accent-50/10 rounded-md px-3 py-1 my-4 border border-solid border-background-100 dark:border-background-900/30 items-center justify-start gap-1"
    >
      <ArrowLeft size={12} weight="Linear" />
      Back
    </button>
  );
}
