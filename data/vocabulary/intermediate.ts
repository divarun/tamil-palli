export type VocabItem = {
  tamil: string;
  romanization: string;
  english: string;
  category: string;
};

export const food: VocabItem[] = [
  { tamil: "சாதம்", romanization: "saadham", english: "Rice", category: "food" },
  { tamil: "ரொட்டி", romanization: "rotti", english: "Bread / Roti", category: "food" },
  { tamil: "இட்லி", romanization: "idli", english: "Idli", category: "food" },
  { tamil: "தோசை", romanization: "dosai", english: "Dosa", category: "food" },
  { tamil: "சாம்பார்", romanization: "saambaar", english: "Sambar", category: "food" },
  { tamil: "ரசம்", romanization: "rasam", english: "Rasam", category: "food" },
  { tamil: "பால்", romanization: "paal", english: "Milk", category: "food" },
  { tamil: "தண்ணீர்", romanization: "thanneer", english: "Water", category: "food" },
  { tamil: "தேநீர்", romanization: "theeneer", english: "Tea", category: "food" },
  { tamil: "காபி", romanization: "kaapi", english: "Coffee", category: "food" },
  { tamil: "பழம்", romanization: "palam", english: "Fruit", category: "food" },
  { tamil: "காய்கறி", romanization: "kaaikari", english: "Vegetable", category: "food" },
  { tamil: "இனிப்பு", romanization: "inippu", english: "Sweet", category: "food" },
  { tamil: "உப்பு", romanization: "uppu", english: "Salt", category: "food" },
  { tamil: "காரம்", romanization: "kaaram", english: "Spicy", category: "food" },
];

export const directions: VocabItem[] = [
  { tamil: "வடக்கு", romanization: "vadakku", english: "North", category: "directions" },
  { tamil: "தெற்கு", romanization: "therku", english: "South", category: "directions" },
  { tamil: "கிழக்கு", romanization: "kilakku", english: "East", category: "directions" },
  { tamil: "மேற்கு", romanization: "merku", english: "West", category: "directions" },
  { tamil: "வலது", romanization: "valadu", english: "Right", category: "directions" },
  { tamil: "இடது", romanization: "idadu", english: "Left", category: "directions" },
  { tamil: "நேரே", romanization: "neere", english: "Straight ahead", category: "directions" },
  { tamil: "மேலே", romanization: "meele", english: "Above / Up", category: "directions" },
  { tamil: "கீழே", romanization: "keele", english: "Below / Down", category: "directions" },
  { tamil: "அருகே", romanization: "aruge", english: "Near / Nearby", category: "directions" },
  { tamil: "தொலைவில்", romanization: "tholaivil", english: "Far away", category: "directions" },
];

export const days: VocabItem[] = [
  { tamil: "ஞாயிறு", romanization: "nyaayiru", english: "Sunday", category: "days" },
  { tamil: "திங்கள்", romanization: "thingal", english: "Monday", category: "days" },
  { tamil: "செவ்வாய்", romanization: "sevvaai", english: "Tuesday", category: "days" },
  { tamil: "புதன்", romanization: "pudhan", english: "Wednesday", category: "days" },
  { tamil: "வியாழன்", romanization: "viyaazhan", english: "Thursday", category: "days" },
  { tamil: "வெள்ளி", romanization: "velli", english: "Friday", category: "days" },
  { tamil: "சனி", romanization: "sani", english: "Saturday", category: "days" },
];

export const tamilMonths: VocabItem[] = [
  { tamil: "சித்திரை", romanization: "chiththirai", english: "Chithirai (Apr–May)", category: "tamil-months" },
  { tamil: "வைகாசி", romanization: "vaikaasi", english: "Vaikasi (May–Jun)", category: "tamil-months" },
  { tamil: "ஆனி", romanization: "aani", english: "Aani (Jun–Jul)", category: "tamil-months" },
  { tamil: "ஆடி", romanization: "aadi", english: "Aadi (Jul–Aug)", category: "tamil-months" },
  { tamil: "ஆவணி", romanization: "aavani", english: "Aavani (Aug–Sep)", category: "tamil-months" },
  { tamil: "புரட்டாசி", romanization: "purattaasi", english: "Purattasi (Sep–Oct)", category: "tamil-months" },
  { tamil: "ஐப்பசி", romanization: "aippasi", english: "Aippasi (Oct–Nov)", category: "tamil-months" },
  { tamil: "கார்த்திகை", romanization: "kaarththigai", english: "Karthigai (Nov–Dec)", category: "tamil-months" },
  { tamil: "மார்கழி", romanization: "maargazhi", english: "Margazhi (Dec–Jan)", category: "tamil-months" },
  { tamil: "தை", romanization: "thai", english: "Thai (Jan–Feb)", category: "tamil-months" },
  { tamil: "மாசி", romanization: "maasi", english: "Maasi (Feb–Mar)", category: "tamil-months" },
  { tamil: "பங்குனி", romanization: "panguni", english: "Panguni (Mar–Apr)", category: "tamil-months" },
];

export const englishMonthsInTamil: VocabItem[] = [
  { tamil: "ஜனவரி", romanization: "janvari", english: "January", category: "english-months" },
  { tamil: "பிப்ரவரி", romanization: "pipravari", english: "February", category: "english-months" },
  { tamil: "மார்ச்", romanization: "march", english: "March", category: "english-months" },
  { tamil: "ஏப்ரல்", romanization: "eepral", english: "April", category: "english-months" },
  { tamil: "மே", romanization: "me", english: "May", category: "english-months" },
  { tamil: "ஜூன்", romanization: "joon", english: "June", category: "english-months" },
  { tamil: "ஜூலை", romanization: "joolai", english: "July", category: "english-months" },
  { tamil: "ஆகஸ்ட்", romanization: "aagast", english: "August", category: "english-months" },
  { tamil: "செப்டம்பர்", romanization: "september", english: "September", category: "english-months" },
  { tamil: "அக்டோபர்", romanization: "aktobar", english: "October", category: "english-months" },
  { tamil: "நவம்பர்", romanization: "november", english: "November", category: "english-months" },
  { tamil: "டிசம்பர்", romanization: "december", english: "December", category: "english-months" },
];

export const seasons: VocabItem[] = [
  { tamil: "கோடை", romanization: "kodai", english: "Summer", category: "seasons" },
  { tamil: "மழைக்காலம்", romanization: "mazhaikkaalaam", english: "Rainy season", category: "seasons" },
  { tamil: "குளிர்காலம்", romanization: "kulirkkaalam", english: "Winter / Cold season", category: "seasons" },
  { tamil: "இலையுதிர்காலம்", romanization: "ilaiyudhirkkaalam", english: "Autumn", category: "seasons" },
  { tamil: "வசந்தம்", romanization: "vasantham", english: "Spring", category: "seasons" },
];
