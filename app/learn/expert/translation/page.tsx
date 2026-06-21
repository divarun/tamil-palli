"use client";

import { useState } from "react";
import { useProgress } from "@/hooks/useProgress";
import { AudioButton } from "@/components/AudioButton";
import { useTransliteration } from "@/contexts/TransliterationContext";
import Link from "next/link";

const tamilToEnglish = [
  {
    tamil: "யாதும் ஊரே யாவரும் கேளிர்; தீதும் நன்றும் பிறர்தர வாரா.",
    romanization: "yātum ūrē yāvarum kēḷir; tītum naṉṟum piṟartara vārā.",
    source: "Puṟanāṉūṟu 192 — Kaniyan Pungundranaar (c. 1st century CE)",
    modelTranslation: "Every town is my own; every person is my kin. Neither good nor ill comes to us sent by others (— we bring it upon ourselves).",
    notes: "யாதும் = whatever/whichever. ஊரே = (is) my town (ஊர் + ஏ emphatic). யாவரும் = every person. கேளிர் = kin, relatives. பிறர்தர = sent/given by others. வாரா = will not come. A universalist vision of human brotherhood — one of the most celebrated Sangam lines.",
  },
  {
    tamil: "அன்னையும் பிதாவும் முன்னறி தெய்வம்.",
    romanization: "aṉṉaiyum pitāvum muṉṉaṟi teyvam.",
    source: "Tamil proverb",
    modelTranslation: "Mother and father are the gods you first come to know.",
    notes: "அன்னை = mother. பிதா = father. முன்னறி = first known/experienced. தெய்வம் = god/divine. A compact sentence that packs familial devotion into six words. Note how Tamil needs no verb — the predicate nominal does the work.",
  },
  {
    tamil: "கற்க கசடற கற்பவை கற்றபின் நிற்க அதற்குத் தக.",
    romanization: "kaṟka kacaṭaṟa kaṟpavai kaṟṟapiṉ niṟka ataṟkut taka.",
    source: "Thirukkural 391",
    modelTranslation: "Learn thoroughly what is worth learning; having learned, stand firm in accord with what you have learned.",
    notes: "கற்க = learn (imperative). கசடற = without flaw/blemish. கற்பவை = things worth learning. கற்றபின் = after having learned. நிற்க = stand/abide (imperative). அதற்குத் தக = according to it, suitably.",
  },
];

const englishToTamil = [
  {
    english: "The child who reads every day will grow wise.",
    hints: ["'every day' = தினமும்", "'reads' = படிக்கும் (future tense, general statement)", "'will grow' = ஆவான்/ஆவாள் (becomes)", "'wise' = அறிவாளி"],
    modelTranslation: "தினமும் படிக்கும் குழந்தை அறிவாளி ஆவான்.",
    notes: "Note the Tamil SOV order: 'தினமும் படிக்கும் குழந்தை' (the child who reads daily) is a participial noun phrase as subject. Tamil builds relative clauses differently — the verb becomes an adjectival participle placed before the noun it modifies.",
  },
  {
    english: "She gave the book to her younger brother.",
    hints: ["'gave' = கொடுத்தாள் (past, feminine)", "'book' = புத்தகம்", "'to her younger brother' = தன் தம்பிக்கு (dative case: -க்கு)", "'younger brother' = தம்பி"],
    modelTranslation: "அவள் தன் தம்பிக்கு புத்தகம் கொடுத்தாள்.",
    notes: "Dative case (கொடை வேற்றுமை) suffix -க்கு marks the recipient. 'தன்' is the reflexive pronoun (her own) — use it when subject and possessor are the same person.",
  },
  {
    english: "Although it rained heavily, the farmers worked in the fields.",
    hints: ["'although' — use concessive participle: மழை பெய்தாலும் (even if rain fell)", "'farmers' = விவசாயிகள்", "'worked' = வேலை செய்தார்கள்", "'in the fields' = வயல்களில் (locative: -இல்)"],
    modelTranslation: "மழை அதிகமாக பெய்தாலும், விவசாயிகள் வயல்களில் வேலை செய்தார்கள்.",
    notes: "-ஆலும் is the concessive suffix (even if, although). It attaches to the conditional stem. This construction is very common in formal Tamil and worth mastering.",
  },
];

