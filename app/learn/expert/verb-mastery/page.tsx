"use client";

import { useProgress } from "@/hooks/useProgress";
import { AudioButton } from "@/components/AudioButton";
import Link from "next/link";

const verbalParticiples = [
  { form: "வந்து", romanization: "vandhu", root: "வா (come)", type: "Past verbal participle", meaning: "having come", example: "அவன் வந்து பார்த்தான் — He came and saw" },
  { form: "போய்", romanization: "pōy", root: "போ (go)", type: "Past verbal participle", meaning: "having gone", example: "அவள் போய் சொன்னாள் — She went and said" },
  { form: "படித்து", romanization: "padithtu", root: "படி (read/study)", type: "Past verbal participle", meaning: "having studied", example: "படித்து தேர்வு எழுதினான் — He studied and took the exam" },
  { form: "வருகிறவன்", romanization: "varugiraван", root: "வா (come)", type: "Present adjectival participle", meaning: "one who is coming", example: "வருகிறவன் யார்? — Who is the one coming?" },
  { form: "போனவன்", romanization: "pōnavan", root: "போ (go)", type: "Past adjectival participle", meaning: "the one who went", example: "போனவன் திரும்பவில்லை — The one who went didn't return" },
  { form: "படிப்பவள்", romanization: "padippavaḷ", root: "படி (read)", type: "Present adjectival participle", meaning: "she who studies", example: "படிப்பவள் திடமாக இருக்கிறாள் — She who studies is strong" },
];

const verbalNouns = [
  { form: "படித்தல்", romanization: "padithtal", root: "படி", meaning: "the act of studying/reading", example: "படித்தல் நன்மை தரும் — Studying brings benefit" },
  { form: "வருகை", romanization: "varugai", root: "வா", meaning: "the coming / arrival", example: "உங்கள் வருகை மகிழ்வளிக்கிறது — Your arrival brings joy" },
  { form: "சிரிப்பு", romanization: "sirippu", root: "சிரி", meaning: "laughter / the act of laughing", example: "அவன் சிரிப்பு கேட்கிறது — His laughter is heard" },
  { form: "ஓட்டம்", romanization: "ōttam", root: "ஓடு", meaning: "the running / a run", example: "வேகமான ஓட்டம் — A fast run" },
];

const negativeVerbs = [
  { positive: "வருகிறான்", romanization: "varugiraan", negative: "வரவில்லை", negRom: "varavillai", meaning: "He comes / He does not come" },
  { positive: "படித்தாள்", romanization: "padithaaḷ", negative: "படிக்கவில்லை", negRom: "padikkavillai", meaning: "She studied / She did not study" },
  { positive: "போவான்", romanization: "pōvaan", negative: "போகமாட்டான்", negRom: "pōgamaattaan", meaning: "He will go / He will not go" },
  { positive: "சாப்பிடுகிறோம்", romanization: "saappidugirōm", negative: "சாப்பிடவில்லை", negRom: "saappidavillai", meaning: "We eat / We do not eat" },
];

export default function VerbMasteryPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("exp-verb-mastery");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/curriculum" className="text-sm text-gray-500 hover:text-orange-600">← Curriculum</Link>
        <span className="ml-auto text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded-full font-medium">Expert</span>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-1">Advanced Verb Conjugation</h1>
      <p className="text-lg tamil-text text-gray-500 mb-8">வினைச்சொல் திறன்</p>

      {/* Verbal Participles */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">Verbal Participles (வினையெச்சம்)</h2>
        <p className="text-sm text-gray-500 mb-4">A verbal participle connects two actions, usually translated as "having done X" or "doing X and then...". It is uninflected — it doesn't carry the subject's person/gender/number.</p>
        <div className="space-y-3">
          {verbalParticiples.map((vp) => (
            <div key={vp.form} className="bg-white border border-rose-100 rounded-xl p-4">
              <div className="flex items-start gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-3xl tamil-text font-bold text-gray-900">{vp.form}</span>
                  <AudioButton text={vp.form} />
                </div>
                <div className="flex-1">
                  <div className="flex gap-3 flex-wrap mb-1">
                    <span className="text-sm text-gray-500">{vp.romanization}</span>
                    <span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">{vp.type}</span>
                  </div>
                  <p className="text-sm text-gray-700">Root: <span className="tamil-text">{vp.root}</span> → <em>{vp.meaning}</em></p>
                  <p className="text-sm tamil-text text-gray-600 mt-1">{vp.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verbal Nouns */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">Verbal Nouns (தொழிற்பெயர்)</h2>
        <p className="text-sm text-gray-500 mb-4">A verbal noun turns a verb into a noun — the action itself becomes the subject or object of another verb.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {verbalNouns.map((vn) => (
            <div key={vn.form} className="bg-rose-50 border border-rose-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl tamil-text font-bold text-gray-900">{vn.form}</span>
                <AudioButton text={vn.form} />
                <span className="text-sm text-gray-500 ml-1">{vn.romanization}</span>
              </div>
              <p className="text-sm text-gray-600">Root: <span className="tamil-text font-medium">{vn.root}</span></p>
              <p className="text-sm text-gray-700 mb-1">{vn.meaning}</p>
              <p className="text-xs tamil-text text-gray-500">{vn.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Negative Verb Forms */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">Negative Verb Forms</h2>
        <p className="text-sm text-gray-500 mb-4">Tamil negation depends on tense. Past and present tense use <span className="tamil-text font-medium">-வில்லை</span> suffix. Future negative uses <span className="tamil-text font-medium">-மாட்டான்/-மாட்டாள்/-மாட்டார்</span>.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-rose-50">
                <th className="text-left p-3 border border-rose-100 text-gray-700">Positive</th>
                <th className="text-left p-3 border border-rose-100 text-gray-700">Negative</th>
                <th className="text-left p-3 border border-rose-100 text-gray-700">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {negativeVerbs.map((row) => (
                <tr key={row.positive} className="border-b border-rose-50">
                  <td className="p-3 border border-rose-100">
                    <span className="tamil-text text-base">{row.positive}</span>
                    <span className="text-xs text-gray-400 block">{row.romanization}</span>
                  </td>
                  <td className="p-3 border border-rose-100">
                    <span className="tamil-text text-base text-red-700">{row.negative}</span>
                    <span className="text-xs text-gray-400 block">{row.negRom}</span>
                  </td>
                  <td className="p-3 border border-rose-100 text-gray-600 text-xs">{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 mb-8 text-sm text-rose-800">
        <strong>Key insight:</strong> Tamil verbal participles allow long chains of connected actions without repeating the subject. This is a hallmark of formal and classical Tamil writing, and mastering it unlocks much more natural Tamil expression.
      </div>

      <button
        onClick={() => markTopicComplete("exp-verb-mastery")}
        className={`px-6 py-3 rounded-xl font-semibold text-sm transition-colors ${done ? "bg-green-100 text-green-700 border border-green-200" : "bg-rose-600 text-white hover:bg-rose-700"}`}
      >
        {done ? "✓ Completed" : "Mark as Complete"}
      </button>

      <div className="flex gap-3 mt-6">
        <Link href="/learn/expert/kambaramayanam" className="px-4 py-2 bg-rose-600 text-white rounded-xl text-sm font-medium hover:bg-rose-700 transition-colors">Next: Kambaramayanam →</Link>
      </div>
    </div>
  );
}
