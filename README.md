# Tamil Palli — தமிழ் பள்ளி

A standalone web app for parents to plan and deliver a structured Tamil curriculum to school-age and teenage children. No accounts, no backend, no internet connection required during use.

**Live:** Deploy to Vercel with one click — it's a fully static export.

---

## What It Is

Tamil Palli (தமிழ் பள்ளி — "Tamil School") provides:

- A **pre-loaded curriculum** researched from Tamil Nadu State Board pedagogy and Tamil Virtual Academy standards
- **Interactive exercises** — letter recognition, matching, fill-in-the-blank, sentence building
- **Audio pronunciation** via the Web Speech API (`ta-IN` locale) on every letter, word, and sentence
- **Printable worksheets** — tracing sheets, match sheets, grammar fill-in-blanks, Thirukkural copy sheets
- **Browser-local progress tracking** — no login, no server, saved in `localStorage`
- **32-week recommended syllabus** with checkable weekly goals

---

## Curriculum

Three levels mapped to script literacy → functional Tamil → mastery:

| Level | Duration | Focus |
|---|---|---|
| **Novice** (தொடக்கநிலை) | ~8 weeks | 12 vowels, 18 consonants, aytham, numerals 1–100, greetings, colors, family, question words, Grantha letters |
| **Intermediate** (இடைநிலை) | ~12 weeks | 216 combined letters, reading, parts of speech, 3 tenses, gender, first 4 cases, vocabulary, proverbs, dialogues |
| **Advanced** (உயர்நிலை) | ~12 weeks | All 8 cases, sandhi rules, complex sentences, formal vs colloquial Tamil, reading comprehension, Thirukkural, essay writing, Sangam literature |

The weekly plan is a **recommended pace only** — learners can move faster or skip ahead via the Topic Library.

---

## Features

### Exercises (5 types)
- Letter Recognition — see a letter, pick the correct name from 4 choices
- Match the Pair — match Tamil letter to romanization
- Fill in the Blank — complete a word or sentence
- Sentence Builder — drag words into correct order
- Reading Comprehension — passage + multiple choice (Advanced)

### Tests
- End-of-topic quiz: 5–10 questions
- End-of-level assessment: up to 20 questions
- Instant score display; wrong answers shown with correct answer
- Scores saved to `localStorage` and visible on the Progress page

### Worksheets (Printable)
- Letter tracing sheets — vowels and consonants with dotted guide lines
- Vocabulary match sheets
- Grammar fill-in-blank sheets (tenses, cases)
- Thirukkural copy sheets
- Triggered via browser Print dialog → user saves as PDF
- No PDF library required

### Audio Pronunciation
- Web Speech API with `ta-IN` locale
- Speaker button on every letter, word, and example sentence
- Silent graceful fallback on unsupported browsers
- Works natively in Chrome, Edge, Safari

### Parent Curriculum View (`/curriculum`)
- **Weekly Plan tab** — 32-week recommended syllabus, checkbox per week
- **Topic Library tab** — all topics browsable by level and tag, linked directly to lessons and worksheets

---

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 15 (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Audio | Web Speech API (`ta-IN` locale) |
| Worksheets | Print CSS (`@media print`) |
| State | `localStorage` via custom React hook |
| Deployment | Vercel free tier (static export) |

---

## Project Structure

```
/app                    Next.js App Router pages
  /curriculum           Parent dashboard (weekly plan + topic library)
  /learn/[level]/[topic] Lesson pages
  /exercises/[level]/[type] Interactive exercises
  /tests/[level]        Quizzes and assessments
  /worksheets           Printable worksheet browser
  /progress             Progress dashboard

/components
  AudioButton.tsx       Web Speech API pronunciation button
  LetterCard.tsx        Reusable Tamil letter display card
  Nav.tsx               Site navigation

/data
  /letters              vowels.ts, consonants.ts, aytham.ts, combined.ts, vada-ezhuthukal.ts
  /vocabulary           novice.ts, intermediate.ts, phrases.ts, proverbs.ts
  /grammar              tenses.ts, cases.ts, gender.ts, sandhi.ts
  /exercises            definitions.ts
  /worksheets           definitions.ts
  /curriculum           weekly-plan.ts, topics.ts
  /thirukkural          selected.ts (~30 couplets with commentary)

/hooks
  useProgress.ts        localStorage progress state
  useAudio.ts           Web Speech API wrapper
```

### localStorage State Shape

```ts
type ProgressState = {
  completedTopics: string[]            // topic IDs
  testScores: Record<string, number>   // topicId → score (0–100)
  weeklyChecks: Record<string, boolean> // "week-{n}" → done
}
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

This produces a fully static export in `/out` — deploy anywhere that serves static files (Vercel, Netlify, GitHub Pages, S3).

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Import this repository and Vercel will detect Next.js automatically. No environment variables required.

---

## Content Sources

All content is based on:
- Tamil Nadu State Board textbooks (Grades 1–12)
- Tamil Virtual Academy (tamilvu.org) — official Tamil language authority
- Thirukkural with commentary from authenticated scholarly sources
- Sandhi rules from standard Tamil grammar references (நன்னூல் tradition)

All Tamil script in data files is verified for accuracy. No auto-generated Tamil content.

---

## Transliteration System

Informal phonetic transliteration — optimized for readability by children and non-linguists, not ISO 15919:

| Tamil | Transliteration |
|---|---|
| அ / ஆ | a / aa |
| இ / ஈ | i / ii |
| உ / ஊ | u / uu |
| எ / ஏ | e / ee |
| ஒ / ஓ | o / oo |
| ஐ | ai |
| ஔ | au |

---

## Contributing

Contributions welcome — especially:
- Additional exercise questions and worksheet content
- More Thirukkural selections with commentary
- Corrections to Tamil script or transliteration
- Additional vocabulary by topic

Please open an issue before submitting large content changes so accuracy can be verified.

---

## License

MIT — see `LICENSE` file.
