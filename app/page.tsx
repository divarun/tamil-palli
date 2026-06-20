import Link from "next/link";
import { topics } from "@/data/curriculum/topics";

const levels = [
  {
    id: "novice",
    name: "Novice",
    tamilName: "தொடக்கநிலை",
    badge: "🌱",
    duration: "8 lessons",
    color: "emerald",
    description: "Script & Survival Basics — learn all vowels, consonants, numbers, and basic vocabulary",
    highlights: ["12 Vowels & 18 Consonants", "Tamil numerals 1–100", "Greetings, colors, family", "Question words"],
  },
  {
    id: "intermediate",
    name: "Intermediate",
    tamilName: "இடைநிலை",
    badge: "📖",
    duration: "12 lessons",
    color: "blue",
    description: "Reading, Writing, Functional Grammar — combine letters, read sentences, understand tenses",
    highlights: ["216 Combined Letters", "3 Tenses & Gender", "Conversational phrases", "Tamil proverbs"],
  },
  {
    id: "advanced",
    name: "Advanced",
    tamilName: "உயர்நிலை",
    badge: "🎓",
    duration: "12 lessons",
    color: "purple",
    description: "Mastery & Classical Tamil — all grammar cases, sandhi rules, Thirukkural, essay writing",
    highlights: ["All 8 Grammatical Cases", "Sandhi rules", "Thirukkural (30 couplets)", "Essay writing"],
  },
  {
    id: "expert",
    name: "Expert",
    tamilName: "வல்லுநர் நிலை",
    badge: "🏆",
    duration: "12 lessons",
    color: "rose",
    description: "Classical Mastery & Literary Tamil — Silappatikaram, Tamil prosody, translation, dialects, and creative writing",
    highlights: ["Silappatikaram epic", "Tamil metres (யாப்பு)", "Dialects & linguistics", "Creative & literary writing"],
  },
];

const colorMap: Record<string, { bg: string; border: string; badge: string; btn: string }> = {
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    btn: "bg-emerald-600 hover:bg-emerald-700 text-white",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    btn: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    badge: "bg-purple-100 text-purple-700",
    btn: "bg-purple-600 hover:bg-purple-700 text-white",
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    badge: "bg-rose-100 text-rose-700",
    btn: "bg-rose-600 hover:bg-rose-700 text-white",
  },
};

export default function HomePage() {
  const counts: Record<string, number> = {
    novice: topics.filter((t) => t.level === "novice").length,
    intermediate: topics.filter((t) => t.level === "intermediate").length,
    advanced: topics.filter((t) => t.level === "advanced").length,
    expert: topics.filter((t) => t.level === "expert").length,
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🏫</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Tamil Palli</h1>
        <p className="text-2xl text-orange-600 font-medium mb-4 tamil-text">தமிழ் பள்ளி</p>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A complete Tamil curriculum for all levels. Learn Tamil script, grammar, proverbs, and classical literature — no accounts, no internet required.
        </p>
      </div>

      {/* Level Cards */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Choose Your Level</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {levels.map((level) => {
          const c = colorMap[level.color];
          return (
            <div key={level.id} className={`rounded-2xl border-2 p-6 ${c.bg} ${c.border} flex flex-col`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{level.badge}</span>
                <div>
                  <div className="font-bold text-lg text-gray-900">{level.name}</div>
                  <div className="text-sm tamil-text">{level.tamilName}</div>
                </div>
                <span className={`ml-auto text-xs font-medium px-2 py-1 rounded-full ${c.badge}`}>{level.duration}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{level.description}</p>
              <ul className="space-y-1 mb-5">
                {level.highlights.map((h) => (
                  <li key={h} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">·</span>
                    {h}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mb-4">{counts[level.id]} topics</p>
              <Link
                href={`/curriculum?level=${level.id}`}
                className={`mt-auto text-center rounded-xl py-2 px-4 font-semibold text-sm transition-colors ${c.btn}`}
              >
                Start {level.name}
              </Link>
            </div>
          );
        })}
      </div>

      {/* Quick Nav */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Access</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
        {[
          { href: "/curriculum", icon: "📅", label: "Lesson Plan", tamil: false },
          { href: "/worksheets", icon: "📄", label: "Worksheets", tamil: false },
          { href: "/progress", icon: "📊", label: "Progress", tamil: false },
          { href: "/learn/novice/vowels", icon: "அ", label: "Start: Vowels", tamil: true },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-xl border border-orange-200 bg-white hover:bg-orange-50 p-4 flex flex-col items-center gap-2 text-center transition-colors"
          >
            <span className={`text-2xl ${item.tamil ? "tamil-text" : ""}`}>{item.icon}</span>
            <span className="text-sm font-medium text-gray-700">{item.label}</span>
          </Link>
        ))}
      </div>

      {/* About */}
      <div className="bg-white rounded-2xl border border-orange-100 p-6">
        <h2 className="font-semibold text-gray-800 mb-3">About Tamil Palli</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <p className="mb-2">Content is based on Tamil Nadu State Board textbooks and Tamil Virtual Academy standards. All Tamil script is verified for accuracy.</p>
            <p>Audio pronunciation uses your browser's built-in speech synthesis with the <code className="text-xs bg-gray-100 px-1 rounded">ta-IN</code> locale — works in Chrome, Edge, and Safari.</p>
          </div>
          <div>
            <p className="mb-2">Progress is saved in your browser's local storage — no account required.</p>
            <p>Worksheets can be printed directly from your browser with clean print layouts (File → Print → Save as PDF).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
