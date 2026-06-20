"use client";

import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

const formalLetterTemplate = `மதிப்பிற்குரிய ஐயா/அம்மையார்,

  [விஷயம்: ...]

  மேலே கண்ட விஷயம் பற்றி தங்களுக்கு தெரிவிக்கிறேன்.

  [உடல் பகுதி — 2-3 பத்திகள்]

  நன்றியுடன்,
  [உங்கள் பெயர்]`;

const essayTips = [
  "Start with a clear introduction (அறிமுகம்) — state your topic",
  "Write 2-3 body paragraphs (உடல் பகுதி) with examples",
  "End with a conclusion (முடிவு) summarizing your points",
  "Use correct case suffixes throughout",
  "Check verb endings match the subject's person and gender",
  "Prefer formal written Tamil (செந்தமிழ்) over colloquial speech",
];

const sampleEssay = {
  title: "மரங்களின் முக்கியத்துவம் (The Importance of Trees)",
  text: "மரங்கள் நமது வாழ்வில் மிக முக்கியமான பங்கு வகிக்கின்றன. மரங்கள் நமக்கு தூய்மையான காற்று வழங்குகின்றன. கார்பன் டை ஆக்சைடை உறிஞ்சி ஆக்சிஜனை வெளியிடுகின்றன.\n\nமரங்கள் பறவைகளுக்கும் விலங்குகளுக்கும் வாழ்விடம் தருகின்றன. மரங்களிலிருந்து பழங்களும், மரப்பொருட்களும் கிடைக்கின்றன. மழையை வரவழைக்கவும் மரங்கள் உதவுகின்றன.\n\nதாவரங்களை பாதுகாப்பது நம் கடமை. அதிகமான மரங்களை நடுவோம்; சுற்றுச்சூழலை காப்போம்.",
  translation: "Trees play a very important role in our lives. Trees give us clean air. They absorb carbon dioxide and release oxygen.\n\nTrees provide habitat for birds and animals. From trees we get fruits and wood products. Trees also help bring rainfall.\n\nIt is our duty to protect plants. Let us plant more trees; let us protect the environment.",
};

export default function EssayWritingPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("adv-essay");
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link><span>›</span><span>Advanced</span><span>›</span><span className="text-gray-800">Essay Writing</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Essay & Formal Letter Writing</h1>
          <p className="tamil-text text-orange-600 text-lg">கட்டுரை & முறையான கடிதம்</p>
        </div>
        <button onClick={() => markTopicComplete("adv-essay")} className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}>
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <h2 className="font-semibold text-gray-800 mb-3">Essay Writing Tips</h2>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <ul className="space-y-1">
          {essayTips.map((tip) => (
            <li key={tip} className="text-sm text-blue-800 flex items-start gap-2"><span className="text-blue-400">·</span>{tip}</li>
          ))}
        </ul>
      </div>

      <h2 className="font-semibold text-gray-800 mb-3">Sample Essay</h2>
      <div className="bg-white border border-orange-100 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-gray-900 tamil-text text-lg mb-3">{sampleEssay.title}</h3>
        <div className="tamil-text text-gray-800 leading-relaxed whitespace-pre-line mb-3">{sampleEssay.text}</div>
        <details>
          <summary className="text-xs text-gray-500 cursor-pointer hover:text-orange-600">Show translation</summary>
          <p className="text-sm text-gray-600 mt-2 italic whitespace-pre-line">{sampleEssay.translation}</p>
        </details>
      </div>

      <h2 className="font-semibold text-gray-800 mb-3">Formal Letter Template</h2>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
        <pre className="tamil-text text-gray-700 text-sm whitespace-pre-wrap">{formalLetterTemplate}</pre>
      </div>

      <div className="flex gap-3">
        <Link href="/learn/advanced/sangam" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">Next: Sangam Literature →</Link>
      </div>
    </div>
  );
}
