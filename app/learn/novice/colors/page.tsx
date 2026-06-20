"use client";

import { colors } from "@/data/vocabulary/novice";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

const colorBgs: Record<string, string> = {
  சிவப்பு: "bg-red-100",
  நீலம்: "bg-blue-100",
  பச்சை: "bg-green-100",
  மஞ்சள்: "bg-yellow-100",
  வெள்ளை: "bg-gray-100",
  கருப்பு: "bg-gray-800",
  ஆரஞ்சு: "bg-orange-100",
  இளஞ்சிவப்பு: "bg-pink-100",
  கொல்லை: "bg-purple-100",
  பழுப்பு: "bg-amber-200",
};

export default function ColorsPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("novice-colors");

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Novice</span>
        <span>›</span>
        <span className="text-gray-800">Colors</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Colors</h1>
          <p className="tamil-text text-orange-600 text-lg">நிறங்கள்</p>
        </div>
        <button
          onClick={() => markTopicComplete("novice-colors")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {colors.map((item) => {
          const bg = colorBgs[item.tamil] ?? "bg-gray-100";
          const isDark = item.tamil === "கருப்பு";
          return (
            <div key={item.tamil} className="rounded-xl overflow-hidden border border-gray-200 bg-white">
              <div className={`h-16 ${bg} flex items-center justify-center`}>
                <span className={`text-xs font-medium ${isDark ? "text-white" : "text-gray-600"}`}>{item.english}</span>
              </div>
              <div className="p-3 flex items-center gap-2">
                <div className="flex-1">
                  <div className="text-lg tamil-text font-bold text-gray-800">{item.tamil}</div>
                  <div className="text-xs text-orange-600">{item.romanization}</div>
                </div>
                <AudioButton text={item.tamil} size="sm" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-3 mt-8">
        <Link href="/learn/novice/body" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Next: Body Parts →
        </Link>
      </div>
    </div>
  );
}
