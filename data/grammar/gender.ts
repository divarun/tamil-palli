export type GenderRule = {
  gender: "masculine" | "feminine" | "neuter";
  tamilName: string;
  description: string;
  rules: string[];
  examples: { tamil: string; romanization: string; english: string }[];
};

export const genderRules: GenderRule[] = [
  {
    gender: "masculine",
    tamilName: "ஆண்பால் (Aanpaal)",
    description: "Masculine gender refers to male humans and male deities. Tamil has explicit masculine agreement in verbs and pronouns.",
    rules: [
      "Used for male humans (men, boys) and male deities",
      "Third person masculine pronouns: அவன் (informal), அவர் (formal/respectful)",
      "Verb ending for masculine singular: -ான் (past), -கிறான் (present), -வான் (future)",
    ],
    examples: [
      { tamil: "அவன் வருகிறான்", romanization: "avan varukiraan", english: "He is coming (informal)" },
      { tamil: "அவர் பேசுகிறார்", romanization: "avar peesukiraar", english: "He is speaking (formal)" },
      { tamil: "மாணவன் படிக்கிறான்", romanization: "maanavan padikkiraan", english: "The (male) student is studying" },
    ],
  },
  {
    gender: "feminine",
    tamilName: "பெண்பால் (Penbaal)",
    description: "Feminine gender refers to female humans and female deities.",
    rules: [
      "Used for female humans (women, girls) and female deities",
      "Third person feminine pronouns: அவள் (informal), அவர் (formal/respectful — same as masculine!)",
      "Verb ending for feminine singular: -ாள் (past), -கிறாள் (present), -வாள் (future)",
      "Note: அவர் is used formally for BOTH masculine and feminine",
    ],
    examples: [
      { tamil: "அவள் வருகிறாள்", romanization: "aval varukiraal", english: "She is coming (informal)" },
      { tamil: "மாணவி படிக்கிறாள்", romanization: "maanavi padikkiraal", english: "The (female) student is studying" },
      { tamil: "ஆசிரியை வருகிறார்", romanization: "aasiriyai varukiraar", english: "The (female) teacher is coming (formal)" },
    ],
  },
  {
    gender: "neuter",
    tamilName: "அஃறிணை (Ahrrinai)",
    description: "Neuter gender (அஃறிணை) is used for animals, objects, things, and abstract concepts. It is sometimes called the 'lower class' but this is a grammatical classification only.",
    rules: [
      "Used for animals, objects, things, plants, and abstract concepts",
      "Third person neuter pronoun: அது (it/that, singular), அவை (those, plural)",
      "Verb ending for neuter singular: -து (past), -கிறது (present), -ம் / -கும் (future)",
      "Plural neuter: அவை வருகின்றன (they [things] come)",
    ],
    examples: [
      { tamil: "நாய் ஓடுகிறது", romanization: "naai oodugiradhu", english: "The dog runs (dog = neuter)" },
      { tamil: "மரம் வளர்கிறது", romanization: "maram valargiradhu", english: "The tree grows (tree = neuter)" },
      { tamil: "புத்தகம் மேசையில் இருக்கிறது", romanization: "puththakam meesaiyil irukkiRadhu", english: "The book is on the table (book = neuter)" },
    ],
  },
];

export const highClassVsLowClass = {
  title: "உயர்திணை vs அஃறிணை (High Class vs Low Class)",
  description:
    "Tamil divides all nouns into two classes: உயர்திணை (uyarththinai — high class) which includes rational beings (humans and gods), and அஃறிணை (ahrrinai — low class) which includes all other beings and objects. This determines verb agreement.",
  examples: [
    { class: "உயர்திணை", tamil: "மனிதன் வந்தான்", english: "The man came (rational being → masculine verb ending)" },
    { class: "அஃறிணை", tamil: "நாய் வந்தது", english: "The dog came (non-rational → neuter verb ending)" },
  ],
};
