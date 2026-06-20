import Link from "next/link";
import { topics } from "@/data/curriculum/topics";

const levels = [
  {
    id: "novice",
    number: "01",
    name: "Novice",
    tamilName: "தொடக்கநிலை",
    duration: "8 lessons",
    description: "Script & Survival Basics — vowels, consonants, numbers, and essential vocabulary",
    highlights: ["12 Vowels & 18 Consonants", "Tamil numerals 1–100", "Greetings, colors, family", "Question words"],
  },
  {
    id: "intermediate",
    number: "02",
    name: "Intermediate",
    tamilName: "இடைநிலை",
    duration: "12 lessons",
    description: "Reading, Writing, Functional Grammar — combine letters, read sentences, understand tenses",
    highlights: ["216 Combined Letters", "3 Tenses & Gender", "Conversational phrases", "Tamil proverbs"],
  },
  {
    id: "advanced",
    number: "03",
    name: "Advanced",
    tamilName: "உயர்நிலை",
    duration: "12 lessons",
    description: "Mastery & Classical Tamil — grammar cases, sandhi, Thirukkural, essay writing",
    highlights: ["All 8 Grammatical Cases", "Sandhi rules", "Thirukkural (30 couplets)", "Essay writing"],
  },
  {
    id: "expert",
    number: "04",
    name: "Expert",
    tamilName: "வல்லுநர் நிலை",
    duration: "12 lessons",
    description: "Classical Mastery & Literary Tamil — Silappatikaram, prosody, translation, dialects",
    highlights: ["Silappatikaram epic", "Tamil metres (யாப்பு)", "Dialects & linguistics", "Creative & literary writing"],
  },
];

export default function HomePage() {
  const counts: Record<string, number> = {
    novice: topics.filter((t) => t.level === "novice").length,
    intermediate: topics.filter((t) => t.level === "intermediate").length,
    advanced: topics.filter((t) => t.level === "advanced").length,
    expert: topics.filter((t) => t.level === "expert").length,
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <p className="text-7xl tamil-text font-bold text-orange-600 leading-none mb-2">தமிழ் பள்ளி</p>
        <h1 className="text-xl font-semibold text-gray-700 mb-4">Tamil Palli</h1>
        <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
          A complete Tamil curriculum for all levels — script, grammar, proverbs, and classical literature. No account required.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/learn/novice/vowels" className="px-5 py-2.5 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors text-sm">
            Start Learning
          </Link>
          <Link href="/curriculum" className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-colors text-sm">
            Browse Curriculum
          </Link>
        </div>
      </div>

      {/* Level Cards */}
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Four Levels</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-16">
        {levels.map((level) => (
          <div key={level.id} className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col hover:border-orange-300 hover:shadow-sm transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-orange-400 tracking-widest">{level.number}</span>
              <span className="text-xs text-gray-400">{level.duration}</span>
            </div>
            <div className="font-bold text-gray-900 mb-0.5">{level.name}</div>
            <div className="text-sm tamil-text text-orange-500 mb-3">{level.tamilName}</div>
            <p className="text-gray-500 text-xs mb-4 leading-relaxed">{level.description}</p>
            <ul className="space-y-1.5 mb-5 flex-1">
              {level.highlights.map((h) => (
                <li key={h} className="text-xs text-gray-500 flex items-start gap-2">
                  <span className="text-orange-300 shrink-0 mt-px">—</span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="text-xs text-gray-400 mb-3">{counts[level.id]} topics</div>
            <Link
              href={`/curriculum?level=${level.id}`}
              className="text-center rounded-lg py-2 px-4 font-medium text-sm border border-orange-200 text-orange-700 hover:bg-orange-50 transition-colors"
            >
              Start {level.name}
            </Link>
          </div>
        ))}
      </div>

      {/* About */}
      <div className="border-t border-gray-100 pt-8 grid sm:grid-cols-2 gap-6 text-sm text-gray-500">
        <div>
          <p className="mb-2">Content based on Tamil Nadu State Board textbooks and Tamil Virtual Academy standards. All Tamil script is accuracy-verified.</p>
          <p>Audio uses browser speech synthesis with the <code className="text-xs bg-gray-100 px-1 rounded">ta-IN</code> locale — works in Chrome, Edge, and Safari.</p>
        </div>
        <div>
          <p className="mb-2">Progress is saved in browser local storage — no account required.</p>
          <p>Worksheets can be printed directly from your browser (File → Print → Save as PDF).</p>
        </div>
      </div>
    </div>
  );
}
