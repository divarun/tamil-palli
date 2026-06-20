"use client";

import { useProgress } from "@/hooks/useProgress";
import { AudioButton } from "@/components/AudioButton";
import Link from "next/link";

const complexExamples = [
  { type: "Relative Clause", tamil: "நான் பார்த்த திரைப்படம் நல்லதாக இருந்தது", romanization: "Naan paartha thilaippadam nallathaga irundhadhu", english: "The film that I watched was good" },
  { type: "Conditional Sentence", tamil: "மழை பெய்தால் நான் வீட்டில் இருப்பேன்", romanization: "Malai peithal naan veettil iruppeen", english: "If it rains, I will stay at home" },
  { type: "Compound Sentence", tamil: "அவன் சாப்பிட்டான், ஆனால் அவள் சாப்பிடவில்லை", romanization: "Avan saappittaan, aanaal aval saappidavillai", english: "He ate, but she did not eat" },
  { type: "Purpose Clause", tamil: "படிக்க பள்ளிக்கு போகிறேன்", romanization: "Padikka pallikku pogirreen", english: "I am going to school to study" },
  { type: "Participial Phrase", tamil: "ஓடி வந்த குழந்தை தூங்கியது", romanization: "Oodi vanda kulanthai thoongiyathu", english: "The child who came running slept" },
];

export default function ComplexSentencesPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("adv-complex-sentences");
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link><span>›</span><span>Advanced</span><span>›</span><span className="text-gray-800">Complex Sentences</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Complex & Compound Sentences</h1>
          <p className="tamil-text text-orange-600 text-lg">சிக்கலான வாக்கியங்கள்</p>
        </div>
        <button onClick={() => markTopicComplete("adv-complex-sentences")} className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}>
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>
      <div className="space-y-4 mb-8">
        {complexExamples.map((ex) => (
          <div key={ex.type} className="bg-white border border-orange-100 rounded-xl p-5">
            <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">{ex.type}</span>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex-1">
                <p className="tamil-text text-gray-900 font-medium text-lg">{ex.tamil}</p>
                <p className="text-sm text-orange-600 italic">{ex.romanization}</p>
                <p className="text-sm text-gray-500">{ex.english}</p>
              </div>
              <AudioButton text={ex.tamil} size="md" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <Link href="/learn/advanced/formal-colloquial" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">Next: Formal vs Colloquial →</Link>
      </div>
    </div>
  );
}
