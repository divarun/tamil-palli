"use client";

import { useState } from "react";
import { useProgress } from "@/hooks/useProgress";
import { AudioButton } from "@/components/AudioButton";
import Link from "next/link";

const writingTips = [
  { title: "Use participial chains", desc: "Instead of short choppy sentences, connect actions with verbal participles (வினையெச்சம்). E.g.: 'வந்து, பார்த்து, திரும்பினான்' — 'He came, looked, and returned.'" },
  { title: "Vary your sentence length", desc: "Mix short punchy sentences (ஒரு சொல் வாக்கியம்) with longer complex ones. Classical Tamil masters this — Thirukkural uses exactly 7 words per couplet." },
  { title: "Ground imagery in landscape", desc: "The Sangam tradition ties emotion to landscape (திணை). Describe weather, plants, or setting to show feeling, not tell it." },
  { title: "Use formal register for narration", desc: "Stories and essays use -கிறான்/-கிறாள् forms for present narration, and -தான்/-ள் for past. Avoid colloquial -றேன்/-றாள் in written Tamil." },
  { title: "Check case suffixes", desc: "The most common errors in written Tamil are wrong case suffixes. Before finalising, check every noun: who is the subject, object, recipient, location, possessor?" },
];

const sampleStory = {
  title: "ஒரு சிறு கதை: தாத்தாவின் கடிகாரம்",
  titleMeaning: "A Short Story: Grandfather's Watch",
  text: `என் தாத்தாவிடம் ஒரு பழைய தங்க கடிகாரம் இருந்தது. அந்த கடிகாரம் எண்பது ஆண்டுகளுக்கு முன்பு அவரது தந்தையால் வழங்கப்பட்டது.

ஒவ்வொரு ஞாயிற்றுக்கிழமையும், தாத்தா அந்த கடிகாரத்தை கவனமாக எடுத்து, மெல்லிய துணியால் துடைத்து, என் கையில் வைப்பார். "இதுவும் ஒரு நாள் உன்னுடையதாகும்" என்று சிரித்தபடி கூறுவார்.

இப்போது, அந்த கடிகாரம் என் மேசையில் இருக்கிறது. தாத்தா இல்லை. ஆனால் நேரம் நடக்கிறது.`,
  translation: `My grandfather had an old gold watch. That watch was given to him by his father eighty years ago.

Every Sunday, grandfather would carefully take out the watch, wipe it with a soft cloth, and place it in my hand. "One day this too will be yours," he would say with a smile.

Now, that watch sits on my table. Grandfather is gone. But time moves on.`,
  notes: [
    "Notice the use of past habitual -வார் (would do) to describe his Sunday routine",
    "The final sentence 'ஆனால் நேரம் நடக்கிறது' (But time moves on) uses present tense for ongoing reality — very deliberate",
    "கவனமாக = carefully (adverb formed by கவனம் + ஆக suffix)",
    "வழங்கப்பட்டது = was given (passive form: verb stem + ப்பட்டது)",
  ],
};

const prompts = [
  { tamil: "மழை நாளில் நடந்தது", english: "What happened on a rainy day", level: "Beginner story" },
  { tamil: "என் அம்மாவின் சமையல்", english: "My mother's cooking", level: "Personal essay" },
  { tamil: "தமிழ் கற்பதால் பெற்றது", english: "What I gained from learning Tamil", level: "Reflective essay" },
  { tamil: "ஒரு கடற்கரை மாலை", english: "A beach evening", level: "Descriptive writing" },
  { tamil: "நாளை உலகம்", english: "The world tomorrow", level: "Imaginative writing" },
];

export default function CreativeWritingPage() {
  const [storyRevealed, setStoryRevealed] = useState(false);
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("exp-creative-writing");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/curriculum" className="text-sm text-gray-500 hover:text-orange-600">← Curriculum</Link>
        <span className="ml-auto text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded-full font-medium">Expert</span>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-1">Creative & Advanced Writing</h1>
      <p className="text-xl tamil-text text-gray-500 mb-8">படைப்பு எழுத்து</p>

      {/* Writing tips */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Five Principles of Good Tamil Writing</h2>
        <div className="space-y-3">
          {writingTips.map((tip, i) => (
            <div key={tip.title} className="bg-white border border-rose-100 rounded-xl p-4 flex gap-4">
              <span className="text-2xl font-bold text-rose-200">{i + 1}</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">{tip.title}</p>
                <p className="text-sm text-gray-600">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sample story */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Sample Story</h2>
        <div className="bg-white border border-rose-100 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="tamil-text font-bold text-gray-900 text-lg">{sampleStory.title}</h3>
            <AudioButton text={sampleStory.title} />
          </div>
          <p className="text-sm text-gray-400 italic mb-4">{sampleStory.titleMeaning}</p>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-4">
            <p className="tamil-text text-gray-900 text-sm leading-relaxed whitespace-pre-line">{sampleStory.text}</p>
          </div>
          {storyRevealed ? (
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 text-sm">Translation:</h4>
              <p className="text-sm text-gray-600 whitespace-pre-line mb-4">{sampleStory.translation}</p>
              <h4 className="font-semibold text-gray-800 mb-2 text-sm">Craft Notes:</h4>
              <ul className="space-y-1">
                {sampleStory.notes.map((n) => <li key={n} className="text-sm text-gray-600 flex gap-2"><span className="text-rose-300">·</span>{n}</li>)}
              </ul>
            </div>
          ) : (
            <button onClick={() => setStoryRevealed(true)} className="text-sm text-rose-600 border border-rose-200 px-4 py-2 rounded-xl hover:bg-rose-50">
              Reveal translation & craft notes
            </button>
          )}
        </div>
      </section>

      {/* Writing prompts */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Writing Prompts</h2>
        <p className="text-sm text-gray-500 mb-4">Choose a prompt and write 150–300 words in Tamil. Focus on using participial constructions, varying sentence length, and correct case suffixes.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {prompts.map((p) => (
            <div key={p.tamil} className="bg-rose-50 border border-rose-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="tamil-text font-bold text-gray-900">{p.tamil}</span>
                <AudioButton text={p.tamil} size="sm" />
              </div>
              <p className="text-sm text-gray-500">{p.english}</p>
              <span className="text-xs text-rose-600 mt-1 inline-block">{p.level}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mb-8 text-sm text-rose-800">
        <strong>Capstone challenge:</strong> Write a 300-word essay or short story in Tamil, then translate it to English yourself. Compare your translation with a native speaker or use it as a discussion exercise. This is the highest form of Tamil language practice — composition + reflection.
      </div>

      <button
        onClick={() => markTopicComplete("exp-creative-writing")}
        className={`px-6 py-3 rounded-xl font-semibold text-sm transition-colors ${done ? "bg-green-100 text-green-700 border border-green-200" : "bg-rose-600 text-white hover:bg-rose-700"}`}
      >
        {done ? "✓ Completed" : "Mark as Complete"}
      </button>
    </div>
  );
}
