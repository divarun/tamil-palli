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
  // Vallinam (Hard) — க ச ட த ப ற
  { tamil: "க", romanization: "ka", group: "vallinam", example: "கல்", exampleMeaning: "stone", tip: "Like 'k' in 'kite'" },
  { tamil: "ச", romanization: "cha", group: "vallinam", example: "சந்தை", exampleMeaning: "market", tip: "Like 'ch' or 's' depending on position" },
  { tamil: "ட", romanization: "ta", group: "vallinam", example: "டாக்டர்", exampleMeaning: "doctor", tip: "Retroflex 't' — tongue curled back" },
  { tamil: "த", romanization: "tha", group: "vallinam", example: "தாய்", exampleMeaning: "mother", tip: "Dental 't' — like 'th' in 'the'" },
  { tamil: "ப", romanization: "pa", group: "vallinam", example: "பால்", exampleMeaning: "milk", tip: "Like 'p' in 'pot'" },
  { tamil: "ற", romanization: "rra", group: "vallinam", example: "இறால்", exampleMeaning: "prawn", tip: "Strong 'r' unique to Tamil" },
  // Mellinam (Soft/Nasal) — ங ஞ ண ந ம ன
  { tamil: "ங", romanization: "nga", group: "mellinam", example: "மங்கை", exampleMeaning: "young woman", tip: "Nasal 'ng' as in 'sing'" },
  { tamil: "ஞ", romanization: "nya", group: "mellinam", example: "ஞானம்", exampleMeaning: "wisdom", tip: "Nasal 'ny' as in 'canyon'" },
  { tamil: "ண", romanization: "Na", group: "mellinam", example: "பண்", exampleMeaning: "tune", tip: "Retroflex nasal — tongue tip curled back (distinct from ந and ன)" },
  { tamil: "ந", romanization: "na", group: "mellinam", example: "நல்லது", exampleMeaning: "good", tip: "Dental nasal — tongue against upper teeth" },
  { tamil: "ம", romanization: "ma", group: "mellinam", example: "மரம்", exampleMeaning: "tree", tip: "Like 'm' in 'mother'" },
  { tamil: "ன", romanization: "na", group: "mellinam", example: "மனம்", exampleMeaning: "mind", tip: "Alveolar nasal — like 'n' in 'no' (word-final and word-medial; not word-initial)" },
  // Idaiyinam (Medium) — ய ர ல வ ழ ள
  { tamil: "ய", romanization: "ya", group: "idaiyinam", example: "யானை", exampleMeaning: "elephant", tip: "Like 'y' in 'yes'" },
  { tamil: "ர", romanization: "ra", group: "idaiyinam", example: "ரயில்", exampleMeaning: "train", tip: "Trilled 'r'" },
  { tamil: "ல", romanization: "la", group: "idaiyinam", example: "லட்டு", exampleMeaning: "sweet ball", tip: "Dental 'l' — tongue tip against upper teeth" },
  { tamil: "வ", romanization: "va", group: "idaiyinam", example: "வீடு", exampleMeaning: "house", tip: "Like 'v' in 'vine'" },
  { tamil: "ழ", romanization: "zha", group: "idaiyinam", example: "தமிழ்", exampleMeaning: "Tamil", tip: "The most distinctive Tamil sound — retroflex approximant, no English equivalent. Never drop or substitute this!" },
  { tamil: "ள", romanization: "La", group: "idaiyinam", example: "வளர்", exampleMeaning: "grow", tip: "Retroflex 'l' — tongue curled back (distinct from ல)" },
];
