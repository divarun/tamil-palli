"use client";

import { useState } from "react";
import Link from "next/link";
import { lessonPlan } from "@/data/curriculum/weekly-plan";
import { topics, type Level } from "@/data/curriculum/topics";
import { useProgress } from "@/hooks/useProgress";

const levelColors: Record<Level, { bg: string; text: string; border: string }> = {
  novice: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  intermediate: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  advanced: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  expert: { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
};

export default function CurriculumPage() {
  const [tab, setTab] = useState<"lessons" | "library">("lessons");
  const [filterLevel, setFilterLevel] = useState<Level | "all">("all");
  const { toggleLessonCheck, isLessonChecked, isTopicComplete } = useProgress();

  const filteredTopics = filterLevel === "all" ? topics : topics.filter((t) => t.level === filterLevel);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Curriculum</h1>
        <p className="text-gray-500 text-sm mt-1">Plan your learning path and browse all topics</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-orange-100">
        <button
          onClick={() => setTab("lessons")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${tab === "lessons" ? "border-orange-500 text-orange-700" : "border-transparent text-gray-500 hover:text-gray-700"}`}
        >
          📅 Lesson Plan
        </button>
        <button
          onClick={() => setTab("library")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${tab === "library" ? "border-orange-500 text-orange-700" : "border-transparent text-gray-500 hover:text-gray-700"}`}
        >
          📚 Topic Library
        </button>
      </div>

      {tab === "lessons" && (
        <div>
          <p className="text-sm text-gray-500 mb-6">
            This is a recommended lesson sequence ({lessonPlan.length} lessons). Check off each lesson as you complete it. You can move faster or slower — use the Topic Library to jump to any topic.
          </p>
          {(["novice", "intermediate", "advanced", "expert"] as Level[]).map((level) => {
            const lessons = lessonPlan.filter((l) => l.level === level);
            const c = levelColors[level];
            const levelLabel = level.charAt(0).toUpperCase() + level.slice(1);
            const checked = lessons.filter((l) => isLessonChecked(`lesson-${l.lesson}`)).length;
            return (
              <div key={level} className="mb-8">
                <div className={`flex items-center gap-3 mb-3 px-3 py-2 rounded-lg ${c.bg} ${c.border} border`}>
                  <h2 className={`font-semibold ${c.text}`}>{levelLabel}</h2>
                  <span className="text-xs text-gray-500 ml-auto">{checked}/{lessons.length} lessons done</span>
                </div>
                <div className="space-y-2">
                  {lessons.map((lesson) => {
                    const key = `lesson-${lesson.lesson}`;
                    const done = isLessonChecked(key);
                    return (
                      <div key={lesson.lesson} className={`flex items-start gap-3 p-3 rounded-xl border transition-colors ${done ? "bg-gray-50 border-gray-200" : "bg-white border-orange-100"}`}>
                        <button
                          onClick={() => toggleLessonCheck(key)}
                          className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${done ? "bg-orange-500 border-orange-500 text-white" : "border-gray-300 hover:border-orange-400"}`}
                          aria-label={done ? "Mark incomplete" : "Mark complete"}
                        >
                          {done && <span className="text-xs">✓</span>}
                        </button>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400 font-medium w-12 shrink-0">L{lesson.lesson}</span>
                            <span className={`font-medium text-sm ${done ? "line-through text-gray-400" : "text-gray-800"}`}>{lesson.title}</span>
                          </div>
                          <ul className="mt-1 space-y-0.5">
                            {lesson.goals.map((g) => (
                              <li key={g} className="text-xs text-gray-500 flex items-start gap-1">
                                <span className="text-gray-300 mt-0.5">·</span>
                                {g}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="shrink-0">
                          {(() => {
                            const topic = topics.find((t) => t.id === lesson.topicIds[0]);
                            if (!topic) return null;
                            return (
                              <Link
                                href={topic.lessonRoute}
                                className="text-xs px-2 py-1 bg-orange-50 border border-orange-200 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors"
                              >
                                Go →
                              </Link>
                            );
                          })()}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab === "library" && (
        <div>
          <div className="flex gap-2 mb-6 flex-wrap">
            {(["all", "novice", "intermediate", "advanced", "expert"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setFilterLevel(l)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filterLevel === l ? "bg-orange-500 text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-orange-300"
                }`}
              >
                {l === "all" ? "All Levels" : l.charAt(0).toUpperCase() + l.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {filteredTopics.map((topic) => {
              const c = levelColors[topic.level];
              const done = isTopicComplete(topic.id);
              return (
                <div key={topic.id} className={`rounded-xl border p-4 ${c.bg} ${c.border} relative`}>
                  {done && (
                    <span className="absolute top-3 right-3 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">✓ Done</span>
                  )}
                  <div className="flex items-start gap-2 mb-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${c.bg} ${c.text} border ${c.border}`}>
                      {topic.level}
                    </span>
                  </div>
                  <div className="font-semibold text-gray-900 mb-0.5">{topic.title}</div>
                  <div className="text-sm tamil-text text-gray-600 mb-3">{topic.tamilTitle}</div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {topic.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white border border-gray-200 text-gray-500 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href={topic.lessonRoute}
                      className="text-sm font-medium text-orange-700 hover:text-orange-800 underline"
                    >
                      Open Lesson →
                    </Link>
                    {topic.worksheetIds.length > 0 && (
                      <Link
                        href={`/worksheets?level=${topic.level}`}
                        className="text-sm text-gray-500 hover:text-gray-700"
                      >
                        📄 {topic.worksheetIds.length} worksheet{topic.worksheetIds.length > 1 ? "s" : ""}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
