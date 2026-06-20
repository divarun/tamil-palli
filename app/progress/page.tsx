"use client";

import { useProgress } from "@/hooks/useProgress";
import { topics } from "@/data/curriculum/topics";
import { lessonPlan } from "@/data/curriculum/weekly-plan";
import Link from "next/link";

export default function ProgressPage() {
  const { state, loaded, resetProgress } = useProgress();

  if (!loaded) {
    return <div className="max-w-4xl mx-auto px-4 py-16 text-center text-gray-400">Loading...</div>;
  }

  const totalTopics = topics.length;
  const completedTopics = state.completedTopics.length;
  const topicPct = Math.round((completedTopics / totalTopics) * 100);

  const totalLessons = lessonPlan.length;
  const doneLessons = lessonPlan.filter((l) => state.lessonChecks[`lesson-${l.lesson}`]).length;
  const lessonPct = Math.round((doneLessons / totalLessons) * 100);

  const scores = Object.entries(state.testScores);
  const avgScore = scores.length > 0 ? Math.round(scores.reduce((sum, [, v]) => sum + v, 0) / scores.length) : null;

  const levelStats = (["novice", "intermediate", "advanced", "expert"] as const).map((level) => {
    const levelTopics = topics.filter((t) => t.level === level);
    const done = levelTopics.filter((t) => state.completedTopics.includes(t.id)).length;
    return { level, total: levelTopics.length, done, pct: Math.round((done / levelTopics.length) * 100) };
  });

  const levelColors: Record<string, string> = {
    novice: "bg-emerald-500",
    intermediate: "bg-blue-500",
    advanced: "bg-purple-500",
    expert: "bg-rose-500",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Progress</h1>
          <p className="text-gray-500 text-sm mt-1">Your learning journey — saved in this browser</p>
        </div>
        <button
          onClick={() => { if (confirm("Reset all progress? This cannot be undone.")) resetProgress(); }}
          className="text-xs text-red-400 hover:text-red-600 px-3 py-1.5 rounded-lg border border-red-100 hover:border-red-300 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Topics Completed", value: `${completedTopics}/${totalTopics}`, sub: `${topicPct}%`, color: "bg-orange-50 border-orange-200" },
          { label: "Lessons Checked", value: `${doneLessons}/${totalLessons}`, sub: `${lessonPct}%`, color: "bg-blue-50 border-blue-200" },
          { label: "Tests Taken", value: String(scores.length), sub: "", color: "bg-emerald-50 border-emerald-200" },
          { label: "Avg Test Score", value: avgScore !== null ? `${avgScore}%` : "—", sub: "", color: "bg-purple-50 border-purple-200" },
        ].map((card) => (
          <div key={card.label} className={`rounded-xl border p-4 ${card.color}`}>
            <div className="text-2xl font-bold text-gray-900">{card.value}</div>
            {card.sub && <div className="text-sm text-gray-500">{card.sub}</div>}
            <div className="text-xs text-gray-500 mt-1">{card.label}</div>
          </div>
        ))}
      </div>

      {/* Level progress */}
      <h2 className="font-semibold text-gray-800 mb-4">Progress by Level</h2>
      <div className="space-y-4 mb-8">
        {levelStats.map(({ level, total, done, pct }) => (
          <div key={level} className="bg-white border border-orange-100 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-800 capitalize">{level}</span>
              <span className="text-sm text-gray-500">{done}/{total} topics</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5 mb-1">
              <div className={`h-2.5 rounded-full transition-all ${levelColors[level]}`} style={{ width: `${pct}%` }} />
            </div>
            <div className="text-xs text-gray-400">{pct}% complete</div>
          </div>
        ))}
      </div>

      {/* Completed topics list */}
      {completedTopics > 0 && (
        <>
          <h2 className="font-semibold text-gray-800 mb-3">Completed Topics</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {topics.filter((t) => state.completedTopics.includes(t.id)).map((t) => (
              <Link key={t.id} href={t.lessonRoute} className="text-xs bg-green-50 border border-green-200 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors">
                ✓ {t.title}
              </Link>
            ))}
          </div>
        </>
      )}

      {/* Test scores */}
      {scores.length > 0 && (
        <>
          <h2 className="font-semibold text-gray-800 mb-3">Test Scores</h2>
          <div className="space-y-2 mb-8">
            {scores.map(([id, score]) => (
              <div key={id} className="flex items-center gap-3 bg-white border border-orange-100 rounded-xl px-4 py-3">
                <span className="text-sm text-gray-600 flex-1 capitalize">{id.replace(/[-_]/g, " ")}</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-gray-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${score >= 80 ? "bg-green-500" : score >= 60 ? "bg-amber-500" : "bg-red-400"}`}
                      style={{ width: `${score}%` }}
                    />
                  </div>
                  <span className={`text-sm font-bold ${score >= 80 ? "text-green-700" : score >= 60 ? "text-amber-700" : "text-red-600"}`}>
                    {score}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {completedTopics === 0 && scores.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <div className="text-4xl mb-3">📚</div>
          <p className="text-sm">Start learning to track your progress!</p>
          <Link href="/" className="mt-4 inline-block text-orange-600 underline text-sm">Choose a level →</Link>
        </div>
      )}
    </div>
  );
}
