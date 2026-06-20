"use client";

import { useAudio } from "@/hooks/useAudio";

type Props = {
  text: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "p-1 text-xs",
  md: "p-1.5 text-sm",
  lg: "p-2 text-base",
};

export function AudioButton({ text, size = "md", className = "" }: Props) {
  const { speak, speaking, supported } = useAudio();

  if (supported === false) return null;

  return (
    <button
      onClick={() => speak(text)}
      title={`Pronounce: ${text}`}
      className={`inline-flex items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors ${sizeClasses[size]} ${speaking ? "animate-pulse" : ""} ${className}`}
      aria-label={`Pronounce ${text}`}
    >
      {speaking ? "🔊" : "🔉"}
    </button>
  );
}
