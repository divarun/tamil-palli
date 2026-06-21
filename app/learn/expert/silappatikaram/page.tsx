"use client";

import { useProgress } from "@/hooks/useProgress";
import { AudioButton } from "@/components/AudioButton";
import { useTransliteration } from "@/contexts/TransliterationContext";
import Link from "next/link";

const overview = {
  author: "இளங்கோ அடிகள் (Iḷaṅkō Aṭikaḷ)",
  period: "c. 2nd–9th century CE (debated)",
  language: "Classical Tamil (செந்தமிழ்)",
  genre: "Epic poem (காப்பியம்)",
  title: "சிலப்பதிகாரம் (Cilappatikāram)",
  meaning: "The Epic of the Anklet",
  books: ["மதுரைக் காண்டம் (Madurai Kandam)", "புகார்க் காண்டம் (Puhār Kandam)", "வஞ்சிக் காண்டம் (Vañci Kandam)"],
};

const characters = [
  { name: "கண்ணகி (Kaṇṇaki)", role: "The heroine — emblem of wifely virtue (கற்பு)", note: "Her fierce justice against the Pandya king makes her a goddess of chastity across South India." },
  { name: "கோவலன் (Kōvalaṉ)", role: "The hero — a merchant who abandons Kannagi for a dancer", note: "His unjust execution becomes the catalyst for the epic's climax." },
  { name: "மாதவி (Mātavi)", role: "Court dancer (தேவரடியாள்)", note: "Represents the world of pleasure and the arts; eventually turns to asceticism." },
];

const selectedVerses = [
  {
    tamil: "வான வர்க்கும் மண்ணவர்க்கும் நான்முகனுக்கும் நாயகனாம்\nசேவகன் றன்மை யுரைப்பது என்னா நெஞ்சே?",
    romanization: "vāṉa varkum maṇṇavarkum nāṉmukaṉukum nāyakaṉām\ncēvakaṉ taṉmai yuraippatu eṉṉā neñcē?",
    source: "Cilappatikāram — Opening invocation",
    meaning: "Oh my heart, how can I describe the nature of the Lord who is master of the gods, humans, and Brahma?",
  },
  {
    tamil: "ஊழ்வினை உருத்து வந்து ஊட்டும்",
    romanization: "ūḻviṉai uruttu vantu ūṭṭum",
    source: "Madurai Kandam",
    meaning: "Fate (ūḻ) comes forcefully and makes one experience its fruits. (Used when Kovalan is unjustly executed — destiny is inescapable.)",
  },
  {
    tamil: "கொற்றவை நிலைகண்டாய் கோவலன் பொன்னடி போற்றி",
    romanization: "koṟṟavai nilai kaṇṭāy kōvalaṉ poṉṉaṭi pōṟṟi",
    source: "Vañci Kandam — Kannagi's apotheosis",
    meaning: "Behold the abode of the goddess of victory! (Saluting Kovalan's golden feet.)",
  },
];

const themes = [
  { title: "கற்பு (Karpu) — Chastity & Wifely Virtue", desc: "Kannagi's fidelity defines the entire narrative. Her chastity grants her supernatural power — her grief burns Madurai." },
  { title: "ஊழ் (Ūḻ) — Fate & Karma", desc: "The epic explores whether Kovalan's death was inevitable. Fate is presented as inescapable but justice ultimately prevails." },
  { title: "அரசியல் நீதி (Arasiyal Nīti) — Political Justice", desc: "The Pandya king's hasty judgement is a study in miscarried justice. A king who wrongs an innocent must face consequences." },
  { title: "கலை & நடனம் (Art & Dance)", desc: "Mādhavi's portrayal celebrates classical Tamil performing arts — Bharatanatyam's roots are described with remarkable detail." },
];

export default function SilappatikaaramPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("exp-silappatikaram");
  const { showRomanization } = useTransliteration();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/curriculum" className="text-sm text-gray-500 hover:text-orange-600">← Curriculum</Link>
        <span className="ml-auto text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded-full font-medium">Expert</span>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-1">Silappatikaram</h1>
      <p className="text-xl tamil-text text-gray-500 mb-6">சிலப்பதிகாரம்</p>

      {/* Overview */}
      <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 mb-8">
        <h2 className="font-semibold text-gray-800 mb-3">Overview</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            ["Title", overview.title],
            ["Meaning", overview.meaning],
            ["Author", overview.author],
            ["Period", overview.period],
            ["Language", overview.language],
            ["Genre", overview.genre],
          ].map(([label, val]) => (
            <div key={label}>
              <span className="text-gray-500 text-xs">{label}</span>
              <p className="font-medium text-gray-800 tamil-text">{val}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-xs text-gray-500 mb-1">Three Books (காண்டம்):</p>
          <ul className="space-y-0.5">
            {overview.books.map((b) => <li key={b} className="text-sm tamil-text text-gray-700">· {b}</li>)}
          </ul>
        </div>
      </div>

      {/* Characters */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Characters</h2>
        <div className="space-y-3">
          {characters.map((c) => (
            <div key={c.name} className="bg-white border border-rose-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="tamil-text font-bold text-gray-900">{c.name}</span>
                <AudioButton text={c.name.split(" ")[0]} />
              </div>
              <p className="text-sm font-medium text-rose-700 mb-1">{c.role}</p>
              <p className="text-sm text-gray-600">{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Verses */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Selected Verses</h2>
        <div className="space-y-4">
          {selectedVerses.map((v, i) => (
            <div key={i} className="bg-amber-50 border border-amber-100 rounded-xl p-5">
              <p className="text-xs text-amber-700 font-medium mb-2">{v.source}</p>
              <p className="tamil-text text-gray-900 text-base leading-relaxed mb-2 whitespace-pre-line">{v.tamil}</p>
              {showRomanization && <p className="text-sm text-gray-500 italic mb-2">{v.romanization}</p>}
              <p className="text-sm text-gray-700">{v.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Themes */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Major Themes</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {themes.map((t) => (
            <div key={t.title} className="bg-white border border-rose-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1 tamil-text text-sm">{t.title}</p>
              <p className="text-sm text-gray-600">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mb-8 text-sm text-rose-800">
        <strong>Why it matters:</strong> Silappatikaram is one of the Five Great Epics of Tamil literature (ஐம்பெருங்காப்பியங்கள்). It is the earliest surviving Tamil epic and one of the oldest complete epics in any language still read today. Kannagi remains a living deity across Tamil Nadu and Sri Lanka.
      </div>

      <button
        onClick={() => markTopicComplete("exp-silappatikaram")}
        className={`px-6 py-3 rounded-xl font-semibold text-sm transition-colors ${done ? "bg-green-100 text-green-700 border border-green-200" : "bg-rose-600 text-white hover:bg-rose-700"}`}
      >
        {done ? "✓ Completed" : "Mark as Complete"}
      </button>

      <div className="flex gap-3 mt-6">
        <Link href="/learn/expert/verb-mastery" className="px-4 py-2 border border-rose-200 text-rose-700 rounded-xl text-sm font-medium hover:bg-rose-50 transition-colors">← Verb Conjugation</Link>
        <Link href="/learn/expert/prosody" className="px-4 py-2 bg-rose-600 text-white rounded-xl text-sm font-medium hover:bg-rose-700 transition-colors">Next: Poetry & Metres →</Link>
      </div>
    </div>
  );
}
