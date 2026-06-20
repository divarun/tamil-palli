"use client";

import { consonants, groupLabels, type ConsonantGroup } from "@/data/letters/consonants";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

const groups: ConsonantGroup[] = ["vallinam", "mellinam", "idaiyinam"];

const groupColors: Record<ConsonantGroup, { bg: string; border: string; badge: string }> = {
  vallinam: { bg: "bg-red-50", border: "border-red-200", badge: "bg-red-100 text-red-700" },
  mellinam: { bg: "bg-blue-50", border: "border-blue-200", badge: "bg-blue-100 text-blue-700" },
  idaiyinam: { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-100 text-amber-700" },
};

export default function ConsonantsPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("novice-consonants");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Novice</span>
        <span>›</span>
        <span className="text-gray-800">18 Consonants</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">18 Tamil Consonants</h1>
          <p className="tamil-text text-orange-600 text-lg">மெய் எழுத்துக்கள்</p>
          <p className="text-gray-500 text-sm mt-1">Grouped into hard, soft, and medium consonants</p>
        </div>
        <button
          onClick={() => markTopicComplete("novice-consonants")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800">
        <strong>Note:</strong> Each consonant is shown in its full form (with inherent vowel "a"). In words, they combine with vowels using diacritics — you'll learn that in the Combined Letters lesson.
      </div>

      {groups.map((group) => {
        const groupConsonants = consonants.filter((c) => c.group === group);
        const { bg, border, badge } = groupColors[group];
        const meta = groupLabels[group];
        return (
          <section key={group} className="mb-8">
            <div className={`flex items-center gap-3 mb-4 px-4 py-2 rounded-xl ${bg} border ${border}`}>
              <div>
                <span className={`text-sm font-semibold px-2 py-0.5 rounded-full ${badge}`}>{meta.english} — {meta.tamil}</span>
                <p className="text-xs text-gray-600 mt-1">{meta.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {groupConsonants.map((c) => (
                <div key={c.tamil} className="rounded-xl border border-gray-200 bg-white p-4 flex flex-col items-center text-center gap-2">
                  <span className="text-5xl tamil-text font-bold text-gray-800 leading-none">{c.tamil}</span>
                  <span className="text-orange-600 font-medium text-sm">{c.romanization}</span>
                  <div className="text-xs text-gray-500 italic">{c.tip}</div>
                  <div className="text-xs text-gray-700">
                    <span className="tamil-text">{c.example}</span>
                    <span className="text-gray-400 ml-1">— {c.exampleMeaning}</span>
                  </div>
                  <AudioButton text={c.tamil} size="sm" />
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <div className="flex gap-3 mt-6">
        <Link href="/exercises/novice/letter-recognition" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Practice Exercises →
        </Link>
        <Link href="/learn/novice/aytham" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">
          Next: Aytham →
        </Link>
      </div>
    </div>
  );
}
