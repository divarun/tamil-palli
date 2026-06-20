"use client";

import { numbers } from "@/data/vocabulary/novice";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

export default function NumbersPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("novice-numbers");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Novice</span>
        <span>›</span>
        <span className="text-gray-800">Numbers</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tamil Numerals 1–100</h1>
          <p className="tamil-text text-orange-600 text-lg">தமிழ் எண்கள்</p>
        </div>
        <button
          onClick={() => markTopicComplete("novice-numbers")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {numbers.map((num) => (
          <div key={num.tamil} className="bg-white border border-orange-100 rounded-xl p-3 flex flex-col items-center gap-1 text-center">
            <span className="text-2xl tamil-text font-bold text-gray-800 leading-tight">{num.tamil}</span>
            <div className="text-xs text-orange-600 font-medium">{num.romanization}</div>
            <div className="text-xs text-gray-500">{num.english}</div>
            <AudioButton text={num.tamil} size="sm" />
          </div>
        ))}
      </div>

      {/* Tamil numeral glyphs */}
      <section className="mt-8 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Tamil Numeral Glyphs (தமிழ் இலக்கங்கள்)</h2>
        <p className="text-sm text-gray-500 mb-4">Tamil has its own numeral characters, separate from Arabic numerals. You will encounter these on currency, in classical texts, government documents, and temple inscriptions.</p>
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-4">
          {[
            { glyph: "௧", arabic: "1" }, { glyph: "௨", arabic: "2" }, { glyph: "௩", arabic: "3" },
            { glyph: "௪", arabic: "4" }, { glyph: "௫", arabic: "5" }, { glyph: "௬", arabic: "6" },
            { glyph: "௭", arabic: "7" }, { glyph: "௮", arabic: "8" }, { glyph: "௯", arabic: "9" },
            { glyph: "௦", arabic: "0" },
          ].map(({ glyph, arabic }) => (
            <div key={arabic} className="bg-white border border-orange-100 rounded-xl p-2 text-center">
              <div className="text-3xl tamil-text font-bold text-gray-800">{glyph}</div>
              <div className="text-xs text-orange-600">{arabic}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {[
            { glyph: "௰", label: "10 (பத்து)" }, { glyph: "௱", label: "100 (நூறு)" },
            { glyph: "௲", label: "1000 (ஆயிரம்)" },
          ].map(({ glyph, label }) => (
            <div key={glyph} className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-center">
              <div className="text-3xl tamil-text font-bold text-gray-800">{glyph}</div>
              <div className="text-xs text-gray-600 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h2 className="font-semibold text-amber-900 mb-3">Pattern Note</h2>
        <p className="text-sm text-amber-800">
          Tamil numbers follow a regular pattern for tens: இருபது (20), முப்பது (30), நாற்பது (40), ஐம்பது (50), அறுபது (60), எழுபது (70), எண்பது (80), தொண்ணூறு (90).
          For numbers in between, add the unit after the tens: இருபத்தி ஒன்று (21), இருபத்தி இரண்டு (22), etc.
        </p>
      </div>

      <div className="flex gap-3 mt-6">
        <Link href="/exercises/novice/letter-recognition" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Practice →
        </Link>
        <Link href="/learn/novice/greetings" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">
          Next: Greetings →
        </Link>
      </div>
    </div>
  );
}
