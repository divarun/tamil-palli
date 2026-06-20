"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { worksheets, type Worksheet } from "@/data/worksheets/definitions";
import { greetings, colors, numbers, questionWords } from "@/data/vocabulary/novice";
import { food, days } from "@/data/vocabulary/intermediate";
import { proverbs } from "@/data/vocabulary/proverbs";
import { tenses, pronounsWithTenses } from "@/data/grammar/tenses";
import { cases } from "@/data/grammar/cases";

type Level = "all" | "novice" | "intermediate" | "advanced" | "expert";
type Layout = "all" | "tracing" | "match" | "fill-blank" | "copy";

const layoutColors: Record<string, string> = {
  tracing: "bg-blue-100 text-blue-700",
  match: "bg-purple-100 text-purple-700",
  "fill-blank": "bg-amber-100 text-amber-700",
  copy: "bg-emerald-100 text-emerald-700",
};

const levelColors: Record<string, string> = {
  novice: "bg-emerald-50 border-emerald-200",
  intermediate: "bg-blue-50 border-blue-200",
  advanced: "bg-purple-50 border-purple-200",
  expert: "bg-rose-50 border-rose-200",
};

// ── Shared print primitives ──────────────────────────────────────────────────

function PrintHeader({ ws }: { ws: Worksheet }) {
  return (
    <div className="mb-6 border-b pb-3">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold">{ws.title}</h2>
          <p className="text-base tamil-text text-gray-600">{ws.tamilTitle}</p>
        </div>
        <div className="text-right text-xs text-gray-400">
          <div className="capitalize">{ws.level} · {ws.layout}</div>
          <div className="mt-1">Name: _______________</div>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2 italic">{ws.printInstructions}</p>
    </div>
  );
}

function BlankLines({ count }: { count: number }) {
  return (
    <div className="space-y-4 mt-2">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="border-b border-gray-300 h-8" />
      ))}
    </div>
  );
}

