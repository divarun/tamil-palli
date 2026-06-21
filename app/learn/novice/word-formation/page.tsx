"use client";

import { vowels } from "@/data/letters/vowels";
import { consonants } from "@/data/letters/consonants";
import { getCombined, vowelOrder, consonantOrder } from "@/data/letters/combined";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import { useTransliteration } from "@/contexts/TransliterationContext";
import Link from "next/link";

const exampleWords = [
  { word: "கா", parts: ["க", "ஆ"], meaning: "forest / leg (informal)", breakdown: "க + ஆ → கா" },
  { word: "பா", parts: ["ப", "ஆ"], meaning: "song / poem", breakdown: "ப + ஆ → பா" },
  { word: "மா", parts: ["ம", "ஆ"], meaning: "mango tree / great", breakdown: "ம + ஆ → மா" },
  { word: "வா", parts: ["வ", "ஆ"], meaning: "come (imperative)", breakdown: "வ + ஆ → வா" },
  { word: "நீ", parts: ["ந", "ஈ"], meaning: "you (informal)", breakdown: "ந + ஈ → நீ" },
  { word: "வீ", parts: ["வ", "ஈ"], meaning: "house (short form)", breakdown: "வ + ஈ → வீ" },
];

export default function WordFormationPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("novice-word-formation");
  const { showRomanization } = useTransliteration();

  // Show a small 4×5 grid preview
  const previewConsonants = consonantOrder.slice(0, 4);
  const previewVowels = vowelOrder.slice(0, 5);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Novice</span>
        <span>›</span>
        <span className="text-gray-800">Word Formation</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Word Formation</h1>
          <p className="tamil-text text-orange-600 text-lg">சொல் உருவாக்கம்</p>
          <p className="text-sm text-gray-500 mt-1">How vowels and consonants combine to form Tamil words</p>
        </div>
        <button
          onClick={() => markTopicComplete("novice-word-formation")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
        <h2 className="font-semibold text-blue-800 mb-2">The Key Concept</h2>
        <p className="text-sm text-blue-700 mb-2">
          Tamil consonants in isolation have an inherent vowel (usually "a"). When you add a vowel marker (diacritic) to a consonant, you get a combined letter called an <strong>உயிர்மெய் எழுத்து</strong> (vowel-consonant letter).
        </p>
        <p className="text-sm text-blue-700">
          There are 18 consonants × 12 vowels = <strong>216 combined letters</strong>. Together with the 12 vowels, 18 consonants, and aytham, Tamil has 247 letters total.
        </p>
      </div>

      {/* Mini combination grid */}
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Combination Preview (க, ச, ட, த × first 5 vowels)</h2>
      <div className="overflow-x-auto mb-8">
        <table className="border-collapse text-center">
          <thead>
            <tr>
              <th className="w-16 p-2 text-xs text-gray-500 font-medium border border-gray-200 bg-gray-50"></th>
              {previewVowels.map((v) => {
                const vowel = vowels.find((vv) => vv.tamil === v);
                return (
                  <th key={v} className="w-16 p-2 border border-gray-200 bg-amber-50">
                    <div className="text-xl tamil-text font-bold text-amber-800">{v}</div>
                    {showRomanization && <div className="text-xs text-amber-600">{vowel?.romanization}</div>}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {previewConsonants.map((c) => {
              const con = consonants.find((cc) => cc.tamil === c);
              return (
                <tr key={c}>
                  <td className="p-2 border border-gray-200 bg-blue-50">
                    <div className="text-xl tamil-text font-bold text-blue-800">{c}்</div>
                    {showRomanization && <div className="text-xs text-blue-600">{con?.romanization}</div>}
                  </td>
                  {previewVowels.map((v) => {
                    const combined = getCombined(c, v);
                    return (
                      <td key={v} className="p-2 border border-gray-200 hover:bg-orange-50 transition-colors">
                        <div className="text-xl tamil-text font-bold text-gray-800">{combined}</div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mb-8">Full 18×12 grid available in the Intermediate: Combined Letters lesson.</p>

      {/* Example words */}
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Example Word Formations</h2>
      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {exampleWords.map((ex) => (
          <div key={ex.word} className="bg-white border border-orange-100 rounded-xl p-4 flex items-center gap-4">
            <span className="text-4xl tamil-text font-bold text-gray-800">{ex.word}</span>
            <div className="flex-1">
              <div className="text-xs text-orange-600 font-medium">{ex.breakdown}</div>
              <div className="text-sm text-gray-500">{ex.meaning}</div>
            </div>
            <AudioButton text={ex.word} size="sm" />
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <Link href="/learn/novice/questions" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">← Question Words</Link>
        <Link href="/learn/novice/vada-ezhuthukal" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Next: Grantha Letters →
        </Link>
      </div>
    </div>
  );
}