export default function TranslationPage() {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("exp-translation");
  const { showRomanization } = useTransliteration();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/curriculum" className="text-sm text-gray-500 hover:text-orange-600">← Curriculum</Link>
        <span className="ml-auto text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded-full font-medium">Expert</span>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-1">Translation Practice</h1>
      <p className="text-xl tamil-text text-gray-500 mb-8">மொழிபெயர்ப்பு பயிற்சி</p>

      {/* Tamil → English */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Tamil → English</h2>
        <p className="text-sm text-gray-500 mb-5">Read each passage, attempt your own translation, then reveal the model answer and notes.</p>
        <div className="space-y-6">
          {tamilToEnglish.map((item, i) => (
            <div key={i} className="bg-white border border-rose-100 rounded-2xl p-6">
              <p className="text-xs text-rose-600 mb-2">{item.source}</p>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-4">
                <p className="tamil-text text-gray-900 text-lg leading-relaxed mb-1">{item.tamil}</p>
                <div className="flex items-center gap-2 mt-2">
                  <AudioButton text={item.tamil} />
                  {showRomanization && <p className="text-xs text-gray-400 italic">{item.romanization}</p>}
                </div>
              </div>
              {revealed[i] ? (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Model Translation:</p>
                  <p className="text-gray-800 mb-4 italic">"{item.modelTranslation}"</p>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Notes:</p>
                  <p className="text-sm text-gray-600">{item.notes}</p>
                </div>
              ) : (
                <button onClick={() => setRevealed((r) => ({ ...r, [i]: true }))} className="text-sm text-rose-600 border border-rose-200 px-4 py-2 rounded-xl hover:bg-rose-50">
                  Reveal translation & notes
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* English → Tamil */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">English → Tamil</h2>
        <p className="text-sm text-gray-500 mb-5">Translate each English sentence into Tamil. Use the hints if needed, then compare with the model.</p>
        <div className="space-y-6">
          {englishToTamil.map((item, i) => {
            const key = i + 100;
            return (
              <div key={i} className="bg-white border border-rose-100 rounded-2xl p-6">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
                  <p className="text-gray-900 text-lg font-medium">{item.english}</p>
                </div>
                <details className="mb-4">
                  <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">Show hints</summary>
                  <ul className="mt-2 space-y-1">
                    {item.hints.map((h) => <li key={h} className="text-sm text-gray-600 flex gap-2"><span className="text-gray-300">·</span><span className="tamil-text">{h}</span></li>)}
                  </ul>
                </details>
                {revealed[key] ? (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Model Translation:</p>
                    <p className="tamil-text text-gray-900 text-lg mb-3">{item.modelTranslation}</p>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Notes:</p>
                    <p className="text-sm text-gray-600">{item.notes}</p>
                  </div>
                ) : (
                  <button onClick={() => setRevealed((r) => ({ ...r, [key]: true }))} className="text-sm text-rose-600 border border-rose-200 px-4 py-2 rounded-xl hover:bg-rose-50">
                    Reveal model translation
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <button
        onClick={() => markTopicComplete("exp-translation")}
        className={`px-6 py-3 rounded-xl font-semibold text-sm transition-colors ${done ? "bg-green-100 text-green-700 border border-green-200" : "bg-rose-600 text-white hover:bg-rose-700"}`}
      >
        {done ? "✓ Completed" : "Mark as Complete"}
      </button>

      <div className="flex gap-3 mt-6">
        <Link href="/learn/expert/prosody" className="px-4 py-2 border border-rose-200 text-rose-700 rounded-xl text-sm font-medium hover:bg-rose-50 transition-colors">← Poetry & Metres</Link>
        <Link href="/learn/expert/dialects" className="px-4 py-2 bg-rose-600 text-white rounded-xl text-sm font-medium hover:bg-rose-700 transition-colors">Next: Tamil Dialects →</Link>
      </div>
    </div>
  );
}
