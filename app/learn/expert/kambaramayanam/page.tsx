"use client";

import { useProgress } from "@/hooks/useProgress";
import { AudioButton } from "@/components/AudioButton";
import { useTransliteration } from "@/contexts/TransliterationContext";
import Link from "next/link";

const overview = {
  author: "கம்பர் (Kambar)",
  period: "c. 12th century CE",
  language: "Medieval Tamil (இடைக்கால தமிழ்)",
  genre: "Epic poem (மகாகாவியம்)",
  title: "கம்பராமாயணம் (Kambarāmāyaṇam)",
  alternateTitle: "இராமாவதாரம் (Irāmāvatāram — The Avatar of Rama)",
  books: [
    "பால காண்டம் (Bāla Kāṇṭam) — Birth & Youth of Rama",
    "அயோத்திய காண்டம் (Ayōttiya Kāṇṭam) — Exile from Ayodhya",
    "ஆரண்ய காண்டம் (Āraṇya Kāṇṭam) — Forest & Sita's Abduction",
    "கிட்கிந்தா காண்டம் (Kiṭkinttā Kāṇṭam) — Alliance with Sugriva",
    "சுந்தர காண்டம் (Suntara Kāṇṭam) — Hanuman's Mission to Lanka",
    "யுத்த காண்டம் (Yuttta Kāṇṭam) — The War & Ravana's Defeat",
  ],
};

const characters = [
  { name: "இராமன் (Irāmaṉ)", role: "Hero — prince of Ayodhya, avatar of Vishnu (திருமால்)", note: "Kambar's Rama is the ideal of dharmic kingship (அறவேந்தன்). His grace, restraint, and devotion to righteousness define the epic's moral core." },
  { name: "சீதை (Cītai)", role: "Heroine — daughter of King Janaka, embodiment of chastity", note: "Found as an infant in a furrow of earth (sīta = furrow), she is the earth's daughter. Her purity remains unshaken through abduction and ordeal." },
  { name: "இலக்குவன் (Ilakkuvaṉ)", role: "Rama's younger brother — the ideal of brotherly loyalty", note: "He follows Rama into exile without hesitation. His devotion to his brother is Kambar's portrait of selfless love." },
  { name: "அனுமன் (Anumaṉ)", role: "Son of Vayu (the wind god) — Rama's devotee and messenger", note: "Hanuman leaps the ocean to find Sita in Lanka. His devotion (பக்தி) to Rama is the theological heart of the Sundara Kandam." },
  { name: "ராவணன் (Rāvaṇaṉ)", role: "King of Lanka — ten-headed antagonist and scholar-warrior", note: "Kambar's Ravana is more than a villain — he is a tragic figure of immense learning and power undone by desire. This nuance is Kambar's own addition beyond Valmiki." },
];

