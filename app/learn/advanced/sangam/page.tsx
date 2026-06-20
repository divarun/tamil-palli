"use client";

import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

const sangamFacts = [
  { title: "What is Sangam Literature?", content: "Sangam literature (சங்க இலக்கியம்) refers to classical Tamil literature composed between approximately 300 BCE and 300 CE. It is among the oldest extant literature in the world, compiled in three legendary assemblies (sangam) of poets." },
  { title: "The Two Themes", content: "Sangam poems are divided into Akam (அகம் — interior/love) and Puram (புறம் — exterior/war/society). Akam poems use a metaphorical landscape system (tinai) to represent different aspects of love." },
  { title: "The Five Tinai Landscapes", content: "Kurinji (குறிஞ்சி — mountains, union), Mullai (முல்லை — forests, patience), Marutam (மருதம் — farmland, infidelity), Neytal (நெய்தல் — coastal, separation), Palai (பாலை — wasteland, abandonment). Each landscape symbolizes a mood in love poetry." },
  { title: "Major Anthologies", content: "The Eight Anthologies (எட்டுத்தொகை) include Akananuru, Purananuru, Kalittokai, and others. The Ten Idylls (பத்துப்பாட்டு) are longer works. Tolkappiyam (தொல்காப்பியம்) is the oldest surviving Tamil grammar text, also from this period." },
  { title: "Legacy", content: "Sangam literature influenced later Tamil poetry, music, and philosophy. The Thirukkural, though composed slightly after the Sangam period, shares the classical tradition. Today, Sangam texts are studied in Tamil Nadu schools and universities worldwide." },
];

const sampleVerse = {
  title: "From Purananuru — Poem 192",
  author: "Kaniyan Pungundranar",
  tamil: "யாதும் ஊரே யாவரும் கேளிர்\nதீதும் நன்றும் பிறர்தர வாரா\nநோதலும் தணிதலும் அவற்றோரன்ன\nசாதலும் புதுவது அன்றே",
  romanization: "Yaathum oore yaavarum kelir\nTheetum nandrum pirar thara vaara\nNodhalum thanidalum avarro ranna\nSadhalum pudhuvathu andree",
  meaning: "Every place is our hometown; everyone is our kin. Good and evil do not come from others. Pain and relief are like those. Even death is not new.",
  significance: "One of the most famous verses in Tamil literature, expressing a universal humanist philosophy — all people are family, all places are home.",
};

export default function SangamPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("adv-sangam");
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link><span>›</span><span>Advanced</span><span>›</span><span className="text-gray-800">Sangam Literature</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Introduction to Sangam Literature</h1>
          <p className="tamil-text text-orange-600 text-lg">சங்க இலக்கியம்</p>
        </div>
        <button onClick={() => markTopicComplete("adv-sangam")} className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}>
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <div className="space-y-4 mb-8">
        {sangamFacts.map((fact) => (
          <div key={fact.title} className="bg-white border border-orange-100 rounded-xl p-5">
            <h2 className="font-semibold text-gray-900 mb-2">{fact.title}</h2>
            <p className="text-sm text-gray-600">{fact.content}</p>
          </div>
        ))}
      </div>

      <h2 className="font-semibold text-gray-800 mb-3">Akam (அகம்) — Love Poetry in Action</h2>
      <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 mb-6">
        <p className="text-xs text-gray-500 mb-1">From Kuṟuntokai — Poem 40 (Kurinji tiṇai — mountain / union in love)</p>
        <p className="tamil-text text-gray-900 text-base leading-relaxed mb-2 whitespace-pre-line">{"யாயும் ஞாயும் யாரா கியரோ\nஏதிலர் என்னேம் அலரே\nதாமரைத் தண்தளிர் போல\nஒருங்கே வாழ்தும் என்றெம் நகரே"}</p>
        <p className="text-xs text-orange-600 italic mb-2">{"Yaayum Nyaayum yaara kiyaro / Edilar ennem alare / Thamarai thaNthaLir poola / Orunge vaazhdum endrem nagare"}</p>
        <p className="text-sm text-gray-700 mb-3"><strong>Meaning:</strong> "What kin were our mothers to each other? What kin were our fathers? Yet — like the cool petals of a lotus — we have come to live as one." (A woman speaks of how two strangers became inseparable, as if fated.)</p>
        <div className="bg-white/70 rounded-lg p-3 text-xs text-gray-600">
          <strong>Tiṇai note:</strong> The lotus (தாமரை) and mountain imagery place this in the Kuriñci (குறிஞ்சி) landscape — mountains, associated with <em>union</em> in love. The poem never mentions love directly; the landscape does the work. This is the core principle of Akam poetry.
        </div>
      </div>

      <h2 className="font-semibold text-gray-800 mb-3">Puram (புறம்) — A Verse to Know</h2>
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
        <p className="text-xs text-gray-500 mb-1">{sampleVerse.title} — {sampleVerse.author}</p>
        <p className="tamil-text text-2xl font-bold text-gray-900 leading-relaxed mb-3 whitespace-pre-line">{sampleVerse.tamil}</p>
        <p className="text-sm text-orange-600 italic mb-3 whitespace-pre-line">{sampleVerse.romanization}</p>
        <p className="text-sm text-gray-700 mb-2"><strong>Meaning:</strong> {sampleVerse.meaning}</p>
        <p className="text-sm text-gray-500 italic">{sampleVerse.significance}</p>
      </div>

      <div className="flex gap-3">
        <Link href="/tests/advanced" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">Take Advanced Assessment →</Link>
        <Link href="/progress" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">View Progress →</Link>
      </div>
    </div>
  );
}
