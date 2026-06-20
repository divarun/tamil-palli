"use client";

import { selectedKurals } from "@/data/thirukkural/selected";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

export default function ThirukkuralPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("adv-thirukkural");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Advanced</span>
        <span>›</span>
        <span className="text-gray-800">Thirukkural</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Thirukkural</h1>
          <p className="tamil-text text-orange-600 text-lg">திருக்குறள்</p>
          <p className="text-sm text-gray-500 mt-1">Selected couplets from Thiruvalluvar's timeless classic</p>
        </div>
        <button
          onClick={() => markTopicComplete("adv-thirukkural")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800">
        <strong>Thirukkural</strong> (திருக்குறள்) is a classic Tamil text consisting of 1,330 couplets (குறள்). Written by Thiruvalluvar, it covers ethics, politics, and love. It is one of the greatest works in world literature and is studied by Tamil speakers worldwide.
      </div>

      <div className="space-y-6">
        {selectedKurals.map((kural) => (
          <div key={`${kural.chapter}-${kural.id}`} className="bg-white border border-orange-100 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">Chapter {kural.chapter}</span>
              <span className="text-xs text-gray-500">{kural.chapterName}</span>
            </div>
            {/* Tamil couplet */}
            <div className="bg-amber-50 rounded-xl p-4 mb-4">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <p className="tamil-text text-xl font-bold text-gray-900 leading-relaxed mb-1">{kural.line1}</p>
                  <p className="tamil-text text-xl font-bold text-gray-900 leading-relaxed">{kural.line2}</p>
                </div>
                <AudioButton text={`${kural.line1} ${kural.line2}`} size="md" />
              </div>
            </div>
            {/* Transliteration */}
            <div className="mb-3 text-sm text-orange-600 italic">
              <p>{kural.transliteration1}</p>
              <p>{kural.transliteration2}</p>
            </div>
            {/* Meaning */}
            <div className="space-y-2">
              <div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Literal Meaning: </span>
                <span className="text-sm text-gray-700">{kural.literalMeaning}</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Explanation: </span>
                <span className="text-sm text-gray-600">{kural.explanation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-8">
        <Link href="/worksheets?level=advanced" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          📄 Copy Worksheets
        </Link>
        <Link href="/learn/advanced/essay-writing" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">
          Next: Essay Writing →
        </Link>
      </div>
    </div>
  );
}
