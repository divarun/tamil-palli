export type GrammarCase = {
  number: number;
  name: string;
  tamilName: string;
  suffix: string;
  role: string;
  question: string;
  examples: { tamil: string; romanization: string; english: string }[];
};

export const cases: GrammarCase[] = [
  {
    number: 1,
    name: "Nominative",
    tamilName: "எழுவாய் வேற்றுமை (Eluvai Veetrumai)",
    suffix: "(no suffix — base form)",
    role: "Subject of the sentence — who/what does the action",
    question: "யார்? (who?) / என்ன? (what?)",
    examples: [
      { tamil: "குழந்தை விளையாடுகிறது", romanization: "kulanthai vilaiyaadugirathu", english: "The child plays (child = subject)" },
      { tamil: "மரம் வளர்கிறது", romanization: "maram valargirathu", english: "The tree grows (tree = subject)" },
    ],
  },
  {
    number: 2,
    name: "Accusative",
    tamilName: "செயப்படுபொருள் வேற்றுமை (Seiyappadupordul Veetrumai)",
    suffix: "-ஐ (-ai)",
    role: "Direct object — what the action is done to",
    question: "யாரை? (whom?) / என்னை? (what, as object?)",
    examples: [
      { tamil: "நான் புத்தகத்தை படிக்கிறேன்", romanization: "naan puththakaththai padikkireen", english: "I read the book (book = object)" },
      { tamil: "அவன் பந்தை உதைத்தான்", romanization: "avan pandhai udhaittaan", english: "He kicked the ball (ball = object)" },
    ],
  },
  {
    number: 3,
    name: "Instrumental / Sociative",
    tamilName: "கருவி வேற்றுமை (Karuvi Veetrumai)",
    suffix: "-ஆல் (-aal) / -உடன் (-udan)",
    role: "Instrument or means by which action is done; accompaniment",
    question: "எதனால்? (by what?) / யாரோடு? (with whom?)",
    examples: [
      { tamil: "கத்தியால் வெட்டினான்", romanization: "kaththiyaal vettinaan", english: "Cut with a knife" },
      { tamil: "நண்பனுடன் வந்தேன்", romanization: "nanbanudan vandheen", english: "Came with a friend" },
    ],
  },
  {
    number: 4,
    name: "Dative",
    tamilName: "கொடை வேற்றுமை (Kodai Veetrumai)",
    suffix: "-க்கு (-kku) / -உக்கு (-ukku)",
    role: "Indirect object — to whom or for what purpose",
    question: "யாருக்கு? (to whom?) / எதற்கு? (for what?)",
    examples: [
      { tamil: "அவளுக்கு பரிசு கொடுத்தேன்", romanization: "avalukku parisu koduttheen", english: "Gave a gift to her" },
      { tamil: "பள்ளிக்கு போகிறேன்", romanization: "pallikku pogirreen", english: "Going to school" },
    ],
  },
  {
    number: 5,
    name: "Ablative",
    tamilName: "நீக்க வேற்றுமை (Neekka Veetrumai)",
    suffix: "-இல் இருந்து (-il irundhu) / -இடம் இருந்து (-idam irundhu)",
    role: "Origin, source, or separation — from where/whom",
    question: "எங்கிருந்து? (from where?) / யாரிடம் இருந்து? (from whom?)",
    examples: [
      { tamil: "சென்னையிலிருந்து வந்தேன்", romanization: "chennaiyilirundhu vandheen", english: "Came from Chennai" },
      { tamil: "மரத்திலிருந்து பழம் விழுந்தது", romanization: "maraththilirundhu palam vilundhadhu", english: "Fruit fell from the tree" },
    ],
  },
  {
    number: 6,
    name: "Genitive / Possessive",
    tamilName: "உடைமை வேற்றுமை (Udamai Veetrumai)",
    suffix: "-இன் (-in) / -உடைய (-udaiya)",
    role: "Possession — whose or belonging to whom",
    question: "யாருடையது? (whose?)",
    examples: [
      { tamil: "அவளுடைய புத்தகம்", romanization: "avaludaiya puththakam", english: "Her book" },
      { tamil: "இந்த வீட்டின் கதவு", romanization: "indha veetthin kadavu", english: "The door of this house" },
    ],
  },
  {
    number: 7,
    name: "Locative",
    tamilName: "இட வேற்றுமை (Ida Veetrumai)",
    suffix: "-இல் (-il) / -இடம் (-idam)",
    role: "Location — where something is or happens",
    question: "எங்கே? (where?)",
    examples: [
      { tamil: "வீட்டில் இருக்கிறேன்", romanization: "veettil irukkireen", english: "I am at home" },
      { tamil: "மேசையில் புத்தகம் இருக்கிறது", romanization: "meesaiyil puththakam irukkiRadhu", english: "The book is on the table" },
    ],
  },
  {
    number: 8,
    name: "Vocative",
    tamilName: "விளி வேற்றுமை (Vili Veetrumai)",
    suffix: "-ஏ (-ee) / -ஓ (-oo) / no suffix with raised intonation",
    role: "Calling or addressing someone directly",
    question: "(calling someone)",
    examples: [
      { tamil: "அம்மா, வா!", romanization: "amma, vaa!", english: "Mother, come!" },
      { tamil: "ராமா, கேள்!", romanization: "Raama, kel!", english: "Rama, listen!" },
    ],
  },
];
