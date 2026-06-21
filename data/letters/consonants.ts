export type ConsonantGroup = "vallinam" | "mellinam" | "idaiyinam";

export type Consonant = {
  tamil: string;
  romanization: string;
  group: ConsonantGroup;
  example: string;
  exampleMeaning: string;
  tip: string;
};

export const groupLabels: Record<ConsonantGroup, { english: string; tamil: string; description: string }> = {
  vallinam: { english: "Hard", tamil: "வல்லினம்", description: "Hard consonants — produced with strong pressure" },
  mellinam: { english: "Soft", tamil: "மெல்லினம்", description: "Soft/nasal consonants" },
  idaiyinam: { english: "Medium", tamil: "இடையினம்", description: "Medium consonants — between hard and soft" },
};

export const consonants: Consonant[] = [
  // Vallinam (Hard) — க் ச் ட் த் ப் ற்
  { tamil: "க்", romanization: "k", group: "vallinam", example: "கல்", exampleMeaning: "stone", tip: "Like 'k' in 'kite'" },
  { tamil: "ச்", romanization: "c", group: "vallinam", example: "சந்தை", exampleMeaning: "market", tip: "Position-dependent: sounds like 'ch' at the start of a word, like 's' or 'ss' between vowels. Romanized 'c' (ISO standard)" },
  { tamil: "ட்", romanization: "t", group: "vallinam", example: "டாக்டர்", exampleMeaning: "doctor", tip: "Retroflex 't' — tongue curled back" },
  { tamil: "த்", romanization: "th", group: "vallinam", example: "தாய்", exampleMeaning: "mother", tip: "Dental 't' — like 'th' in 'the'" },
  { tamil: "ப்", romanization: "p", group: "vallinam", example: "பால்", exampleMeaning: "milk", tip: "Like 'p' in 'pot'" },
  { tamil: "ற்", romanization: "rr", group: "vallinam", example: "இறால்", exampleMeaning: "prawn", tip: "Strong 'r' unique to Tamil" },
  // Mellinam (Soft/Nasal) — ங் ஞ் ண் ந் ம் ன்
  { tamil: "ங்", romanization: "ng", group: "mellinam", example: "மங்கை", exampleMeaning: "young woman", tip: "Nasal 'ng' as in 'sing'" },
  { tamil: "ஞ்", romanization: "ny", group: "mellinam", example: "ஞானம்", exampleMeaning: "wisdom", tip: "Nasal 'ny' as in 'canyon'" },
  { tamil: "ண்", romanization: "N", group: "mellinam", example: "பண்", exampleMeaning: "tune", tip: "Retroflex nasal — tongue tip curled back (distinct from ந and ன)" },
  { tamil: "ந்", romanization: "n", group: "mellinam", example: "நல்லது", exampleMeaning: "good", tip: "Dental nasal — tongue against upper teeth" },
  { tamil: "ம்", romanization: "m", group: "mellinam", example: "மரம்", exampleMeaning: "tree", tip: "Like 'm' in 'mother'" },
  { tamil: "ன்", romanization: "ṉ", group: "mellinam", example: "மனம்", exampleMeaning: "mind", tip: "Alveolar nasal (ṉ) — like 'n' in 'no'. Appears word-finally and word-medially, never word-initially. Distinct from dental ந (n)" },
  // Idaiyinam (Medium) — ய் ர் ல் வ் ழ் ள்
  { tamil: "ய்", romanization: "y", group: "idaiyinam", example: "யானை", exampleMeaning: "elephant", tip: "Like 'y' in 'yes'" },
  { tamil: "ர்", romanization: "r", group: "idaiyinam", example: "ரயில்", exampleMeaning: "train", tip: "Trilled 'r'" },
  { tamil: "ல்", romanization: "l", group: "idaiyinam", example: "லட்டு", exampleMeaning: "sweet ball", tip: "Dental 'l' — tongue tip against upper teeth" },
  { tamil: "வ்", romanization: "v", group: "idaiyinam", example: "வீடு", exampleMeaning: "house", tip: "Like 'v' in 'vine'" },
  { tamil: "ழ்", romanization: "zh", group: "idaiyinam", example: "தமிழ்", exampleMeaning: "Tamil", tip: "The most distinctive Tamil sound — retroflex approximant, no English equivalent. Never drop or substitute this!" },
  { tamil: "ள்", romanization: "L", group: "idaiyinam", example: "வளர்", exampleMeaning: "grow", tip: "Retroflex 'l' — tongue curled back (distinct from ல)" },
];
