"use client";

import { bodyParts } from "@/data/vocabulary/novice";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

export default function BodyPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("novice-body");

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Novice</span>
        <span>›</span>
        <span className="text-gray-800">Body Parts</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Body Parts</h1>
          <p className="tamil-text text-orange-600 text-lg">உடல் உறுப்புகள்</p>
        </div>
        <button
          onClick={() => markTopicComplete("novice-body")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-8">
        {bodyParts.map((item) => (
          <div key={item.tamil} className="flex items-center gap-3 bg-white border border-orange-100 rounded-xl p-3">
            <div className="flex-1">
              <div className="text-xl tamil-text font-bold text-gray-800">{item.tamil}</div>
              <div className="text-xs text-orange-600">{item.romanization}</div>
              <div className="text-xs text-gray-500">{item.english}</div>
            </div>
            <AudioButton text={item.tamil} size="sm" />
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <Link href="/learn/novice/family" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Next: Family →
        </Link>
      </div>
    </div>
  );
}
