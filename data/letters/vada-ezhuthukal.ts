export type GranthaLetter = {
  tamil: string;
  romanization: string;
  sound: string;
  origin: string;
  examples: { word: string; meaning: string }[];
};

export const vadaEzhuthukal: GranthaLetter[] = [
  {
    tamil: "ஜ",
    romanization: "ja",
    sound: "Like 'j' in 'jar'",
    origin: "Sanskrit/Grantha",
    examples: [
      { word: "ஜலம்", meaning: "water" },
      { word: "ஜெயம்", meaning: "victory" },
      { word: "ஜூன்", meaning: "June" },
    ],
  },
  {
    tamil: "ஷ",
    romanization: "sha",
    sound: "Like 'sh' in 'ship'",
    origin: "Sanskrit/Grantha",
    examples: [
      { word: "ஷாப்பிங்", meaning: "shopping" },
      { word: "விஷயம்", meaning: "matter/topic" },
      { word: "ஷீ", meaning: "she (loanword)" },
    ],
  },
  {
    tamil: "ஸ",
    romanization: "sa",
    sound: "Like 's' in 'sun'",
    origin: "Sanskrit/Grantha",
    examples: [
      { word: "ஸ்கூல்", meaning: "school" },
      { word: "நமஸ்காரம்", meaning: "greetings (respectful)" },
      { word: "ஸ்டேஷன்", meaning: "station" },
    ],
  },
  {
    tamil: "ஹ",
    romanization: "ha",
    sound: "Like 'h' in 'hat'",
    origin: "Sanskrit/Grantha",
    examples: [
      { word: "ஹலோ", meaning: "hello" },
      { word: "ஹாஸ்பிடல்", meaning: "hospital" },
      { word: "ஹிந்தி", meaning: "Hindi" },
    ],
  },
  {
    tamil: "க்ஷ",
    romanization: "ksha",
    sound: "Combined 'ksh' — like 'ksh' in 'lakshmi'",
    origin: "Sanskrit/Grantha",
    examples: [
      { word: "க்ஷமை", meaning: "forgiveness" },
      { word: "லக்ஷ்மி", meaning: "Lakshmi (name)" },
      { word: "க்ஷணம்", meaning: "moment" },
    ],
  },
  {
    tamil: "ஶ",
    romanization: "sha",
    sound: "Like 'sh' — slightly softer than ஷ",
    origin: "Sanskrit/Grantha",
    examples: [
      { word: "ஶ்ரீ", meaning: "Sri (auspicious prefix)" },
      { word: "ஶாந்தி", meaning: "peace" },
      { word: "ஶக்தி", meaning: "power/Shakti" },
    ],
  },
];
