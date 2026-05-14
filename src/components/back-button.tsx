"use client";

import { SquareAltArrowLeft } from "@solar-icons/react/ssr";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button className="text-color550" onClick={() => router.back()}>
      <SquareAltArrowLeft weight="Bold" size={30} />
    </button>
  );
}
