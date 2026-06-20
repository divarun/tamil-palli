"use client";

import { useState } from "react";
import { useProgress } from "@/hooks/useProgress";
import { AudioButton } from "@/components/AudioButton";
import Link from "next/link";

const passages = [
  {
    id: "p1",
    title: "The Mango Tree",
    tamil: "எங்கள் வீட்டில் ஒரு மாமரம் இருக்கிறது. அந்த மரம் மிகவும் பெரியது. கோடை காலத்தில் அந்த மரத்தில் நிறைய மாம்பழங்கள் காய்க்கும். குழந்தைகள் அந்த பழங்களை சாப்பிடுவார்கள். மாமரம் எல்லோருக்கும் நிழல் கொடுக்கும்.",
    romanization: "Engal veettil oru maamaram irukkiRadhu. Andha maram mikavum periyathu. Kodai kaalatthil andha marathil niraya maambagangal kaaykkum. Kulanthaigal andha pagangalai saappiduvaarkal. Maamaram ellorukum nilal kodukkum.",
    translation: "In our house there is a mango tree. That tree is very big. In summer many mangoes will grow on that tree. Children will eat those fruits. The mango tree gives shade to everyone.",
    questions: [
      { q: "மரம் எங்கே இருக்கிறது?", options: ["பள்ளியில்", "வீட்டில்", "கடலில்", "மலையில்"], answer: "வீட்டில்", english: "Where is the tree?" },
      { q: "எந்த காலத்தில் மாம்பழம் காய்க்கும்?", options: ["மழைக்காலம்", "குளிர்காலம்", "கோடை காலம்", "வசந்தம்"], answer: "கோடை காலம்", english: "In which season will mangoes grow?" },
    ],
  },
];

export default function ComprehensionPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("adv-comprehension");
  const [answers, setAnswers] = useState<Record<string, string>>({});

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link><span>›</span><span>Advanced</span><span>›</span><span className="text-gray-800">Reading Comprehension</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reading Comprehension</h1>
          <p className="tamil-text text-orange-600 text-lg">படிக்கும் புரிதல்</p>
        </div>
        <button onClick={() => markTopicComplete("adv-comprehension")} className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}>
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      {passages.map((passage) => (
        <div key={passage.id} className="mb-8">
          <h2 className="font-semibold text-gray-800 mb-3">Passage: {passage.title}</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="tamil-text text-gray-900 leading-relaxed text-lg">{passage.tamil}</p>
              </div>
              <AudioButton text={passage.tamil} size="md" />
            </div>
            <details className="mt-3">
              <summary className="text-xs text-gray-500 cursor-pointer hover:text-orange-600">Show translation</summary>
              <p className="text-sm text-gray-600 mt-2 italic">{passage.translation}</p>
            </details>
          </div>
          <h3 className="font-semibold text-gray-700 mb-3">Questions (வினாக்கள்)</h3>
          <div className="space-y-4">
            {passage.questions.map((q) => {
              const sel = answers[q.q];
              return (
                <div key={q.q} className="bg-white border border-orange-100 rounded-xl p-4">
                  <p className="tamil-text text-gray-900 font-medium mb-1">{q.q}</p>
                  <p className="text-xs text-gray-500 mb-3">{q.english}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {q.options.map((opt) => {
                      let cls = "border-gray-200 bg-white text-gray-800 hover:border-orange-300";
                      if (sel) {
                        if (opt === q.answer) cls = "border-green-500 bg-green-50 text-green-800";
                        else if (opt === sel) cls = "border-red-400 bg-red-50 text-red-800";
                        else cls = "border-gray-100 bg-gray-50 text-gray-400";
                      }
                      return (
                        <button key={opt} disabled={!!sel} onClick={() => setAnswers({ ...answers, [q.q]: opt })} className={`border-2 rounded-lg p-2 text-sm tamil-text transition-colors ${cls}`}>{opt}</button>
                      );
                    })}
                  </div>
                  {sel && <p className={`text-xs mt-2 font-medium ${sel === q.answer ? "text-green-700" : "text-red-700"}`}>{sel === q.answer ? "✓ Correct!" : `✗ Correct answer: ${q.answer}`}</p>}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className="flex gap-3">
        <Link href="/learn/advanced/thirukkural" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">Next: Thirukkural →</Link>
      </div>
    </div>
  );
}
