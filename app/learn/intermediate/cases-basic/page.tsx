"use client";

import { cases } from "@/data/grammar/cases";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

const basicCases = cases.filter((c) => c.number <= 4);

export default function CasesBasicPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("int-cases4");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Intermediate</span>
        <span>›</span>
        <span className="text-gray-800">First 4 Cases</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">First 4 Grammatical Cases</h1>
          <p className="tamil-text text-orange-600 text-lg">முதல் நான்கு வேற்றுமைகள்</p>
          <p className="text-sm text-gray-500 mt-1">Nominative, Accusative, Instrumental, Dative</p>
        </div>
        <button
          onClick={() => markTopicComplete("int-cases4")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        Tamil has 8 grammatical cases (வேற்றுமைகள்). In this lesson we cover the first 4. The remaining 4 are in the Advanced level.
      </p>

      <div className="space-y-5">
        {basicCases.map((c) => (
          <div key={c.number} className="bg-white border border-orange-100 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 font-bold flex items-center justify-center text-sm">{c.number}</span>
              <div>
                <h2 className="font-bold text-gray-900">{c.name}</h2>
                <p className="text-sm tamil-text text-orange-600">{c.tamilName}</p>
              </div>
              <span className="ml-auto text-sm font-mono bg-gray-100 text-gray-700 px-2 py-0.5 rounded tamil-text">{c.suffix}</span>
            </div>
            <p className="text-sm text-gray-600 mb-1"><strong>Role:</strong> {c.role}</p>
            <p className="text-sm text-gray-600 mb-3"><strong>Question:</strong> <span className="tamil-text">{c.question}</span></p>
            <div className="space-y-2">
              {c.examples.map((ex) => (
                <div key={ex.tamil} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                  <div className="flex-1">
                    <div className="tamil-text text-gray-800 font-medium">{ex.tamil}</div>
                    <div className="text-xs text-orange-600">{ex.romanization}</div>
                    <div className="text-xs text-gray-500">{ex.english}</div>
                  </div>
                  <AudioButton text={ex.tamil} size="sm" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-8">
        <Link href="/learn/intermediate/food" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Next: Food Vocabulary →
        </Link>
        <Link href="/learn/advanced/cases-all" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">
          All 8 Cases (Advanced) →
        </Link>
      </div>
    </div>
  );
}
