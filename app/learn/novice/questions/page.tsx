"use client";

import { questionWords } from "@/data/vocabulary/novice";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import { useTransliteration } from "@/contexts/TransliterationContext";
import Link from "next/link";

export default function QuestionsPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("novice-questions");
  const { showRomanization } = useTransliteration();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Novice</span>
        <span>›</span>
        <span className="text-gray-800">Question Words</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Question Words</h1>
          <p className="tamil-text text-orange-600 text-lg">வினா சொற்கள்</p>
          <p className="text-sm text-gray-500 mt-1">The 7 essential question words</p>
        </div>
        <button
          onClick={() => markTopicComplete("novice-questions")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
        {questionWords.map((item) => (
          <div key={item.tamil} className="flex flex-col items-center gap-1 text-center bg-white border border-orange-100 rounded-xl p-4">
            <span className="text-3xl tamil-text font-bold text-gray-800 leading-tight">{item.tamil}</span>
            {showRomanization && <div className="text-xs text-orange-600 font-medium">{item.romanization}</div>}
            <div className="text-sm text-gray-700 font-semibold">{item.english}</div>
            <AudioButton text={item.tamil} size="md" />
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
        <h2 className="font-semibold text-amber-900 mb-2">Notice the Pattern</h2>
        <p className="text-sm text-amber-800">
          All Tamil question words start with எ (e) or ய (ya): யார், என்ன, எங்கே, எப்போது, ஏன், எப்படி, எவ்வளவு. This makes them easy to spot in a sentence.
        </p>
      </div>

      <div className="flex gap-3">
        <Link href="/learn/novice/family" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">← Family</Link>
        <Link href="/learn/novice/word-formation" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Next: Word Formation →
        </Link>
      </div>
    </div>
  );
}
