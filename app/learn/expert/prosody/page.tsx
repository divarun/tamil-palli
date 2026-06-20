"use client";

import { useProgress } from "@/hooks/useProgress";
import { AudioButton } from "@/components/AudioButton";
import Link from "next/link";

const tinais = [
  { name: "குறிஞ்சி (Kuriñci)", landscape: "Mountains & forests", season: "Winter & pre-dawn", theme: "Union in love (களவு)", flower: "குறிஞ்சி (Strobilanthes)" },
  { name: "முல்லை (Mullai)", landscape: "Forests & pastoral", season: "Rainy season, evening", theme: "Faithful waiting", flower: "முல்லை (Jasmine)" },
  { name: "மருதம் (Marutam)", landscape: "Agricultural plains", season: "All seasons, midday", theme: "Infidelity & reconciliation", flower: "மருத மரம் (Arjuna tree)" },
  { name: "நெய்தல் (Neytal)", landscape: "Seashore", season: "All seasons, evening", theme: "Anxious waiting, grief", flower: "நெய்தல் (Blue water lily)" },
  { name: "பாலை (Pālai)", landscape: "Wasteland & desert paths", season: "Summer", theme: "Separation & hardship", flower: "பாலை (Cadamba)" },
];

const metres = [
  {
    name: "வெண்பா (Veṇpā)",
    description: "The most structured Tamil metre — used for Thirukkural and formal poetry. Each line (அடி) must end with a specific foot pattern.",
    example: "அகர முதல வெழுத்தெல்லாம் ஆதி\nபகவன் முதற்றே உலகு",
    exampleSource: "Thirukkural 1:1 — a perfect Kuṟaḷ veṇpā",
    rules: ["Each couplet has a short final line (குறள் அடி)", "Ends with நாள்/மலர்/காசு/பிறப்பு type feet", "Uses only ஒன்றிய மோனை (initial rhyme) — not end rhyme"],
  },
  {
    name: "ஆசிரியப்பா (Āciripā)",
    description: "A freer metre used for longer narrative poems, including Sangam akam poetry. Based on the āciripam foot.",
    example: "யாதும் ஊரே யாவரும் கேளிர்\nதீதும் நன்றும் பிறர்தர வாரா",
    exampleSource: "Puṟanāṉūṟu 192 — Kaniyan Pungundranaar",
    rules: ["More flexible than veṇpā", "Lines end in specific āciripam feet", "Suitable for heroic and philosophical content"],
  },
  {
    name: "கலிப்பா (Kalippā)",
    description: "A metre with a strong beat, used in Sangam akam poetry and celebratory verse. Named for its energetic rhythm.",
    example: "நோய்நாடி நோய்முதல் நாடி அதுதணிக்கும்\nவாய்நாடி வாய்ப்பச் செயல்",
    exampleSource: "Thirukkural 948 — also rendered as Kalippā",
    rules: ["Uses kali feet throughout", "Often livelier in sound than other metres", "Common in Ainkurunūṟu"],
  },
];

const asaiTypes = [
  { name: "நேரசை (Nēracai)", description: "Short-long syllable pattern (ல ல ல ā)", example: "அகர" },
  { name: "நிரையசை (Niṟayacai)", description: "Short-short-long syllable pattern (ல ல ā)", example: "பகவன்" },
];

export default function ProsodyPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("exp-prosody");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/curriculum" className="text-sm text-gray-500 hover:text-orange-600">← Curriculum</Link>
        <span className="ml-auto text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded-full font-medium">Expert</span>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-1">Tamil Poetry & Metres</h1>
      <p className="text-xl tamil-text text-gray-500 mb-8">யாப்பிலக்கணம்</p>

      {/* Tinai System */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">The Five Landscapes (திணை — Tiṇai)</h2>
        <p className="text-sm text-gray-500 mb-4">Sangam love poetry is classified by landscape (திணை), each with its own season, flower, time of day, and emotional theme. This is the foundational system of Tamil poetics — nature is always symbolic.</p>
        <div className="space-y-3">
          {tinais.map((t) => (
            <div key={t.name} className="bg-white border border-rose-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="tamil-text font-bold text-gray-900">{t.name}</span>
                <AudioButton text={t.name.split(" ")[0]} />
              </div>
              <div className="grid sm:grid-cols-4 gap-2 text-xs text-gray-600">
                <div><span className="text-gray-400">Landscape:</span> {t.landscape}</div>
                <div><span className="text-gray-400">Season/Time:</span> {t.season}</div>
                <div><span className="text-gray-400">Theme:</span> {t.theme}</div>
                <div><span className="text-gray-400">Flower:</span> {t.flower}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Asai */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">Metrical Feet (அசை — Acai)</h2>
        <p className="text-sm text-gray-500 mb-4">The basic unit of Tamil prosody is the <em>acai</em> — a rhythmic foot made of short (குறில்) and long (நெடில்) syllables. Two acai make a சீர் (cīr), and two or more cīr make a line (அடி).</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {asaiTypes.map((a) => (
            <div key={a.name} className="bg-rose-50 border border-rose-100 rounded-xl p-4">
              <p className="tamil-text font-bold text-gray-900 mb-1">{a.name}</p>
              <p className="text-sm text-gray-600 mb-2">{a.description}</p>
              <p className="text-sm">Example: <span className="tamil-text font-medium">{a.example}</span></p>
            </div>
          ))}
        </div>
      </section>

      {/* Metres */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Major Metres (பா வகைகள்)</h2>
        <div className="space-y-6">
          {metres.map((m) => (
            <div key={m.name} className="bg-white border border-rose-100 rounded-2xl p-6">
              <h3 className="tamil-text font-bold text-lg text-gray-900 mb-2">{m.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{m.description}</p>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-3">
                <p className="tamil-text text-gray-900 text-base leading-relaxed whitespace-pre-line mb-1">{m.example}</p>
                <p className="text-xs text-amber-700">{m.exampleSource}</p>
              </div>
              <ul className="space-y-1">
                {m.rules.map((r) => <li key={r} className="text-xs text-gray-500 flex gap-2"><span className="text-gray-300">·</span>{r}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mb-8 text-sm text-rose-800">
        <strong>Tolkāppiyam (தொல்காப்பியம்):</strong> The 3rd-2nd century BCE grammatical treatise that codified all these rules. Its third section, <em>Poruḷatikāram</em>, describes the tiṇai system in full. It remains the oldest surviving comprehensive grammar of any classical language.
      </div>

      <button
        onClick={() => markTopicComplete("exp-prosody")}
        className={`px-6 py-3 rounded-xl font-semibold text-sm transition-colors ${done ? "bg-green-100 text-green-700 border border-green-200" : "bg-rose-600 text-white hover:bg-rose-700"}`}
      >
        {done ? "✓ Completed" : "Mark as Complete"}
      </button>

      <div className="flex gap-3 mt-6">
        <Link href="/learn/expert/silappatikaram" className="px-4 py-2 border border-rose-200 text-rose-700 rounded-xl text-sm font-medium hover:bg-rose-50 transition-colors">← Silappatikaram</Link>
        <Link href="/learn/expert/translation" className="px-4 py-2 bg-rose-600 text-white rounded-xl text-sm font-medium hover:bg-rose-700 transition-colors">Next: Translation Practice →</Link>
      </div>
    </div>
  );
}