const selectedVerses = [
  {
    tamil: "உலகம் யாவையும் தாம் உள ஆக்கலும்\nநிலைபெறுத்தலும் நீக்கலும் நீங்கலா\nஅலகில் ஆற்றலான் தன்மை அறிவரே\nஉலகம் யாவையும் உண்ட உளத்தினான்",
    romanization: "ulakam yāvaiyum tām uḷa ākkhalum / nilaipeṟuttalum nīkkhalum nīṅkalā / alakil āṟṟalāṉ taṉmai aṟivare / ulakam yāvaiyum uṇṭa uḷattiṉāṉ",
    source: "Kambaramayanam — Payiram (Prologue invocation)",
    meaning: "Who can comprehend the nature of the One — limitless in power — who creates all worlds, sustains them, and dissolves them; the One whose heart contains the entire universe?",
  },
  {
    tamil: "வீழ்வது அஞ்சான் வெகுண்டு எழுவான் மிகை\nதாழ்வது அஞ்சான் தளர்வு இலன் தாளினான்\nஊழ்வினை உந்தி ஒழிக்கும் உரோமனை\nவாழ்வினை நாடி வணங்கினர் மாக்களே",
    romanization: "vīḻvatu añcāṉ vekuṇṭu eḻuvāṉ mikai / tāḻvatu añcāṉ taḷarvu ilaṉ tāḷiṉāṉ / ūḻviṉai unti oḻikkum urōmaṉai / vāḻviṉai nāṭi vaṇaṅkiṉar mākkkaḷē",
    source: "Kambaramayanam — Bala Kandam (Rama's nature)",
    meaning: "He who fears not defeat yet rises in righteous anger; he who fears not humility yet never falters — those who seek a life of true living bow to Rama, who destroys fate itself.",
  },
  {
    tamil: "கடல் கண்டான் கரை கண்டான் கனை கடல் மேல்\nவடகுமேரு வான் உயர்ந்த வரை கண்டான்\nஇடர் கண்டான் இதயம் அன்னாள் இருக்கை கண்டான்\nதிடம் கண்டான் — அனுமன் திருவருள் கண்டான்",
    romanization: "kaṭal kaṇṭāṉ karai kaṇṭāṉ kaṉai kaṭal mēl / vaṭakumēru vāṉ uyarnta varai kaṇṭāṉ / iṭar kaṇṭāṉ itayam aṉṉāḷ irukkkai kaṇṭāṉ / tiṭam kaṇṭāṉ — anumaṉ tiruvaruḷ kaṇṭāṉ",
    source: "Kambaramayanam — Sundara Kandam (Hanuman finds Sita)",
    meaning: "He saw the ocean; he saw the far shore across the roaring sea; he saw the mountain soaring sky-high to the north; he saw grief — and the place where she of his heart abided; he saw resolve — Hanuman saw divine grace.",
  },
];

const themes = [
  { title: "அறம் (Aram) — Dharma & Righteousness", desc: "Rama's every action is measured against dharma. His exile, his refusal of shortcuts, and his treatment of enemies all enact the principle that righteous conduct is its own reward." },
  { title: "பக்தி (Pakti) — Devotion", desc: "Hanuman's unconditional devotion to Rama makes the Sundara Kandam the theological heart of the epic. Kambar elevates bhakti as a path available even to the humble." },
  { title: "கற்பு (Karpu) — Chastity & Inner Purity", desc: "Sita's purity is not merely physical — it is spiritual. Even in Lanka, surrounded by Ravana's world, she remains uncorrupted. Her fire-ordeal (அக்கினி பரீட்சை) is the epic's climactic proof." },
  { title: "வீரம் vs. அன்பு — Heroism vs. Love", desc: "Kambar balances the martial epic (வீர காவியம்) tradition with the love poetry (அகம்) tradition of classical Tamil. Rama is both warrior and lover, and the tension between those roles gives the poem its depth." },
];

export default function KambaramayanamPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("exp-kambaramayanam");
  const { showRomanization } = useTransliteration();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/curriculum" className="text-sm text-gray-500 hover:text-orange-600">← Curriculum</Link>
        <span className="ml-auto text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded-full font-medium">Expert</span>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-1">Kambaramayanam</h1>
      <p className="text-xl tamil-text text-gray-500 mb-6">கம்பராமாயணம்</p>

      {/* Overview */}
      <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 mb-8">
        <h2 className="font-semibold text-gray-800 mb-3">Overview</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            ["Title", overview.title],
            ["Also known as", overview.alternateTitle],
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
          <p className="text-xs text-gray-500 mb-1">Six Books (காண்டம்கள்):</p>
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
        <strong>Why it matters:</strong> Kambaramayanam is considered the pinnacle of medieval Tamil literature. Unlike Valmiki&apos;s Sanskrit original, Kambar&apos;s retelling is deeply Tamil — it draws on Sangam poetic conventions, incorporates Tamil landscape imagery (திணை), and gives Ravana a tragic dignity absent in the original. With ~12,000 verses (பாக்கள்), it is the longest classical Tamil poem.
      </div>

      <button
        onClick={() => markTopicComplete("exp-kambaramayanam")}
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
