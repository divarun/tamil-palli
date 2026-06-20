"use client";

import { tamilMonths, englishMonthsInTamil, seasons } from "@/data/vocabulary/intermediate";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

export default function MonthsPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("int-months");
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link><span>›</span><span>Intermediate</span><span>›</span><span className="text-gray-800">Months</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tamil & English Months</h1>
          <p className="tamil-text text-orange-600 text-lg">தமிழ் & ஆங்கில மாதங்கள்</p>
        </div>
        <button onClick={() => markTopicComplete("int-months")} className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}>
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>
      <h2 className="font-semibold text-gray-800 mb-3">Tamil Calendar Months (சித்திரை to பங்குனி)</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        {tamilMonths.map((item) => (
          <div key={item.tamil} className="bg-amber-50 border border-amber-100 rounded-xl p-3 flex items-center gap-2">
            <div className="flex-1">
              <div className="tamil-text font-bold text-gray-900">{item.tamil}</div>
              <div className="text-xs text-orange-600">{item.romanization}</div>
              <div className="text-xs text-gray-500">{item.english}</div>
            </div>
            <AudioButton text={item.tamil} size="sm" />
          </div>
        ))}
      </div>
      <h2 className="font-semibold text-gray-800 mb-3">English Months in Tamil</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        {englishMonthsInTamil.map((item) => (
          <div key={item.tamil} className="bg-blue-50 border border-blue-100 rounded-xl p-3 flex items-center gap-2">
            <div className="flex-1">
              <div className="tamil-text font-bold text-gray-900">{item.tamil}</div>
              <div className="text-xs text-orange-600">{item.romanization}</div>
              <div className="text-xs text-gray-500">{item.english}</div>
            </div>
            <AudioButton text={item.tamil} size="sm" />
          </div>
        ))}
      </div>
      <h2 className="font-semibold text-gray-800 mb-3">Seasons</h2>
      <div className="grid grid-cols-2 gap-3 mb-8">
        {seasons.map((item) => (
          <div key={item.tamil} className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 flex items-center gap-2">
            <div className="flex-1">
              <div className="tamil-text font-bold text-gray-900">{item.tamil}</div>
              <div className="text-xs text-orange-600">{item.romanization}</div>
              <div className="text-xs text-gray-500">{item.english}</div>
            </div>
            <AudioButton text={item.tamil} size="sm" />
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <Link href="/learn/intermediate/phrases" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">Next: Phrases →</Link>
      </div>
    </div>
  );
}
