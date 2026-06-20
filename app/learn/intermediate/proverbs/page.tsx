"use client";

import { proverbs } from "@/data/vocabulary/proverbs";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

export default function ProverbsPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("int-proverbs");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Intermediate</span>
        <span>›</span>
        <span className="text-gray-800">Proverbs</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tamil Proverbs</h1>
          <p className="tamil-text text-orange-600 text-lg">பழமொழிகள்</p>
          <p className="text-sm text-gray-500 mt-1">12 essential proverbs with meaning and usage</p>
        </div>
        <button
          onClick={() => markTopicComplete("int-proverbs")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <div className="space-y-5">
        {proverbs.map((proverb, i) => (
          <div key={proverb.id} className="bg-white border border-orange-100 rounded-2xl p-5">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-xs text-gray-400 font-medium w-5 shrink-0 mt-1">{i + 1}.</span>
              <div className="flex-1">
                <div className="flex items-start gap-2 mb-1">
                  <p className="tamil-text text-lg font-bold text-gray-900 leading-snug flex-1">{proverb.tamil}</p>
                  <AudioButton text={proverb.tamil} size="sm" />
                </div>
                <p className="text-sm text-orange-600 italic mb-3">{proverb.romanization}</p>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Literal: </span>
                    <span className="text-sm text-gray-700">{proverb.literal}</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Meaning: </span>
                    <span className="text-sm text-gray-700">{proverb.meaning}</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Usage: </span>
                    <span className="text-sm text-gray-500 italic">{proverb.usage}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-8">
        <Link href="/learn/intermediate/sentences" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Next: Simple Sentences →
        </Link>
      </div>
    </div>
  );
}
