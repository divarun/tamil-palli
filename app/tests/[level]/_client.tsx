"use client";

import { useState } from "react";
import { exercises } from "@/data/exercises/definitions";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

export function TestClient({ level }: { level: string }) {
  const [started, setStarted] = useState(false);
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<{ question: string; correct: string; given: string }[]>([]);
  const { saveTestScore, getTestScore } = useProgress();

  const levelExercises = exercises.filter((e) => e.level === level);
  const allQuestions = levelExercises.flatMap((e) =>
    e.questions.filter((q) => q.type === "letter-recognition" || q.type === "fill-blank")
  ).slice(0, 20);

  const prevScore = getTestScore(`test-${level}`);

  const handleSelect = (choice: string) => {
    if (selected) return;
    setSelected(choice);
    const q = allQuestions[qIndex];
    let correct = "";
    if (q.type === "letter-recognition") correct = q.correct;
    if (q.type === "fill-blank") correct = q.answer;
    const isCorrect = choice === correct;
    if (isCorrect) setScore((s) => s + 1);
    else setWrongAnswers((wa) => [...wa, { question: q.type === "letter-recognition" ? q.letter : (q as any).sentenceWithBlank, correct, given: choice }]);

    setTimeout(() => {
      setSelected(null);
      if (qIndex < allQuestions.length - 1) setQIndex((i) => i + 1);
      else {
        setFinished(true);
        const pct = Math.round(((isCorrect ? score + 1 : score) / allQuestions.length) * 100);
        saveTestScore(`test-${level}`, pct);
      }
    }, 900);
  };

  if (allQuestions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-500 mb-4">No test questions available for <strong>{level}</strong> yet.</p>
        <Link href="/curriculum" className="text-orange-600 underline">Back to Curriculum</Link>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center">
        <div className="text-5xl mb-4">📝</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2 capitalize">{level} Assessment</h1>
        <p className="text-gray-500 text-sm mb-2">{allQuestions.length} questions</p>
        {prevScore !== null && <p className="text-sm text-gray-500 mb-4">Previous score: <strong className="text-orange-600">{prevScore}%</strong></p>}
        <p className="text-gray-600 text-sm mb-8">This test covers all topics from the {level} level. Wrong answers will be shown at the end.</p>
        <button onClick={() => setStarted(true)} className="px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700">Start Test</button>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / allQuestions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{pct >= 80 ? "🎉" : pct >= 60 ? "👍" : "💪"}</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Test Complete!</h1>
          <div className="text-4xl font-bold text-orange-600 mb-1">{pct}%</div>
          <p className="text-gray-500 text-sm">{score} of {allQuestions.length} correct</p>
        </div>
        {wrongAnswers.length > 0 && (
          <div className="mb-8">
            <h2 className="font-semibold text-gray-800 mb-3">Review — Wrong Answers</h2>
            <div className="space-y-2">
              {wrongAnswers.map((wa, i) => (
                <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-3 text-sm">
                  <p className="tamil-text text-gray-700 mb-1">{wa.question}</p>
                  <p className="text-red-600">Your answer: {wa.given}</p>
                  <p className="text-green-700">Correct: {wa.correct}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex gap-3 justify-center">
          <button onClick={() => { setStarted(false); setQIndex(0); setScore(0); setSelected(null); setFinished(false); setWrongAnswers([]); }} className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700">Retake</button>
          <Link href="/progress" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50">View Progress</Link>
        </div>
      </div>
    );
  }

  const q = allQuestions[qIndex];
  const choices = q.type === "letter-recognition" ? q.choices : q.type === "fill-blank" ? q.choices : [];
  const correctAnswer = q.type === "letter-recognition" ? q.correct : q.type === "fill-blank" ? q.answer : "";

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-sm text-gray-500 capitalize">{level} Assessment</span>
        <span className="ml-auto text-sm font-medium text-gray-700">{qIndex + 1} / {allQuestions.length}</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2 mb-8">
        <div className="bg-orange-400 h-2 rounded-full transition-all" style={{ width: `${(qIndex / allQuestions.length) * 100}%` }} />
      </div>
      <div className="flex flex-col items-center gap-6">
        {q.type === "letter-recognition" && (
          <>
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-8 flex flex-col items-center gap-3">
              <span className="text-8xl tamil-text font-bold text-gray-900 leading-none">{q.letter}</span>
              <AudioButton text={q.letter} size="lg" />
            </div>
            <p className="text-gray-600 font-medium">What is the name/sound of this letter?</p>
          </>
        )}
        {q.type === "fill-blank" && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center max-w-sm w-full">
            <p className="text-lg tamil-text text-gray-800 font-medium">{q.sentenceWithBlank}</p>
          </div>
        )}
        <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
          {choices.map((choice) => {
            let cls = "border-gray-200 bg-white text-gray-800 hover:border-orange-300";
            if (selected) {
              if (choice === correctAnswer) cls = "border-green-500 bg-green-50 text-green-800";
              else if (choice === selected) cls = "border-red-400 bg-red-50 text-red-800";
              else cls = "border-gray-100 bg-gray-50 text-gray-400";
            }
            return <button key={choice} disabled={!!selected} onClick={() => handleSelect(choice)} className={`border-2 rounded-xl p-3 text-sm font-medium transition-colors tamil-text ${cls}`}>{choice}</button>;
          })}
        </div>
      </div>
    </div>
  );
}
