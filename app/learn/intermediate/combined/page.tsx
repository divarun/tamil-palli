"use client";

import { useState } from "react";
import { getCombined, vowelOrder, consonantOrder } from "@/data/letters/combined";
import { vowels } from "@/data/letters/vowels";
import { consonants } from "@/data/letters/consonants";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

export default function CombinedPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("int-combined");
  const [selectedConsonant, setSelectedConsonant] = useState<string | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Intermediate</span>
        <span>›</span>
        <span className="text-gray-800">Combined Letters</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">216 Combined Letters</h1>
          <p className="tamil-text text-orange-600 text-lg">உயிர்மெய் எழுத்துக்கள்</p>
          <p className="text-sm text-gray-500 mt-1">18 consonants × 12 vowels = 216 combined letters</p>
        </div>
        <button
          onClick={() => markTopicComplete("int-combined")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      {/* Consonant selector */}
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-2">Filter by consonant (click to focus on one row):</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedConsonant(null)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${selectedConsonant === null ? "bg-orange-500 text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-orange-300"}`}
          >
            All
          </button>
          {consonantOrder.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedConsonant(c === selectedConsonant ? null : c)}
              className={`px-3 py-1 rounded-full text-lg tamil-text transition-colors ${selectedConsonant === c ? "bg-orange-500 text-white" : "bg-white border border-gray-200 text-gray-800 hover:border-orange-300"}`}
            >
              {c}்
            </button>
          ))}
        </div>
      </div>

      {/* Full grid */}
      <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
        <table className="border-collapse text-center w-full">
          <thead>
            <tr>
              <th className="p-2 text-xs text-gray-500 font-medium border border-gray-100 bg-gray-50 sticky left-0 z-10 w-16">Cons.</th>
              {vowelOrder.map((v) => {
                const vowel = vowels.find((vv) => vv.tamil === v);
                return (
                  <th key={v} className="p-2 border border-gray-100 bg-amber-50 min-w-[56px]">
                    <div className="text-lg tamil-text font-bold text-amber-800">{v}</div>
                    <div className="text-xs text-amber-600">{vowel?.romanization}</div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {consonantOrder
              .filter((c) => selectedConsonant === null || c === selectedConsonant)
              .map((c) => {
                const con = consonants.find((cc) => cc.tamil === c);
                return (
                  <tr key={c} className={selectedConsonant === c ? "bg-blue-50" : ""}>
                    <td className="p-2 border border-gray-100 bg-blue-50 sticky left-0 z-10">
                      <div className="text-lg tamil-text font-bold text-blue-800">{c}்</div>
                      <div className="text-xs text-blue-600">{con?.romanization}</div>
                    </td>
                    {vowelOrder.map((v) => {
                      const combined = getCombined(c, v);
                      return (
                        <td key={v} className="p-2 border border-gray-100 hover:bg-orange-50 transition-colors group cursor-pointer">
                          <div className="text-lg tamil-text font-bold text-gray-800">{combined}</div>
                          <div className="hidden group-hover:flex justify-center mt-1">
                            <AudioButton text={combined} size="sm" />
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-2">Hover over any cell to hear its pronunciation.</p>

      <div className="flex gap-3 mt-8">
        <Link href="/learn/intermediate/reading" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Next: Reading Practice →
        </Link>
      </div>
    </div>
  );
}
