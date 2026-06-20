export type Vowel = {
  tamil: string;
  romanization: string;
  length: "short" | "long";
  pair?: string; // paired vowel (short↔long)
  example: string;
  exampleMeaning: string;
  tip: string;
};

export const vowels: Vowel[] = [
  { tamil: "அ", romanization: "a", length: "short", pair: "ஆ", example: "அம்மா", exampleMeaning: "mother", tip: "Short 'a' as in 'cut'" },
  { tamil: "ஆ", romanization: "aa", length: "long", pair: "அ", example: "ஆகாயம்", exampleMeaning: "sky", tip: "Long 'aa' as in 'father'" },
  { tamil: "இ", romanization: "i", length: "short", pair: "ஈ", example: "இலை", exampleMeaning: "leaf", tip: "Short 'i' as in 'bit'" },
  { tamil: "ஈ", romanization: "ii", length: "long", pair: "இ", example: "ஈ", exampleMeaning: "fly", tip: "Long 'ee' as in 'feet'" },
  { tamil: "உ", romanization: "u", length: "short", pair: "ஊ", example: "உடல்", exampleMeaning: "body", tip: "Short 'u' as in 'put'" },
  { tamil: "ஊ", romanization: "uu", length: "long", pair: "உ", example: "ஊர்", exampleMeaning: "village", tip: "Long 'oo' as in 'food'" },
  { tamil: "எ", romanization: "e", length: "short", pair: "ஏ", example: "எலி", exampleMeaning: "mouse", tip: "Short 'e' as in 'pet'" },
  { tamil: "ஏ", romanization: "ey", length: "long", pair: "எ", example: "ஏணி", exampleMeaning: "ladder", tip: "Long mid 'e' as in 'they' — distinct from ஈ (ii)" },
  { tamil: "ஐ", romanization: "ai", length: "short", pair: undefined, example: "ஐந்து", exampleMeaning: "five", tip: "Like 'eye'" },
  { tamil: "ஒ", romanization: "o", length: "short", pair: "ஓ", example: "ஒட்டகம்", exampleMeaning: "camel", tip: "Short 'o' as in 'not'" },
  { tamil: "ஓ", romanization: "oo", length: "long", pair: "ஒ", example: "ஓடு", exampleMeaning: "run", tip: "Long 'o' as in 'go'" },
  { tamil: "ஔ", romanization: "au", length: "short", pair: undefined, example: "ஔடதம்", exampleMeaning: "medicine", tip: "Like 'ow' in 'cow'" },
];

export const shortLongPairs = [
  { short: "அ", long: "ஆ", shortRoman: "a", longRoman: "aa" },
  { short: "இ", long: "ஈ", shortRoman: "i", longRoman: "ii" },
  { short: "உ", long: "ஊ", shortRoman: "u", longRoman: "uu" },
  { short: "எ", long: "ஏ", shortRoman: "e", longRoman: "ey" },
  { short: "ஒ", long: "ஓ", shortRoman: "o", longRoman: "oo" },
];
