export type ExerciseType =
  | "letter-recognition"
  | "match-pair"
  | "fill-blank"
  | "sentence-builder"
  | "comprehension";

export type Level = "novice" | "intermediate" | "advanced" | "expert";

export type LetterRecognitionQ = {
  type: "letter-recognition";
  letter: string;
  correct: string;
  choices: string[];
};

export type MatchPairQ = {
  type: "match-pair";
  pairs: { left: string; right: string }[];
};

export type FillBlankQ = {
  type: "fill-blank";
  sentence: string;
  sentenceWithBlank: string;
  answer: string;
  choices: string[];
  hint?: string;
};

export type SentenceBuilderQ = {
  type: "sentence-builder";
  words: string[];
  correctOrder: string[];
  translation: string;
};

export type ComprehensionQ = {
  type: "comprehension";
  passage: string;
  passageTranslation: string;
  question: string;
  answer: string;
  choices: string[];
};

export type Question =
  | LetterRecognitionQ
  | MatchPairQ
  | FillBlankQ
  | SentenceBuilderQ
  | ComprehensionQ;

export type Exercise = {
  id: string;
  title: string;
  level: Level;
  exerciseType: ExerciseType;
  topicId: string;
  questions: Question[];
};

export const exercises: Exercise[] = [
  // Novice
  {
    id: "ex-vowel-recognition",
    title: "Vowel Letter Recognition",
    level: "novice",
    exerciseType: "letter-recognition",
    topicId: "novice-vowels",
    questions: [
      { type: "letter-recognition", letter: "அ", correct: "a (short)", choices: ["a (short)", "aa (long)", "i (short)", "u (short)"] },
      { type: "letter-recognition", letter: "ஆ", correct: "aa (long)", choices: ["a (short)", "aa (long)", "i (short)", "ee (long)"] },
      { type: "letter-recognition", letter: "இ", correct: "i (short)", choices: ["a (short)", "u (short)", "i (short)", "e (short)"] },
      { type: "letter-recognition", letter: "ஈ", correct: "ii (long)", choices: ["i (short)", "ii (long)", "u (short)", "o (short)"] },
      { type: "letter-recognition", letter: "உ", correct: "u (short)", choices: ["u (short)", "uu (long)", "o (short)", "a (short)"] },
    ],
  },
  {
    id: "ex-consonant-recognition",
    title: "Consonant Letter Recognition",
    level: "novice",
    exerciseType: "letter-recognition",
    topicId: "novice-consonants",
    questions: [
      { type: "letter-recognition", letter: "க்", correct: "k", choices: ["k", "c", "t", "p"] },
      { type: "letter-recognition", letter: "ச்", correct: "c", choices: ["k", "c", "p", "r"] },
      { type: "letter-recognition", letter: "ட்", correct: "t", choices: ["th", "t", "n", "l"] },
      { type: "letter-recognition", letter: "ம்", correct: "m", choices: ["m", "n", "y", "v"] },
      { type: "letter-recognition", letter: "ழ்", correct: "zh", choices: ["l", "r", "zh", "v"] },
    ],
  },
  {
    id: "ex-vowel-match",
    title: "Match Vowel to Romanization",
    level: "novice",
    exerciseType: "match-pair",
    topicId: "novice-vowels",
    questions: [
      {
        type: "match-pair",
        pairs: [
          { left: "அ", right: "a" },
          { left: "ஆ", right: "aa" },
          { left: "இ", right: "i" },
          { left: "ஈ", right: "ii" },
          { left: "உ", right: "u" },
          { left: "ஊ", right: "uu" },
        ],
      },
    ],
  },
  {
    id: "ex-greetings-fill",
    title: "Greetings Fill-in-the-Blank",
    level: "novice",
    exerciseType: "fill-blank",
    topicId: "novice-greetings",
    questions: [
      { type: "fill-blank", sentence: "வணக்கம் means Hello", sentenceWithBlank: "_____ means Hello", answer: "வணக்கம்", choices: ["வணக்கம்", "நன்றி", "சரி", "இல்லை"], hint: "The first word you learn in Tamil" },
      { type: "fill-blank", sentence: "நன்றி means Thank you", sentenceWithBlank: "_____ means Thank you", answer: "நன்றி", choices: ["மன்னிக்கவும்", "நன்றி", "ஆமாம்", "இல்லை"] },
      { type: "fill-blank", sentence: "ஆமாம் means Yes", sentenceWithBlank: "_____ means Yes", answer: "ஆமாம்", choices: ["இல்லை", "சரி", "ஆமாம்", "நன்றி"] },
    ],
  },
  {
    id: "ex-numbers-fill",
    title: "Numbers Fill-in-the-Blank",
    level: "novice",
    exerciseType: "fill-blank",
    topicId: "novice-numbers",
    questions: [
      { type: "fill-blank", sentence: "ஐந்து means Five", sentenceWithBlank: "_____ means Five", answer: "ஐந்து", choices: ["ஆறு", "ஐந்து", "நான்கு", "ஏழு"] },
      { type: "fill-blank", sentence: "பத்து means Ten", sentenceWithBlank: "_____ means Ten", answer: "பத்து", choices: ["பத்து", "நூறு", "இருபது", "எட்டு"] },
      { type: "fill-blank", sentence: "நூறு means One Hundred", sentenceWithBlank: "_____ means One Hundred", answer: "நூறு", choices: ["பத்து", "ஐம்பது", "நூறு", "தொண்ணூறு"] },
    ],
  },
  {
    id: "ex-sentence-builder-novice",
    title: "Build a Simple Sentence",
    level: "novice",
    exerciseType: "sentence-builder",
    topicId: "novice-greetings",
    questions: [
      { type: "sentence-builder", words: ["நன்றி", "நான்", "சொல்கிறேன்", "உங்களுக்கு"], correctOrder: ["நான்", "உங்களுக்கு", "நன்றி", "சொல்கிறேன்"], translation: "I say thank you to you" },
      { type: "sentence-builder", words: ["வணக்கம்", "காலை", "சொல்கிறேன்", "நான்"], correctOrder: ["நான்", "காலை", "வணக்கம்", "சொல்கிறேன்"], translation: "I say good morning" },
    ],
  },
  // Intermediate
  {
    id: "ex-parts-of-speech-match",
    title: "Parts of Speech Match",
    level: "intermediate",
    exerciseType: "match-pair",
    topicId: "int-parts-of-speech",
    questions: [
      {
        type: "match-pair",
        pairs: [
          { left: "மரம் (tree)", right: "பெயர்ச்சொல் — noun" },
          { left: "ஓடுகிறான் (he runs)", right: "வினைச்சொல் — verb" },
          { left: "அழகான (beautiful)", right: "உரிச்சொல் — adjective" },
          { left: "மெதுவாக (slowly)", right: "வினையுரிச்சொல் — adverb" },
        ],
      },
    ],
  },
  {
    id: "ex-gender-fill",
    title: "Gender Agreement Fill-in-the-Blank",
    level: "intermediate",
    exerciseType: "fill-blank",
    topicId: "int-gender",
    questions: [
      { type: "fill-blank", sentence: "அவன் வீட்டிற்கு போனான் — He went home (masculine)", sentenceWithBlank: "அவன் வீட்டிற்கு _____", answer: "போனான்", choices: ["போனான்", "போனாள்", "போனது", "போனார்"], hint: "Masculine singular past" },
      { type: "fill-blank", sentence: "அவள் பாடல் பாடினாள் — She sang (feminine)", sentenceWithBlank: "அவள் பாடல் _____", answer: "பாடினாள்", choices: ["பாடினான்", "பாடினாள்", "பாடியது", "பாடினர்"] },
      { type: "fill-blank", sentence: "அது உறங்கியது — It slept (neuter)", sentenceWithBlank: "அது _____", answer: "உறங்கியது", choices: ["உறங்கினான்", "உறங்கினாள்", "உறங்கியது", "உறங்கினர்"] },
    ],
  },
  {
    id: "ex-tenses-fill",
    title: "Tense Fill-in-the-Blank",
    level: "intermediate",
    exerciseType: "fill-blank",
    topicId: "int-tenses",
    questions: [
      { type: "fill-blank", sentence: "நான் சாப்பிட்டேன் means I ate (past)", sentenceWithBlank: "நான் _____ (past of eat)", answer: "சாப்பிட்டேன்", choices: ["சாப்பிடுகிறேன்", "சாப்பிட்டேன்", "சாப்பிடுவேன்", "சாப்பிடு"] },
      { type: "fill-blank", sentence: "நான் படிக்கிறேன் means I am reading (present)", sentenceWithBlank: "நான் _____ (present of read)", answer: "படிக்கிறேன்", choices: ["படித்தேன்", "படிக்கிறேன்", "படிப்பேன்", "படிக்க"] },
      { type: "fill-blank", sentence: "நான் வருவேன் means I will come (future)", sentenceWithBlank: "நான் _____ (future of come)", answer: "வருவேன்", choices: ["வந்தேன்", "வருகிறேன்", "வருவேன்", "வா"] },
    ],
  },
  {
    id: "ex-cases-basic-fill",
    title: "Basic Cases Fill-in-the-Blank",
    level: "intermediate",
    exerciseType: "fill-blank",
    topicId: "int-cases4",
    questions: [
      { type: "fill-blank", sentence: "நான் மாங்காய் சாப்பிட்டேன் — accusative suffix -ஐ", sentenceWithBlank: "நான் மாங்காய்_____ சாப்பிட்டேன்", answer: "-ஐ", choices: ["-ஐ", "-க்கு", "-இல்", "-இன்"], hint: "The direct object takes -ஐ" },
      { type: "fill-blank", sentence: "அவள் அம்மாவுக்கு கடிதம் எழுதினாள் — dative suffix -க்கு", sentenceWithBlank: "அவள் அம்மா_____ கடிதம் எழுதினாள்", answer: "-க்கு", choices: ["-ஐ", "-க்கு", "-இன்", "-உடன்"] },
      { type: "fill-blank", sentence: "இது ரவியின் புத்தகம் — genitive suffix -இன்", sentenceWithBlank: "இது ரவி_____ புத்தகம்", answer: "-இன்", choices: ["-ஐ", "-க்கு", "-இன்", "-இல்"] },
    ],
  },
  {
    id: "ex-sentence-builder-intermediate",
    title: "Build a Tamil Sentence with Tense",
    level: "intermediate",
    exerciseType: "sentence-builder",
    topicId: "int-tenses",
    questions: [
      { type: "sentence-builder", words: ["பள்ளிக்கு", "நான்", "போகிறேன்", "இன்று"], correctOrder: ["நான்", "இன்று", "பள்ளிக்கு", "போகிறேன்"], translation: "I am going to school today" },
      { type: "sentence-builder", words: ["அவள்", "நேற்று", "சமைத்தாள்", "சோறு"], correctOrder: ["அவள்", "நேற்று", "சோறு", "சமைத்தாள்"], translation: "She cooked rice yesterday" },
    ],
  },
  // Advanced
  {
    id: "ex-sandhi-fill",
    title: "Sandhi Rules Fill-in-the-Blank",
    level: "advanced",
    exerciseType: "fill-blank",
    topicId: "adv-sandhi",
    questions: [
      { type: "fill-blank", sentence: "மரம் + இல் → மரத்தில் (vallinam doubling: ம் + இ → த்த்)", sentenceWithBlank: "மரம் + இல் → _____", answer: "மரத்தில்", choices: ["மரமில்", "மரத்தில்", "மரதில்", "மரம்இல்"], hint: "The final nasal ம் triggers vallinam doubling" },
      { type: "fill-blank", sentence: "கை + ஆல் → கையால் (glide insertion: கை + ஆ → கைய்ஆ)", sentenceWithBlank: "கை + ஆல் → _____", answer: "கையால்", choices: ["கைஆல்", "கையால்", "கைவால்", "கைஆல்"] },
      { type: "fill-blank", sentence: "பூ + கள் → பூக்கள் (hard consonant doubling)", sentenceWithBlank: "பூ + கள் → _____", answer: "பூக்கள்", choices: ["பூகள்", "பூக்கள்", "பூங்கள்", "பூவ்கள்"] },
    ],
  },
  {
    id: "ex-cases-advanced-fill",
    title: "All 8 Cases Fill-in-the-Blank",
    level: "advanced",
    exerciseType: "fill-blank",
    topicId: "adv-cases8",
    questions: [
      { type: "fill-blank", sentence: "அவன் கத்தியால் வெட்டினான் — instrumental case -ஆல்", sentenceWithBlank: "அவன் கத்தி_____ வெட்டினான்", answer: "-ஆல்", choices: ["-ஐ", "-க்கு", "-ஆல்", "-இல்"], hint: "The instrument or means takes -ஆல்" },
      { type: "fill-blank", sentence: "அவள் வீட்டில் இருக்கிறாள் — locative case -இல்", sentenceWithBlank: "அவள் வீட்ட_____ இருக்கிறாள்", answer: "-இல்", choices: ["-ஐ", "-க்கு", "-இன்", "-இல்"] },
      { type: "fill-blank", sentence: "ஓ ராமா! — vocative case", sentenceWithBlank: "_____ ராமா! (call out to someone)", answer: "ஓ", choices: ["அந்த", "ஓ", "இந்த", "அவர்"] },
    ],
  },
  {
    id: "ex-sentence-builder-advanced",
    title: "Complex Sentence Builder",
    level: "advanced",
    exerciseType: "sentence-builder",
    topicId: "adv-complex-sentences",
    questions: [
      { type: "sentence-builder", words: ["பள்ளியில்", "படித்து", "வீட்டிற்கு", "அவன்", "வந்தான்"], correctOrder: ["அவன்", "பள்ளியில்", "படித்து", "வீட்டிற்கு", "வந்தான்"], translation: "He studied at school and came home (verbal participle)" },
      { type: "sentence-builder", words: ["ஓடிய", "நாய்", "என்னுடையது", "அந்த"], correctOrder: ["அந்த", "ஓடிய", "நாய்", "என்னுடையது"], translation: "That running dog is mine (adjectival participle)" },
    ],
  },
  {
    id: "ex-comprehension-advanced",
    title: "Reading Comprehension — Simple Passage",
    level: "advanced",
    exerciseType: "comprehension",
    topicId: "adv-comprehension",
    questions: [
      {
        type: "comprehension",
        passage: "ராமன் ஒரு மாணவன். அவன் ஒவ்வொரு நாளும் பள்ளிக்கு போகிறான். அவன் தமிழ், கணிதம், மற்றும் ஆங்கிலம் படிக்கிறான். அவனுக்கு தமிழ் மிகவும் பிடிக்கும்.",
        passageTranslation: "Raman is a student. He goes to school every day. He studies Tamil, Mathematics, and English. He likes Tamil very much.",
        question: "ராமனுக்கு எந்த பாடம் பிடிக்கும்?",
        answer: "தமிழ்",
        choices: ["கணிதம்", "ஆங்கிலம்", "தமிழ்", "அறிவியல்"],
      },
    ],
  },
  {
    id: "ex-comprehension-thirukkural",
    title: "Thirukkural Comprehension",
    level: "advanced",
    exerciseType: "comprehension",
    topicId: "adv-thirukkural",
    questions: [
      {
        type: "comprehension",
        passage: "அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு. — திருக்குறள் 1",
        passageTranslation: "As the letter A is the first of all letters, so the eternal God is first in the world. — Thirukkural 1",
        question: "இந்த குறளில் எழுத்துக்களுக்கு முதல் எது?",
        answer: "அகரம்",
        choices: ["ஆகாரம்", "அகரம்", "இகரம்", "உகரம்"],
      },
      {
        type: "comprehension",
        passage: "கற்க கசடறக் கற்பவை கற்றபின் நிற்க அதற்குத் தக. — திருக்குறள் 391",
        passageTranslation: "Learn thoroughly what should be learned; then live accordingly. — Thirukkural 391",
        question: "இந்த குறளின் முக்கியக் கருத்து என்ன?",
        answer: "கற்றபடி வாழ வேண்டும்",
        choices: ["அதிகமாக சாப்பிட வேண்டும்", "கற்றபடி வாழ வேண்டும்", "பணம் சம்பாதிக்க வேண்டும்", "தூங்க வேண்டும்"],
      },
    ],
  },
  // Expert
  {
    id: "ex-verb-conjugation-expert",
    title: "Advanced Verb Conjugation",
    level: "expert",
    exerciseType: "fill-blank",
    topicId: "exp-verb-mastery",
    questions: [
      { type: "fill-blank", sentence: "செய் (do) — verbal noun (தொழிற்பெயர்) is செய்தல்", sentenceWithBlank: "செய் → தொழிற்பெயர்: _____", answer: "செய்தல்", choices: ["செய்தல்", "செய்கை", "செய்த", "செய்யும்"], hint: "Add -தல் to the verb root" },
      { type: "fill-blank", sentence: "படி (study) — adjectival participle (பெயரெச்சம்) past is படித்த", sentenceWithBlank: "படி → பெயரெச்சம் (past): _____", answer: "படித்த", choices: ["படிக்கும்", "படித்த", "படிக்கிற", "படிக்க"] },
      { type: "fill-blank", sentence: "வா (come) — verbal participle (வினையெச்சம்) is வந்து", sentenceWithBlank: "வா → வினையெச்சம்: _____", answer: "வந்து", choices: ["வருகிற", "வந்தால்", "வந்து", "வரும்"] },
    ],
  },
  {
    id: "ex-prosody-match",
    title: "Tamil Metres Match",
    level: "expert",
    exerciseType: "match-pair",
    topicId: "exp-prosody",
    questions: [
      {
        type: "match-pair",
        pairs: [
          { left: "வெண்பா (venba)", right: "Thirukkural's metre — ends with நேரசை + நிரையசை" },
          { left: "ஆசிரியப்பா (aasiriyappa)", right: "Most common classical metre — free-flowing" },
          { left: "கலிப்பா (kalippa)", right: "Martial or heroic poems — energetic rhythm" },
          { left: "வஞ்சிப்பா (vanjippa)", right: "War and victory poems — fast-paced metre" },
        ],
      },
    ],
  },
  {
    id: "ex-dialects-match",
    title: "Tamil Dialects Match",
    level: "expert",
    exerciseType: "match-pair",
    topicId: "exp-dialects",
    questions: [
      {
        type: "match-pair",
        pairs: [
          { left: "நான் போறேன் (Chennai colloquial)", right: "நான் போகிறேன் — standard written" },
          { left: "நான் போகிறன் (Jaffna Tamil)", right: "நான் போகிறேன் — standard written" },
          { left: "நான் போயிட்டே (Madurai colloquial)", right: "நான் போய்விட்டேன் — standard written" },
          { left: "நான் போகுறேன் (Sri Lankan Tamil)", right: "நான் போகிறேன் — standard written" },
        ],
      },
    ],
  },
  {
    id: "ex-comprehension-silappatikaram",
    title: "Silappatikaram Comprehension",
    level: "expert",
    exerciseType: "comprehension",
    topicId: "exp-silappatikaram",
    questions: [
      {
        type: "comprehension",
        passage: "சிலப்பதிகாரம் இளங்கோவடிகள் இயற்றிய காப்பியம். இதில் கண்ணகி, கோவலன் கதை விரிவாக சொல்லப்படுகிறது. மதுரை நகரில் கோவலன் தவறாக கொல்லப்பட்டதால், கண்ணகி மதுரையை எரித்தாள் என்று கதை கூறுகிறது.",
        passageTranslation: "Silappatikaram is an epic composed by Ilangovadikal. It narrates in detail the story of Kannagi and Kovalan. The story says that when Kovalan was wrongly killed in the city of Madurai, Kannagi burned Madurai.",
        question: "சிலப்பதிகாரத்தை யார் இயற்றினார்?",
        answer: "இளங்கோவடிகள்",
        choices: ["திருவள்ளுவர்", "இளங்கோவடிகள்", "கம்பர்", "அவ்வையார்"],
      },
    ],
  },
];
