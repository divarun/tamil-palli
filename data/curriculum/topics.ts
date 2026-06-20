export type Level = "novice" | "intermediate" | "advanced" | "expert";

export type Topic = {
  id: string;
  title: string;
  tamilTitle: string;
  level: Level;
  tags: string[];
  lessonRoute: string;
  worksheetIds: string[];
  estimatedLessons: number;
  order: number;
};

export const topics: Topic[] = [
  // Novice
  { id: "novice-vowels", title: "12 Vowels", tamilTitle: "உயிர் எழுத்துக்கள்", level: "novice", tags: ["letters", "script"], lessonRoute: "/learn/novice/vowels", worksheetIds: ["ws-vowel-tracing", "ws-vowel-match"], estimatedLessons: 2, order: 1 },
  { id: "novice-consonants", title: "18 Consonants", tamilTitle: "மெய் எழுத்துக்கள்", level: "novice", tags: ["letters", "script"], lessonRoute: "/learn/novice/consonants", worksheetIds: ["ws-consonant-tracing"], estimatedLessons: 2, order: 2 },
  { id: "novice-aytham", title: "Aytham", tamilTitle: "ஆய்தம்", level: "novice", tags: ["letters", "script"], lessonRoute: "/learn/novice/aytham", worksheetIds: [], estimatedLessons: 1, order: 3 },
  { id: "novice-numbers", title: "Tamil Numerals 1–100", tamilTitle: "தமிழ் எண்கள்", level: "novice", tags: ["numbers", "vocabulary"], lessonRoute: "/learn/novice/numbers", worksheetIds: ["ws-numbers"], estimatedLessons: 1, order: 4 },
  { id: "novice-greetings", title: "Greetings & Basic Phrases", tamilTitle: "வணக்கம் & அடிப்படை சொற்றொடர்கள்", level: "novice", tags: ["vocabulary", "speaking"], lessonRoute: "/learn/novice/greetings", worksheetIds: ["ws-greetings-match"], estimatedLessons: 1, order: 5 },
  { id: "novice-colors", title: "Colors", tamilTitle: "நிறங்கள்", level: "novice", tags: ["vocabulary"], lessonRoute: "/learn/novice/colors", worksheetIds: ["ws-colors-match"], estimatedLessons: 1, order: 6 },
  { id: "novice-body", title: "Body Parts", tamilTitle: "உடல் உறுப்புகள்", level: "novice", tags: ["vocabulary"], lessonRoute: "/learn/novice/body", worksheetIds: [], estimatedLessons: 1, order: 7 },
  { id: "novice-family", title: "Family Members", tamilTitle: "குடும்பத்தினர்", level: "novice", tags: ["vocabulary"], lessonRoute: "/learn/novice/family", worksheetIds: [], estimatedLessons: 1, order: 8 },
  { id: "novice-questions", title: "Question Words", tamilTitle: "வினா சொற்கள்", level: "novice", tags: ["vocabulary", "grammar"], lessonRoute: "/learn/novice/questions", worksheetIds: [], estimatedLessons: 1, order: 9 },
  { id: "novice-word-formation", title: "Word Formation", tamilTitle: "சொல் உருவாக்கம்", level: "novice", tags: ["script", "grammar"], lessonRoute: "/learn/novice/word-formation", worksheetIds: ["ws-word-formation"], estimatedLessons: 1, order: 10 },
  { id: "novice-vada", title: "Grantha Letters", tamilTitle: "வட எழுத்துக்கள்", level: "novice", tags: ["letters", "script"], lessonRoute: "/learn/novice/vada-ezhuthukal", worksheetIds: [], estimatedLessons: 1, order: 11 },
  // Intermediate
  { id: "int-combined", title: "216 Combined Letters", tamilTitle: "உயிர்மெய் எழுத்துக்கள்", level: "intermediate", tags: ["letters", "script"], lessonRoute: "/learn/intermediate/combined", worksheetIds: ["ws-combined-tracing"], estimatedLessons: 3, order: 1 },
  { id: "int-reading", title: "Reading Progression", tamilTitle: "படிக்கும் திறன்", level: "intermediate", tags: ["reading"], lessonRoute: "/learn/intermediate/reading", worksheetIds: ["ws-reading-words"], estimatedLessons: 2, order: 2 },
  { id: "int-parts-of-speech", title: "Parts of Speech", tamilTitle: "சொல்லின் வகைகள்", level: "intermediate", tags: ["grammar"], lessonRoute: "/learn/intermediate/parts-of-speech", worksheetIds: ["ws-parts-of-speech"], estimatedLessons: 1, order: 3 },
  { id: "int-tenses", title: "3 Tenses", tamilTitle: "மூன்று காலங்கள்", level: "intermediate", tags: ["grammar"], lessonRoute: "/learn/intermediate/tenses", worksheetIds: ["ws-tenses"], estimatedLessons: 2, order: 4 },
  { id: "int-gender", title: "Gender", tamilTitle: "பால் வகைகள்", level: "intermediate", tags: ["grammar"], lessonRoute: "/learn/intermediate/gender", worksheetIds: ["ws-gender"], estimatedLessons: 1, order: 5 },
  { id: "int-cases4", title: "First 4 Cases", tamilTitle: "முதல் நான்கு வேற்றுமைகள்", level: "intermediate", tags: ["grammar"], lessonRoute: "/learn/intermediate/cases-basic", worksheetIds: ["ws-cases"], estimatedLessons: 2, order: 6 },
  { id: "int-food", title: "Food Vocabulary", tamilTitle: "உணவு சொல்லகராதி", level: "intermediate", tags: ["vocabulary"], lessonRoute: "/learn/intermediate/food", worksheetIds: ["ws-food-match"], estimatedLessons: 1, order: 7 },
  { id: "int-days", title: "Days of the Week", tamilTitle: "வாரத்தின் நாட்கள்", level: "intermediate", tags: ["vocabulary"], lessonRoute: "/learn/intermediate/days", worksheetIds: ["ws-days-match"], estimatedLessons: 1, order: 8 },
  { id: "int-months", title: "Tamil & English Months", tamilTitle: "தமிழ் & ஆங்கில மாதங்கள்", level: "intermediate", tags: ["vocabulary"], lessonRoute: "/learn/intermediate/months", worksheetIds: [], estimatedLessons: 1, order: 9 },
  { id: "int-phrases", title: "Conversational Phrases", tamilTitle: "உரையாடல் சொற்றொடர்கள்", level: "intermediate", tags: ["speaking", "vocabulary"], lessonRoute: "/learn/intermediate/phrases", worksheetIds: [], estimatedLessons: 1, order: 10 },
  { id: "int-proverbs", title: "Tamil Proverbs", tamilTitle: "பழமொழிகள்", level: "intermediate", tags: ["culture", "reading"], lessonRoute: "/learn/intermediate/proverbs", worksheetIds: ["ws-proverbs"], estimatedLessons: 1, order: 11 },
  { id: "int-sentences", title: "Simple Sentence Composition", tamilTitle: "எளிய வாக்கிய அமைப்பு", level: "intermediate", tags: ["writing", "grammar"], lessonRoute: "/learn/intermediate/sentences", worksheetIds: ["ws-sentence-fill"], estimatedLessons: 2, order: 12 },
  // Advanced
  { id: "adv-cases8", title: "All 8 Cases", tamilTitle: "எட்டு வேற்றுமைகள்", level: "advanced", tags: ["grammar"], lessonRoute: "/learn/advanced/cases-all", worksheetIds: ["ws-cases-advanced"], estimatedLessons: 3, order: 1 },
  { id: "adv-sandhi", title: "Sandhi Rules", tamilTitle: "புணர்ச்சி விதிகள்", level: "advanced", tags: ["grammar"], lessonRoute: "/learn/advanced/sandhi", worksheetIds: ["ws-sandhi"], estimatedLessons: 2, order: 2 },
  { id: "adv-complex-sentences", title: "Complex Sentences", tamilTitle: "சிக்கலான வாக்கியங்கள்", level: "advanced", tags: ["grammar", "writing"], lessonRoute: "/learn/advanced/complex-sentences", worksheetIds: ["ws-complex-sentences"], estimatedLessons: 2, order: 3 },
  { id: "adv-formal-vs-colloquial", title: "Formal vs Colloquial Tamil", tamilTitle: "செந்தமிழ் vs கொடுந்தமிழ்", level: "advanced", tags: ["speaking", "culture"], lessonRoute: "/learn/advanced/formal-colloquial", worksheetIds: ["ws-formal-colloquial"], estimatedLessons: 1, order: 4 },
  { id: "adv-comprehension", title: "Reading Comprehension", tamilTitle: "படிக்கும் புரிதல்", level: "advanced", tags: ["reading"], lessonRoute: "/learn/advanced/comprehension", worksheetIds: ["ws-comprehension"], estimatedLessons: 2, order: 5 },
  { id: "adv-thirukkural", title: "Thirukkural", tamilTitle: "திருக்குறள்", level: "advanced", tags: ["classical", "reading", "culture"], lessonRoute: "/learn/advanced/thirukkural", worksheetIds: ["ws-thirukkural-copy"], estimatedLessons: 3, order: 6 },
  { id: "adv-essay", title: "Essay & Formal Letter Writing", tamilTitle: "கட்டுரை & முறையான கடிதம்", level: "advanced", tags: ["writing"], lessonRoute: "/learn/advanced/essay-writing", worksheetIds: ["ws-essay"], estimatedLessons: 2, order: 7 },
  { id: "adv-sangam", title: "Introduction to Sangam Literature", tamilTitle: "சங்க இலக்கியம்", level: "advanced", tags: ["classical", "culture"], lessonRoute: "/learn/advanced/sangam", worksheetIds: ["ws-sangam"], estimatedLessons: 1, order: 8 },
  // Expert
  { id: "exp-verb-mastery", title: "Advanced Verb Conjugation", tamilTitle: "வினைச்சொல் திறன்", level: "expert", tags: ["grammar"], lessonRoute: "/learn/expert/verb-mastery", worksheetIds: ["ws-verb-mastery"], estimatedLessons: 2, order: 1 },
  { id: "exp-kambaramayanam", title: "Kambaramayanam", tamilTitle: "கம்பராமாயணம்", level: "expert", tags: ["classical", "literature"], lessonRoute: "/learn/expert/kambaramayanam", worksheetIds: ["ws-kambaramayanam"], estimatedLessons: 2, order: 2 },
  { id: "exp-prosody", title: "Tamil Poetry & Metres", tamilTitle: "யாப்பிலக்கணம்", level: "expert", tags: ["classical", "literature"], lessonRoute: "/learn/expert/prosody", worksheetIds: ["ws-prosody"], estimatedLessons: 2, order: 3 },
  { id: "exp-translation", title: "Translation Practice", tamilTitle: "மொழிபெயர்ப்பு பயிற்சி", level: "expert", tags: ["writing", "reading"], lessonRoute: "/learn/expert/translation", worksheetIds: ["ws-translation"], estimatedLessons: 2, order: 4 },
  { id: "exp-dialects", title: "Tamil Dialects", tamilTitle: "தமிழ் வட்டார வழக்குகள்", level: "expert", tags: ["culture", "speaking"], lessonRoute: "/learn/expert/dialects", worksheetIds: ["ws-dialects"], estimatedLessons: 1, order: 5 },
  { id: "exp-linguistics", title: "Tamil Linguistics & Script History", tamilTitle: "தமிழ் மொழியியல் வரலாறு", level: "expert", tags: ["culture"], lessonRoute: "/learn/expert/linguistics", worksheetIds: ["ws-linguistics"], estimatedLessons: 1, order: 6 },
  { id: "exp-contemporary", title: "Contemporary Tamil: News & Media", tamilTitle: "நவீன தமிழ்: செய்தி & ஊடகம்", level: "expert", tags: ["reading", "culture"], lessonRoute: "/learn/expert/contemporary", worksheetIds: ["ws-contemporary"], estimatedLessons: 2, order: 7 },
  { id: "exp-creative-writing", title: "Creative & Advanced Writing", tamilTitle: "படைப்பு எழுத்து", level: "expert", tags: ["writing"], lessonRoute: "/learn/expert/creative-writing", worksheetIds: ["ws-creative-writing"], estimatedLessons: 2, order: 8 },
];
