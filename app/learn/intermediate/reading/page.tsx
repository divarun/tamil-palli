"use client";

import { useProgress } from "@/hooks/useProgress";
import { AudioButton } from "@/components/AudioButton";
import { useTransliteration } from "@/contexts/TransliterationContext";
import Link from "next/link";

const readingExamples = [
  { word: "கல்", romanization: "kal", meaning: "stone", level: "2 letters" },
  { word: "மரம்", romanization: "maram", meaning: "tree", level: "4 letters" },
  { word: "வீடு", romanization: "veedu", meaning: "house", level: "4 letters" },
  { word: "மழை", romanization: "mazhai", meaning: "rain", level: "4 letters" },
  { word: "பள்ளி", romanization: "palli", meaning: "school", level: "5 letters" },
  { word: "குழந்தை", romanization: "kulanthai", meaning: "child", level: "7 letters" },
];

const sentences = [
  { tamil: "அம்மா வந்தாள்.", romanization: "Amma vandhaal.", english: "Mother came." },
  { tamil: "நான் சாப்பிட்டேன்.", romanization: "Naan saappitten.", english: "I ate." },
  { tamil: "குழந்தை விளையாடுகிறது.", romanization: "Kulanthai vilaiyaadugiradhu.", english: "The child is playing." },
  { tamil: "வீட்டில் நாய் இருக்கிறது.", romanization: "Veettil naai irukkiRadhu.", english: "There is a dog at home." },
];

export default function ReadingPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("int-reading");
  const { showRomanization } = useTransliteration();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Intermediate</span>
        <span>›</span>
        <span className="text-gray-800">Reading Progression</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reading Progression</h1>
          <p className="tamil-text text-orange-600 text-lg">படிக்கும் திறன்</p>
          <p className="text-sm text-gray-500 mt-1">Words → Sentences → Paragraphs</p>
        </div>
        <button
          onClick={() => markTopicComplete("int-reading")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <h2 className="text-lg font-semibold text-gray-800 mb-3">Step 1 — Reading Words</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        {readingExamples.map((ex) => (
          <div key={ex.word} className="bg-white border border-orange-100 rounded-xl p-4 flex flex-col items-center text-center gap-2">
            <span className="text-3xl tamil-text font-bold text-gray-900">{ex.word}</span>
            {showRomanization && <span className="text-xs text-orange-600">{ex.romanization}</span>}
            <span className="text-xs text-gray-500">{ex.meaning}</span>
            <span className="text-xs text-gray-300">{ex.level}</span>
            <AudioButton text={ex.word} size="sm" />
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold text-gray-800 mb-3">Step 2 — Reading Sentences</h2>
      <div className="space-y-3 mb-8">
        {sentences.map((s) => (
          <div key={s.tamil} className="bg-white border border-orange-100 rounded-xl p-4 flex items-center gap-4">
            <div className="flex-1">
              <p className="tamil-text text-gray-900 font-medium text-lg mb-1">{s.tamil}</p>
              {showRomanization && <p className="text-sm text-orange-600 italic">{s.romanization}</p>}
              <p className="text-sm text-gray-500">{s.english}</p>
            </div>
            <AudioButton text={s.tamil} size="md" />
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
        <h2 className="font-semibold text-amber-900 mb-2">Reading Tips</h2>
        <ul className="space-y-1 text-sm text-amber-800">
          <li>· Read each letter sound separately at first, then blend them</li>
          <li>· Use the audio button to check your pronunciation</li>
          <li>· Tamil is phonetically consistent — what you see is what you pronounce</li>
          <li>· Practice reading aloud every day for 10 minutes</li>
        </ul>
      </div>

      <div className="flex gap-3">
        <Link href="/learn/intermediate/combined" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">← Combined Letters</Link>
        <Link href="/learn/intermediate/parts-of-speech" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Next: Parts of Speech →
        </Link>
      </div>
    </div>
  );
}
