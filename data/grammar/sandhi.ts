export type SandhiRule = {
  id: string;
  name: string;
  tamilName: string;
  description: string;
  pattern: string;
  examples: { before: string; after: string; romanization: string; english: string }[];
};

export const sandhiRules: SandhiRule[] = [
  {
    id: "sr1",
    name: "Vowel + Vowel: Glide Insertion",
    tamilName: "உயிர் + உயிர் = யகர/வகர உடம்படுமெய்",
    description:
      "When a word ending in a vowel is followed by a word beginning with a vowel, the glide consonants ய் (y) or வ் (v) are inserted. ய் after front vowels (இ, ஈ, எ, ஏ, ஐ), வ் after back vowels (உ, ஊ, ஒ, ஓ, ஔ), and typically ய் after அ/ஆ.",
    pattern: "V + V → V + y/v + V",
    examples: [
      { before: "நீ + இல்லை", after: "நீயில்லை", romanization: "neeyillai", english: "you are not here (ய் inserted after front vowel ஈ before a vowel)" },
      { before: "அது + ஆகும்", after: "அதுவாகும்", romanization: "adhuvaakum", english: "it will become (வ் inserted after back vowel உ before a vowel)" },
      { before: "பூ + இதழ்", after: "பூவிதழ்", romanization: "poovithal", english: "flower petal — common compound (வ் inserted after back vowel ஊ)" },
    ],
  },
  {
    id: "sr2",
    name: "Hard Consonant Doubling",
    tamilName: "வல்லினம் மிகுதல்",
    description:
      "Hard consonants (க, ச, ட, த, ப, ற) at the start of a second word are doubled (geminated) in certain environments: after some suffixes, after certain words, and in compound nouns. This is called வல்லின மிகுதல்.",
    pattern: "word + க/ச/ட/த/ப/ற → word + கக/சச/டட/தத/பப/றற",
    examples: [
      { before: "அந்த + கடை", after: "அந்தக் கடை", romanization: "andha kadai", english: "that shop (க doubles after அந்த)" },
      { before: "இந்த + பை", after: "இந்தப் பை", romanization: "indha pai", english: "this bag (ப doubles after இந்த)" },
      { before: "சின்ன + குழந்தை", after: "சின்னக் குழந்தை", romanization: "sinna kulanthai", english: "small child (க doubles)" },
    ],
  },
  {
    id: "sr3",
    name: "Hard Consonant Not Doubling",
    tamilName: "வல்லினம் மிகாமை",
    description:
      "In many environments hard consonants do NOT double — for example after certain suffixes and words including verbal nouns, relationship words, and others. Knowing when NOT to double is as important as knowing when to double.",
    pattern: "Certain word + க/ச/ட/த/ப/ற → no doubling",
    examples: [
      { before: "வீட்டில் + கடை", after: "வீட்டில் கடை", romanization: "veettil kadai", english: "shop in the house (no doubling after locative -ல்)" },
      { before: "அவன் + தங்கை", after: "அவன் தங்கை", romanization: "avan thangai", english: "his younger sister (no doubling after relationship pronoun)" },
      { before: "படிக்கும் + போது", after: "படிக்கும் போது", romanization: "padikkum podhu", english: "while studying (no doubling after -ம் in time clauses)" },
    ],
  },
  {
    id: "sr4",
    name: "Nasal Assimilation",
    tamilName: "ஆகம விகாரம் — மெல்லின மாற்றம்",
    description:
      "When nasal consonants (ம, ன, ண, ங, ஞ) meet other consonants, the nasal may change to match the following consonant's place of articulation.",
    pattern: "nasal + consonant → assimilated nasal + consonant",
    examples: [
      { before: "மரம் + கிளை", after: "மரக்கிளை", romanization: "marakkiLai", english: "tree branch (compound — ம் drops, க doubles)" },
      { before: "நடன் + காரன்", after: "நடன்காரன்", romanization: "nadankaaran", english: "dancer (ன் retained before க)" },
    ],
  },
  {
    id: "sr5",
    name: "Final Consonant + Initial Consonant",
    tamilName: "புணர்ச்சி விதிகள் — மெய் + மெய்",
    description:
      "When a word ending in a consonant (புள்ளி) joins with a word starting in a consonant, specific combination rules apply. The final consonant may be dropped, changed, or a vowel inserted.",
    pattern: "C(final) + C(initial) → various changes",
    examples: [
      { before: "கல் + தூண்", after: "கற்றூண்", romanization: "katroon", english: "stone pillar (ல் becomes ற்)" },
      { before: "பால் + கடை", after: "பாற்கடை", romanization: "paarkkadai", english: "milk shop (ல் becomes ற்)" },
      { before: "நீர் + வீழ்ச்சி", after: "நீர்வீழ்ச்சி", romanization: "neerveeicchi", english: "waterfall (direct compound)" },
    ],
  },
];
