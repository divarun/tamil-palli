"use client";

import { greetings } from "@/data/vocabulary/novice";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

export default function GreetingsPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("novice-greetings");

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link>
        <span>›</span>
        <span>Novice</span>
        <span>›</span>
        <span className="text-gray-800">Greetings</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Greetings & Basic Phrases</h1>
          <p className="tamil-text text-orange-600 text-lg">வணக்கம் & அடிப்படை சொற்றொடர்கள்</p>
        </div>
        <button
          onClick={() => markTopicComplete("novice-greetings")}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
        >
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <div className="space-y-3 mb-8">
        {greetings.map((item) => (
          <div key={item.tamil} className="flex items-center gap-4 bg-white border border-orange-100 rounded-xl p-4">
            <div className="flex-1">
              <div className="text-xl tamil-text font-bold text-gray-800">{item.tamil}</div>
              <div className="text-sm text-orange-600">{item.romanization}</div>
              <div className="text-sm text-gray-500">{item.english}</div>
            </div>
            <AudioButton text={item.tamil} size="md" />
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h2 className="font-semibold text-blue-800 mb-2">வணக்கம் (Vanakkam)</h2>
        <p className="text-sm text-blue-700">
          வணக்கம் is the universal Tamil greeting — it can be used at any time of day, as "hello," as a respectful acknowledgment, and even as "goodbye." It comes from வணங்கு (to bow in respect). It is the most important word to learn first.
        </p>
      </div>

      <div className="flex gap-3">
        <Link href="/exercises/novice/fill-blank" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">
          Practice →
        </Link>
        <Link href="/learn/novice/colors" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">
          Next: Colors →
        </Link>
      </div>
    </div>
  );
}
