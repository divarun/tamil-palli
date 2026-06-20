"use client";

import { AudioButton } from "./AudioButton";

type Props = {
  tamil: string;
  romanization: string;
  label?: string;
  sublabel?: string;
  highlight?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: { card: "p-3", letter: "text-3xl", roman: "text-xs" },
  md: { card: "p-4", letter: "text-5xl", roman: "text-sm" },
  lg: { card: "p-6", letter: "text-7xl", roman: "text-base" },
};

export function LetterCard({ tamil, romanization, label, sublabel, highlight = false, size = "md" }: Props) {
  const sz = sizeMap[size];
  return (
    <div
      className={`rounded-2xl border-2 flex flex-col items-center gap-1 text-center transition-all ${
        highlight ? "border-orange-400 bg-orange-50 shadow-md" : "border-gray-200 bg-white hover:border-orange-200 hover:shadow-sm"
      } ${sz.card}`}
    >
      <span className={`font-bold leading-none text-gray-800 ${sz.letter}`} style={{ fontFamily: "'Noto Sans Tamil', serif" }}>
        {tamil}
      </span>
      <span className={`text-orange-600 font-medium ${sz.roman}`}>{romanization}</span>
      {label && <span className="text-gray-500 text-xs">{label}</span>}
      {sublabel && <span className="text-gray-400 text-xs">{sublabel}</span>}
      <AudioButton text={tamil} size="sm" />
    </div>
  );
}
