"use client";

import { food } from "@/data/vocabulary/intermediate";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import { useTransliteration } from "@/contexts/TransliterationContext";
import Link from "next/link";

export default function FoodPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("int-food");
  const { showRomanization } = useTransliteration();
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link><span>›</span><span>Intermediate</span><span>›</span><span className="text-gray-800">Food</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Food Vocabulary</h1>
          <p className="tamil-text text-orange-600 text-lg">உணவு சொல்லகராதி</p>
        </div>
        <button onClick={() => markTopicComplete("int-food")} className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}>
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-8">
        {food.map((item) => (
          <div key={item.tamil} className="flex items-center gap-3 bg-white border border-orange-100 rounded-xl p-3">
            <div className="flex-1">
              <div className="text-xl tamil-text font-bold text-gray-800">{item.tamil}</div>
              {showRomanization && <div className="text-xs text-orange-600">{item.romanization}</div>}
              <div className="text-xs text-gray-500">{item.english}</div>
            </div>
            <AudioButton text={item.tamil} size="sm" />
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <Link href="/learn/intermediate/cases-basic" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">← First 4 Cases</Link>
        <Link href="/learn/intermediate/days" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">Next: Days →</Link>
      </div>
    </div>
  );
}
