"use client";

import { useState } from "react";
import { useProgress } from "@/hooks/useProgress";
import { AudioButton } from "@/components/AudioButton";
import Link from "next/link";

const newsPassage = {
  headline: "சென்னையில் புதிய மழை நீர் சேகரிப்பு திட்டம்",
  headlineRom: "ceṉṉaiyil putiya maḻai nīr cēkarippu tiṭṭam",
  headlineMeaning: "New Rainwater Harvesting Scheme in Chennai",
  body: `தமிழ்நாடு அரசு சென்னை மாநகரில் புதிய மழை நீர் சேகரிப்பு திட்டத்தை அறிவித்துள்ளது. இந்த திட்டத்தின் மூலம் கோடை காலத்தில் நீர் தட்டுப்பாடு குறையும் என்று அதிகாரிகள் தெரிவித்தனர்.

வரும் ஆண்டு ஜூன் மாதத்திற்குள் நகரின் முக்கிய பகுதிகளில் நூறு புதிய நீர் சேகரிப்பு கட்டமைப்புகள் அமைக்கப்படும் என்று திட்ட அறிக்கை கூறுகிறது.`,
  translation: `The Tamil Nadu Government has announced a new rainwater harvesting scheme in Chennai city. Officials stated that through this scheme, water scarcity during summer will be reduced.

The project report states that within the next year, by June, one hundred new water harvesting structures will be set up in key areas of the city.`,
  vocabulary: [
    { tamil: "அரசு", rom: "arasu", meaning: "Government" },
    { tamil: "அறிவித்துள்ளது", rom: "aṟivittullaṭu", meaning: "has announced" },
    { tamil: "நீர் தட்டுப்பாடு", rom: "nīr tattuppātu", meaning: "water scarcity" },
    { tamil: "அதிகாரிகள்", rom: "atikārikaḷ", meaning: "officials" },
    { tamil: "கட்டமைப்பு", rom: "kattamaippu", meaning: "structure/infrastructure" },
    { tamil: "திட்ட அறிக்கை", rom: "tiṭṭa aṟikkai", meaning: "project report" },
  ],
};

const mediaPhrases = [
  { context: "News headline verbs", phrases: [
    { tamil: "அறிவித்தது", meaning: "announced" },
    { tamil: "தெரிவித்தனர்", meaning: "informed / stated (they)" },
    { tamil: "கூறினார்", meaning: "said (he/she, formal)" },
    { tamil: "நடைபெற்றது", meaning: "took place / occurred" },
    { tamil: "கைது செய்யப்பட்டது", meaning: "was arrested (passive)" },
  ]},
  { context: "Formal written Tamil patterns", phrases: [
    { tamil: "...என்று தெரிவிக்கப்பட்டது", meaning: "It has been reported that..." },
    { tamil: "...என்பது குறிப்பிடத்தக்கது", meaning: "It is worth noting that..." },
    { tamil: "...உள்ளது என்று கூறப்படுகிறது", meaning: "It is said that... exists" },
    { tamil: "...நடவடிக்கை எடுக்கப்படும்", meaning: "Action will be taken regarding..." },
  ]},
  { context: "Social media / informal Tamil", phrases: [
    { tamil: "என்ன ஆச்சு?", meaning: "What happened?" },
    { tamil: "அடிப்படையிலேயே தப்பு", meaning: "Wrong at the very root / fundamentally wrong" },
    { tamil: "சூப்பர்!", meaning: "Super! / Brilliant!" },
    { tamil: "வேற level!", meaning: "Another level! (colloquial hybrid)" },
  ]},
];

