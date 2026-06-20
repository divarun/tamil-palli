"use client";

import { useProgress } from "@/hooks/useProgress";
import { AudioButton } from "@/components/AudioButton";
import Link from "next/link";

const partsOfSpeech = [
  {
    name: "Noun",
    tamilName: "பெயர்ச்சொல் (Peyarcchol)",
    description: "Names a person, place, thing, or idea.",
    examples: [
      { tamil: "மரம்", romanization: "maram", english: "tree" },
      { tamil: "பள்ளி", romanization: "palli", english: "school" },
      { tamil: "குழந்தை", romanization: "kulanthai", english: "child" },
    ],
    pluralRule: "Add -கள் (-kal) for neuter plural: மரங்கள் (trees); -ர்கள் (-rkal) for rational plural: மாணவர்கள் (students)",
  },
  {
    name: "Verb",
    tamilName: "வினைச்சொல் (Vinaicchol)",
    description: "Expresses an action or state. Verbs in Tamil carry tense, person, and gender information.",
    examples: [
      { tamil: "படிக்கிறேன்", romanization: "padikkireen", english: "I am reading" },
      { tamil: "வருகிறாள்", romanization: "varukiraal", english: "She is coming" },
      { tamil: "சாப்பிட்டான்", romanization: "saappittaan", english: "He ate" },
    ],
    pluralRule: "Verbs conjugate with tense suffixes: -ந்தேன் (past), -கிறேன் (present), -வேன் (future)",
  },
  {
    name: "Adjective",
    tamilName: "உரிச்சொல் (Uricchol)",
    description: "Describes a noun. Tamil adjectives precede the noun they modify and do not change form.",
    examples: [
      { tamil: "சிவப்பு பூ", romanization: "sivappu poo", english: "red flower" },
      { tamil: "நல்ல குழந்தை", romanization: "nalla kulanthai", english: "good child" },
      { tamil: "பெரிய வீடு", romanization: "periya veedu", english: "big house" },
    ],
    pluralRule: "Adjectives don't change with number or gender — they stay the same",
  },
  {
    name: "Adverb",
    tamilName: "வினையுரிச்சொல் (Vinaiyuricchol)",
    description: "Modifies a verb, adjective, or other adverb.",
    examples: [
      { tamil: "மிகவும் நன்றாக", romanization: "mikavum nandraka", english: "very well" },
      { tamil: "சீக்கிரம் வா", romanization: "seekkiram vaa", english: "come quickly" },
      { tamil: "தினமும் படி", romanization: "dinamum padi", english: "read daily" },
    ],
    pluralRule: "Adverbs are invariable — they do not change",
  },
];

export default function PartsOfSpeechPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("int-parts-of-speech");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Intermediate</span>
        <span>›</span>
        <span className="text-gray-800">Parts of Speech</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Parts of Speech</h1>
          <p className="tamil-text text-orange-600 text-lg">சொல்லின் வகைகள்</p>
        </div>
        <button
          onClick={() => markTopicComplete("int-parts-of-speech")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <div className="space-y-6">
        {partsOfSpeech.map((pos) => (
          <div key={pos.name} className="bg-white border border-orange-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="font-bold text-gray-900 text-lg">{pos.name}</h2>
              <span className="text-sm tamil-text text-orange-600">{pos.tamilName}</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{pos.description}</p>
            <div className="grid gap-2 mb-3">
              {pos.examples.map((ex) => (
                <div key={ex.tamil} className="flex items-center gap-3 bg-amber-50 rounded-lg p-3">
                  <span className="tamil-text text-gray-800 font-medium">{ex.tamil}</span>
                  <span className="text-xs text-orange-600">{ex.romanization}</span>
                  <span className="text-xs text-gray-500">— {ex.english}</span>
                  <AudioButton text={ex.tamil} size="sm" className="ml-auto" />
                </div>
              ))}
            </div>
            <p className="text-xs text-blue-700 bg-blue-50 rounded-lg p-2">{pos.pluralRule}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-8">
        <Link href="/learn/intermediate/tenses" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Next: 3 Tenses →
        </Link>
      </div>
    </div>
  );
}
