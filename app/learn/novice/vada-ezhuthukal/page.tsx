"use client";

import { vadaEzhuthukal } from "@/data/letters/vada-ezhuthukal";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import { useTransliteration } from "@/contexts/TransliterationContext";
import Link from "next/link";

export default function VadaPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("novice-vada");
  const { showRomanization } = useTransliteration();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Novice</span>
        <span>›</span>
        <span className="text-gray-800">Grantha Letters</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Grantha / Sanskrit Letters</h1>
          <p className="tamil-text text-orange-600 text-lg">வட எழுத்துக்கள்</p>
          <p className="text-sm text-gray-500 mt-1">6 letters borrowed from Sanskrit for loanwords and names</p>
        </div>
        <button
          onClick={() => markTopicComplete("novice-vada")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800">
        These letters are not part of the classical 247-letter Tamil alphabet. They were added later to write Sanskrit-origin words, religious terms, loanwords, and proper names. You will encounter them frequently in modern Tamil.
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {vadaEzhuthukal.map((letter) => (
          <div key={letter.tamil} className="bg-white border border-orange-100 rounded-2xl p-5">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-6xl tamil-text font-bold text-gray-800 leading-none">{letter.tamil}</span>
              <div className="flex-1">
                {showRomanization && <div className="text-xl text-orange-600 font-medium">{letter.romanization}</div>}
                <div className="text-sm text-gray-500 italic">{letter.sound}</div>
                <div className="text-xs text-gray-400 mt-1">{letter.origin}</div>
              </div>
              <AudioButton text={letter.tamil} size="md" />
            </div>
            <div className="space-y-2">
              {letter.examples.map((ex) => (
                <div key={ex.word} className="flex items-center gap-3 bg-gray-50 rounded-lg p-2">
                  <span className="text-lg tamil-text font-bold text-gray-800">{ex.word}</span>
                  <span className="text-xs text-gray-500">— {ex.meaning}</span>
                  <AudioButton text={ex.word} size="sm" className="ml-auto" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <Link href="/learn/novice/word-formation" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">← Word Formation</Link>
        <Link href="/tests/novice" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Take Novice Assessment →
        </Link>
        <Link href="/learn/intermediate/combined" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">
          Start Intermediate →
        </Link>
      </div>
    </div>
  );
}