function MatchColumns({ left, right }: { left: string[]; right: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-16 mt-4">
      <div className="space-y-4">
        {left.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-xs text-gray-400 w-5">{i + 1}.</span>
            <span className="tamil-text text-base border-b border-gray-300 flex-1 pb-1">{item}</span>
            <span className="text-gray-300">—</span>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        {right.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-xs text-gray-400 w-5">{String.fromCharCode(65 + i)}.</span>
            <span className="text-sm border-b border-gray-300 flex-1 pb-1">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Per-worksheet print content ──────────────────────────────────────────────

function WorksheetPrintContent({ ws }: { ws: Worksheet }) {
  // ── Novice ────────────────────────────────────────────────────────────────
  if (ws.id === "ws-vowel-tracing") {
    const vowels = ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ"];
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <div className="grid grid-cols-4 gap-6">
          {vowels.map((v) => (
            <div key={v} className="text-center">
              <div className="text-5xl tamil-text text-gray-300 mb-2">{v}</div>
              <div className="border-b border-dashed border-gray-300 mb-2 h-12 flex items-end justify-center">
                <span className="text-5xl tamil-text text-gray-100">{v}</span>
              </div>
              <div className="border-b border-dashed border-gray-300 h-12" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (ws.id === "ws-vowel-match") {
    const vowels = ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ"];
    const romanizations = ["aa", "ai", "a", "e", "ee", "i", "ii", "o", "oo", "ou", "u", "uu"];
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <p className="text-sm text-gray-600 mb-4">Draw a line from each Tamil vowel to its romanization.</p>
        <MatchColumns left={vowels} right={romanizations} />
      </div>
    );
  }

  if (ws.id === "ws-consonant-tracing") {
    const consonants = ["க", "ச", "ட", "த", "ப", "ற", "ங", "ஞ", "ண", "ந", "ம", "ன", "ய", "ர", "ல", "வ", "ழ", "ள"];
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <div className="grid grid-cols-4 gap-6">
          {consonants.map((c) => (
            <div key={c} className="text-center">
              <div className="text-5xl tamil-text text-gray-300 mb-2">{c}</div>
              <div className="border-b border-dashed border-gray-300 mb-2 h-12 flex items-end justify-center">
                <span className="text-5xl tamil-text text-gray-100">{c}</span>
              </div>
              <div className="border-b border-dashed border-gray-300 h-12" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (ws.id === "ws-numbers") {
    const first12 = numbers.slice(0, 12);
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-sm mb-3">Part A — Write the Tamil word</h3>
            <div className="space-y-3">
              {first12.map((n) => (
                <div key={n.tamil} className="flex items-center gap-3">
                  <span className="text-sm w-32">{n.english}</span>
                  <div className="border-b border-gray-300 flex-1 h-7 tamil-text" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-3">Part B — Write the English meaning</h3>
            <div className="space-y-3">
              {numbers.slice(12).map((n) => (
                <div key={n.tamil} className="flex items-center gap-3">
                  <span className="tamil-text text-base w-28">{n.tamil}</span>
                  <div className="border-b border-gray-300 flex-1 h-7" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (ws.id === "ws-greetings-match") {
    const left = greetings.slice(0, 8).map((g) => g.tamil);
    const right = [...greetings.slice(0, 8).map((g) => g.english)].sort();
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <p className="text-sm text-gray-600 mb-4">Draw a line from each Tamil phrase to its English meaning.</p>
        <MatchColumns left={left} right={right} />
      </div>
    );
  }

  if (ws.id === "ws-colors-match") {
    const left = colors.map((c) => c.tamil);
    const right = [...colors.map((c) => c.english)].sort();
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <p className="text-sm text-gray-600 mb-4">Draw a line from each Tamil color word to its English name.</p>
        <MatchColumns left={left} right={right} />
        <div className="mt-8">
          <p className="text-sm font-medium mb-2">Color the boxes to match each Tamil word:</p>
          <div className="grid grid-cols-5 gap-3">
            {colors.map((c) => (
              <div key={c.tamil} className="text-center">
                <div className="border border-gray-300 h-10 rounded mb-1" />
                <span className="tamil-text text-xs">{c.tamil}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (ws.id === "ws-word-formation") {
    const pairs = [
      { vowel: "அ", consonant: "க", result: "க" },
      { vowel: "ஆ", consonant: "க", result: "கா" },
      { vowel: "இ", consonant: "ம", result: "மி" },
      { vowel: "ஈ", consonant: "ன", result: "னீ" },
      { vowel: "உ", consonant: "ப", result: "பு" },
      { vowel: "எ", consonant: "வ", result: "வெ" },
    ];
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <div className="space-y-4 mt-2">
          {pairs.map((p, i) => (
            <div key={i} className="flex items-center gap-4 text-lg">
              <span className="tamil-text w-10 text-center border border-gray-300 rounded p-1">{p.vowel}</span>
              <span className="text-gray-400">+</span>
              <span className="tamil-text w-10 text-center border border-gray-300 rounded p-1">{p.consonant}</span>
              <span className="text-gray-400">=</span>
              <div className="border-b border-gray-400 w-16 h-8" />
              <span className="text-xs text-gray-400">Answer: {p.result}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <p className="text-sm font-medium mb-3">Combine these yourself:</p>
          <div className="space-y-4">
            {[["ஏ", "க"], ["ஒ", "ல"], ["உ", "ம"]].map(([v, c], i) => (
              <div key={i} className="flex items-center gap-4 text-lg">
                <span className="tamil-text w-10 text-center border border-gray-300 rounded p-1">{v}</span>
                <span className="text-gray-400">+</span>
                <span className="tamil-text w-10 text-center border border-gray-300 rounded p-1">{c}</span>
                <span className="text-gray-400">=</span>
                <div className="border-b border-gray-400 w-16 h-8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Intermediate ─────────────────────────────────────────────────────────

  if (ws.id === "ws-combined-tracing") {
    const ka_row = ["க", "கா", "கி", "கீ", "கு", "கூ", "கெ", "கே", "கை", "கொ", "கோ", "கௌ"];
    const sa_row = ["ச", "சா", "சி", "சீ", "சு", "சூ", "செ", "சே", "சை", "சொ", "சோ", "சௌ"];
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <p className="text-xs text-gray-500 mb-4">Sample: க-row and ச-row. Print one page per consonant for the full 216-letter chart.</p>
        {[{ label: "க-row", letters: ka_row }, { label: "ச-row", letters: sa_row }].map(({ label, letters }) => (
          <div key={label} className="mb-6">
            <p className="text-xs font-semibold text-gray-500 mb-2">{label}</p>
            <div className="grid grid-cols-6 gap-3">
              {letters.map((l) => (
                <div key={l} className="text-center">
                  <div className="text-2xl tamil-text text-gray-300">{l}</div>
                  <div className="border-b border-dashed border-gray-300 h-10 mt-1" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (ws.id === "ws-reading-words") {
    const words = [
      { tamil: "அம்மா", english: "Mother" }, { tamil: "வீடு", english: "House" },
      { tamil: "மரம்", english: "Tree" }, { tamil: "பால்", english: "Milk" },
      { tamil: "நாய்", english: "Dog" }, { tamil: "பூ", english: "Flower" },
      { tamil: "மழை", english: "Rain" }, { tamil: "கல்", english: "Stone" },
    ];
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-sm mb-3">Part A — Tamil → English</h3>
            <div className="space-y-3">
              {words.map((w) => (
                <div key={w.tamil} className="flex items-center gap-3">
                  <span className="tamil-text text-base w-24">{w.tamil}</span>
                  <div className="border-b border-gray-300 flex-1 h-7" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-3">Part B — English → Tamil</h3>
            <div className="space-y-3">
              {words.map((w) => (
                <div key={w.english} className="flex items-center gap-3">
                  <span className="text-sm w-24">{w.english}</span>
                  <div className="border-b border-gray-300 flex-1 h-7 tamil-text" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (ws.id === "ws-parts-of-speech") {
    const wordList = [
      { word: "மரம்", pos: "___" }, { word: "ஓடுகிறான்", pos: "___" },
      { word: "அழகான", pos: "___" }, { word: "மெதுவாக", pos: "___" },
      { word: "தண்ணீர்", pos: "___" }, { word: "படிக்கிறாள்", pos: "___" },
      { word: "பெரிய", pos: "___" }, { word: "நன்றாக", pos: "___" },
    ];
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <p className="text-xs text-gray-500 mb-4">Label each word: <strong>N</strong> = பெயர்ச்சொல் (noun) · <strong>V</strong> = வினைச்சொல் (verb) · <strong>Adj</strong> = உரிச்சொல் (adjective) · <strong>Adv</strong> = வினையுரிச்சொல் (adverb)</p>
        <div className="grid grid-cols-2 gap-4">
          {wordList.map((w, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-xs text-gray-400 w-5">{i + 1}.</span>
              <span className="tamil-text text-base flex-1">{w.word}</span>
              <div className="border border-gray-300 rounded w-16 h-8" />
            </div>
          ))}
        </div>
        <div className="mt-8">
          <p className="text-sm font-medium mb-3">Sort these words into the correct column:</p>
          <p className="text-xs text-gray-500 mb-2 tamil-text">வீடு · சிவப்பான · ஓடுகிறது · விரைவாக · மலை · நடக்கிறாள் · குழந்தை · அழகாக</p>
          <div className="grid grid-cols-4 gap-2 mt-3">
            {["Noun", "Verb", "Adjective", "Adverb"].map((col) => (
              <div key={col} className="border border-gray-300 rounded p-2">
                <p className="text-xs font-semibold text-center mb-2">{col}</p>
                <BlankLines count={3} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (ws.id === "ws-tenses") {
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <p className="text-xs text-gray-500 mb-4">Fill in the correct verb form. Verb used: <span className="tamil-text font-bold">படி</span> (study) and <span className="tamil-text font-bold">வா</span> (come).</p>
        <table className="w-full border-collapse text-sm mt-2">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">Pronoun</th>
              <th className="border border-gray-300 p-2">Past (படி)</th>
              <th className="border border-gray-300 p-2">Present (படி)</th>
              <th className="border border-gray-300 p-2">Future (வா)</th>
            </tr>
          </thead>
          <tbody>
            {pronounsWithTenses.map((row) => (
              <tr key={row.pronoun}>
                <td className="border border-gray-300 p-2 tamil-text text-sm">{row.pronoun}</td>
                <td className="border border-gray-300 p-2 h-10" />
                <td className="border border-gray-300 p-2 h-10" />
                <td className="border border-gray-300 p-2 h-10" />
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6">
          <p className="text-sm font-medium mb-3">Complete these sentences with the correct tense:</p>
          {tenses.map((t) => (
            <div key={t.tense} className="mb-3">
              <p className="text-xs text-gray-500 mb-1">{t.tamilName} — suffix: <span className="tamil-text">{t.suffix}</span></p>
              <div className="flex items-center gap-2">
                <span className="tamil-text text-sm">{t.examples[0].tamil.split(" ")[0]}</span>
                <div className="border-b border-gray-300 flex-1 h-7" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (ws.id === "ws-gender") {
    const nouns = ["குழந்தை", "மரம்", "அவன்", "அவள்", "நாய்", "அம்மா", "அப்பா", "பூ"];
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <p className="text-xs text-gray-500 mb-4">Categories: <strong>ஆண்பால்</strong> (masculine) · <strong>பெண்பால்</strong> (feminine) · <strong>அஃறிணை</strong> (neuter — things/animals)</p>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {["ஆண்பால்", "பெண்பால்", "அஃறிணை"].map((cat) => (
            <div key={cat} className="border border-gray-300 rounded p-3">
              <p className="text-xs font-semibold tamil-text text-center mb-3">{cat}</p>
              <BlankLines count={4} />
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mb-2 tamil-text">Words to sort: {nouns.join(" · ")}</p>
        <div className="mt-6">
          <p className="text-sm font-medium mb-3">Complete with the correct verb ending:</p>
          <div className="space-y-3">
            <div className="flex items-center gap-2"><span className="tamil-text text-sm w-20">அவன்</span><span className="text-sm">வந்த___</span><div className="border-b border-gray-300 flex-1 h-7" /></div>
            <div className="flex items-center gap-2"><span className="tamil-text text-sm w-20">அவள்</span><span className="text-sm">பாடின___</span><div className="border-b border-gray-300 flex-1 h-7" /></div>
            <div className="flex items-center gap-2"><span className="tamil-text text-sm w-20">அது</span><span className="text-sm">உறங்கிய___</span><div className="border-b border-gray-300 flex-1 h-7" /></div>
          </div>
        </div>
      </div>
    );
  }

  if (ws.id === "ws-cases") {
    const basicCases = cases.slice(0, 4);
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <div className="mb-4 grid grid-cols-2 gap-2">
          {basicCases.map((c) => (
            <div key={c.number} className="text-xs bg-gray-50 border border-gray-200 rounded p-2">
              <span className="font-semibold">{c.number}. {c.name}</span> — <span className="tamil-text">{c.suffix}</span>
            </div>
          ))}
        </div>
        <p className="text-sm font-medium mb-3">Add the correct suffix to complete each sentence:</p>
        <div className="space-y-4">
          {basicCases.flatMap((c) => c.examples.slice(0, 1)).map((ex, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-xs text-gray-400 w-5 mt-1">{i + 1}.</span>
              <div className="flex-1">
                <div className="border-b border-gray-300 h-8 tamil-text" />
                <p className="text-xs text-gray-400 mt-1">{ex.english}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (ws.id === "ws-food-match") {
    const left = food.slice(0, 10).map((f) => f.tamil);
    const right = [...food.slice(0, 10).map((f) => f.english)].sort();
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <p className="text-sm text-gray-600 mb-4">Draw a line from each Tamil food word to its English meaning.</p>
        <MatchColumns left={left} right={right} />
        <div className="mt-8 border-t pt-4">
          <p className="text-sm font-medium mb-2">Write a Tamil sentence using three of the food words above:</p>
          <BlankLines count={3} />
        </div>
      </div>
    );
  }

  if (ws.id === "ws-days-match") {
    const left = days.map((d) => d.tamil);
    const right = [...days.map((d) => d.english)].sort();
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <div className="mb-6">
          <p className="text-sm font-medium mb-3">Part A — Match the days:</p>
          <MatchColumns left={left} right={right} />
        </div>
        <div className="mt-6 border-t pt-4">
          <p className="text-sm font-medium mb-3">Part B — Fill in the missing days in order:</p>
          <div className="grid grid-cols-7 gap-1">
            {days.map((d, i) => (
              <div key={i} className="text-center border border-gray-300 rounded p-1">
                {i % 2 === 0
                  ? <span className="tamil-text text-xs">{d.tamil}</span>
                  : <div className="h-6 border-b border-gray-300 tamil-text" />
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (ws.id === "ws-proverbs") {
    const sample = proverbs.slice(0, 6);
    const left = sample.map((p) => p.tamil);
    const right = [...sample.map((p) => p.meaning)].sort();
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <p className="text-sm font-medium mb-3">Part A — Match each proverb to its meaning:</p>
        <div className="space-y-2 mb-4">
          {left.map((p, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-xs text-gray-400 w-5 mt-0.5">{i + 1}.</span>
              <span className="tamil-text text-sm">{p}</span>
            </div>
          ))}
        </div>
        <div className="space-y-2 mb-6">
          {right.map((m, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-xs text-gray-400 w-5 mt-0.5">{String.fromCharCode(65 + i)}.</span>
              <span className="text-xs text-gray-600">{m}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mb-2">My answers: 1__  2__  3__  4__  5__  6__</p>
        <div className="mt-4 border-t pt-4">
          <p className="text-sm font-medium mb-2">Part B — Fill in the missing word:</p>
          <p className="tamil-text text-sm mb-1">கற்றது கைமண் அளவு; கல்லாதது _________.</p>
          <p className="tamil-text text-sm">ஆடாத _________ உண்டா?</p>
        </div>
      </div>
    );
  }

  if (ws.id === "ws-sentence-fill") {
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <p className="text-xs text-gray-500 mb-2">Word bank: <span className="tamil-text">போகிறான் · சாப்பிட்டாள் · படிக்கிறேன் · வந்தது · கொடுத்தார்</span></p>
        <div className="space-y-5 mt-4">
          {[
            "நான் தினமும் தமிழ் ________.",
            "அவன் பள்ளிக்கு _________.",
            "அவள் சாதம் _________.",
            "மழை _________ .",
            "ஆசிரியர் புத்தகம் _________.",
          ].map((s, i) => (
            <div key={i}>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 w-5">{i + 1}.</span>
                <span className="tamil-text text-sm">{s}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Advanced ──────────────────────────────────────────────────────────────

  if (ws.id === "ws-cases-advanced") {
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <div className="grid grid-cols-2 gap-2 mb-4">
          {cases.map((c) => (
            <div key={c.number} className="text-xs bg-gray-50 border border-gray-200 rounded p-1.5">
              <span className="font-semibold">{c.number}. {c.name}</span> — <span className="tamil-text">{c.suffix}</span>
            </div>
          ))}
        </div>
        <p className="text-sm font-medium mb-3">Identify the case and fill in the correct suffix:</p>
        <div className="space-y-4">
          {cases.map((c) => (
            <div key={c.number} className="flex items-start gap-3">
              <span className="text-xs text-gray-400 w-5 mt-1">{c.number}.</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="tamil-text text-sm">{c.examples[0].tamil.replace(/[^\s]+$/, "___")}</span>
                </div>
                <div className="flex gap-4 mt-1">
                  <span className="text-xs text-gray-400">Case: ____________</span>
                  <span className="text-xs text-gray-400">Suffix: <span className="tamil-text">_____</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (ws.id === "ws-sandhi") {
    const pairs = [
      { a: "மரம்", b: "இல்", result: "மரத்தில்", rule: "Vallinam doubling" },
      { a: "கை", b: "ஆல்", result: "கையால்", rule: "Glide insertion (ய்)" },
      { a: "பூ", b: "கள்", result: "பூக்கள்", rule: "Hard consonant doubling" },
      { a: "வீடு", b: "இல்", result: "வீட்டில்", rule: "Vallinam doubling" },
      { a: "தலை", b: "இல்", result: "தலையில்", rule: "Glide insertion (ய்)" },
      { a: "கடல்", b: "ஓரம்", result: "கடலோரம்", rule: "Vowel merger" },
    ];
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <div className="grid grid-cols-1 gap-3">
          {pairs.map((p, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-xs text-gray-400 w-5">{i + 1}.</span>
              <span className="tamil-text text-base w-16">{p.a}</span>
              <span className="text-gray-400">+</span>
              <span className="tamil-text text-base w-16">{p.b}</span>
              <span className="text-gray-400">→</span>
              <div className="border-b border-gray-300 w-32 h-8 tamil-text" />
              <span className="text-xs text-gray-400">Rule: _____________</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (ws.id === "ws-complex-sentences") {
    const pairs = [
      { a: "அவன் பள்ளியில் படித்தான்.", b: "வீட்டிற்கு வந்தான்.", hint: "Use வினையெச்சம் (verbal participle)" },
      { a: "அவள் பாடல் பாடினாள்.", b: "அனைவரும் கேட்டார்கள்.", hint: "Use verbal participle" },
      { a: "நேற்று ஒரு நாய் ஓடியது.", b: "அந்த நாய் என்னுடையது.", hint: "Use பெயரெச்சம் (adjectival participle)" },
    ];
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <div className="space-y-6">
          {pairs.map((p, i) => (
            <div key={i}>
              <div className="flex items-start gap-2 mb-1">
                <span className="text-xs text-gray-400 w-5">{i + 1}.</span>
                <div>
                  <p className="tamil-text text-sm">{p.a}</p>
                  <p className="tamil-text text-sm">{p.b}</p>
                  <p className="text-xs text-gray-400 italic mt-0.5">{p.hint}</p>
                </div>
              </div>
              <div className="ml-7">
                <div className="border-b border-gray-300 h-8 tamil-text" />
                <div className="border-b border-gray-300 h-8 mt-2 tamil-text" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (ws.id === "ws-formal-colloquial") {
    const pairs = [
      { colloquial: "நான் போறேன்", formal: "நான் போகிறேன்" },
      { colloquial: "என்ன சாப்பிட்டீங்க?", formal: "என்ன சாப்பிட்டீர்கள்?" },
      { colloquial: "அவன் வந்திருக்கான்", formal: "அவன் வந்திருக்கிறான்" },
      { colloquial: "படிச்சியா?", formal: "படித்தீர்களா?" },
      { colloquial: "தெரியலை", formal: "தெரியவில்லை" },
      { colloquial: "எங்க போற?", formal: "எங்கே போகிறீர்கள்?" },
    ];
    const left = pairs.map((p) => p.colloquial);
    const right = [...pairs.map((p) => p.formal)].sort();
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <p className="text-sm font-medium mb-3">Part A — Match colloquial to formal:</p>
        <MatchColumns left={left} right={right} />
        <div className="mt-8 border-t pt-4">
          <p className="text-sm font-medium mb-3">Part B — Rewrite in formal Tamil:</p>
          <div className="space-y-4">
            {["நான் கடைக்கு போறேன்.", "அவள் சாப்பிடலை.", "நீ எங்க இருக்க?"].map((s, i) => (
              <div key={i}>
                <p className="tamil-text text-sm mb-1">{i + 1}. {s}</p>
                <div className="border-b border-gray-300 h-8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (ws.id === "ws-comprehension") {
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-5 tamil-text text-sm leading-relaxed">
          ராமன் ஒரு மாணவன். அவன் ஒவ்வொரு நாளும் பள்ளிக்கு போகிறான். அவன் தமிழ், கணிதம், மற்றும் ஆங்கிலம் படிக்கிறான். அவனுக்கு தமிழ் மிகவும் பிடிக்கும். அவன் தினமும் ஒரு மணி நேரம் படிக்கிறான். அவன் ஆசிரியரை மதிக்கிறான்.
        </div>
        <div className="space-y-5">
          {[
            "ராமன் யார்?",
            "அவன் ஒவ்வொரு நாளும் எங்கு போகிறான்?",
            "அவனுக்கு எந்த பாடம் பிடிக்கும்?",
            "அவன் ஒரு நாளில் எத்தனை மணி நேரம் படிக்கிறான்?",
          ].map((q, i) => (
            <div key={i}>
              <p className="text-sm font-medium mb-1 tamil-text">{i + 1}. {q}</p>
              <div className="border-b border-gray-300 h-8" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (ws.id === "ws-thirukkural-copy") {
    const kurals = [
      { kural: "அகர முதல எழுத்தெல்லாம் ஆதி\nபகவன் முதற்றே உலகு.", number: 1, meaning: "As A is the first of letters, God is the beginning of the world." },
      { kural: "கற்க கசடறக் கற்பவை கற்றபின்\nநிற்க அதற்குத் தக.", number: 391, meaning: "Learn thoroughly; then live accordingly." },
      { kural: "யாகாவா ராயினும் நாகாக்க காவாக்கால்\nசோகாப்பர் சொல்லிழுக்குப் பட்டு.", number: 127, meaning: "Guard your tongue above all else; a slip of the tongue causes endless grief." },
    ];
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <div className="space-y-8">
          {kurals.map((k) => (
            <div key={k.number}>
              <div className="flex items-start gap-3 mb-3">
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">குறள் {k.number}</span>
                <p className="tamil-text text-base font-medium leading-relaxed whitespace-pre-line">{k.kural}</p>
              </div>
              <p className="text-xs text-gray-500 italic mb-3">{k.meaning}</p>
              <BlankLines count={3} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (ws.id === "ws-essay") {
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <div className="mb-6">
          <p className="text-sm font-medium mb-3">Essay Frame — தலைப்பு (Title): _________________________</p>
          <div className="space-y-4">
            {[
              { label: "முன்னுரை (Introduction):", starter: "இன்று நான் ___________ பற்றி எழுதுகிறேன்." },
              { label: "உடல் (Body) 1:", starter: "முதலாவதாக, ___________" },
              { label: "உடல் (Body) 2:", starter: "இரண்டாவதாக, ___________" },
              { label: "முடிவுரை (Conclusion):", starter: "இறுதியாக, ___________" },
            ].map((sec, i) => (
              <div key={i}>
                <p className="text-xs font-semibold text-gray-500 mb-1">{sec.label}</p>
                <p className="tamil-text text-sm mb-1">{sec.starter}</p>
                <BlankLines count={2} />
              </div>
            ))}
          </div>
        </div>
        <div className="border-t pt-4">
          <p className="text-sm font-medium mb-2">Formal Letter Frame — முறையான கடிதம்</p>
          <div className="tamil-text text-sm space-y-2">
            <p>அன்பார்ந்த ___________,</p>
            <BlankLines count={4} />
            <p>இப்படிக்கு,</p>
            <p>_________________________</p>
          </div>
        </div>
      </div>
    );
  }

  if (ws.id === "ws-sangam") {
    const tinai = [
      { verse: "யாயும் ஞாயும் யாரா கியரோ...", source: "Kuruntokai 40", tinai: "குறிஞ்சி (Kurinji — mountains, love)" },
      { verse: "அழிவரை நிலைஇய வகையினும்...", source: "Puram poetry", tinai: "புறம் (Puram — heroism)" },
      { verse: "காமம் செப்பாம் கண்ணினும் சிறந்த...", source: "Akam poetry", tinai: "நெய்தல் (Neythal — seashore, longing)" },
    ];
    const left = tinai.map((t) => `"${t.verse}" (${t.source})`);
    const right = [...tinai.map((t) => t.tinai)].sort();
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <p className="text-xs text-gray-500 mb-4">The 5 Tinai (திணை) landscapes: குறிஞ்சி (mountains) · முல்லை (forests) · மருதம் (farmlands) · நெய்தல் (seashore) · பாலை (wasteland)</p>
        <p className="text-sm font-medium mb-3">Part A — Match each verse excerpt to its Tinai:</p>
        <MatchColumns left={left} right={right} />
        <div className="mt-8 border-t pt-4">
          <p className="text-sm font-medium mb-2">Part B — Copy this Sangam verse:</p>
          <p className="tamil-text text-sm bg-gray-50 border border-gray-200 rounded p-3 mb-3">யாயும் ஞாயும் யாரா கியரோ, எந்தையும் நுந்தையும் எம்முறைக் கேளிர்.</p>
          <BlankLines count={4} />
        </div>
      </div>
    );
  }

  // ── Expert ────────────────────────────────────────────────────────────────

  if (ws.id === "ws-verb-mastery") {
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <p className="text-xs text-gray-500 mb-3">Verb: <span className="tamil-text font-bold">செய்</span> (do/make). Fill in all forms.</p>
        <table className="w-full border-collapse text-xs mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-1.5 text-left">Pronoun</th>
              <th className="border border-gray-300 p-1.5">Past</th>
              <th className="border border-gray-300 p-1.5">Present</th>
              <th className="border border-gray-300 p-1.5">Future</th>
              <th className="border border-gray-300 p-1.5">Neg. Past</th>
            </tr>
          </thead>
          <tbody>
            {pronounsWithTenses.map((row) => (
              <tr key={row.pronoun}>
                <td className="border border-gray-300 p-1.5 tamil-text">{row.pronoun}</td>
                <td className="border border-gray-300 p-1.5 h-8" />
                <td className="border border-gray-300 p-1.5 h-8" />
                <td className="border border-gray-300 p-1.5 h-8" />
                <td className="border border-gray-300 p-1.5 h-8" />
              </tr>
            ))}
          </tbody>
        </table>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold mb-2">தொழிற்பெயர் (Verbal noun):</p>
            <div className="border-b border-gray-300 h-8 tamil-text" />
          </div>
          <div>
            <p className="text-xs font-semibold mb-2">வினையெச்சம் (Verbal participle):</p>
            <div className="border-b border-gray-300 h-8 tamil-text" />
          </div>
          <div>
            <p className="text-xs font-semibold mb-2">பெயரெச்சம் past (Adj. participle):</p>
            <div className="border-b border-gray-300 h-8 tamil-text" />
          </div>
          <div>
            <p className="text-xs font-semibold mb-2">பெயரெச்சம் future:</p>
            <div className="border-b border-gray-300 h-8 tamil-text" />
          </div>
        </div>
      </div>
    );
  }

  if (ws.id === "ws-silappatikaram") {
    const verses = [
      { text: "மன்னன் பிழைத்தாலும் மழை பிழைக்கா — The king may err, but rain does not.", label: "Silappatikaram — Mangala Vaazhthu" },
      { text: "ஊழ்வினை உருத்துவந்து ஊட்டும் — Fate, having matured, comes to deliver its due.", label: "Silappatikaram — Madurai Kandam" },
    ];
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <div className="space-y-8">
          {verses.map((v, i) => (
            <div key={i}>
              <p className="text-xs text-gray-400 mb-1">{v.label}</p>
              <p className="tamil-text text-base bg-gray-50 border border-gray-200 rounded p-3 mb-2 leading-relaxed">{v.text}</p>
              <p className="text-sm font-medium mb-2">Copy the verse:</p>
              <BlankLines count={3} />
              <div className="mt-3 space-y-2">
                <p className="text-xs font-medium">Analysis questions:</p>
                <p className="text-xs">1. What theme does this verse address? ____________________________</p>
                <p className="text-xs">2. Identify one poetic device used: _____________________________</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (ws.id === "ws-prosody") {
    const verses = [
      { text: "அகர முதல எழுத்தெல்லாம் ஆதி\nபகவன் முதற்றே உலகு.", metre: "வெண்பா (Venba)", label: "Thirukkural 1" },
      { text: "யாயும் ஞாயும் யாரா கியரோ\nஎந்தையும் நுந்தையும் எம்முறைக் கேளிர்.", metre: "ஆசிரியப்பா (Aasiriyappa)", label: "Kuruntokai 40" },
    ];
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <p className="text-xs text-gray-500 mb-4">Mark asai (அசை) boundaries with | in the verse. Then identify the metre.</p>
        <div className="space-y-8">
          {verses.map((v, i) => (
            <div key={i}>
              <p className="text-xs text-gray-400 mb-1">{v.label}</p>
              <p className="tamil-text text-base bg-gray-50 border border-gray-200 rounded p-3 mb-2 whitespace-pre-line leading-loose">{v.text}</p>
              <div className="flex items-center gap-4">
                <span className="text-xs">Metre name:</span>
                <div className="border-b border-gray-300 flex-1 h-7" />
              </div>
              <div className="mt-2 flex items-center gap-4">
                <span className="text-xs">No. of asai per line:</span>
                <div className="border-b border-gray-300 w-20 h-7" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (ws.id === "ws-translation") {
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <div className="space-y-7">
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1">Task 1 — Classical Tamil → English:</p>
            <p className="tamil-text text-sm bg-gray-50 border border-gray-200 rounded p-2 mb-2">யாதும் ஊரே யாவரும் கேளிர். (Purananuru 192)</p>
            <BlankLines count={3} />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1">Task 2 — Modern Tamil → English:</p>
            <p className="tamil-text text-sm bg-gray-50 border border-gray-200 rounded p-2 mb-2">தமிழ் மொழி உலகின் மிகவும் பழமையான மொழிகளில் ஒன்று. இது திராவிட மொழிக் குடும்பத்தைச் சேர்ந்தது.</p>
            <BlankLines count={3} />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1">Task 3 — English → Formal Tamil:</p>
            <p className="text-sm bg-gray-50 border border-gray-200 rounded p-2 mb-2">"Tamil is one of the oldest classical languages in the world, with a literary tradition spanning over 2,000 years."</p>
            <BlankLines count={4} />
          </div>
        </div>
      </div>
    );
  }

  if (ws.id === "ws-dialects") {
    const left = ["நான் போறேன் (Chennai)", "நான் போகிறன் (Jaffna)", "நான் போயிட்டே (Madurai)", "நான் போகுறேன் (Sri Lanka)"];
    const right = ["நான் போகிறேன் (standard) — A", "நான் போகிறேன் (standard) — B", "நான் போய்விட்டேன் (standard)", "நான் போகிறேன் (standard) — C"];
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <p className="text-sm font-medium mb-3">Part A — Match each dialect form to its standard Tamil equivalent:</p>
        <MatchColumns left={left} right={right} />
        <div className="mt-8 border-t pt-4">
          <p className="text-sm font-medium mb-3">Part B — Identify the dialect (Chennai / Jaffna / Madurai / Sri Lanka):</p>
          <div className="space-y-3">
            {["அவன் வந்திட்டான்.", "அவன் வந்திட்டிருக்கிறான்.", "அவன் வந்திட்டே இருக்கான்.", "அவன் வந்திருக்கிறான்."].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xs text-gray-400 w-5">{i + 1}.</span>
                <span className="tamil-text text-sm flex-1">{s}</span>
                <div className="border-b border-gray-300 w-28 h-7" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (ws.id === "ws-linguistics") {
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <p className="text-sm font-medium mb-3">Part A — Script Evolution Timeline (fill in the blanks):</p>
        <div className="flex items-center gap-2 mb-6 overflow-x-auto">
          {["Tamil Brahmi\n(3rd c. BCE)", "___________\n(Vatteluttu)", "Medieval Tamil\n(8th c. CE)", "___________\n(Modern)"].map((stage, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="border border-gray-300 rounded p-2 text-center text-xs whitespace-pre-line min-w-[80px]">{stage}</div>
              {i < 3 && <span className="text-gray-400">→</span>}
            </div>
          ))}
        </div>
        <div className="border-t pt-4">
          <p className="text-sm font-medium mb-3">Part B — Match Tolkāppiyam terms to modern equivalents:</p>
          <MatchColumns
            left={["பெயர் (peyar)", "வினை (vinai)", "இடை (idai)", "உரி (uri)"]}
            right={["adjective / adverb", "noun", "particle / postposition", "verb"]}
          />
        </div>
      </div>
    );
  }

  if (ws.id === "ws-contemporary") {
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <div className="bg-gray-50 border border-gray-200 rounded p-3 mb-4 tamil-text text-sm leading-relaxed">
          தமிழ்நாட்டில் இன்று பல்வேறு துறைகளில் வளர்ச்சி ஏற்பட்டுள்ளது. தகவல் தொழில்நுட்பம், கல்வி மற்றும் சுகாதாரத் துறைகளில் குறிப்பிடத்தக்க மாற்றங்கள் நிகழ்ந்துள்ளன. மாணவர்கள் இன்று நவீன தொழில்நுட்பத்தைப் பயன்படுத்தி கற்றுக்கொள்கின்றனர்.
        </div>
        <p className="text-xs text-gray-400 mb-4">Circle any formal register vocabulary you find in the passage above.</p>
        <div className="space-y-4">
          {[
            "இந்த கட்டுரை எந்த தலைப்பில் உள்ளது?",
            "கட்டுரையில் குறிப்பிடப்படும் மூன்று துறைகள் யாவை?",
            "ஒரு வாக்கியத்தை உங்கள் சொந்த வார்த்தைகளில் மாற்றி எழுதுங்கள்:",
          ].map((q, i) => (
            <div key={i}>
              <p className="text-sm font-medium mb-1 tamil-text">{i + 1}. {q}</p>
              <BlankLines count={2} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (ws.id === "ws-creative-writing") {
    return (
      <div className="print-page">
        <PrintHeader ws={ws} />
        <div className="grid grid-cols-3 gap-3 mb-6 text-xs">
          {["கதாபாத்திரங்கள் (Characters):", "இடம் (Setting):", "நிகழ்வு (Plot):"].map((label) => (
            <div key={label} className="border border-gray-300 rounded p-2">
              <p className="font-semibold mb-1">{label}</p>
              <BlankLines count={3} />
            </div>
          ))}
        </div>
        <p className="text-sm font-medium mb-2">கதை தொடங்குக (Begin your story — minimum 150 words):</p>
        <p className="tamil-text text-sm text-gray-400 mb-2">ஒரு நாள் காலையில், _______________________</p>
        <BlankLines count={12} />
      </div>
    );
  }

  // Fallback for any worksheet without a specific renderer
  return (
    <div className="print-page">
      <PrintHeader ws={ws} />
      <p className="text-sm text-gray-600 mb-6">{ws.description}</p>
      <BlankLines count={16} />
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

function WorksheetsPage() {
  const searchParams = useSearchParams();
  const [levelFilter, setLevelFilter] = useState<Level>("all");
  const [layoutFilter, setLayoutFilter] = useState<Layout>("all");
  const [printing, setPrinting] = useState<string | null>(null);

  useEffect(() => {
    const lvl = searchParams.get("level") as Level | null;
    if (lvl && (["novice", "intermediate", "advanced", "expert"] as string[]).includes(lvl)) {
      setLevelFilter(lvl as Level);
    }
  }, [searchParams]);

  const filtered = worksheets.filter((ws) => {
    if (levelFilter !== "all" && ws.level !== levelFilter) return false;
    if (layoutFilter !== "all" && ws.layout !== layoutFilter) return false;
    return true;
  });

  const handlePrint = (wsId: string) => {
    setPrinting(wsId);
    setTimeout(() => { window.print(); setPrinting(null); }, 300);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Printable Worksheets</h1>
        <p className="text-gray-500 text-sm mt-1">Print directly from your browser — no PDF library needed</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-blue-800 no-print">
        <strong>How to print:</strong> Click "Print Worksheet" on any card. Your browser's print dialog will open — choose your printer or "Save as PDF". Use landscape mode for grids and tables.
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6 no-print">
        <div className="flex flex-wrap gap-1">
          {(["all", "novice", "intermediate", "advanced", "expert"] as Level[]).map((l) => (
            <button key={l} onClick={() => setLevelFilter(l)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${levelFilter === l ? "bg-orange-500 text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-orange-300"}`}>
              {l === "all" ? "All Levels" : l.charAt(0).toUpperCase() + l.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-1">
          {(["all", "tracing", "match", "fill-blank", "copy"] as Layout[]).map((t) => (
            <button key={t} onClick={() => setLayoutFilter(t)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${layoutFilter === t ? "bg-orange-500 text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-orange-300"}`}>
              {t === "all" ? "All Types" : t}
            </button>
          ))}
        </div>
      </div>

      {/* Hidden print layer */}
      {printing && (
        <div className="hidden print:block">
          {worksheets.filter((ws) => ws.id === printing).map((ws) => (
            <WorksheetPrintContent key={ws.id} ws={ws} />
          ))}
        </div>
      )}

      {/* Worksheet grid */}
      <div className="grid gap-4 sm:grid-cols-2 no-print">
        {filtered.map((ws) => {
          const lc = levelColors[ws.level] ?? "bg-gray-50 border-gray-200";
          const tc = layoutColors[ws.layout] ?? "bg-gray-100 text-gray-700";
          return (
            <div key={ws.id} className={`rounded-2xl border p-5 ${lc}`}>
              <div className="flex items-start gap-2 mb-2">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tc}`}>{ws.layout}</span>
                <span className="text-xs text-gray-500 capitalize ml-auto">{ws.level}</span>
              </div>
              <h2 className="font-bold text-gray-900 mb-0.5">{ws.title}</h2>
              <p className="text-sm tamil-text text-gray-600 mb-2">{ws.tamilTitle}</p>
              <p className="text-xs text-gray-500 mb-1"><strong>Topic:</strong> {ws.topic}</p>
              <p className="text-xs text-gray-500 mb-4">{ws.description}</p>
              <div className="bg-white/70 rounded-lg p-3 mb-4 text-xs text-gray-600 border border-white/60">
                <strong>Print tip:</strong> {ws.printInstructions}
              </div>
              <button
                onClick={() => handlePrint(ws.id)}
                className="w-full py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors"
              >
                🖨️ Print Worksheet
              </button>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p>No worksheets match your filters.</p>
        </div>
      )}
    </div>
  );
}

export default function WorksheetsPageWrapper() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto px-4 py-16 text-center text-gray-400">Loading...</div>}>
      <WorksheetsPage />
    </Suspense>
  );
}
