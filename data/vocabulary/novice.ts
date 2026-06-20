export type VocabItem = {
  tamil: string;
  romanization: string;
  english: string;
  category: string;
};

export const greetings: VocabItem[] = [
  { tamil: "வணக்கம்", romanization: "vanakkam", english: "Hello / Greetings", category: "greetings" },
  { tamil: "நன்றி", romanization: "nandri", english: "Thank you", category: "greetings" },
  { tamil: "மன்னிக்கவும்", romanization: "mannikkavum", english: "Sorry / Excuse me", category: "greetings" },
  { tamil: "சரி", romanization: "sari", english: "Okay / Alright", category: "greetings" },
  { tamil: "ஆமாம்", romanization: "aamaam", english: "Yes", category: "greetings" },
  { tamil: "இல்லை", romanization: "illai", english: "No", category: "greetings" },
  { tamil: "எப்படி இருக்கீங்க?", romanization: "eppadi irukkinga?", english: "How are you?", category: "greetings" },
  { tamil: "நல்லா இருக்கேன்", romanization: "nallaa irukken", english: "I am fine", category: "greetings" },
  { tamil: "பெயர் என்ன?", romanization: "peyar enna?", english: "What is your name?", category: "greetings" },
  { tamil: "என் பெயர்...", romanization: "en peyar...", english: "My name is...", category: "greetings" },
  { tamil: "காலை வணக்கம்", romanization: "kaalai vanakkam", english: "Good morning", category: "greetings" },
  { tamil: "மாலை வணக்கம்", romanization: "maalai vanakkam", english: "Good evening", category: "greetings" },
  { tamil: "இரவு வணக்கம்", romanization: "iravu vanakkam", english: "Good night", category: "greetings" },
];

export const colors: VocabItem[] = [
  { tamil: "சிவப்பு", romanization: "sivappu", english: "Red", category: "colors" },
  { tamil: "நீலம்", romanization: "neelam", english: "Blue", category: "colors" },
  { tamil: "பச்சை", romanization: "pachai", english: "Green", category: "colors" },
  { tamil: "மஞ்சள்", romanization: "manjal", english: "Yellow", category: "colors" },
  { tamil: "வெள்ளை", romanization: "vellai", english: "White", category: "colors" },
  { tamil: "கருப்பு", romanization: "karuppu", english: "Black", category: "colors" },
  { tamil: "ஆரஞ்சு", romanization: "aaraanju", english: "Orange", category: "colors" },
  { tamil: "இளஞ்சிவப்பு", romanization: "ilanjivappu", english: "Pink", category: "colors" },
  { tamil: "ஊதா", romanization: "ootha", english: "Purple / Violet", category: "colors" },
  { tamil: "பழுப்பு", romanization: "paluppu", english: "Brown", category: "colors" },
];

export const bodyParts: VocabItem[] = [
  { tamil: "தலை", romanization: "thalai", english: "Head", category: "body" },
  { tamil: "கண்", romanization: "kan", english: "Eye", category: "body" },
  { tamil: "காது", romanization: "kaadhu", english: "Ear", category: "body" },
  { tamil: "மூக்கு", romanization: "mookku", english: "Nose", category: "body" },
  { tamil: "வாய்", romanization: "vaai", english: "Mouth", category: "body" },
  { tamil: "பல்", romanization: "pal", english: "Tooth", category: "body" },
  { tamil: "கை", romanization: "kai", english: "Hand / Arm", category: "body" },
  { tamil: "கால்", romanization: "kaal", english: "Leg / Foot", category: "body" },
  { tamil: "வயிறு", romanization: "vayiru", english: "Stomach", category: "body" },
  { tamil: "முதுகு", romanization: "mutuku", english: "Back", category: "body" },
  { tamil: "இதயம்", romanization: "idhayam", english: "Heart", category: "body" },
  { tamil: "மூளை", romanization: "moolai", english: "Brain", category: "body" },
];

