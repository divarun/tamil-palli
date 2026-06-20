"use client";

import { days } from "@/data/vocabulary/intermediate";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

export default function DaysPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("int-days");
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link><span>›</span><span>Intermediate</span><span>›</span><span className="text-gray-800">Days</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Days of the Week</h1>
          <p className="tamil-text text-orange-600 text-lg">வாரத்தின் நாட்கள்</p>
        </div>
        <button onClick={() => markTopicComplete("int-days")} className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}>
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
        {days.map((item) => (
          <div key={item.tamil} className="flex flex-col items-center gap-1 text-center bg-white border border-orange-100 rounded-xl p-4">
            <span className="text-2xl tamil-text font-bold text-gray-800 leading-tight">{item.tamil}</span>
            <div className="text-xs text-orange-600">{item.romanization}</div>
            <div className="text-xs text-gray-500">{item.english}</div>
            <AudioButton text={item.tamil} size="md" />
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <Link href="/learn/intermediate/months" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">Next: Months →</Link>
      </div>
    </div>
  );
}
