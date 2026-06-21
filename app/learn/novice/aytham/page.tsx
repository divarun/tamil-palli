"use client";

import { aytham } from "@/data/letters/aytham";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import { useTransliteration } from "@/contexts/TransliterationContext";
import Link from "next/link";

export default function AythamPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("novice-aytham");
  const { showRomanization } = useTransliteration();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Novice</span>
        <span>›</span>
        <span className="text-gray-800">Aytham</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{aytham.name}</h1>
          <p className="tamil-text text-orange-600 text-lg">{aytham.tamilName}</p>
          <p className="text-gray-500 text-sm mt-1">The 247th letter — a class of its own</p>
        </div>
        <button
          onClick={() => markTopicComplete("novice-aytham")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      {/* Hero letter */}
      <div className="flex flex-col items-center bg-white rounded-2xl border-2 border-orange-200 p-8 mb-8">
        <span className="text-9xl tamil-text font-bold text-gray-800 leading-none mb-4">{aytham.tamil}</span>
        {showRomanization && <span className="text-orange-600 font-medium text-xl mb-2">{aytham.romanization}</span>}
        <AudioButton text={aytham.tamil} size="lg" />
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h2 className="font-semibold text-blue-800 mb-2">Description</h2>
          <p className="text-sm text-blue-700">{aytham.description}</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <h2 className="font-semibold text-amber-800 mb-2">Pronunciation</h2>
          <p className="text-sm text-amber-700">{aytham.pronunciation}</p>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-gray-800 mb-3">Usage Examples</h2>
      <div className="grid gap-3 mb-8">
        {aytham.usageExamples.map((ex) => (
          <div key={ex.word} className="flex items-center gap-4 bg-white border border-orange-100 rounded-xl p-4">
            <span className="text-3xl tamil-text font-bold text-gray-800">{ex.word}</span>
            <div className="flex-1">
              {showRomanization && <div className="text-sm text-orange-600 font-medium">{ex.romanization}</div>}
              <div className="text-sm text-gray-500">{ex.meaning}</div>
            </div>
            <AudioButton text={ex.word} />
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-5 mb-6">
        <h2 className="font-semibold text-gray-800 mb-3">Important Notes</h2>
        <ul className="space-y-2">
          {aytham.notes.map((note) => (
            <li key={note} className="text-sm text-gray-600 flex items-start gap-2">
              <span className="text-orange-400 mt-0.5">·</span>
              {note}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3">
        <Link href="/learn/novice/consonants" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">← Consonants</Link>
        <Link href="/learn/novice/numbers" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Next: Numbers →
        </Link>
      </div>
    </div>
  );
}