export const family: VocabItem[] = [
  { tamil: "அம்மா", romanization: "amma", english: "Mother", category: "family" },
  { tamil: "அப்பா", romanization: "appa", english: "Father", category: "family" },
  { tamil: "அக்கா", romanization: "akka", english: "Elder sister", category: "family" },
  { tamil: "அண்ணன்", romanization: "annan", english: "Elder brother", category: "family" },
  { tamil: "தங்கை", romanization: "thangai", english: "Younger sister", category: "family" },
  { tamil: "தம்பி", romanization: "thambi", english: "Younger brother", category: "family" },
  { tamil: "தாத்தா", romanization: "thaattha", english: "Grandfather", category: "family" },
  { tamil: "பாட்டி", romanization: "paatti", english: "Grandmother", category: "family" },
  { tamil: "மாமா", romanization: "maama", english: "Uncle (maternal)", category: "family" },
  { tamil: "அத்தை", romanization: "atthai", english: "Aunt (paternal)", category: "family" },
  { tamil: "மகன்", romanization: "makan", english: "Son", category: "family" },
  { tamil: "மகள்", romanization: "makal", english: "Daughter", category: "family" },
];

export const numbers: VocabItem[] = [
  { tamil: "ஒன்று", romanization: "ondru", english: "One (1)", category: "numbers" },
  { tamil: "இரண்டு", romanization: "irandu", english: "Two (2)", category: "numbers" },
  { tamil: "மூன்று", romanization: "moondru", english: "Three (3)", category: "numbers" },
  { tamil: "நான்கு", romanization: "naanku", english: "Four (4)", category: "numbers" },
  { tamil: "ஐந்து", romanization: "ainthu", english: "Five (5)", category: "numbers" },
  { tamil: "ஆறு", romanization: "aaru", english: "Six (6)", category: "numbers" },
  { tamil: "ஏழு", romanization: "eyzhu", english: "Seven (7)", category: "numbers" },
  { tamil: "எட்டு", romanization: "ettu", english: "Eight (8)", category: "numbers" },
  { tamil: "ஒன்பது", romanization: "onbadu", english: "Nine (9)", category: "numbers" },
  { tamil: "பத்து", romanization: "pattu", english: "Ten (10)", category: "numbers" },
  { tamil: "பதினொன்று", romanization: "padhinondru", english: "Eleven (11)", category: "numbers" },
  { tamil: "பன்னிரண்டு", romanization: "pannirandu", english: "Twelve (12)", category: "numbers" },
  { tamil: "இருபது", romanization: "irupadu", english: "Twenty (20)", category: "numbers" },
  { tamil: "முப்பது", romanization: "muppadu", english: "Thirty (30)", category: "numbers" },
  { tamil: "நாற்பது", romanization: "naarpadu", english: "Forty (40)", category: "numbers" },
  { tamil: "ஐம்பது", romanization: "aimbadu", english: "Fifty (50)", category: "numbers" },
  { tamil: "அறுபது", romanization: "arupadu", english: "Sixty (60)", category: "numbers" },
  { tamil: "எழுபது", romanization: "ezhupadu", english: "Seventy (70)", category: "numbers" },
  { tamil: "எண்பது", romanization: "enbadu", english: "Eighty (80)", category: "numbers" },
  { tamil: "தொண்ணூறு", romanization: "thonnooru", english: "Ninety (90)", category: "numbers" },
  { tamil: "நூறு", romanization: "nooru", english: "One hundred (100)", category: "numbers" },
];

export const questionWords: VocabItem[] = [
  { tamil: "யார்", romanization: "yaar", english: "Who", category: "questions" },
  { tamil: "என்ன", romanization: "enna", english: "What", category: "questions" },
  { tamil: "எங்கே", romanization: "enge", english: "Where", category: "questions" },
  { tamil: "எப்போது", romanization: "eppodhu", english: "When", category: "questions" },
  { tamil: "ஏன்", romanization: "yen", english: "Why", category: "questions" },
  { tamil: "எப்படி", romanization: "eppadi", english: "How", category: "questions" },
  { tamil: "எவ்வளவு", romanization: "evvalavu", english: "How much / How many", category: "questions" },
  { tamil: "எது", romanization: "edhu", english: "Which (thing)", category: "questions" },
];
