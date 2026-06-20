export type Phrase = {
  tamil: string;
  romanization: string;
  english: string;
  context: string;
};

export type Dialogue = {
  title: string;
  scenario: string;
  lines: { speaker: "A" | "B"; tamil: string; romanization: string; english: string }[];
};

export const phrases: Phrase[] = [
  // Asking directions
  { tamil: "மன்னிக்கவும், ரயில் நிலையம் எங்கே இருக்கு?", romanization: "mannikkavum, rayil nilayam enge irukku?", english: "Excuse me, where is the railway station?", context: "directions" },
  { tamil: "நேரே போங்க, அப்புறம் இடது பக்கம் திரும்புங்க", romanization: "neere ponga, appuram idadu pakkam thirumbuga", english: "Go straight, then turn left", context: "directions" },
  { tamil: "இது எவ்வளவு தூரம் இருக்கு?", romanization: "idhu evvalavu thouram irukku?", english: "How far is this?", context: "directions" },
  // Talking about family
  { tamil: "உங்களுக்கு எத்தனை பிள்ளைகள்?", romanization: "ungalukku etthanai pillaikal?", english: "How many children do you have?", context: "family" },
  { tamil: "என்னோட குடும்பத்துல நான்கு பேர் இருக்கோம்", romanization: "ennoda kudumbaththul naangu per irukkoom", english: "There are four people in my family", context: "family" },
  // Ordering food
  { tamil: "ஒரு இட்லி தாருங்க", romanization: "oru idli tharinga", english: "Please give me one idli", context: "food" },
  { tamil: "இதன் விலை என்ன?", romanization: "idhan vilai enna?", english: "What is the price of this?", context: "food" },
  { tamil: "மிகவும் சுவையாக இருக்கு", romanization: "mikavum suvaiyaaka irukku", english: "It is very tasty", context: "food" },
  // Daily routines
  { tamil: "காலையில் என்ன சாப்பிட்டீங்க?", romanization: "kaalayil enna saappittinga?", english: "What did you eat in the morning?", context: "routine" },
  { tamil: "நான் ஆறு மணிக்கு எழுவேன்", romanization: "naan aaru manikku eluveen", english: "I wake up at six o'clock", context: "routine" },
  { tamil: "இப்போது என்ன நேரம்?", romanization: "ippodhu enna neram?", english: "What time is it now?", context: "routine" },
  { tamil: "நான் பள்ளிக்கு போவேன்", romanization: "naan pallikku poveen", english: "I will go to school", context: "routine" },
];

export const dialogues: Dialogue[] = [
  {
    title: "Asking Directions",
    scenario: "A tourist asks a local for directions to the bus stand",
    lines: [
      { speaker: "A", tamil: "வணக்கம், பஸ் ஸ்டாண்ட் எங்கே இருக்கு?", romanization: "vanakkam, bas stand enge irukku?", english: "Hello, where is the bus stand?" },
      { speaker: "B", tamil: "நேரே போங்க, இரண்டு தெரு கழிச்சு வலது பக்கம் திரும்புங்க", romanization: "neere ponga, irandu theru kalicchu valadu pakkam thirumbuga", english: "Go straight, turn right after two streets" },
      { speaker: "A", tamil: "நடந்து போகலாமா?", romanization: "nadandhu pogalaama?", english: "Can I walk there?" },
      { speaker: "B", tamil: "ஆமாம், ஐந்து நிமிடம் தான்", romanization: "aamaam, ainthu nimidam dhaan", english: "Yes, it's only five minutes" },
      { speaker: "A", tamil: "மிக்க நன்றி", romanization: "mikka nandri", english: "Thank you very much" },
    ],
  },
  {
    title: "Talking About Family",
    scenario: "Two friends talk about their families",
    lines: [
      { speaker: "A", tamil: "உங்க குடும்பத்துல எத்தனை பேர் இருக்கீங்க?", romanization: "unga kudumbaththul etthanai per irukkinga?", english: "How many people are in your family?" },
      { speaker: "B", tamil: "ஐந்து பேர் — அம்மா, அப்பா, அண்ணன், தங்கை, நான்", romanization: "ainthu per — amma, appa, annan, thangai, naan", english: "Five people — mother, father, elder brother, younger sister, and I" },
      { speaker: "A", tamil: "உங்க அண்ணன் என்ன பண்றார்?", romanization: "unga annan enna panraar?", english: "What does your elder brother do?" },
      { speaker: "B", tamil: "அவர் மருத்துவர்", romanization: "avar marutthuvar", english: "He is a doctor" },
    ],
  },
  {
    title: "Ordering Food",
    scenario: "Ordering at a restaurant",
    lines: [
      { speaker: "A", tamil: "என்ன வேணும்?", romanization: "enna veenum?", english: "What do you want?" },
      { speaker: "B", tamil: "இரண்டு இட்லி, ஒரு வடை தாருங்க", romanization: "irandu idli, oru vadai tharinga", english: "Please give two idli and one vada" },
      { speaker: "A", tamil: "சாம்பார் வேணுமா?", romanization: "saambaar veenuma?", english: "Do you want sambar?" },
      { speaker: "B", tamil: "ஆமாம், சாம்பார் வேணும்", romanization: "aamaam, saambaar veenum", english: "Yes, I want sambar" },
      { speaker: "A", tamil: "மொத்தம் நூறு ரூபாய்", romanization: "moththam nooru roopaai", english: "Total: one hundred rupees" },
    ],
  },
];
