"use client";

import { useProgress } from "@/hooks/useProgress";
import { AudioButton } from "@/components/AudioButton";
import Link from "next/link";

const sentencePatterns = [
  { pattern: "Subject + Object + Verb", example: "நான் (I) + புத்தகம் (book) + படிக்கிறேன் (read)", result: "நான் புத்தகம் படிக்கிறேன்", meaning: "I read a book" },
  { pattern: "Subject + Indirect Object + Direct Object + Verb", example: "அவள் (she) + குழந்தைக்கு (to child) + பால் (milk) + கொடுத்தாள் (gave)", result: "அவள் குழந்தைக்கு பால் கொடுத்தாள்", meaning: "She gave milk to the child" },
  { pattern: "Adjective + Subject + Verb", example: "நல்ல (good) + மாணவன் (student) + படிக்கிறான் (studies)", result: "நல்ல மாணவன் படிக்கிறான்", meaning: "The good student studies" },
];

const practiceTemplates = [
  { template: "நான் ___ படிக்கிறேன்.", hint: "Fill in a subject (book, Tamil, etc.)", example: "நான் தமிழ் படிக்கிறேன்" },
  { template: "அவன் ___ சாப்பிட்டான்.", hint: "Fill in food", example: "அவன் இட்லி சாப்பிட்டான்" },
  { template: "___ வீட்டில் இருக்கிறாள்.", hint: "Fill in who", example: "அம்மா வீட்டில் இருக்கிறாள்" },
];

export default function SentencesPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("int-sentences");
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link><span>›</span><span>Intermediate</span><span>›</span><span className="text-gray-800">Sentences</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Simple Sentence Composition</h1>
          <p className="tamil-text text-orange-600 text-lg">எளிய வாக்கிய அமைப்பு</p>
        </div>
        <button onClick={() => markTopicComplete("int-sentences")} className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}>
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-blue-800">
        <strong>Key rule:</strong> Tamil follows <strong>SOV (Subject-Object-Verb)</strong> word order — the verb always comes at the end of the sentence. This is the opposite of English.
      </div>

      <h2 className="font-semibold text-gray-800 mb-4">Sentence Patterns</h2>
      <div className="space-y-4 mb-8">
        {sentencePatterns.map((sp) => (
          <div key={sp.pattern} className="bg-white border border-orange-100 rounded-xl p-5">
            <div className="text-xs text-orange-600 font-medium mb-2">{sp.pattern}</div>
            <p className="text-sm text-gray-500 mb-2">{sp.example}</p>
            <div className="flex items-center gap-3 bg-amber-50 rounded-lg p-3">
              <div className="flex-1">
                <p className="tamil-text text-gray-900 font-bold text-lg">{sp.result}</p>
                <p className="text-sm text-gray-500">{sp.meaning}</p>
              </div>
              <AudioButton text={sp.result} size="md" />
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-semibold text-gray-800 mb-4">Practice Templates</h2>
      <div className="space-y-3 mb-8">
        {practiceTemplates.map((pt) => (
          <div key={pt.template} className="bg-white border border-orange-100 rounded-xl p-4">
            <p className="tamil-text text-gray-800 font-medium text-lg mb-1">{pt.template}</p>
            <p className="text-xs text-gray-400 mb-2">Hint: {pt.hint}</p>
            <p className="text-sm text-gray-500">Example: <span className="tamil-text text-gray-700">{pt.example}</span></p>
          </div>
        ))}
      </div>

      {/* Postpositions */}
      <section className="mb-8">
        <h2 className="font-semibold text-gray-800 mb-2">Postpositions (இடைச்சொல்)</h2>
        <p className="text-sm text-gray-500 mb-4">Tamil uses postpositions — they come <em>after</em> the noun (opposite of English prepositions). They often combine with case suffixes.</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            { tamil: "மேலே", rom: "meyle", meaning: "on top of / above", example: "மேசையின் மேலே — on top of the table" },
            { tamil: "கீழே", rom: "keezhe", meaning: "below / under", example: "நாற்காலியின் கீழே — under the chair" },
            { tamil: "முன்னால்", rom: "munnaal", meaning: "in front of", example: "வீட்டின் முன்னால் — in front of the house" },
            { tamil: "பின்னால்", rom: "pinnaal", meaning: "behind", example: "கடையின் பின்னால் — behind the shop" },
            { tamil: "அருகே", rom: "aruge", meaning: "near / beside", example: "பள்ளி அருகே — near the school" },
            { tamil: "உள்ளே", rom: "uLLe", meaning: "inside", example: "வீட்டிற்கு உள்ளே — inside the house" },
            { tamil: "வெளியே", rom: "veliye", meaning: "outside", example: "வெளியே போ — go outside" },
            { tamil: "நடுவே", rom: "naduve", meaning: "in the middle of", example: "சாலையின் நடுவே — in the middle of the road" },
          ].map((pp) => (
            <div key={pp.tamil} className="bg-white border border-orange-100 rounded-xl p-3">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="tamil-text font-bold text-gray-900">{pp.tamil}</span>
                <span className="text-xs text-orange-500">{pp.rom}</span>
                <span className="text-xs text-gray-500">— {pp.meaning}</span>
              </div>
              <p className="text-xs text-gray-400 tamil-text">{pp.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The -உம் suffix */}
      <section className="mb-8">
        <h2 className="font-semibold text-gray-800 mb-2">The -உம் Suffix (also / too)</h2>
        <p className="text-sm text-gray-500 mb-4"><span className="tamil-text font-medium">-உம்</span> attaches to nouns, pronouns, and verbs. On nouns/pronouns it means "also / too"; it is one of the most common particles in Tamil.</p>
        <div className="space-y-2">
          {[
            { base: "நான்", withum: "நானும்", rom: "naanum", meaning: "I also / me too" },
            { base: "அவன்", withum: "அவனும்", rom: "avanUM", meaning: "he also / him too" },
            { base: "தமிழ்", withum: "தமிழும்", rom: "tamilum", meaning: "Tamil also / and Tamil" },
            { base: "வந்தான்", withum: "வந்தானும்", rom: "vandhaanum", meaning: "he came too" },
          ].map((ex) => (
            <div key={ex.base} className="flex items-center gap-4 bg-orange-50 rounded-xl px-4 py-2.5">
              <span className="tamil-text text-gray-500 w-24">{ex.base} + உம்</span>
              <span className="text-gray-400">→</span>
              <span className="tamil-text font-bold text-gray-900">{ex.withum}</span>
              <span className="text-xs text-orange-600">{ex.rom}</span>
              <span className="text-xs text-gray-500 ml-auto">{ex.meaning}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="flex gap-3">
        <Link href="/tests/intermediate" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">Take Intermediate Test →</Link>
        <Link href="/learn/advanced/cases-all" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">Start Advanced →</Link>
      </div>
    </div>
  );
}
