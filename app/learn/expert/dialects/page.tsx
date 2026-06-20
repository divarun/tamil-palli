"use client";

import { useProgress } from "@/hooks/useProgress";
import { AudioButton } from "@/components/AudioButton";
import Link from "next/link";

const dialects = [
  {
    name: "Chennai Tamil",
    tamilName: "சென்னை தமிழ்",
    region: "Urban Tamil Nadu, formal media",
    features: ["Closest to formal written Tamil", "Often used in news broadcasts", "Heavy Sanskrit/English loanwords in educated speech", "ஆகிறது → ஆகுது (colloquial shortening)"],
    example: { formal: "நான் போகிறேன்", colloquial: "நான் போறேன்", meaning: "I am going" },
  },
  {
    name: "Madurai Tamil",
    tamilName: "மதுரை தமிழ்",
    region: "Southern Tamil Nadu",
    features: ["Considered more 'classical' in tone", "Distinctive intonation pattern", "Fewer English borrowings", "Retroflex sounds more pronounced"],
    example: { formal: "என்ன சாப்பிட்டீர்கள்?", colloquial: "என்ன சாப்டீங்க?", meaning: "What did you eat?" },
  },
  {
    name: "Jaffna Tamil",
    tamilName: "யாழ்ப்பாண தமிழ்",
    region: "Northern Sri Lanka",
    features: ["Considered most archaic — preserves old Tamil forms", "Different pronoun set (நாங்கள் for நாம்)", "Less influence from Hindi/Sanskrit", "Distinct vocabulary: நியா (you, familiar) vs நீ"],
    example: { formal: "நான் வருகிறேன்", colloquial: "நான் வாறன்", meaning: "I am coming" },
  },
  {
    name: "Overseas Tamil",
    tamilName: "புலம்பெயர் தமிழ்",
    region: "Malaysia, Singapore, UK, USA, Canada, Australia",
    features: ["Heavy code-switching with English", "Often uses Jaffna or regional base", "Younger generations mix English grammar into Tamil sentences", "Community-specific vocabulary (e.g., 'கார் ஓட்ட போறோம்')"],
    example: { formal: "நாளை வருவீர்களா?", colloquial: "நாளைக்கு come பண்ணுவீங்களா?", meaning: "Will you come tomorrow?" },
  },
];

const diglossia = [
  { feature: "Pronoun (I)", formal: "யான் / நான்", colloquial: "நான்" },
  { feature: "Pronoun (we, incl.)", formal: "நாம்", colloquial: "நாம / நாங்க" },
  { feature: "Pronoun (you, sg.)", formal: "நீ / நீர்", colloquial: "நீ / நீங்க (polite)" },
  { feature: "Present tense", formal: "-கிறேன் (போகிறேன்)", colloquial: "-றேன் (போறேன்)" },
  { feature: "Future tense", formal: "-வேன் (செய்வேன்)", colloquial: "-வேன் / same" },
  { feature: "Negative", formal: "-வில்லை (வரவில்லை)", colloquial: "-ல (வரல)" },
  { feature: "Verb 'to be'", formal: "இருக்கிறது", colloquial: "இருக்கு" },
  { feature: "Suffix -ஐ (acc.)", formal: "புத்தகத்தை", colloquial: "புத்தகத்த" },
];

export default function DialectsPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("exp-dialects");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/curriculum" className="text-sm text-gray-500 hover:text-orange-600">← Curriculum</Link>
        <span className="ml-auto text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded-full font-medium">Expert</span>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-1">Tamil Dialects</h1>
      <p className="text-xl tamil-text text-gray-500 mb-8">தமிழ் வட்டார வழக்குகள்</p>

      <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mb-8 text-sm text-rose-800">
        <strong>Diglossia:</strong> Tamil has a wide gap between formal/written Tamil (செந்தமிழ்) and everyday spoken Tamil (கொடுந்தமிழ்). This is called diglossia — two varieties of the same language used in different social contexts. All educated Tamil speakers switch between registers constantly.
      </div>

      {/* Formal vs Colloquial quick table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Formal vs Colloquial — Key Differences</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-rose-50">
                <th className="text-left p-3 border border-rose-100 text-gray-700">Feature</th>
                <th className="text-left p-3 border border-rose-100 text-gray-700">Formal (எழுத்தில்)</th>
                <th className="text-left p-3 border border-rose-100 text-gray-700">Colloquial (பேச்சில்)</th>
              </tr>
            </thead>
            <tbody>
              {diglossia.map((row) => (
                <tr key={row.feature} className="border-b border-rose-50 hover:bg-rose-50/50">
                  <td className="p-3 border border-rose-100 text-gray-600 text-xs">{row.feature}</td>
                  <td className="p-3 border border-rose-100 tamil-text">{row.formal}</td>
                  <td className="p-3 border border-rose-100 tamil-text text-rose-700">{row.colloquial}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Regional dialects */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Regional Varieties</h2>
        <div className="space-y-4">
          {dialects.map((d) => (
            <div key={d.name} className="bg-white border border-rose-100 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-gray-900">{d.name}</h3>
                <span className="tamil-text text-gray-500 text-sm">— {d.tamilName}</span>
              </div>
              <p className="text-xs text-rose-600 mb-3">{d.region}</p>
              <ul className="space-y-1 mb-4">
                {d.features.map((f) => <li key={f} className="text-sm text-gray-600 flex gap-2"><span className="text-gray-300">·</span>{f}</li>)}
              </ul>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
                <p className="text-xs text-amber-700 mb-2">Example: "{d.example.meaning}"</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Formal:</p>
                    <div className="flex items-center gap-2">
                      <span className="tamil-text text-gray-800">{d.example.formal}</span>
                      <AudioButton text={d.example.formal} size="sm" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Colloquial:</p>
                    <div className="flex items-center gap-2">
                      <span className="tamil-text text-rose-700">{d.example.colloquial}</span>
                      <AudioButton text={d.example.colloquial} size="sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button
        onClick={() => markTopicComplete("exp-dialects")}
        className={`px-6 py-3 rounded-xl font-semibold text-sm transition-colors ${done ? "bg-green-100 text-green-700 border border-green-200" : "bg-rose-600 text-white hover:bg-rose-700"}`}
      >
        {done ? "✓ Completed" : "Mark as Complete"}
      </button>

      <div className="flex gap-3 mt-6">
        <Link href="/learn/expert/translation" className="px-4 py-2 border border-rose-200 text-rose-700 rounded-xl text-sm font-medium hover:bg-rose-50 transition-colors">← Translation Practice</Link>
        <Link href="/learn/expert/linguistics" className="px-4 py-2 bg-rose-600 text-white rounded-xl text-sm font-medium hover:bg-rose-700 transition-colors">Next: Script History →</Link>
      </div>
    </div>
  );
}
