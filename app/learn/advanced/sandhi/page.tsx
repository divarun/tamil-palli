"use client";

import { sandhiRules } from "@/data/grammar/sandhi";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import { useTransliteration } from "@/contexts/TransliterationContext";
import Link from "next/link";

export default function SandhiPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("adv-sandhi");
  const { showRomanization } = useTransliteration();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Advanced</span>
        <span>›</span>
        <span className="text-gray-800">Sandhi Rules</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sandhi Rules</h1>
          <p className="tamil-text text-orange-600 text-lg">புணர்ச்சி விதிகள்</p>
          <p className="text-sm text-gray-500 mt-1">How sounds change when words and morphemes combine</p>
        </div>
        <button
          onClick={() => markTopicComplete("adv-sandhi")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-sm text-blue-800">
        <strong>புணர்ச்சி (Sandhi)</strong> refers to the phonological changes that occur at the boundaries between words, morphemes, or sounds in Tamil. Mastering sandhi is essential for reading classical Tamil and understanding formal written Tamil.
      </div>

      <div className="space-y-6">
        {sandhiRules.map((rule) => (
          <div key={rule.id} className="bg-white border border-orange-100 rounded-2xl p-5">
            <h2 className="font-bold text-gray-900 mb-1">{rule.name}</h2>
            <p className="tamil-text text-orange-600 text-sm mb-3">{rule.tamilName}</p>
            <p className="text-sm text-gray-600 mb-3">{rule.description}</p>
            <div className="bg-gray-50 rounded-lg p-3 mb-3 text-sm font-mono text-gray-700">
              Pattern: {rule.pattern}
            </div>
            <div className="space-y-2">
              {rule.examples.map((ex) => (
                <div key={ex.after} className="bg-amber-50 rounded-lg p-3 text-sm">
                  <div className="text-gray-500 mb-1">{ex.before}</div>
                  <div className="flex items-center gap-3">
                    <span className="tamil-text font-bold text-gray-900 text-lg">{ex.after}</span>
                    {showRomanization && <span className="text-orange-600 text-xs">{ex.romanization}</span>}
                    <span className="text-gray-500 text-xs">— {ex.english}</span>
                    <AudioButton text={ex.after} size="sm" className="ml-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-8">
        <Link href="/learn/advanced/complex-sentences" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Next: Complex Sentences →
        </Link>
      </div>
    </div>
  );
}
