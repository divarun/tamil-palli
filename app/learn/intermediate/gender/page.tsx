"use client";

import { genderRules, highClassVsLowClass } from "@/data/grammar/gender";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import { useTransliteration } from "@/contexts/TransliterationContext";
import Link from "next/link";

const genderColors = {
  masculine: { bg: "bg-blue-50", border: "border-blue-200", badge: "bg-blue-100 text-blue-700" },
  feminine: { bg: "bg-pink-50", border: "border-pink-200", badge: "bg-pink-100 text-pink-700" },
  neuter: { bg: "bg-gray-50", border: "border-gray-200", badge: "bg-gray-100 text-gray-600" },
};

export default function GenderPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("int-gender");
  const { showRomanization } = useTransliteration();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Intermediate</span>
        <span>›</span>
        <span className="text-gray-800">Gender</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gender in Tamil</h1>
          <p className="tamil-text text-orange-600 text-lg">பால் வகைகள்</p>
        </div>
        <button
          onClick={() => markTopicComplete("int-gender")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
        <strong>{highClassVsLowClass.title}:</strong> {highClassVsLowClass.description}
        <div className="mt-2 space-y-1">
          {highClassVsLowClass.examples.map((ex) => (
            <p key={ex.tamil}><span className="font-medium">{ex.class}:</span> <span className="tamil-text">{ex.tamil}</span> — {ex.english}</p>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        {genderRules.map((rule) => {
          const c = genderColors[rule.gender];
          return (
            <div key={rule.gender} className={`rounded-2xl border-2 p-5 ${c.bg} ${c.border}`}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${c.badge}`}>{rule.tamilName}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{rule.description}</p>
              <ul className="space-y-1 mb-4">
                {rule.rules.map((r) => (
                  <li key={r} className="text-xs text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400">·</span>{r}
                  </li>
                ))}
              </ul>
              <div className="space-y-2">
                {rule.examples.map((ex) => (
                  <div key={ex.tamil} className="flex items-center gap-3 bg-white rounded-lg p-3">
                    <div className="flex-1">
                      <div className="tamil-text text-gray-800 font-medium">{ex.tamil}</div>
                      {showRomanization && <div className="text-xs text-orange-600">{ex.romanization}</div>}
                      <div className="text-xs text-gray-500">{ex.english}</div>
                    </div>
                    <AudioButton text={ex.tamil} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-3 mt-8">
        <Link href="/learn/intermediate/tenses" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">← 3 Tenses</Link>
        <Link href="/learn/intermediate/cases-basic" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Next: First 4 Cases →
        </Link>
      </div>
    </div>
  );
}
