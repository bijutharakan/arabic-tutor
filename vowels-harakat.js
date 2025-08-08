// Comprehensive Arabic Vowels (Harakat) System
// This file contains all Arabic vowels, diacritical marks, and their usage

const VOWELS_HARAKAT = {
  // Short Vowels (الحركات القصيرة)
  shortVowels: [
    {
      name: "Fatha",
      arabic: "فَتْحَة",
      symbol: "َ",
      sound: "a",
      example: "كَتَبَ",
      exampleMeaning: "he wrote",
      description: "Short 'a' sound, written above the letter",
      position: "above"
    },
    {
      name: "Kasra", 
      arabic: "كَسْرَة",
      symbol: "ِ",
      sound: "i",
      example: "كِتَاب",
      exampleMeaning: "book",
      description: "Short 'i' sound, written below the letter",
      position: "below"
    },
    {
      name: "Damma",
      arabic: "ضَمَّة",
      symbol: "ُ",
      sound: "u",
      example: "كُتُب",
      exampleMeaning: "books",
      description: "Short 'u' sound, written above the letter",
      position: "above"
    }
  ],

  // Tanween (التنوين)
  tanween: [
    {
      name: "Tanween Fath",
      arabic: "تَنْوِين فَتْح",
      symbol: "ً",
      sound: "an",
      example: "كِتَابًا",
      exampleMeaning: "a book (accusative)",
      description: "Double fatha with 'n' sound",
      position: "above"
    },
    {
      name: "Tanween Kasr",
      arabic: "تَنْوِين كَسْر",
      symbol: "ٍ",
      sound: "in",
      example: "كِتَابٍ",
      exampleMeaning: "a book (genitive)",
      description: "Double kasra with 'n' sound",
      position: "below"
    },
    {
      name: "Tanween Damm",
      arabic: "تَنْوِين ضَمّ",
      symbol: "ٌ",
      sound: "un",
      example: "كِتَابٌ",
      exampleMeaning: "a book (nominative)",
      description: "Double damma with 'n' sound",
      position: "above"
    }
  ],

  // Long Vowels (الحركات الطويلة)
  longVowels: [
    {
      name: "Alif Madd",
      arabic: "أَلِف مَدّ",
      symbol: "ا",
      sound: "aa",
      example: "كَاتِب",
      exampleMeaning: "writer",
      description: "Long 'a' sound with alif",
      combo: "َ + ا"
    },
    {
      name: "Yaa Madd",
      arabic: "يَاء مَدّ",
      symbol: "ي",
      sound: "ii",
      example: "كَرِيم",
      exampleMeaning: "generous",
      description: "Long 'i' sound with yaa",
      combo: "ِ + ي"
    },
    {
      name: "Waw Madd",
      arabic: "وَاو مَدّ",
      symbol: "و",
      sound: "uu",
      example: "يَقُول",
      exampleMeaning: "he says",
      description: "Long 'u' sound with waw",
      combo: "ُ + و"
    }
  ],

  // Other Marks (علامات أخرى)
  otherMarks: [
    {
      name: "Sukoon",
      arabic: "سُكُون",
      symbol: "ْ",
      sound: "no vowel",
      example: "يَكْتُب",
      exampleMeaning: "he writes",
      description: "Indicates no vowel sound",
      position: "above"
    },
    {
      name: "Shadda",
      arabic: "شَدَّة",
      symbol: "ّ",
      sound: "double",
      example: "مُدَرِّس",
      exampleMeaning: "teacher",
      description: "Doubles the consonant",
      position: "above"
    },
    {
      name: "Hamza",
      arabic: "هَمْزَة",
      symbol: "ء",
      sound: "glottal stop",
      example: "قَرَأَ",
      exampleMeaning: "he read",
      description: "Glottal stop sound",
      position: "various"
    },
    {
      name: "Madda",
      arabic: "مَدَّة",
      symbol: "آ",
      sound: "aa",
      example: "آمَنَ",
      exampleMeaning: "he believed",
      description: "Extended alif sound",
      position: "above alif"
    },
    {
      name: "Alif Khanjariyya",
      arabic: "أَلِف خَنْجَرِيَّة",
      symbol: "ٰ",
      sound: "aa",
      example: "هَٰذَا",
      exampleMeaning: "this",
      description: "Small alif above letter",
      position: "above"
    },
    {
      name: "Wasla",
      arabic: "وَصْلَة",
      symbol: "ٱ",
      sound: "connecting",
      example: "ٱلْكِتَاب",
      exampleMeaning: "the book",
      description: "Connecting hamza",
      position: "above alif"
    }
  ],

  // Practice Words with Full Harakat
  practiceWords: [
    { word: "مَدْرَسَة", meaning: "school", breakdown: "ma-d-ra-sa" },
    { word: "كِتَاب", meaning: "book", breakdown: "ki-taab" },
    { word: "قَلَم", meaning: "pen", breakdown: "qa-lam" },
    { word: "بَيْت", meaning: "house", breakdown: "bay-t" },
    { word: "شَمْس", meaning: "sun", breakdown: "sham-s" },
    { word: "قَمَر", meaning: "moon", breakdown: "qa-mar" },
    { word: "نَجْمَة", meaning: "star", breakdown: "naj-ma" },
    { word: "سَمَاء", meaning: "sky", breakdown: "sa-maa" },
    { word: "أَرْض", meaning: "earth", breakdown: "ar-D" },
    { word: "مَاء", meaning: "water", breakdown: "maa" },
    { word: "نَار", meaning: "fire", breakdown: "naar" },
    { word: "هَوَاء", meaning: "air", breakdown: "ha-waa" },
    { word: "طَعَام", meaning: "food", breakdown: "Ta-aam" },
    { word: "شَرَاب", meaning: "drink", breakdown: "sha-raab" },
    { word: "صَدِيق", meaning: "friend", breakdown: "Sa-diiq" },
    { word: "عَائِلَة", meaning: "family", breakdown: "aa-i-la" },
    { word: "حُبّ", meaning: "love", breakdown: "Hub-b" },
    { word: "سَلَام", meaning: "peace", breakdown: "sa-laam" },
    { word: "جَمِيل", meaning: "beautiful", breakdown: "ja-miil" },
    { word: "كَبِير", meaning: "big", breakdown: "ka-biir" },
    { word: "صَغِير", meaning: "small", breakdown: "Sa-ghiir" },
    { word: "جَدِيد", meaning: "new", breakdown: "ja-diid" },
    { word: "قَدِيم", meaning: "old", breakdown: "qa-diim" },
    { word: "سَرِيع", meaning: "fast", breakdown: "sa-rii3" },
    { word: "بَطِيء", meaning: "slow", breakdown: "ba-Tii" }
  ],

  // Common Patterns
  patterns: [
    {
      pattern: "فَعَلَ",
      type: "Past Verb",
      example: "كَتَبَ",
      meaning: "he wrote",
      description: "Common pattern for past tense verbs"
    },
    {
      pattern: "يَفْعَلُ",
      type: "Present Verb",
      example: "يَكْتُبُ",
      meaning: "he writes",
      description: "Common pattern for present tense verbs"
    },
    {
      pattern: "فَاعِل",
      type: "Active Participle",
      example: "كَاتِب",
      meaning: "writer",
      description: "One who does the action"
    },
    {
      pattern: "مَفْعُول",
      type: "Passive Participle",
      example: "مَكْتُوب",
      meaning: "written",
      description: "Something that received the action"
    },
    {
      pattern: "فَعِيل",
      type: "Adjective",
      example: "جَمِيل",
      meaning: "beautiful",
      description: "Common adjective pattern"
    },
    {
      pattern: "أَفْعَل",
      type: "Comparative",
      example: "أَكْبَر",
      meaning: "bigger",
      description: "Comparative form"
    }
  ],

  // Vowel Combinations
  combinations: [
    {
      combo: "فَتْحَة + أَلِف",
      result: "ـَا",
      sound: "aa",
      example: "قَالَ",
      meaning: "he said"
    },
    {
      combo: "ضَمَّة + وَاو",
      result: "ـُو",
      sound: "uu",
      example: "يَقُولُ",
      meaning: "he says"
    },
    {
      combo: "كَسْرَة + يَاء",
      result: "ـِي",
      sound: "ii",
      example: "فِي",
      meaning: "in"
    },
    {
      combo: "فَتْحَة + يَاء",
      result: "ـَيْ",
      sound: "ay",
      example: "بَيْت",
      meaning: "house"
    },
    {
      combo: "فَتْحَة + وَاو",
      result: "ـَوْ",
      sound: "aw",
      example: "يَوْم",
      meaning: "day"
    },
    {
      combo: "شَدَّة + فَتْحَة",
      result: "ـَّ",
      sound: "double + a",
      example: "عَلَّمَ",
      meaning: "he taught"
    }
  ]
};

