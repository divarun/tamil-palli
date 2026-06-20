export type LessonPlan = {
  lesson: number;
  title: string;
  level: "novice" | "intermediate" | "advanced" | "expert";
  topicIds: string[];
  goals: string[];
};

export const lessonPlan: LessonPlan[] = [
  // Novice — 8 lessons
  { lesson: 1, title: "Tamil Vowels — Part 1", level: "novice", topicIds: ["novice-vowels"], goals: ["Learn அ, ஆ, இ, ஈ, உ, ஊ", "Understand short/long vowel pairs", "Practice pronunciation with audio"] },
  { lesson: 2, title: "Tamil Vowels — Part 2 + Greetings", level: "novice", topicIds: ["novice-vowels", "novice-greetings"], goals: ["Learn எ, ஏ, ஐ, ஒ, ஓ, ஔ", "Master all 12 vowels", "Learn basic greetings"] },
  { lesson: 3, title: "Hard & Soft Consonants", level: "novice", topicIds: ["novice-consonants"], goals: ["Learn Vallinam (க ச ட த ப ற)", "Learn Mellinam (ங ஞ ண ந ம ன)", "Practice reading"] },
  { lesson: 4, title: "Medium Consonants + Aytham", level: "novice", topicIds: ["novice-consonants", "novice-aytham"], goals: ["Learn Idaiyinam (ய ர ல வ ழ ள)", "Understand Aytham (ஃ)", "Know all 18 consonants + aytham"] },
  { lesson: 5, title: "Numbers 1–100 + Colors", level: "novice", topicIds: ["novice-numbers", "novice-colors"], goals: ["Count 1–100 in Tamil", "Learn color vocabulary", "Practice number drills"] },
  { lesson: 6, title: "Body Parts + Family", level: "novice", topicIds: ["novice-body", "novice-family"], goals: ["Name body parts in Tamil", "Learn family relation words", "Use vocabulary in simple sentences"] },
  { lesson: 7, title: "Question Words + Word Formation", level: "novice", topicIds: ["novice-questions", "novice-word-formation"], goals: ["Learn the 7 question words", "Understand vowel + consonant combination basics", "Form simple Tamil words"] },
  { lesson: 8, title: "Grantha Letters + Novice Review", level: "novice", topicIds: ["novice-vada"], goals: ["Learn the 6 Grantha/Sanskrit letters", "Review all Novice content", "Take Novice level assessment"] },
  // Intermediate — 12 lessons
  { lesson: 9, title: "Combined Letters — Part 1 (க to ந)", level: "intermediate", topicIds: ["int-combined"], goals: ["Learn க-series to ந-series combinations", "Read simple combined-letter words"] },
  { lesson: 10, title: "Combined Letters — Part 2 (ம to ள)", level: "intermediate", topicIds: ["int-combined"], goals: ["Complete all 216 combined letters", "Read words using combined letters"] },
  { lesson: 11, title: "Reading Words & Sentences", level: "intermediate", topicIds: ["int-reading"], goals: ["Read 2–3 letter Tamil words fluently", "Progress to simple sentences"] },
  { lesson: 12, title: "Parts of Speech", level: "intermediate", topicIds: ["int-parts-of-speech"], goals: ["Identify nouns (பெயர்ச்சொல்)", "Identify verbs (வினைச்சொல்)", "Understand plural forms"] },
  { lesson: 13, title: "Past & Present Tenses", level: "intermediate", topicIds: ["int-tenses"], goals: ["Form past tense sentences", "Form present tense sentences", "Practice with common verbs"] },
  { lesson: 14, title: "Future Tense + Gender", level: "intermediate", topicIds: ["int-tenses", "int-gender"], goals: ["Form future tense sentences", "Understand ஆண்பால் / பெண்பால் / அஃறிணை", "Match verb endings to gender"] },
  { lesson: 15, title: "First 4 Grammatical Cases", level: "intermediate", topicIds: ["int-cases4"], goals: ["Nominative, Accusative, Possessive, Dative", "Use -ஐ and -க்கு suffixes correctly"] },
  { lesson: 16, title: "Food + Directions Vocabulary", level: "intermediate", topicIds: ["int-food", "int-days"], goals: ["Learn food vocabulary", "Learn days of the week", "Build practical vocabulary"] },
  { lesson: 17, title: "Tamil & English Months + Seasons", level: "intermediate", topicIds: ["int-months"], goals: ["Know all 12 Tamil calendar months", "Know English months in Tamil script", "Name the seasons"] },
  { lesson: 18, title: "Conversational Phrases", level: "intermediate", topicIds: ["int-phrases"], goals: ["Practice dialogues: directions, food, family", "Use phrases in context"] },
  { lesson: 19, title: "Tamil Proverbs", level: "intermediate", topicIds: ["int-proverbs"], goals: ["Learn 12 Tamil proverbs", "Understand their meanings and usage"] },
  { lesson: 20, title: "Simple Sentence Composition", level: "intermediate", topicIds: ["int-sentences"], goals: ["Write 5+ original Tamil sentences", "Use tenses, gender, and cases correctly"] },
  // Advanced — 12 lessons
  { lesson: 21, title: "All 8 Grammatical Cases — Part 1", level: "advanced", topicIds: ["adv-cases8"], goals: ["Cases 1–4 in depth", "Ablative and Locative cases"] },
  { lesson: 22, title: "All 8 Grammatical Cases — Part 2", level: "advanced", topicIds: ["adv-cases8"], goals: ["Instrumental, Genitive, Vocative cases", "Practice all 8 with examples"] },
  { lesson: 23, title: "Sandhi Rules — Part 1", level: "advanced", topicIds: ["adv-sandhi"], goals: ["Understand Vallinam migutal (hard consonant doubling)", "Apply sandhi in reading"] },
  { lesson: 24, title: "Sandhi Rules — Part 2", level: "advanced", topicIds: ["adv-sandhi"], goals: ["Nasal assimilation rules", "Vowel combination rules", "Practice with compound words"] },
  { lesson: 25, title: "Complex & Compound Sentences", level: "advanced", topicIds: ["adv-complex-sentences"], goals: ["Build complex sentences", "Use conjunctions and relative clauses"] },
  { lesson: 26, title: "Formal vs Colloquial Tamil", level: "advanced", topicIds: ["adv-formal-vs-colloquial"], goals: ["Identify differences between written and spoken Tamil", "Read formal Tamil text", "Understand informal speech patterns"] },
  { lesson: 27, title: "Reading Comprehension — Part 1", level: "advanced", topicIds: ["adv-comprehension"], goals: ["Read a short Tamil paragraph", "Answer comprehension questions"] },
  { lesson: 28, title: "Reading Comprehension — Part 2", level: "advanced", topicIds: ["adv-comprehension"], goals: ["Read longer passages", "Identify main ideas and details"] },
  { lesson: 29, title: "Thirukkural — Part 1", level: "advanced", topicIds: ["adv-thirukkural"], goals: ["Read and memorize 10 selected Kurals", "Understand their meanings and commentary"] },
  { lesson: 30, title: "Thirukkural — Part 2 + Sangam Literature Intro", level: "advanced", topicIds: ["adv-thirukkural", "adv-sangam"], goals: ["Complete remaining Kurals", "Learn about Sangam literature traditions", "Write a short essay about a Kural"] },
  { lesson: 31, title: "Essay & Formal Letter Writing", level: "advanced", topicIds: ["adv-essay"], goals: ["Write a 100-word Tamil essay", "Draft a formal Tamil letter", "Check grammar and cases"] },
  { lesson: 32, title: "Advanced Review & Final Assessment", level: "advanced", topicIds: ["adv-cases8", "adv-sandhi", "adv-thirukkural"], goals: ["Review all Advanced content", "Complete Advanced level assessment", "Celebrate completion!"] },
  // Expert — 12 lessons
  { lesson: 33, title: "Advanced Verb Conjugation — Part 1", level: "expert", topicIds: ["exp-verb-mastery"], goals: ["Master verbal participles (வினையெச்சம்)", "Understand negative verb forms", "Practice conjugation tables across all persons"] },
  { lesson: 34, title: "Advanced Verb Conjugation — Part 2", level: "expert", topicIds: ["exp-verb-mastery"], goals: ["Verbal nouns (தொழிற்பெயர்)", "Adjectival participles (பெயரெச்சம்)", "Write complex participial sentences"] },
  { lesson: 35, title: "Kambaramayanam — Introduction", level: "expert", topicIds: ["exp-kambaramayanam"], goals: ["Learn about Kambar and the six Kandams", "Read the Payiram (Prologue) and meet key characters", "Understand how Kambar adapts Valmiki for a Tamil audience"] },
  { lesson: 36, title: "Kambaramayanam — Themes & Verses", level: "expert", topicIds: ["exp-kambaramayanam"], goals: ["Read verses from Bala and Sundara Kandams", "Analyse themes: dharma, devotion, tragic heroism", "Compare Kambar's Ravana with Valmiki's portrayal"] },
  { lesson: 37, title: "Tamil Poetry & Metres — Introduction", level: "expert", topicIds: ["exp-prosody"], goals: ["Understand Akam (love) and Puram (heroism) classifications", "Learn the 5 landscapes (திணை) of Sangam poetry", "Identify asai (அசை) — the basic metrical unit"] },
  { lesson: 38, title: "Tamil Poetry & Metres — Venba", level: "expert", topicIds: ["exp-prosody"], goals: ["Study the Venba (வெண்பா) metre", "Read and scan a Thirukkural couplet metrically", "Attempt composing a simple Venba"] },
  { lesson: 39, title: "Translation Practice — Tamil to English", level: "expert", topicIds: ["exp-translation"], goals: ["Translate 3 classical passages from Tamil to English", "Identify idiomatic expressions with no direct equivalent", "Discuss translation choices"] },
  { lesson: 40, title: "Translation Practice — English to Tamil", level: "expert", topicIds: ["exp-translation"], goals: ["Translate 3 contemporary English paragraphs to Tamil", "Apply formal Tamil grammar rules", "Check sandhi, case suffixes, and tense agreement"] },
  { lesson: 41, title: "Tamil Dialects & Contemporary Tamil", level: "expert", topicIds: ["exp-dialects", "exp-contemporary"], goals: ["Compare Jaffna, Chennai, Madurai, and overseas Tamil", "Read a Tamil news article and summarise it", "Identify formal vs informal register differences"] },
  { lesson: 42, title: "Tamil Linguistics & Script History", level: "expert", topicIds: ["exp-linguistics"], goals: ["Understand Tamil's place in the Dravidian family", "Trace the evolution of the Tamil script", "Study Tolkāppiyam — the oldest Tamil grammar"] },
  { lesson: 43, title: "Creative Writing — Short Story", level: "expert", topicIds: ["exp-creative-writing"], goals: ["Write a 200-word Tamil short story", "Use varied tenses, cases, and participial constructions", "Peer review for grammar and style"] },
  { lesson: 44, title: "Expert Review & Capstone Project", level: "expert", topicIds: ["exp-creative-writing", "exp-translation"], goals: ["Complete a capstone: translate a chosen passage and write a 300-word commentary in Tamil", "Take Expert level assessment", "Celebrate mastery!"] },
];