export default function ContemporaryPage() {
  const [revealed, setRevealed] = useState(false);
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("exp-contemporary");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/curriculum" className="text-sm text-gray-500 hover:text-orange-600">← Curriculum</Link>
        <span className="ml-auto text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded-full font-medium">Expert</span>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-1">Contemporary Tamil: News & Media</h1>
      <p className="text-xl tamil-text text-gray-500 mb-8">நவீன தமிழ்: செய்தி & ஊடகம்</p>

      {/* News reading */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Reading a Tamil News Article</h2>
        <p className="text-sm text-gray-500 mb-4">Tamil news uses formal written Tamil (செந்தமிழ்). It is more formal than spoken Tamil, but with modern vocabulary for current affairs, technology, and politics.</p>

        <div className="bg-white border border-rose-100 rounded-2xl p-6 mb-4">
          <div className="flex items-start gap-2 mb-3">
            <div className="flex-1">
              <h3 className="tamil-text font-bold text-gray-900 text-lg mb-0.5">{newsPassage.headline}</h3>
              <p className="text-xs text-gray-400 italic">{newsPassage.headlineRom}</p>
            </div>
            <AudioButton text={newsPassage.headline} />
          </div>
          <p className="text-sm text-rose-700 mb-4">Translation: <em>{newsPassage.headlineMeaning}</em></p>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 mb-4">
            <p className="tamil-text text-gray-800 text-sm leading-relaxed whitespace-pre-line">{newsPassage.body}</p>
          </div>

          {revealed ? (
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 text-sm">English Translation:</h4>
              <p className="text-sm text-gray-600 mb-4 whitespace-pre-line">{newsPassage.translation}</p>
              <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Vocabulary:</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {newsPassage.vocabulary.map((v) => (
                  <div key={v.tamil} className="flex items-center gap-2 text-sm">
                    <span className="tamil-text font-medium text-gray-900">{v.tamil}</span>
                    <AudioButton text={v.tamil} size="sm" />
                    <span className="text-gray-400">—</span>
                    <span className="text-gray-600">{v.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <button onClick={() => setRevealed(true)} className="text-sm text-rose-600 border border-rose-200 px-4 py-2 rounded-xl hover:bg-rose-50">
              Reveal translation & vocabulary
            </button>
          )}
        </div>
      </section>

      {/* Media phrases */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Tamil in Different Media Contexts</h2>
        <div className="space-y-6">
          {mediaPhrases.map((section) => (
            <div key={section.context}>
              <h3 className="text-sm font-semibold text-gray-700 mb-3 bg-rose-50 px-3 py-1.5 rounded-lg inline-block">{section.context}</h3>
              <div className="space-y-2">
                {section.phrases.map((p) => (
                  <div key={p.tamil} className="flex items-center gap-3 bg-white border border-rose-50 rounded-xl px-4 py-2.5">
                    <span className="tamil-text text-gray-900 flex-1">{p.tamil}</span>
                    <AudioButton text={p.tamil} size="sm" />
                    <span className="text-sm text-gray-500">{p.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mb-8 text-sm text-rose-800">
        <strong>Practice tip:</strong> Follow a Tamil news source like Dinamalar (தினமலர்), Dinamani (தினமணி), or BBC Tamil for 10 minutes daily. Even if you can't read everything, pick out familiar words and note the sentence patterns — Tamil news has very predictable phrasing.
      </div>

      <button
        onClick={() => markTopicComplete("exp-contemporary")}
        className={`px-6 py-3 rounded-xl font-semibold text-sm transition-colors ${done ? "bg-green-100 text-green-700 border border-green-200" : "bg-rose-600 text-white hover:bg-rose-700"}`}
      >
        {done ? "✓ Completed" : "Mark as Complete"}
      </button>

      <div className="flex gap-3 mt-6">
        <Link href="/learn/expert/linguistics" className="px-4 py-2 border border-rose-200 text-rose-700 rounded-xl text-sm font-medium hover:bg-rose-50 transition-colors">← Script History</Link>
        <Link href="/learn/expert/creative-writing" className="px-4 py-2 bg-rose-600 text-white rounded-xl text-sm font-medium hover:bg-rose-700 transition-colors">Next: Creative Writing →</Link>
      </div>
    </div>
  );
}
