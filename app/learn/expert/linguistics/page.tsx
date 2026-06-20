"use client";

import { useProgress } from "@/hooks/useProgress";
import { AudioButton } from "@/components/AudioButton";
import Link from "next/link";

const dravidianFamily = [
  { language: "தமிழ் (Tamil)", region: "Tamil Nadu, Sri Lanka, Singapore, Malaysia, diaspora", speakers: "~80 million", notes: "Oldest attested Dravidian language; official language of Tamil Nadu & Sri Lanka" },
  { language: "Malayalam", region: "Kerala, Lakshadweep", speakers: "~38 million", notes: "Closest relative of Tamil; diverged roughly 9th century CE" },
  { language: "Kannada", region: "Karnataka", speakers: "~44 million", notes: "Shares many Dravidian roots; significant Sanskrit influence" },
  { language: "Telugu", region: "Andhra Pradesh, Telangana", speakers: "~82 million", notes: "Largest Dravidian language by speakers; diverged early from proto-Dravidian" },
];

const scriptEvolution = [
  { period: "c. 3rd–1st century BCE", name: "Tamili / Brahmi-Tamil", desc: "Tamil written with a modified Brahmi script. Found in cave inscriptions at Madurai. Called 'Tamili' by scholars." },
  { period: "c. 1st–6th century CE", name: "Early Tamil Script", desc: "Distinct Tamil characters emerge. Vatteluttu ('round script') develops alongside." },
  { period: "7th–11th century CE", name: "Medieval Tamil Script", desc: "Characters regularise into recognisable forms. Pallava and Chola inscriptions show standardisation." },
  { period: "11th–15th century CE", name: "Later Medieval Script", desc: "Print-era precursors; regional variations. Grantha influence for Sanskrit loanwords." },
  { period: "19th century onwards", name: "Modern Tamil Script (Unicode)", desc: "Standardisation for printing and digital use. Unicode block U+0B80–U+0BFF. 18 grantha letters optionally included." },
];

const tolkappiyamFacts = [
  "Written by Tolkāppiyar, said to be a student of the legendary sage Agastya",
  "Divided into 3 books: Ezhuttutikāram (phonology), Collatikāram (morphology), Poruḷatikāram (poetics/semantics)",
  "Describes the Tamil phonological system — the 247-letter count (12 vowels + 18 consonants + 1 aytham + 216 combined) is a later pedagogical convention; Tolkāppiyam analyses sounds and their rules, not a fixed grid",
  "Codifies the tiṇai (landscape-emotion) system of Sangam poetry",
  "One of the oldest surviving grammatical texts in any language",
  "Tamil grammar tradition (இலக்கண மரபு) follows Tolkāppiyam as the foundational authority",
];

export default function LinguisticsPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("exp-linguistics");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/curriculum" className="text-sm text-gray-500 hover:text-orange-600">← Curriculum</Link>
        <span className="ml-auto text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded-full font-medium">Expert</span>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-1">Tamil Linguistics & Script History</h1>
      <p className="text-xl tamil-text text-gray-500 mb-8">தமிழ் மொழியியல் வரலாறு</p>

      {/* Dravidian Family */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">The Dravidian Language Family</h2>
        <p className="text-sm text-gray-500 mb-4">Tamil belongs to the Dravidian family — a group of ~86 languages spoken primarily in South Asia. Unlike the Indo-European family (which includes Hindi, Sanskrit, English, Greek, Latin), Dravidian languages are structurally SOV and share unique phonological features like retroflex consonants and absence of initial consonant clusters.</p>
        <div className="space-y-3">
          {dravidianFamily.map((lang) => (
            <div key={lang.language} className="bg-white border border-rose-100 rounded-xl p-4">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="tamil-text font-bold text-gray-900">{lang.language}</span>
                <span className="text-xs text-rose-600 shrink-0">{lang.speakers} speakers</span>
              </div>
              <p className="text-xs text-gray-500 mb-1">{lang.region}</p>
              <p className="text-sm text-gray-600">{lang.notes}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">Proto-Dravidian (the common ancestor) is estimated to have been spoken ~4,500–3,500 BCE, likely in the Indus Valley region.</p>
      </section>

      {/* Script evolution */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Evolution of the Tamil Script</h2>
        <div className="space-y-3">
          {scriptEvolution.map((era) => (
            <div key={era.period} className="flex gap-4">
              <div className="w-36 shrink-0 text-xs text-rose-600 font-medium pt-3">{era.period}</div>
              <div className="flex-1 bg-white border border-rose-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1">{era.name}</p>
                <p className="text-sm text-gray-600">{era.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tolkāppiyam */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">Tolkāppiyam <span className="tamil-text text-gray-500 font-normal text-lg">(தொல்காப்பியம்)</span></h2>
        <p className="text-sm text-gray-500 mb-4">The oldest surviving grammar of Tamil (and one of the oldest in the world), dated approximately 3rd–2nd century BCE. It defines both the language and the literary tradition.</p>
        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
          <ul className="space-y-2">
            {tolkappiyamFacts.map((f) => (
              <li key={f} className="text-sm text-gray-700 flex gap-2">
                <span className="text-rose-400 mt-0.5">·</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Key linguistic features */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Linguistic Features of Tamil</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { title: "Agglutinative", desc: "Tamil builds words by stacking suffixes onto roots. One Tamil word can express what English says in a whole phrase. Example: போகமாட்டேன் = 'I will not go'." },
            { title: "SOV Word Order", desc: "Subject–Object–Verb is the canonical order. Modifiers always precede what they modify. This is the opposite of English SVO order." },
            { title: "Retroflex Consonants", desc: "Tamil has 3 sets of coronal consonants: dental (ந, ன), alveolar (ந n), and retroflex (ண, ள, ழ). These are produced with the tongue curled back — a distinctively Dravidian feature." },
            { title: "No Grammatical Gender in Script", desc: "Tamil grammatical gender (ஆண்/பெண்/அஃறிணை) is shown by verb suffixes, not noun articles. Nouns themselves are gender-neutral in form." },
            { title: "Classical & Modern Registers", desc: "Tamil's diglossia (formal vs. colloquial) is so pronounced that grammars, books, news, and legal documents use a different register from everyday speech." },
            { title: "Oldest Classical Language", desc: "Tamil has classical language status in India (2004) with an unbroken literary tradition of over 2,000 years — longer than any other living language except Sanskrit." },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-rose-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <button
        onClick={() => markTopicComplete("exp-linguistics")}
        className={`px-6 py-3 rounded-xl font-semibold text-sm transition-colors ${done ? "bg-green-100 text-green-700 border border-green-200" : "bg-rose-600 text-white hover:bg-rose-700"}`}
      >
        {done ? "✓ Completed" : "Mark as Complete"}
      </button>

      <div className="flex gap-3 mt-6">
        <Link href="/learn/expert/dialects" className="px-4 py-2 border border-rose-200 text-rose-700 rounded-xl text-sm font-medium hover:bg-rose-50 transition-colors">← Tamil Dialects</Link>
        <Link href="/learn/expert/contemporary" className="px-4 py-2 bg-rose-600 text-white rounded-xl text-sm font-medium hover:bg-rose-700 transition-colors">Next: News & Media →</Link>
      </div>
    </div>
  );
}
