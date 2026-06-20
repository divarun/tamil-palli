"use client";

import { useState, useCallback } from "react";
import { exercises, type Exercise, type Question } from "@/data/exercises/definitions";
import { AudioButton } from "@/components/AudioButton";
import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

function LetterRecognitionQ({ q, onAnswer }: { q: Extract<Question, { type: "letter-recognition" }>; onAnswer: (correct: boolean) => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const answered = selected !== null;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="bg-white rounded-2xl border-2 border-orange-200 p-8 flex flex-col items-center gap-3">
        <span className="text-8xl tamil-text font-bold text-gray-900 leading-none">{q.letter}</span>
        <AudioButton text={q.letter} size="lg" />
      </div>
      <p className="text-gray-600 font-medium">What is the name/sound of this letter?</p>
      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {q.choices.map((choice) => {
          let cls = "border-gray-200 bg-white text-gray-800 hover:border-orange-300";
          if (answered) {
            if (choice === q.correct) cls = "border-green-500 bg-green-50 text-green-800";
            else if (choice === selected) cls = "border-red-400 bg-red-50 text-red-800";
            else cls = "border-gray-100 bg-gray-50 text-gray-400";
          }
          return (
            <button key={choice} disabled={answered} onClick={() => { setSelected(choice); onAnswer(choice === q.correct); }} className={`border-2 rounded-xl p-3 text-sm font-medium transition-colors ${cls}`}>
              {choice}
            </button>
          );
        })}
      </div>
      {answered && <p className={`text-sm font-medium ${selected === q.correct ? "text-green-700" : "text-red-700"}`}>{selected === q.correct ? "✓ Correct!" : `✗ The answer is: ${q.correct}`}</p>}
    </div>
  );
}

function FillBlankQ({ q, onAnswer }: { q: Extract<Question, { type: "fill-blank" }>; onAnswer: (correct: boolean) => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const answered = selected !== null;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center max-w-sm w-full">
        <p className="text-lg tamil-text text-gray-800 font-medium">{q.sentenceWithBlank}</p>
        {q.hint && <p className="text-xs text-amber-600 mt-2">Hint: {q.hint}</p>}
      </div>
      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {q.choices.map((choice) => {
          let cls = "border-gray-200 bg-white text-gray-800 hover:border-orange-300";
          if (answered) {
            if (choice === q.answer) cls = "border-green-500 bg-green-50 text-green-800";
            else if (choice === selected) cls = "border-red-400 bg-red-50 text-red-800";
            else cls = "border-gray-100 bg-gray-50 text-gray-400";
          }
          return (
            <button key={choice} disabled={answered} onClick={() => { setSelected(choice); onAnswer(choice === q.answer); }} className={`border-2 rounded-xl p-3 text-sm tamil-text font-medium transition-colors ${cls}`}>
              {choice}
            </button>
          );
        })}
      </div>
      {answered && <p className={`text-sm font-medium ${selected === q.answer ? "text-green-700" : "text-red-700"}`}>{selected === q.answer ? "✓ Correct!" : `✗ The answer is: ${q.answer}`}</p>}
    </div>
  );
}

