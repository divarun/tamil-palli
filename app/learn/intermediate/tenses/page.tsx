"use client";

import { tenses, pronounsWithTenses } from "@/data/grammar/tenses";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

const tenseColors = {
  past: { bg: "bg-blue-50", border: "border-blue-200", badge: "bg-blue-100 text-blue-700" },
  present: { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-700" },
  future: { bg: "bg-purple-50", border: "border-purple-200", badge: "bg-purple-100 text-purple-700" },
};

export default function TensesPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("int-tenses");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Intermediate</span>
        <span>›</span>
        <span className="text-gray-800">3 Tenses</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">3 Tenses</h1>
          <p className="tamil-text text-orange-600 text-lg">மூன்று காலங்கள்</p>
          <p className="text-sm text-gray-500 mt-1">Past, Present, and Future</p>
        </div>
        <button
          onClick={() => markTopicComplete("int-tenses")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <div className="space-y-6 mb-10">
        {tenses.map((tense) => {
          const c = tenseColors[tense.tense];
          return (
            <div key={tense.tense} className={`rounded-2xl border-2 ${c.bg} ${c.border} p-6`}>
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${c.badge}`}>{tense.tense.toUpperCase()}</span>
                <h2 className="font-semibold text-gray-800 text-lg">{tense.tamilName}</h2>
              </div>
              <p className="text-sm text-gray-600 mb-2"><strong>Suffix:</strong> <span className="tamil-text">{tense.suffix}</span></p>
              <p className="text-sm text-gray-600 mb-4">{tense.description}</p>
              <div className="space-y-2">
                {tense.examples.map((ex) => (
                  <div key={ex.tamil} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-white/60">
                    <div className="flex-1">
                      <div className="tamil-text text-gray-800 font-medium">{ex.tamil}</div>
                      <div className="text-xs text-orange-600">{ex.romanization}</div>
                      <div className="text-xs text-gray-500">{ex.english}</div>
                    </div>
                    <AudioButton text={ex.tamil} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Negation */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Negation (எதிர்மறை)</h2>
        <p className="text-sm text-gray-500 mb-4">Negative forms differ by tense. Past and present use <span className="tamil-text font-medium">-வில்லை</span>; future uses <span className="tamil-text font-medium">-மாட்டேன் / -மாட்டான் / -மாட்டாள்</span>.</p>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 font-medium text-gray-600">Positive</th>
                <th className="text-left p-3 font-medium text-red-600">Negative</th>
                <th className="text-left p-3 font-medium text-gray-500">English</th>
              </tr>
            </thead>
            <tbody>
              {[
                { pos: "நான் வந்தேன்", neg: "நான் வரவில்லை", eng: "I came / I did not come" },
                { pos: "அவன் படிக்கிறான்", neg: "அவன் படிக்கவில்லை", eng: "He studies / He does not study" },
                { pos: "நான் வருவேன்", neg: "நான் வரமாட்டேன்", eng: "I will come / I will not come" },
                { pos: "அவள் சாப்பிடுவாள்", neg: "அவள் சாப்பிடமாட்டாள்", eng: "She will eat / She will not eat" },
              ].map((row, i) => (
                <tr key={row.pos} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="p-3 tamil-text text-emerald-700">{row.pos}</td>
                  <td className="p-3 tamil-text text-red-700">{row.neg}</td>
                  <td className="p-3 text-gray-500 text-xs">{row.eng}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-sm text-blue-800">
          <strong>Key phrases to know now:</strong> நான் தெரியவில்லை (I don't know) · புரியவில்லை (I don't understand) · இல்லை (No / it is not) · வேண்டாம் (I don't want it)
        </div>
      </section>

      {/* Pronoun reference table */}
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Verb Endings by Pronoun</h2>
      <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-3 font-medium text-gray-600">Pronoun</th>
              <th className="text-center p-3 font-medium text-blue-600">Past</th>
              <th className="text-center p-3 font-medium text-emerald-600">Present</th>
              <th className="text-center p-3 font-medium text-purple-600">Future</th>
            </tr>
          </thead>
          <tbody>
            {pronounsWithTenses.map((row, i) => (
              <tr key={row.pronoun} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                <td className="p-3 tamil-text text-gray-800 font-medium">{row.pronoun}</td>
                <td className="p-3 text-center tamil-text text-blue-700">{row.past}</td>
                <td className="p-3 text-center tamil-text text-emerald-700">{row.present}</td>
                <td className="p-3 text-center tamil-text text-purple-700">{row.future}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-3">
        <Link href="/exercises/intermediate/fill-blank" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Practice Exercises →
        </Link>
        <Link href="/learn/intermediate/gender" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">
          Next: Gender →
        </Link>
      </div>
    </div>
  );
}
