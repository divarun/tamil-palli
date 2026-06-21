"use client";

import { phrases, dialogues } from "@/data/vocabulary/phrases";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import { useTransliteration } from "@/contexts/TransliterationContext";
import Link from "next/link";

const contextColors: Record<string, string> = {
  directions: "bg-blue-50 border-blue-100",
  family: "bg-pink-50 border-pink-100",
  food: "bg-amber-50 border-amber-100",
  routine: "bg-emerald-50 border-emerald-100",
};

const contexts = Array.from(new Set(phrases.map((p) => p.context)));

export default function PhrasesPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("int-phrases");
  const { showRomanization } = useTransliteration();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Intermediate</span>
        <span>›</span>
        <span className="text-gray-800">Conversational Phrases</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Conversational Phrases</h1>
          <p className="tamil-text text-orange-600 text-lg">உரையாடல் சொற்றொடர்கள்</p>
        </div>
        <button
          onClick={() => markTopicComplete("int-phrases")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      {/* Phrases by context */}
      {contexts.map((ctx) => {
        const ctxPhrases = phrases.filter((p) => p.context === ctx);
        const color = contextColors[ctx] ?? "bg-gray-50 border-gray-100";
        return (
          <div key={ctx} className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 capitalize mb-3">{ctx.replace("-", " ")}</h2>
            <div className="space-y-2">
              {ctxPhrases.map((p) => (
                <div key={p.tamil} className={`flex items-center gap-4 rounded-xl border p-4 ${color}`}>
                  <div className="flex-1">
                    <p className="tamil-text text-gray-900 font-medium">{p.tamil}</p>
                    {showRomanization && <p className="text-sm text-orange-600 italic">{p.romanization}</p>}
                    <p className="text-sm text-gray-500">{p.english}</p>
                  </div>
                  <AudioButton text={p.tamil} size="md" />
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Dialogues */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Sample Dialogues</h2>
      <div className="space-y-6 mb-8">
        {dialogues.map((d) => (
          <div key={d.title} className="bg-white border border-orange-100 rounded-2xl p-5">
            <h3 className="font-bold text-gray-900 mb-1">{d.title}</h3>
            <p className="text-xs text-gray-500 mb-4 italic">{d.scenario}</p>
            <div className="space-y-3">
              {d.lines.map((line, i) => (
                <div key={i} className={`flex gap-3 ${line.speaker === "B" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${line.speaker === "A" ? "bg-blue-100 text-blue-700" : "bg-emerald-100 text-emerald-700"}`}>
                    {line.speaker}
                  </div>
                  <div className={`max-w-xs rounded-xl p-3 ${line.speaker === "A" ? "bg-blue-50 border border-blue-100" : "bg-emerald-50 border border-emerald-100"}`}>
                    <p className="tamil-text text-gray-800 font-medium text-sm">{line.tamil}</p>
                    {showRomanization && <p className="text-xs text-orange-600 italic">{line.romanization}</p>}
                    <p className="text-xs text-gray-500">{line.english}</p>
                  </div>
                  <AudioButton text={line.tamil} size="sm" className="self-center" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <Link href="/learn/intermediate/months" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">← Months</Link>
        <Link href="/learn/intermediate/proverbs" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Next: Tamil Proverbs →
        </Link>
      </div>
    </div>
  );
}
