// Comprehensive Beginners Module for Arabic Learning
const BEGINNERS_MODULE = {
  alphabetJourney: {
    title: "Alphabet Journey",
    description: "Learn each letter step-by-step with animations",
    lessons: [
      {
        id: "alif",
        letter: "ا",
        name: "Alif",
        pronunciation: "like 'a' in father",
        order: 1,
        shapes: {
          isolated: "ا",
          initial: "ا",
          medial: "ـا",
          final: "ـا"
        },
        examples: [
          { arabic: "أَسَد", english: "lion", transliteration: "asad" },
          { arabic: "أَب", english: "father", transliteration: "ab" }
        ],
        mnemonicImage: "🏹", // Looks like a straight arrow
        mnemonicPhrase: "Alif stands tall like a straight arrow",
        practiceWords: ["أَنَا", "أَنْتَ", "أُمّ"],
        difficulty: "easy"
      },
      {
        id: "baa",
        letter: "ب",
        name: "Baa",
        pronunciation: "like 'b' in boy",
        order: 2,
        shapes: {
          isolated: "ب",
          initial: "بـ",
          medial: "ـبـ",
          final: "ـب"
        },
        examples: [
          { arabic: "بَيْت", english: "house", transliteration: "bayt" },
          { arabic: "بَاب", english: "door", transliteration: "bab" }
        ],
        mnemonicImage: "⛵", // Boat with one dot below
        mnemonicPhrase: "Baa is a Boat with one dot Below",
        practiceWords: ["بِنْت", "بَحْر", "كِتَاب"],
        difficulty: "easy"
      },
      {
        id: "taa",
        letter: "ت",
        name: "Taa",
        pronunciation: "like 't' in tea",
        order: 3,
        shapes: {
          isolated: "ت",
          initial: "تـ",
          medial: "ـتـ",
          final: "ـت"
        },
        examples: [
          { arabic: "تُفَّاح", english: "apple", transliteration: "tuffah" },
          { arabic: "تِلْمِيذ", english: "student", transliteration: "tilmidh" }
        ],
        mnemonicImage: "👕", // T-shirt with two dots
        mnemonicPhrase: "Taa is like a T-shirt with Two dots on Top",
        practiceWords: ["تَمْر", "بِنْت", "كُتُب"],
        difficulty: "easy"
      }
    ]
  },

  first100Words: {
    title: "First 100 Words",
    description: "Essential vocabulary for beginners with pictures",
    categories: [
      {
        name: "Family",
        icon: "👨‍👩‍👧‍👦",
        words: [
          { arabic: "أُمّ", english: "mother", transliteration: "umm", image: "👩" },
          { arabic: "أَب", english: "father", transliteration: "ab", image: "👨" },
          { arabic: "أَخ", english: "brother", transliteration: "akh", image: "👦" },
          { arabic: "أُخْت", english: "sister", transliteration: "ukht", image: "👧" },
          { arabic: "طِفْل", english: "child", transliteration: "tifl", image: "👶" },
          { arabic: "جَدّ", english: "grandfather", transliteration: "jadd", image: "👴" },
          { arabic: "جَدَّة", english: "grandmother", transliteration: "jaddah", image: "👵" }
        ]
      },
      {
        name: "Body Parts",
        icon: "👤",
        words: [
          { arabic: "رَأْس", english: "head", transliteration: "ra's", image: "🗣️" },
          { arabic: "عَيْن", english: "eye", transliteration: "ayn", image: "👁️" },
          { arabic: "أَنْف", english: "nose", transliteration: "anf", image: "👃" },
          { arabic: "فَم", english: "mouth", transliteration: "fam", image: "👄" },
          { arabic: "أُذُن", english: "ear", transliteration: "udhun", image: "👂" },
          { arabic: "يَد", english: "hand", transliteration: "yad", image: "✋" },
          { arabic: "قَدَم", english: "foot", transliteration: "qadam", image: "🦶" }
        ]
      },
      {
        name: "Common Objects",
        icon: "🏠",
        words: [
          { arabic: "بَيْت", english: "house", transliteration: "bayt", image: "🏠" },
          { arabic: "بَاب", english: "door", transliteration: "bab", image: "🚪" },
          { arabic: "كُرْسِي", english: "chair", transliteration: "kursi", image: "🪑" },
          { arabic: "طَاوِلَة", english: "table", transliteration: "tawilah", image: "🪜" },
          { arabic: "سَرِير", english: "bed", transliteration: "sarir", image: "🛏️" },
          { arabic: "كِتَاب", english: "book", transliteration: "kitab", image: "📚" },
          { arabic: "قَلَم", english: "pen", transliteration: "qalam", image: "✏️" }
        ]
      },
      {
        name: "Food Basics",
        icon: "🍽️",
        words: [
          { arabic: "خُبْز", english: "bread", transliteration: "khubz", image: "🍞" },
          { arabic: "مَاء", english: "water", transliteration: "maa'", image: "💧" },
          { arabic: "حَلِيب", english: "milk", transliteration: "halib", image: "🥛" },
          { arabic: "تُفَّاح", english: "apple", transliteration: "tuffah", image: "🍎" },
          { arabic: "مَوْز", english: "banana", transliteration: "mawz", image: "🍌" },
          { arabic: "رُزّ", english: "rice", transliteration: "ruzz", image: "🍚" },
          { arabic: "لَحْم", english: "meat", transliteration: "lahm", image: "🥩" }
        ]
      }
    ]
  },

  simpleGreetings: {
    title: "Simple Greetings",
    description: "Essential greetings with different times of day",
    greetings: [
      {
        arabic: "مَرْحَبًا",
        english: "Hello",
        transliteration: "marhaban",
        usage: "General greeting, any time",
        response: "مَرْحَبًا",
        emoji: "👋"
      },
      {
        arabic: "صَبَاح الخَيْر",
        english: "Good morning",
        transliteration: "sabah al-khayr",
        usage: "Morning greeting (until noon)",
        response: "صَبَاح النُّور",
        responseTransliteration: "sabah an-nur",
        emoji: "🌅"
      },
      {
        arabic: "مَسَاء الخَيْر",
        english: "Good evening",
        transliteration: "masa' al-khayr",
        usage: "Evening greeting (after noon)",
        response: "مَسَاء النُّور",
        responseTransliteration: "masa' an-nur",
        emoji: "🌆"
      },
      {
        arabic: "شُكْرًا",
        english: "Thank you",
        transliteration: "shukran",
        usage: "Expressing gratitude",
        response: "عَفْوًا",
        responseTransliteration: "afwan",
        emoji: "🙏"
      },
      {
        arabic: "مِن فَضْلِك",
        english: "Please",
        transliteration: "min fadlik",
        usage: "Making polite requests",
        emoji: "🤝"
      },
      {
        arabic: "نَعَم",
        english: "Yes",
        transliteration: "na'am",
        usage: "Affirmative response",
        emoji: "✅"
      },
      {
        arabic: "لَا",
        english: "No",
        transliteration: "la",
        usage: "Negative response",
        emoji: "❌"
      },
      {
        arabic: "مَعَ السَّلَامَة",
        english: "Goodbye",
        transliteration: "ma'a as-salamah",
        usage: "Saying farewell",
        response: "اللَّه مَعَك",
        responseTransliteration: "allah ma'ak",
        emoji: "👋"
      }
    ]
  },

  numbersAndCounting: {
    title: "Numbers & Counting",
    description: "Learn numbers 0-10 with hand gestures",
    numbers: [
      { arabic: "صِفْر", english: "zero", digit: "٠", transliteration: "sifr", handGesture: "✊" },
      { arabic: "وَاحِد", english: "one", digit: "١", transliteration: "wahid", handGesture: "☝️" },
      { arabic: "اِثْنَان", english: "two", digit: "٢", transliteration: "ithnan", handGesture: "✌️" },
      { arabic: "ثَلَاثَة", english: "three", digit: "٣", transliteration: "thalathah", handGesture: "🤟" },
      { arabic: "أَرْبَعَة", english: "four", digit: "٤", transliteration: "arba'ah", handGesture: "🖐️" },
      { arabic: "خَمْسَة", english: "five", digit: "٥", transliteration: "khamsah", handGesture: "🖐️" },
      { arabic: "سِتَّة", english: "six", digit: "٦", transliteration: "sittah", handGesture: "🤚" },
      { arabic: "سَبْعَة", english: "seven", digit: "٧", transliteration: "sab'ah", handGesture: "✋" },
      { arabic: "ثَمَانِيَة", english: "eight", digit: "٨", transliteration: "thamaniyah", handGesture: "👐" },
      { arabic: "تِسْعَة", english: "nine", digit: "٩", transliteration: "tis'ah", handGesture: "🖐️" },
      { arabic: "عَشَرَة", english: "ten", digit: "١٠", transliteration: "asharah", handGesture: "👐" }
    ],
    countingPhrases: [
      { arabic: "كَمْ؟", english: "How many?", transliteration: "kam?" },
      { arabic: "وَاحِد، اِثْنَان، ثَلَاثَة", english: "One, two, three", transliteration: "wahid, ithnan, thalathah" },
      { arabic: "عِنْدِي ثَلَاثَة", english: "I have three", transliteration: "indi thalathah" }
    ]
  },

  colorsAndShapes: {
    title: "Colors & Shapes",
    description: "Basic colors and shapes with visual aids",
    colors: [
      { arabic: "أَحْمَر", english: "red", transliteration: "ahmar", hex: "#FF0000", emoji: "🔴" },
      { arabic: "أَزْرَق", english: "blue", transliteration: "azraq", hex: "#0000FF", emoji: "🔵" },
      { arabic: "أَخْضَر", english: "green", transliteration: "akhdar", hex: "#00FF00", emoji: "🟢" },
      { arabic: "أَصْفَر", english: "yellow", transliteration: "asfar", hex: "#FFFF00", emoji: "🟡" },
      { arabic: "أَسْوَد", english: "black", transliteration: "aswad", hex: "#000000", emoji: "⚫" },
      { arabic: "أَبْيَض", english: "white", transliteration: "abyad", hex: "#FFFFFF", emoji: "⚪" },
      { arabic: "بُرْتُقَالِي", english: "orange", transliteration: "burtuqali", hex: "#FFA500", emoji: "🟠" },
      { arabic: "بَنَفْسَجِي", english: "purple", transliteration: "banafsaji", hex: "#800080", emoji: "🟣" },
      { arabic: "وَرْدِي", english: "pink", transliteration: "wardi", hex: "#FFC0CB", emoji: "🩷" },
      { arabic: "بُنِّي", english: "brown", transliteration: "bunni", hex: "#964B00", emoji: "🟤" }
    ],
    shapes: [
      { arabic: "دَائِرَة", english: "circle", transliteration: "da'irah", symbol: "○" },
      { arabic: "مُرَبَّع", english: "square", transliteration: "murabba'", symbol: "□" },
      { arabic: "مُثَلَّث", english: "triangle", transliteration: "muthallath", symbol: "△" },
      { arabic: "مُسْتَطِيل", english: "rectangle", transliteration: "mustatil", symbol: "▭" },
      { arabic: "نَجْمَة", english: "star", transliteration: "najmah", symbol: "☆" },
      { arabic: "قَلْب", english: "heart", transliteration: "qalb", symbol: "♡" }
    ]
  },

  dailyPhrases: {
    title: "Daily Phrases",
    description: "Essential phrases for everyday use",
    phrases: [
      {
        category: "Introducing Yourself",
        items: [
          { arabic: "اِسْمِي...", english: "My name is...", transliteration: "ismi..." },
          { arabic: "أَنَا مِن...", english: "I am from...", transliteration: "ana min..." },
          { arabic: "عُمْرِي... سَنَة", english: "I am ... years old", transliteration: "umri ... sanah" },
          { arabic: "تَشَرَّفْنَا", english: "Nice to meet you", transliteration: "tasharrafna" }
        ]
      },
      {
        category: "Basic Needs",
        items: [
          { arabic: "أُرِيد", english: "I want", transliteration: "urid" },
          { arabic: "أَحْتَاج", english: "I need", transliteration: "ahtaj" },
          { arabic: "أَيْنَ؟", english: "Where?", transliteration: "ayna?" },
          { arabic: "مَتَى؟", english: "When?", transliteration: "mata?" },
          { arabic: "لِمَاذَا؟", english: "Why?", transliteration: "limadha?" },
          { arabic: "كَيْفَ؟", english: "How?", transliteration: "kayf?" }
        ]
      },
      {
        category: "Polite Expressions",
        items: [
          { arabic: "لَوْ سَمَحْت", english: "Excuse me", transliteration: "law samaht" },
          { arabic: "آسِف", english: "Sorry", transliteration: "asif" },
          { arabic: "لَا مُشْكِلَة", english: "No problem", transliteration: "la mushkilah" },
          { arabic: "بِالتَّوْفِيق", english: "Good luck", transliteration: "bit-tawfiq" }
        ]
      }
    ]
  },

  interactiveLessons: {
    title: "Interactive Lessons",
    description: "Step-by-step guided lessons",
    lessons: [
      {
        id: "lesson1",
        title: "Your First Arabic Words",
        duration: "10 minutes",
        objectives: [
          "Learn to say hello and goodbye",
          "Introduce yourself",
          "Say please and thank you"
        ],
        steps: [
          {
            type: "introduction",
            content: "Welcome to your first Arabic lesson! Today we'll learn essential greetings."
          },
          {
            type: "vocabulary",
            words: ["مَرْحَبًا", "شُكْرًا", "مِن فَضْلِك"]
          },
          {
            type: "practice",
            exercise: "Listen and repeat each word 3 times"
          },
          {
            type: "quiz",
            questions: [
              {
                question: "How do you say 'Hello' in Arabic?",
                options: ["مَرْحَبًا", "شُكْرًا", "نَعَم"],
                correct: 0
              }
            ]
          }
        ]
      }
    ]
  },

  writingPractice: {
    title: "Writing Practice",
    description: "Learn to write Arabic letters correctly",
    features: [
      {
        name: "Stroke Order",
        description: "Animated guides showing how to write each letter",
        icon: "✏️"
      },
      {
        name: "Practice Sheets",
        description: "Printable worksheets with dotted letters to trace",
        icon: "📝"
      },
      {
        name: "Connect the Dots",
        description: "Fun way to learn letter shapes",
        icon: "🔢"
      }
    ]
  },

  miniGames: {
    title: "Learning Games",
    description: "Fun games to reinforce learning",
    games: [
      {
        name: "Letter Match",
        description: "Match Arabic letters with their names",
        icon: "🎯",
        difficulty: "easy"
      },
      {
        name: "Word Builder",
        description: "Combine letters to form simple words",
        icon: "🏗️",
        difficulty: "medium"
      },
      {
        name: "Listen & Choose",
        description: "Hear a word and choose the correct Arabic text",
        icon: "👂",
        difficulty: "easy"
      },
      {
        name: "Color the Letter",
        description: "Color letters according to instructions",
        icon: "🎨",
        difficulty: "easy"
      }
    ]
  },

  progressTracking: {
    title: "My Progress",
    description: "Track your learning journey",
    metrics: [
      {
        name: "Letters Learned",
        icon: "🔤",
        total: 28,
        completed: 0
      },
      {
        name: "Words Mastered",
        icon: "📚",
        total: 100,
        completed: 0
      },
      {
        name: "Days Streak",
        icon: "🔥",
        current: 0,
        best: 0
      },
      {
        name: "Practice Time",
        icon: "⏱️",
        totalMinutes: 0
      }
    ],
    achievements: [
      {
        id: "first_letter",
        name: "First Letter",
        description: "Learn your first Arabic letter",
        icon: "🌟",
        unlocked: false
      },
      {
        id: "week_streak",
        name: "Week Warrior",
        description: "Practice for 7 days in a row",
        icon: "🏆",
        unlocked: false
      },
      {
        id: "10_words",
        name: "Word Collector",
        description: "Learn 10 new words",
        icon: "💎",
        unlocked: false
      }
    ]
  }
};

// Export for use in the app
window.BEGINNERS_MODULE = BEGINNERS_MODULE;