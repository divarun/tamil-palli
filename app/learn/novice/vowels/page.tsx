"use client";

import { vowels, shortLongPairs } from "@/data/letters/vowels";
import { LetterCard } from "@/components/LetterCard";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

export default function VowelsPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("novice-vowels");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Novice</span>
        <span>›</span>
        <span className="text-gray-800">12 Vowels</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">12 Tamil Vowels</h1>
          <p className="tamil-text text-orange-600 text-lg">உயிர் எழுத்துக்கள்</p>
          <p className="text-gray-500 text-sm mt-1">The soul letters — Tamil script begins here</p>
        </div>
        <button
          onClick={() => markTopicComplete("novice-vowels")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      {/* Romanization Key */}
      <section className="mb-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
        <h2 className="text-sm font-semibold text-amber-800 mb-2">Romanization Key — used throughout this app</h2>
        <ul className="text-xs text-amber-700 space-y-1">
          <li><span className="font-mono font-bold">aa / ii / uu</span> — double letter = long vowel (e.g., aa = ஆ, ii = ஈ, uu = ஊ)</li>
          <li><span className="font-mono font-bold">zh</span> — the unique Tamil retroflex approximant (ழ) — no English equivalent</li>
          <li><span className="font-mono font-bold">N</span> (capital) — retroflex nasal (ண), distinct from dental <span className="font-mono">n</span> (ந)</li>
          <li><span className="font-mono font-bold">ṉ</span> — alveolar nasal (ன), distinct from dental <span className="font-mono">n</span> (ந)</li>
          <li><span className="font-mono font-bold">L</span> (capital) — retroflex lateral (ள), distinct from dental <span className="font-mono">l</span> (ல)</li>
        </ul>
      </section>

      {/* Short/Long Pairs */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Short & Long Vowel Pairs</h2>
        <p className="text-sm text-gray-500 mb-4">Tamil has 5 pairs of short (குறில்) and long (நெடில்) vowels, plus 2 diphthongs (ஐ, ஔ) which have no long form.</p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-4">
          {shortLongPairs.map((pair) => (
            <div key={pair.short} className="rounded-xl border border-orange-100 bg-white p-3 text-center">
              <div className="flex justify-center gap-3 mb-2">
                <div>
                  <div className="text-3xl tamil-text font-bold text-gray-800">{pair.short}</div>
                  <div className="text-xs text-orange-600">{pair.shortRoman}</div>
                  <div className="text-xs text-gray-400">short</div>
                </div>
                <div className="text-gray-300 self-center">↔</div>
                <div>
                  <div className="text-3xl tamil-text font-bold text-gray-800">{pair.long}</div>
                  <div className="text-xs text-orange-600">{pair.longRoman}</div>
                  <div className="text-xs text-gray-400">long</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All 12 Vowels */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">All 12 Vowels</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {vowels.map((v) => (
            <div key={v.tamil} className="rounded-2xl border-2 border-orange-100 bg-white p-4 flex flex-col items-center text-center gap-2">
              <span className="text-6xl tamil-text font-bold text-gray-800 leading-none">{v.tamil}</span>
              <span className="text-orange-600 font-medium text-sm">{v.romanization}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${v.length === "short" ? "bg-blue-50 text-blue-600" : v.length === "long" ? "bg-amber-50 text-amber-600" : "bg-purple-50 text-purple-600"}`}>
                {v.length === "short" ? "குறில் short" : v.length === "long" ? "நெடில் long" : "மிகு diphthong"}
              </span>
              <div className="text-xs text-gray-500 italic">{v.tip}</div>
              <div className="text-xs text-gray-700">
                <span className="tamil-text">{v.example}</span>
                <span className="text-gray-400 ml-1">— {v.exampleMeaning}</span>
              </div>
              <AudioButton text={v.tamil} size="md" />
            </div>
          ))}
        </div>
      </section>

      {/* Minimal pairs */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Vowel Length Changes Meaning</h2>
        <p className="text-sm text-gray-500 mb-4">Short and long vowels are different phonemes in Tamil — swapping them changes the word entirely. These <em>minimal pairs</em> show why vowel length matters.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { short: "பல்", shortRom: "pal", shortMeaning: "tooth", long: "பால்", longRom: "paal", longMeaning: "milk" },
            { short: "கல்", shortRom: "kal", shortMeaning: "stone", long: "கால்", longRom: "kaal", longMeaning: "leg / foot" },
            { short: "மின்", shortRom: "min", shortMeaning: "electricity / lightning", long: "மீன்", longRom: "meen", longMeaning: "fish" },
            { short: "குடம்", shortRom: "kudam", shortMeaning: "pot / vessel", long: "கூடம்", longRom: "koodam", longMeaning: "hall / gathering place" },
            { short: "வெர்", shortRom: "ver", shortMeaning: "(dialectal form)", long: "வேர்", longRom: "veyr", longMeaning: "root (of a plant)" },
            { short: "உரு", shortRom: "uru", shortMeaning: "shape / form", long: "ஊரு", longRom: "uuru", longMeaning: "thigh (colloquial); also ஊர் = village" },
          ].map((pair) => (
            <div key={pair.short} className="bg-white border border-orange-100 rounded-xl p-3 flex gap-4">
              <div className="flex-1 text-center border-r border-gray-100 pr-3">
                <div className="text-2xl tamil-text font-bold text-blue-700">{pair.short}</div>
                <div className="text-xs text-blue-500">{pair.shortRom} (short)</div>
                <div className="text-xs text-gray-600 mt-1">{pair.shortMeaning}</div>
              </div>
              <div className="flex-1 text-center pl-1">
                <div className="text-2xl tamil-text font-bold text-amber-700">{pair.long}</div>
                <div className="text-xs text-amber-500">{pair.longRom} (long)</div>
                <div className="text-xs text-gray-600 mt-1">{pair.longMeaning}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practice */}
      <section className="bg-orange-50 rounded-2xl p-5 mb-6">
        <h2 className="font-semibold text-gray-800 mb-3">Practice Tips</h2>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>· Click the <span className="text-orange-600">🔉</span> button to hear each vowel pronounced in Tamil</li>
          <li>· Focus on the short/long distinction first — it's the most important pattern</li>
          <li>· The vowels அ, இ, உ, எ, ஒ are most common; master these first</li>
          <li>· ழ in "தமிழ்" is not a vowel — it's a consonant (you'll learn it next)</li>
        </ul>
      </section>

      <div className="flex gap-3">
        <Link href="/exercises/novice/letter-recognition" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Practice Exercises →
        </Link>
        <Link href="/learn/novice/consonants" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">
          Next: Consonants →
        </Link>
      </div>
    </div>
  );
}
