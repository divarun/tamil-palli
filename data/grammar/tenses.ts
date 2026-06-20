export type TenseExample = {
  tamil: string;
  romanization: string;
  english: string;
};

export type TenseRule = {
  tense: "past" | "present" | "future";
  tamilName: string;
  suffix: string;
  description: string;
  examples: TenseExample[];
};

export const tenses: TenseRule[] = [
  {
    tense: "past",
    tamilName: "இறந்த காலம் (Iranta Kaalam)",
    suffix: "-ந்தேன் / -டேன் / -த்தேன்",
    description:
      "Past tense in Tamil uses different suffixes depending on the verb class (வினைவகை). Tamil verbs are grouped into classes that determine which ending they take — the three most common past markers are -ந்தேன், -டேன், and -த்தேன். The suffix also changes with person and number. If a verb takes a different ending than expected, it belongs to a different verb class — verb classes are taught in the Advanced level.",
    examples: [
      { tamil: "நான் சாப்பிட்டேன்", romanization: "naan saappitten", english: "I ate" },
      { tamil: "அவன் வந்தான்", romanization: "avan vandhaan", english: "He came" },
      { tamil: "நாங்கள் பார்த்தோம்", romanization: "naangal paarththoom", english: "We saw" },
      { tamil: "அவள் பாடினாள்", romanization: "aval paadinaal", english: "She sang" },
      { tamil: "குழந்தை தூங்கியது", romanization: "kulanthai thoongiyathu", english: "The child slept" },
    ],
  },
  {
    tense: "present",
    tamilName: "நிகழ் காலம் (Nikal Kaalam)",
    suffix: "-கிறேன் / -க்கிறேன்",
    description:
      "Present tense uses -கிறேன் for first person singular (I am doing). It expresses actions happening now or habitual actions. Tamil uses the same form for present continuous and simple present.",
    examples: [
      { tamil: "நான் படிக்கிறேன்", romanization: "naan padikkireen", english: "I am reading / I read" },
      { tamil: "அவன் விளையாடுகிறான்", romanization: "avan vilaiyaadukiraan", english: "He is playing" },
      { tamil: "நாங்கள் பேசுகிறோம்", romanization: "naangal peesukiroom", english: "We are talking" },
      { tamil: "அவள் சமைக்கிறாள்", romanization: "aval samaikkiraaal", english: "She is cooking" },
      { tamil: "மழை பெய்கிறது", romanization: "mazhai peygirathu", english: "It is raining" },
    ],
  },
  {
    tense: "future",
    tamilName: "எதிர் காலம் (Edhir Kaalam)",
    suffix: "-வேன் / -ப்பேன்",
    description:
      "Future tense uses -வேன் for first person singular (I will do). It expresses actions that will happen. The suffix -ப்பேன் is used for some verb classes.",
    examples: [
      { tamil: "நான் வருவேன்", romanization: "naan varuveen", english: "I will come" },
      { tamil: "அவன் சாப்பிடுவான்", romanization: "avan saappiduvaan", english: "He will eat" },
      { tamil: "நாங்கள் பார்ப்போம்", romanization: "naangal paarppoom", english: "We will see" },
      { tamil: "அவள் படிப்பாள்", romanization: "aval padippaal", english: "She will study" },
      { tamil: "மழை பெய்யும்", romanization: "mazhai peyyum", english: "It will rain" },
    ],
  },
];

export const pronounsWithTenses = [
  { pronoun: "நான் (I)", past: "-ேன்", present: "-கிறேன்", future: "-வேன்" },
  { pronoun: "நீ (you, informal)", past: "-ாய்", present: "-கிறாய்", future: "-வாய்" },
  { pronoun: "நீங்கள் (you, formal)", past: "-ீர்கள்", present: "-கிறீர்கள்", future: "-வீர்கள்" },
  { pronoun: "அவன் (he, informal)", past: "-ான்", present: "-கிறான்", future: "-வான்" },
  { pronoun: "அவள் (she, informal)", past: "-ாள்", present: "-கிறாள்", future: "-வாள்" },
  { pronoun: "அவர் (he/she, formal)", past: "-ார்", present: "-கிறார்", future: "-வார்" },
  { pronoun: "அது (it)", past: "-து", present: "-கிறது", future: "-ம்" },
  { pronoun: "நாம் / நாங்கள் (we)", past: "-ோம்", present: "-கிறோம்", future: "-வோம்" },
  { pronoun: "அவர்கள் (they)", past: "-ார்கள்", present: "-கிறார்கள்", future: "-வார்கள்" },
];
