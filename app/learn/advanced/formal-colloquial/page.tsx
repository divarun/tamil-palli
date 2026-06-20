"use client";

import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";

const comparisons = [
  { context: "Greeting", formal: "வணக்கம்", colloquial: "ஏய் / என்னாச்சு?", fRoman: "vanakkam", cRoman: "ey / ennaachu?", note: "Formal is always safe; colloquial is used between friends" },
  { context: "I ate", formal: "நான் சாப்பிட்டேன்", colloquial: "சாப்பிட்டேன்", fRoman: "naan saappitten", cRoman: "saappitten", note: "Spoken Tamil often drops the subject pronoun" },
  { context: "What are you doing?", formal: "நீங்கள் என்ன செய்கிறீர்கள்?", colloquial: "என்ன பண்றே?", fRoman: "neengal enna seikireeragal?", cRoman: "enna panre?", note: "Colloquial uses completely different verb forms" },
  { context: "He is not coming", formal: "அவர் வருவதில்லை", colloquial: "அவன் வரல", fRoman: "avar varuvadhillai", cRoman: "avan varal", note: "Colloquial negative is formed differently (வரல instead of வருவதில்லை)" },
  { context: "I don't know", formal: "எனக்குத் தெரியவில்லை", colloquial: "தெரியல", fRoman: "enakku theriyavillai", cRoman: "theriyala", note: "-வில்லை (formal negative) contracts to -ல in colloquial" },
  { context: "Where are you going?", formal: "நீங்கள் எங்கே போகிறீர்கள்?", colloquial: "எங்க போற?", fRoman: "neengal enge pogireeragal?", cRoman: "enga pore?", note: "எங்கே → எங்க; verb ending shortened" },
  { context: "I am coming", formal: "நான் வருகிறேன்", colloquial: "வறேன்", fRoman: "naan varugireen", cRoman: "varen", note: "Present marker -கிற- is compressed; subject pronoun dropped" },
  { context: "Come here (polite)", formal: "இங்கே வாருங்கள்", colloquial: "இங்க வாங்க", fRoman: "inge vaarungal", cRoman: "inga vaanga", note: "இங்கே → இங்க; வாருங்கள் → வாங்க (colloquial polite imperative)" },
  { context: "Did you eat?", formal: "நீங்கள் சாப்பிட்டீர்களா?", colloquial: "சாப்பிட்டியா?", fRoman: "neengal saappitteergalaa?", cRoman: "saappittiyaa?", note: "Formal plural -கள்+ஆ? reduced to -ியா? in colloquial" },
  { context: "It is raining", formal: "மழை பெய்கிறது", colloquial: "மழை பெய்யுது", fRoman: "mazhai peykidhu", cRoman: "mazhai peyyudhu", note: "Present marker -கிறது → -உது; one of the most consistent colloquial shifts" },
  { context: "He went", formal: "அவர் சென்றார்", colloquial: "அவன் போனான்", fRoman: "avar sendraar", cRoman: "avan poonaan", note: "Formal uses செல் (literary verb for 'go'); colloquial uses போ entirely" },
  { context: "I understand", formal: "எனக்குப் புரிகிறது", colloquial: "புரியுது", fRoman: "enakku purigiradhu", cRoman: "puriyudhu", note: "-கிறது → -யுது; எனக்கு (to me) dropped in casual speech" },
  { context: "I don't have it", formal: "என்னிடம் இல்லை", colloquial: "என்கிட்ட இல்ல", fRoman: "ennidham illai", cRoman: "enkitta illa", note: "என்னிடம் (formal postposition) → என்கிட்ட; இல்லை → இல்ல" },
  { context: "She is beautiful", formal: "அவள் அழகாக இருக்கிறாள்", colloquial: "அவ அழகா இருக்கா", fRoman: "aval azhagaaha irukkiraal", cRoman: "ava azhagaa irukkaa", note: "அவள் → அவ (pronoun shortening); adverbial -க dropped; verb suffix shortened" },
];

export default function FormalColloquialPage() {
  const { markTopicComplete, isTopicComplete } = useProgress();
  const done = isTopicComplete("adv-formal-vs-colloquial");
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/curriculum" className="hover:text-orange-600">Curriculum</Link><span>›</span><span>Advanced</span><span>›</span><span className="text-gray-800">Formal vs Colloquial</span>
      </div>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Formal vs Colloquial Tamil</h1>
          <p className="tamil-text text-orange-600 text-lg">செந்தமிழ் vs பேச்சுத் தமிழ்</p>
        </div>
        <button onClick={() => markTopicComplete("adv-formal-vs-colloquial")} className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${done ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}>
          {done ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
        Tamil has a significant <strong>diglossia</strong> — the formal written language (செந்தமிழ்) and the spoken colloquial language (பேச்சுத் தமிழ்) are quite different. Both are important: formal Tamil is used in writing, education, news, and official settings; colloquial is used in conversation.
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-3 text-gray-600">Context</th>
              <th className="text-left p-3 text-blue-600">Formal (Written)</th>
              <th className="text-left p-3 text-emerald-600">Colloquial (Spoken)</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((row, i) => (
              <tr key={row.context} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                <td className="p-3 text-gray-600 font-medium">{row.context}</td>
                <td className="p-3">
                  <div className="tamil-text text-blue-900 font-medium">{row.formal}</div>
                  <div className="text-xs text-blue-500">{row.fRoman}</div>
                </td>
                <td className="p-3">
                  <div className="tamil-text text-emerald-900 font-medium">{row.colloquial}</div>
                  <div className="text-xs text-emerald-500">{row.cRoman}</div>
                  <div className="text-xs text-gray-400 mt-1">{row.note}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-3">
        <Link href="/learn/advanced/comprehension" className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition-colors">Next: Reading Comprehension →</Link>
      </div>
    </div>
  );
}