function MatchPairQ({ q, onAnswer }: { q: Extract<Question, { type: "match-pair" }>; onAnswer: (correct: boolean) => void }) {
  const [leftSel, setLeftSel] = useState<string | null>(null);
  const [matched, setMatched] = useState<Record<string, string>>({});
  const allMatched = Object.keys(matched).length === q.pairs.length;

  const handleLeft = (val: string) => { if (!matched[val]) setLeftSel(val); };
  const handleRight = (val: string) => {
    if (!leftSel) return;
    const correct = q.pairs.find((p) => p.left === leftSel)?.right === val;
    if (correct) {
      const next = { ...matched, [leftSel]: val };
      setMatched(next);
      if (Object.keys(next).length === q.pairs.length) onAnswer(true);
    }
    setLeftSel(null);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-gray-600 text-sm">Match each Tamil letter to its romanization.</p>
      <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
        <div className="space-y-2">
          {q.pairs.map((p) => (
            <button key={p.left} onClick={() => handleLeft(p.left)} disabled={!!matched[p.left]} className={`w-full border-2 rounded-xl p-3 text-2xl tamil-text font-bold transition-colors ${matched[p.left] ? "border-green-400 bg-green-50 text-green-800" : leftSel === p.left ? "border-orange-500 bg-orange-50" : "border-gray-200 bg-white hover:border-orange-300"}`}>{p.left}</button>
          ))}
        </div>
        <div className="space-y-2">
          {q.pairs.map((p) => {
            const isMatched = Object.values(matched).includes(p.right);
            return (
              <button key={p.right} onClick={() => handleRight(p.right)} disabled={isMatched} className={`w-full border-2 rounded-xl p-3 text-sm font-medium transition-colors ${isMatched ? "border-green-400 bg-green-50 text-green-800" : "border-gray-200 bg-white hover:border-orange-300"}`}>{p.right}</button>
            );
          })}
        </div>
      </div>
      {allMatched && <p className="text-green-700 font-medium">✓ All matched!</p>}
    </div>
  );
}

type Props = { level: string; type: string };

export function ExerciseClient({ level, type }: Props) {
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);
  const { saveTestScore } = useProgress();

  const matching = exercises.filter((e) => e.level === level && (e.exerciseType === type || type === "all"));
  const exercise: Exercise | undefined = matching[0];

  const handleAnswer = useCallback((correct: boolean) => {
    const next = [...answers, correct];
    setAnswers(next);
    if (correct) setScore((s) => s + 1);
    setTimeout(() => {
      if (exercise && qIndex < exercise.questions.length - 1) setQIndex((i) => i + 1);
      else {
        setFinished(true);
        const pct = Math.round((next.filter(Boolean).length / next.length) * 100);
        saveTestScore(`exercise-${level}-${type}`, pct);
      }
    }, 800);
  }, [answers, exercise, qIndex, level, type, saveTestScore]);

  if (!exercise) return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <p className="text-gray-500 mb-4">No exercise found for <strong>{level}/{type}</strong>.</p>
      <Link href="/curriculum" className="text-orange-600 underline">Back to Curriculum</Link>
    </div>
  );

  if (finished) {
    const pct = Math.round((score / answers.length) * 100);
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">{pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "💪"}</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Exercise Complete!</h1>
        <div className="text-4xl font-bold text-orange-600 mb-1">{pct}%</div>
        <p className="text-gray-500 text-sm mb-8">{score} of {answers.length} correct</p>
        <div className="flex gap-3 justify-center">
          <button onClick={() => { setQIndex(0); setScore(0); setAnswers([]); setFinished(false); }} className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700">Try Again</button>
          <Link href="/curriculum" className="px-4 py-2 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50">Curriculum</Link>
        </div>
      </div>
    );
  }

  const q = exercise.questions[qIndex];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/curriculum" className="text-sm text-gray-500 hover:text-orange-600">← Curriculum</Link>
        <span className="text-gray-300">|</span>
        <span className="text-sm font-medium text-gray-700">{exercise.title}</span>
        <span className="ml-auto text-sm text-gray-500">{qIndex + 1} / {exercise.questions.length}</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2 mb-8">
        <div className="bg-orange-400 h-2 rounded-full transition-all" style={{ width: `${(qIndex / exercise.questions.length) * 100}%` }} />
      </div>
      {q.type === "letter-recognition" && <LetterRecognitionQ q={q} onAnswer={handleAnswer} />}
      {q.type === "fill-blank" && <FillBlankQ q={q} onAnswer={handleAnswer} />}
      {q.type === "match-pair" && <MatchPairQ q={q} onAnswer={handleAnswer} />}
    </div>
  );
}