// Add vowels as a category to vocabulary
const VOWELS_CATEGORY = {
  key: "vowels-harakat",
  name: "Vowels & Harakat",
  icon: "📝",
  words: [
    // Short Vowels
    { en: "fatha (a)", ar: "فَتْحَة", harakat: "فَتْحَة", pic: "َ" },
    { en: "kasra (i)", ar: "كَسْرَة", harakat: "كَسْرَة", pic: "ِ" },
    { en: "damma (u)", ar: "ضَمَّة", harakat: "ضَمَّة", pic: "ُ" },
    
    // Tanween
    { en: "tanween fath (an)", ar: "تَنْوِين فَتْح", harakat: "تَنْوِين فَتْح", pic: "ً" },
    { en: "tanween kasr (in)", ar: "تَنْوِين كَسْر", harakat: "تَنْوِين كَسْر", pic: "ٍ" },
    { en: "tanween damm (un)", ar: "تَنْوِين ضَمّ", harakat: "تَنْوِين ضَمّ", pic: "ٌ" },
    
    // Other Marks
    { en: "sukoon (no vowel)", ar: "سُكُون", harakat: "سُكُون", pic: "ْ" },
    { en: "shadda (double)", ar: "شَدَّة", harakat: "شَدَّة", pic: "ّ" },
    { en: "hamza", ar: "هَمْزَة", harakat: "هَمْزَة", pic: "ء" },
    { en: "madda", ar: "مَدَّة", harakat: "مَدَّة", pic: "آ" },
    
    // Long Vowels
    { en: "long aa", ar: "أَلِف مَدّ", harakat: "أَلِف مَدّ", pic: "ا" },
    { en: "long ii", ar: "يَاء مَدّ", harakat: "يَاء مَدّ", pic: "ي" },
    { en: "long uu", ar: "وَاو مَدّ", harakat: "وَاو مَدّ", pic: "و" },
    
    // Example Words with Vowels
    { en: "he wrote", ar: "كَتَبَ", harakat: "كَتَبَ", pic: "✍️" },
    { en: "he writes", ar: "يَكْتُبُ", harakat: "يَكْتُبُ", pic: "✍️" },
    { en: "writer", ar: "كَاتِب", harakat: "كَاتِب", pic: "✍️" },
    { en: "written", ar: "مَكْتُوب", harakat: "مَكْتُوب", pic: "📝" },
    { en: "book", ar: "كِتَاب", harakat: "كِتَاب", pic: "📚" },
    { en: "books", ar: "كُتُب", harakat: "كُتُب", pic: "📚" },
    { en: "library", ar: "مَكْتَبَة", harakat: "مَكْتَبَة", pic: "📚" },
    { en: "office", ar: "مَكْتَب", harakat: "مَكْتَب", pic: "🏢" },
    
    // Common Words with Full Harakat
    { en: "peace", ar: "سَلَام", harakat: "سَلَام", pic: "☮️" },
    { en: "hello", ar: "مَرْحَبًا", harakat: "مَرْحَبًا", pic: "👋" },
    { en: "thank you", ar: "شُكْرًا", harakat: "شُكْرًا", pic: "🙏" },
    { en: "welcome", ar: "أَهْلًا", harakat: "أَهْلًا", pic: "🤗" },
    { en: "goodbye", ar: "وَدَاعًا", harakat: "وَدَاعًا", pic: "👋" },
    { en: "yes", ar: "نَعَمْ", harakat: "نَعَمْ", pic: "✅" },
    { en: "no", ar: "لَا", harakat: "لَا", pic: "❌" },
    { en: "please", ar: "مِنْ فَضْلِكَ", harakat: "مِنْ فَضْلِكَ", pic: "🙏" },
    { en: "sorry", ar: "آسِف", harakat: "آسِف", pic: "😔" },
    { en: "excuse me", ar: "عَفْوًا", harakat: "عَفْوًا", pic: "🤚" }
  ]
};

// Export to global scope
window.VOWELS_HARAKAT = VOWELS_HARAKAT;
window.VOWELS_CATEGORY = VOWELS_CATEGORY;

// Add to WORD_CATEGORIES if it exists
if (typeof WORD_CATEGORIES !== 'undefined') {
  WORD_CATEGORIES.push(VOWELS_CATEGORY);
}