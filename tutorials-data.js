// Comprehensive Arabic Learning Tutorials
const TUTORIALS_DATA = {
  // Beginner Foundation
  alphabet_basics: {
    title: "🔤 Arabic Alphabet Mastery",
    level: "Beginner",
    duration: "15 min",
    description: "Master the 28 Arabic letters with memory techniques",
    steps: [
      {
        title: "Introduction to Arabic Letters",
        content: "Arabic has 28 letters. Each letter represents a consonant sound. Vowels are added as marks above or below letters.",
        example: "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي",
        practice: "Listen to each letter sound carefully. Arabic has sounds that don't exist in English!",
        tip: "💡 Focus on 5 letters per day for best retention"
      },
      {
        title: "Letter Groups by Shape",
        content: "Many Arabic letters share similar shapes. Learning them in groups makes memorization easier.",
        example: "Group 1: ب ت ث (dots below/above)\nGroup 2: ج ح خ (curved shape)\nGroup 3: د ذ (one dot difference)",
        practice: "Notice how dots distinguish similar letters",
        tip: "💡 Think of dots as accent marks that change the sound"
      },
      {
        title: "Memory Technique: Visual Association",
        content: "Associate each letter with its meaning or a visual cue",
        example: "ع (ain) looks like an eye\nس (seen) has 3 teeth like a saw\nم (meem) looks like a mouth",
        practice: "Create your own visual associations for each letter",
        tip: "💡 Drawing letters helps muscle memory"
      },
      {
        title: "Common Letter Combinations",
        content: "Some letters frequently appear together. Learning these patterns speeds up reading.",
        example: "الـ (al- = the)\nلا (laa = no)\nلله (lillah = for Allah)",
        practice: "Look for these combinations in Arabic text",
        tip: "💡 These combinations become one visual unit with practice"
      },
      {
        title: "Practice Exercise",
        content: "Daily practice routine for mastering letters:",
        example: "1. Write each letter 10 times\n2. Say the sound while writing\n3. Find the letter in 3 different words",
        practice: "Set aside 15 minutes daily for letter practice",
        tip: "💡 Consistency beats intensity - practice daily!"
      }
    ],
    quiz: {
      type: "letter_recognition",
      questions: ["Identify letters", "Match sounds", "Find in words"]
    }
  },

  connections_advanced: {
    title: "🔗 Letter Connection Rules",
    level: "Beginner",
    duration: "20 min",
    description: "Master how Arabic letters connect to form words",
    steps: [
      {
        title: "The Connection System",
        content: "Arabic is cursive - letters flow together. Think of it like English handwriting where letters connect.",
        example: "ك + ت + ا + ب = كتاب (book)\nSeparate letters become one flowing word",
        practice: "Notice how each letter changes shape when connected",
        tip: "💡 Practice writing slowly at first, speed comes naturally"
      },
      {
        title: "Four Forms of Letters",
        content: "Most letters have 4 forms depending on position: Isolated, Initial, Medial, Final",
        example: "Letter ع:\n• Isolated: ع (alone)\n• Initial: عـ (start)\n• Medial: ـعـ (middle)\n• Final: ـع (end)",
        practice: "Write the same letter in all four positions",
        tip: "💡 Think of it like capital vs lowercase but with position"
      },
      {
        title: "Non-Connecting Letters",
        content: "Six letters never connect to their left: ا د ذ ر ز و - They break the flow",
        example: "دار (house) - د doesn't connect left\nورد (roses) - both و and د don't connect",
        practice: "These letters create natural breaks in words",
        tip: "💡 Remember: 'ADDRZO' (ا د ذ ر ز و) don't connect left"
      },
      {
        title: "Letter Combinations That Change",
        content: "Some letter combinations create special forms",
        example: "لا becomes لا (lam-alif ligature)\nالله becomes الله (Allah ligature)",
        practice: "These combinations are written as one unit",
        tip: "💡 Your hand will memorize these with practice"
      },
      {
        title: "Writing Practice Strategy",
        content: "Build muscle memory through structured practice",
        example: "Week 1: Individual letters\nWeek 2: Two-letter combinations\nWeek 3: Three-letter words\nWeek 4: Full sentences",
        practice: "Use grid paper initially for consistent size",
        tip: "💡 Write in the air when you don't have paper!"
      },
      {
        title: "Common Connection Mistakes",
        content: "Avoid these beginner errors:",
        example: "❌ Forgetting non-connectors\n❌ Wrong form for position\n❌ Inconsistent letter size",
        practice: "Review your writing against printed text",
        tip: "💡 Take photos of your practice to track progress"
      }
    ],
    quiz: {
      type: "connection_practice",
      questions: ["Connect letters", "Identify forms", "Fix mistakes"]
    }
  },

  vowels_mastery: {
    title: "🎵 Harakat (Vowel Marks) System",
    level: "Beginner",
    duration: "25 min",
    description: "Master the vowel system that brings Arabic to life",
    steps: [
      {
        title: "Why Harakat Matter",
        content: "Harakat are like musical notes - they tell you HOW to pronounce words. Without them, Arabic is just consonants.",
        example: "كتب could be:\nكَتَبَ (kataba - he wrote)\nكُتُب (kutub - books)\nكَاتِب (kaatib - writer)",
        practice: "Same letters, different meanings based on vowels!",
        tip: "💡 Context usually tells you which pronunciation to use"
      },
      {
        title: "The Three Short Vowels",
        content: "Master these three essential marks:",
        example: "Fatha ـَ = 'a' as in 'cat'\nKasra ـِ = 'i' as in 'bit'\nDamma ـُ = 'u' as in 'put'",
        practice: "بَ (ba) بِ (bi) بُ (bu) - practice with each letter",
        tip: "💡 Fatha is a line above, Kasra below, Damma is a comma above"
      },
      {
        title: "Long Vowels",
        content: "Long vowels use letters: ا (aa), و (uu), ي (ii)",
        example: "كَاتِب (kaatib) - ا makes 'aa'\nنُور (nuur) - و makes 'uu'\nكَبِير (kabiir) - ي makes 'ii'",
        practice: "Long vowels are held twice as long as short ones",
        tip: "💡 Think of them as stretched sounds"
      },
      {
        title: "Sukun (No Vowel)",
        content: "Sukun ـْ means 'stop' - no vowel sound after this letter",
        example: "يَكْتُب (yaktub) - the ك has sukun\nمَكْتَب (maktab) - office",
        practice: "Sukun creates consonant clusters",
        tip: "💡 Like the 'ct' in 'fact' - no vowel between"
      },
      {
        title: "Shadda (Doubling)",
        content: "Shadda ـّ doubles the consonant - hold it longer",
        example: "مُدَرِّس (mudarris) - teacher\nThe رّ is pronounced twice as long",
        practice: "It's like saying the letter twice quickly",
        tip: "💡 Shadda changes meaning: درس (studied) vs درّس (taught)"
      },
      {
        title: "Tanween (Nunation)",
        content: "Tanween adds an 'n' sound at word endings - mainly in formal Arabic",
        example: "ـً (an) - كِتَابًا (kitaaban)\nـٍ (in) - كِتَابٍ (kitaabin)\nـٌ (un) - كِتَابٌ (kitaabun)",
        practice: "Usually seen in Quran and formal texts",
        tip: "💡 In everyday Arabic, tanween is often not pronounced"
      },
      {
        title: "Reading Strategy",
        content: "How to approach Arabic text:",
        example: "1. Children's books have all harakat\n2. Regular books omit most\n3. Quran has complete marking",
        practice: "Start with fully marked text, gradually read without",
        tip: "💡 Native speakers read without harakat using context"
      }
    ],
    quiz: {
      type: "vowel_practice",
      questions: ["Add correct harakat", "Read with vowels", "Identify changes"]
    }
  },

  reading_techniques: {
    title: "📖 Speed Reading Techniques",
    level: "Intermediate",
    duration: "20 min",
    description: "Techniques to read Arabic fluently and quickly",
    steps: [
      {
        title: "Word Shape Recognition",
        content: "Arabic readers don't read letter by letter - they recognize word shapes",
        example: "الكتاب is recognized as one shape\nNot ا + ل + ك + ت + ا + ب",
        practice: "Focus on overall word shape, not individual letters",
        tip: "💡 Common words become visual patterns"
      },
      {
        title: "Root Pattern System",
        content: "Arabic words follow patterns. Learn roots to predict meanings",
        example: "ك-ت-ب (write root):\nكتاب (book)\nمكتب (office)\nكاتب (writer)\nمكتوب (written)",
        practice: "When you see a new word, look for the 3-letter root",
        tip: "💡 Knowing 100 roots gives you access to 1000+ words"
      },
      {
        title: "Context Clues",
        content: "Use surrounding words to guess unfamiliar ones",
        example: "If you see مدرسة (school) + طالب (student), the next word is probably education-related",
        practice: "Don't stop at every unknown word - keep reading!",
        tip: "💡 80% understanding is enough for comprehension"
      },
      {
        title: "Chunking Technique",
        content: "Read in phrases, not individual words",
        example: "في المدرسة (in the school) - read as one unit\nبسم الله (in the name of Allah) - one chunk",
        practice: "Common phrases become automatic",
        tip: "💡 Your eyes should jump between chunks"
      },
      {
        title: "Daily Reading Routine",
        content: "Build reading speed gradually:",
        example: "Week 1: Read 5 minutes daily (children's books)\nWeek 2: 10 minutes (simple stories)\nWeek 3: 15 minutes (news headlines)\nWeek 4: 20 minutes (short articles)",
        practice: "Consistency is key - read something every day",
        tip: "💡 Re-read the same text multiple times for fluency"
      }
    ],
    quiz: {
      type: "reading_comprehension",
      questions: ["Find roots", "Guess meanings", "Read passages"]
    }
  },

  pronunciation_perfect: {
    title: "🗣️ Perfect Pronunciation Guide",
    level: "Intermediate",
    duration: "30 min",
    description: "Master the unique Arabic sounds",
    steps: [
      {
        title: "Emphatic Letters",
        content: "Arabic has 'emphatic' versions of regular sounds - pronounced with the tongue pulled back",
        example: "ص (Saad) vs س (seen)\nض (Daad) vs د (daal)\nط (Taa) vs ت (taa)\nظ (Dhaa) vs ذ (dhaal)",
        practice: "Feel your tongue position - emphatic letters use the back of your mouth",
        tip: "💡 Emphatic letters make surrounding vowels deeper"
      },
      {
        title: "The Throat Letters",
        content: "Letters from the throat - these don't exist in English",
        example: "ع (ain) - from middle of throat\nغ (ghain) - like French 'r'\nح (Haa) - breathy H\nخ (khaa) - like 'ch' in Bach",
        practice: "Practice in front of a mirror to see throat movement",
        tip: "💡 Start with exaggerated sounds, then refine"
      },
      {
        title: "The Challenging ع (Ain)",
        content: "The most difficult sound for English speakers",
        example: "It's a voiced pharyngeal fricative - constrict your throat while voicing",
        practice: "Say 'uh-oh' and focus on the throat catch in the middle",
        tip: "💡 Many dialects soften this sound - don't stress perfection"
      },
      {
        title: "Qaf ق vs Kaf ك",
        content: "Q is deeper in the throat than K",
        example: "قلب (qalb - heart) vs كلب (kalb - dog)\nقمر (qamar - moon) vs كمر (kamar - waist)",
        practice: "Q comes from the uvula, K from the soft palate",
        tip: "💡 In many dialects, ق becomes a glottal stop"
      },
      {
        title: "Light vs Heavy ه",
        content: "ه (haa) changes based on position",
        example: "Beginning: هو (huwa) - clear H\nEnding: كتابه (kitaabuhu) - soft breath",
        practice: "Final ه is often barely pronounced",
        tip: "💡 Listen to native speakers for natural pronunciation"
      },
      {
        title: "Pronunciation Practice Plan",
        content: "Daily exercises for perfect pronunciation:",
        example: "1. Minimal pairs (words differing by one sound)\n2. Tongue twisters\n3. Record yourself\n4. Shadow native speakers\n5. Focus on one sound per week",
        practice: "Use audio from news, cartoons, or podcasts",
        tip: "💡 Exaggerate at first, naturalness comes with time"
      }
    ],
    quiz: {
      type: "pronunciation_test",
      questions: ["Distinguish sounds", "Repeat phrases", "Identify letters by sound"]
    }
  },

  word_building: {
    title: "🏗️ Word Building & Patterns",
    level: "Intermediate", 
    duration: "25 min",
    description: "Understand how Arabic creates words from roots",
    steps: [
      {
        title: "The Root System",
        content: "Most Arabic words come from 3-letter roots that carry core meaning",
        example: "د-ر-س (study):\nدَرَسَ (studied)\nمَدْرَسة (school)\nدَرْس (lesson)\nمُدَرِّس (teacher)",
        practice: "One root creates an entire word family",
        tip: "💡 Learning roots multiplies your vocabulary"
      },
      {
        title: "Common Patterns (Wazn)",
        content: "Patterns are templates applied to roots",
        example: "فَاعِل = doer pattern\nكاتِب (writer) from ك-ت-ب\nطالِب (student) from ط-ل-ب\nعامِل (worker) from ع-م-ل",
        practice: "If you know the pattern, you can guess the meaning",
        tip: "💡 فَاعِل always means 'one who does X'"
      },
      {
        title: "Place Pattern (مَفْعَل)",
        content: "This pattern creates place names",
        example: "مَكْتَب (office) - place of writing\nمَطْبَخ (kitchen) - place of cooking\nمَلْعَب (playground) - place of playing",
        practice: "م at the beginning often indicates a place",
        tip: "💡 مَ + root = place where that action happens"
      },
      {
        title: "Tool Pattern (مِفْعال)",
        content: "This pattern creates tool/instrument names",
        example: "مِفْتاح (key) - tool for opening\nمِنْشار (saw) - tool for sawing\nمِقْياس (measure) - tool for measuring",
        practice: "مِ at the beginning often indicates a tool",
        tip: "💡 These patterns work like '-er' in English (opener, cutter)"
      },
      {
        title: "Making Plurals",
        content: "Arabic has regular and broken plurals",
        example: "Regular: مُدَرِّس → مُدَرِّسون (teachers)\nBroken: كِتاب → كُتُب (books)\nPattern changes inside the word",
        practice: "Common plural patterns to memorize",
        tip: "💡 Broken plurals follow patterns too - learn the common ones"
      },
      {
        title: "Building Your Own Words",
        content: "Practice creating words from roots:",
        example: "Take root ع-م-ل (work):\n• عَمَل (work/deed)\n• عامِل (worker)\n• مَعْمَل (factory)\n• عَمَلِيّة (operation)",
        practice: "Choose a root and create 5 related words",
        tip: "💡 This is how Arabic creates new modern terms"
      }
    ],
    quiz: {
      type: "word_formation",
      questions: ["Find the root", "Apply patterns", "Create related words"]
    }
  },

  practical_phrases: {
    title: "💬 Essential Daily Phrases",
    level: "Beginner",
    duration: "15 min",
    description: "Phrases you'll use every day",
    steps: [
      {
        title: "Greetings Throughout the Day",
        content: "Different greetings for different times",
        example: "صباح الخير (SabaaH al-khayr) - Good morning\nمساء الخير (masaa' al-khayr) - Good evening\nتصبح على خير (tuSbiH 'alaa khayr) - Good night",
        practice: "Use the right greeting for the time of day",
        tip: "💡 Respond to صباح الخير with صباح النور"
      },
      {
        title: "Polite Expressions",
        content: "Essential courtesy phrases",
        example: "من فضلك (min faDlik) - Please\nشكراً (shukran) - Thanks\nعفواً ('afwan) - You're welcome/Excuse me",
        practice: "Use these to sound polite and respectful",
        tip: "💡 Adding يا أخي/أختي (brother/sister) makes it friendlier"
      },
      {
        title: "Making Requests",
        content: "How to ask for things politely",
        example: "أريد... (uriidu...) - I want...\nهل يمكن... (hal yumkin...) - Can you...\nأين... (ayna...) - Where is...",
        practice: "Combine with please for politeness",
        tip: "💡 Start with ممكن (mumkin) for casual requests"
      },
      {
        title: "At the Restaurant",
        content: "Ordering food and drinks",
        example: "القائمة من فضلك (al-qaa'ima min faDlik) - Menu please\nالحساب (al-Hisaab) - The bill\nبدون (biduun) - Without",
        practice: "Learn food names + these phrases",
        tip: "💡 Point and say هذا (this) if you can't pronounce it"
      },
      {
        title: "Emergency Phrases",
        content: "Important phrases for help",
        example: "ساعدني (saa'idnii) - Help me\nأنا مريض (ana mariiD) - I'm sick\nأين المستشفى (ayna al-mustashfaa) - Where's the hospital",
        practice: "Hope you don't need these, but memorize them",
        tip: "💡 أنا لا أتكلم العربية (I don't speak Arabic) is useful"
      },
      {
        title: "Cultural Phrases",
        content: "Phrases that show cultural awareness",
        example: "إن شاء الله (in shaa' Allah) - God willing\nما شاء الله (maa shaa' Allah) - What God willed\nالحمد لله (al-Hamdu lillah) - Praise be to God",
        practice: "Use these appropriately in conversation",
        tip: "💡 These show respect for local culture"
      }
    ],
    quiz: {
      type: "phrase_usage",
      questions: ["Choose right phrase", "Respond appropriately", "Complete dialogue"]
    }
  },

  writing_practice: {
    title: "✍️ Writing Skills Development",
    level: "Beginner",
    duration: "20 min",
    description: "Learn to write Arabic beautifully",
    steps: [
      {
        title: "Holding the Pen",
        content: "Arabic writing requires different pen control",
        example: "Hold pen at 45° angle\nWrite from right to left\nLift pen less than in English",
        practice: "Practice basic strokes before letters",
        tip: "💡 Use a fountain pen or calligraphy pen initially"
      },
      {
        title: "Basic Strokes",
        content: "Master these foundational movements",
        example: "Horizontal line ـــــ\nVertical line |\nCurve ⌒\nDot •",
        practice: "Fill a page with each stroke type",
        tip: "💡 Consistent stroke width shows control"
      },
      {
        title: "Letter Height Rules",
        content: "Letters have different heights on the line",
        example: "Teeth letters (س ش): 3 units high\nVertical letters (ا ل): 5 units high\nDescenders (ج ح خ): go below line",
        practice: "Use lined paper to maintain proportions",
        tip: "💡 Think of it like music notation on a staff"
      },
      {
        title: "Writing Speed Progression",
        content: "Build speed gradually with control",
        example: "Week 1: Individual letters slowly\nWeek 2: Connected letters\nWeek 3: Words\nWeek 4: Sentences",
        practice: "Speed comes from muscle memory, not rushing",
        tip: "💡 Write the alphabet daily as warm-up"
      },
      {
        title: "Common Writing Mistakes",
        content: "Avoid these beginner errors",
        example: "❌ Inconsistent letter size\n❌ Forgetting dots\n❌ Wrong connection points\n❌ Mixing print and cursive",
        practice: "Compare your writing to printed text",
        tip: "💡 Dots and marks come AFTER finishing the word"
      },
      {
        title: "Calligraphy Basics",
        content: "Introduction to beautiful Arabic writing",
        example: "Naskh: Clear, readable style\nRuq'ah: Quick handwriting\nThuluth: Decorative style",
        practice: "Start with Naskh for clarity",
        tip: "💡 Beautiful handwriting is valued in Arabic culture"
      }
    ],
    quiz: {
      type: "writing_practice",
      questions: ["Copy text", "Write from memory", "Identify mistakes"]
    }
  },

  memory_techniques: {
    title: "🧠 Memory Techniques & Mnemonics",
    level: "All Levels",
    duration: "15 min",
    description: "Scientific methods to memorize Arabic faster",
    steps: [
      {
        title: "The Memory Palace Technique",
        content: "Place Arabic words in familiar locations",
        example: "Imagine your house:\nباب (door) at entrance\nكرسي (chair) in living room\nسرير (bed) in bedroom",
        practice: "Walk through your house mentally, 'seeing' Arabic words",
        tip: "💡 The stranger the mental image, the better you remember"
      },
      {
        title: "Sound Association",
        content: "Link Arabic sounds to English words",
        example: "كتاب (kitaab) - 'kit' of 'tabs' (book)\nقلم (qalam) - 'call him' with a pen\nباب (baab) - 'Bob' at the door",
        practice: "Create funny stories with these associations",
        tip: "💡 Silly associations stick better than logical ones"
      },
      {
        title: "Visual Mnemonics",
        content: "Turn letters into pictures",
        example: "ت looks like a smiley face\nع looks like the number 3\nص looks like a playground slide",
        practice: "Draw pictures incorporating the letters",
        tip: "💡 Add these drawings to your flashcards"
      },
      {
        title: "Spaced Repetition Schedule",
        content: "Review at optimal intervals for long-term memory",
        example: "New word: Review after 1 day\nThen: 3 days, 1 week, 2 weeks, 1 month",
        practice: "Use apps like Anki for automatic scheduling",
        tip: "💡 Review JUST before you'd forget for best retention"
      },
      {
        title: "The Story Method",
        content: "Connect words in memorable stories",
        example: "The قط (cat) sat on the كرسي (chair) reading a كتاب (book) with a قلم (pen)",
        practice: "Create one story with 5-10 new words",
        tip: "💡 Make yourself the main character in stories"
      },
      {
        title: "Active Recall Practice",
        content: "Test yourself instead of passive review",
        example: "Cover the Arabic, look at English, write Arabic from memory\nBetter than just reading repeatedly",
        practice: "Quiz yourself before checking answers",
        tip: "💡 Struggle to remember strengthens the memory"
      }
    ],
    quiz: {
      type: "memory_test",
      questions: ["Recall words", "Complete stories", "Apply techniques"]
    }
  },

  cultural_context: {
    title: "🌍 Cultural Context & Usage",
    level: "All Levels",
    duration: "15 min",
    description: "Understand when and how to use Arabic appropriately",
    steps: [
      {
        title: "Formal vs Informal Arabic",
        content: "Different situations require different Arabic",
        example: "Formal: أنتَ (anta) - you\nInformal: إنت (inta) - you\nFormal: ماذا (maadha) - what\nInformal: إيش (aysh) - what",
        practice: "Learn both but know when to use each",
        tip: "💡 Start formal with strangers, they'll guide you"
      },
      {
        title: "Dialect Differences",
        content: "Each region has its own dialect",
        example: "Egyptian: عايز (want)\nLevantine: بدي (want)\nGulf: أبغى (want)\nAll mean 'I want'",
        practice: "Pick one dialect to focus on",
        tip: "💡 Egyptian is widely understood due to media"
      },
      {
        title: "Religious Expressions",
        content: "Common phrases with religious origin used by all",
        example: "يا الله (ya Allah) - Oh God (surprise)\nبسم الله (bismillah) - In God's name (before starting)\nإن شاء الله (insha'Allah) - God willing (maybe/hopefully)",
        practice: "Used culturally, not just religiously",
        tip: "💡 Non-Muslims use these phrases too"
      },
      {
        title: "Gender in Language",
        content: "Arabic changes based on who you're talking to",
        example: "To a man: كيف حالك؟ (kayf Haaluk)\nTo a woman: كيف حالكِ؟ (kayf Haalik)\nSmall sound change, important difference",
        practice: "Pay attention to gender markers",
        tip: "💡 When unsure, listen to how others address the person"
      },
      {
        title: "Hospitality Language",
        content: "Arabs value hospitality - language reflects this",
        example: "تفضل (tafaDDal) - Please, go ahead, welcome\nأهلاً وسهلاً (ahlan wa sahlan) - Welcome\nالبيت بيتك (al-bayt baytak) - Make yourself at home",
        practice: "Reciprocate the warmth in your language",
        tip: "💡 Refusing hospitality too quickly can offend"
      },
      {
        title: "Body Language & Arabic",
        content: "Gestures that accompany Arabic speech",
        example: "Hand on heart = sincerity\nOpen palm up = 'what?'\nFingers together pointing up = 'wait'",
        practice: "Watch Arabic speakers' hands while talking",
        tip: "💡 Gestures vary by country - observe locals"
      }
    ],
    quiz: {
      type: "cultural_scenarios",
      questions: ["Choose appropriate response", "Identify context", "Apply cultural knowledge"]
    }
  },

  quick_learning_hacks: {
    title: "⚡ Quick Learning Hacks",
    level: "All Levels",
    duration: "10 min",
    description: "Shortcuts and tricks for faster Arabic learning",
    steps: [
      {
        title: "The 80/20 Rule",
        content: "Focus on the 20% that gives 80% results",
        example: "100 most common words = 50% of all text\n500 words = 80% comprehension\nMaster these first!",
        practice: "Download frequency lists and prioritize",
        tip: "💡 Don't waste time on rare words initially"
      },
      {
        title: "Immersion at Home",
        content: "Create Arabic environment without traveling",
        example: "• Phone in Arabic\n• Arabic labels on objects\n• Arabic music/podcasts\n• Arabic subtitles on shows",
        practice: "Start with 1 hour daily Arabic exposure",
        tip: "💡 Passive listening trains your ear"
      },
      {
        title: "The Shadowing Technique",
        content: "Speak along with native speakers",
        example: "Play Arabic audio\nRepeat simultaneously\nMatch rhythm and intonation\nDon't worry about understanding yet",
        practice: "Use news broadcasts - clear pronunciation",
        tip: "💡 This builds natural pronunciation patterns"
      },
      {
        title: "Learn Through Music",
        content: "Songs make memorization easier",
        example: "• Melody aids memory\n• Repetition in chorus\n• Emotional connection\n• Natural rhythm",
        practice: "Learn one Arabic song per week",
        tip: "💡 Children's songs are perfect for beginners"
      },
      {
        title: "The Notebook Method",
        content: "One notebook for everything Arabic",
        example: "• New words with drawings\n• Grammar patterns\n• Phrases you want to say\n• Questions to ask",
        practice: "Review notebook before bed",
        tip: "💡 Writing by hand improves retention by 40%"
      },
      {
        title: "Talk to Yourself",
        content: "Practice speaking even when alone",
        example: "• Narrate your actions in Arabic\n• Have imaginary conversations\n• Read text aloud\n• Record yourself",
        practice: "5 minutes daily self-talk",
        tip: "💡 This builds speaking confidence"
      }
    ],
    quiz: {
      type: "application_test",
      questions: ["Apply techniques", "Create study plan", "Set goals"]
    }
  },

  numbers_and_counting: {
    title: "🔢 Numbers & Counting System",
    level: "Beginner",
    duration: "20 min",
    description: "Master Arabic numbers and counting rules",
    steps: [
      {
        title: "Arabic Numerals Origin",
        content: "Fun fact: 'Arabic numerals' (0-9) actually came TO Europe FROM Arabia, but Arabs use different symbols!",
        example: "٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩\n0 1 2 3 4 5 6 7 8 9",
        practice: "Notice ٢ looks like reversed 2, ٣ like reversed 3",
        tip: "💡 Phone numbers are written left-to-right even in Arabic text"
      },
      {
        title: "Numbers 1-10",
        content: "The foundation of all counting",
        example: "١ واحد (waaHid)\n٢ اثنان (ithnaan)\n٣ ثلاثة (thalaatha)\n٤ أربعة (arba'a)\n٥ خمسة (khamsa)",
        practice: "Count objects around you in Arabic",
        tip: "💡 These change based on gender of what you're counting"
      },
      {
        title: "Tens, Hundreds, Thousands",
        content: "Building bigger numbers",
        example: "١٠ عشرة ('ashara) - 10\n١٠٠ مائة (mi'a) - 100\n١٠٠٠ ألف (alf) - 1000",
        practice: "Practice with prices when shopping",
        tip: "💡 21 is 'one and twenty' not 'twenty-one'"
      },
      {
        title: "Complex Counting Rules",
        content: "Arabic counting has special grammar",
        example: "3-10: Number opposite gender of noun\n11-99: Number agrees with noun\n100+: Gets complicated!",
        practice: "Start simple - don't worry about perfect grammar",
        tip: "💡 In daily life, people often use simplified forms"
      },
      {
        title: "Ordinal Numbers",
        content: "First, second, third...",
        example: "الأول (al-awwal) - first\nالثاني (ath-thaani) - second\nالثالث (ath-thaalith) - third",
        practice: "Use for dates, rankings, floors",
        tip: "💡 These must match gender too"
      },
      {
        title: "Practical Number Usage",
        content: "Where you'll use numbers daily",
        example: "• Prices: كم السعر؟ (kam as-si'r?)\n• Time: الساعة الثالثة (3 o'clock)\n• Age: عمري عشرون سنة (I'm 20)",
        practice: "Practice with real situations",
        tip: "💡 Learn numbers 1-100 solidly before complex rules"
      }
    ],
    quiz: {
      type: "number_practice",
      questions: ["Write numbers", "Count objects", "Tell time"]
    }
  },

  common_mistakes: {
    title: "⚠️ Common Mistakes to Avoid",
    level: "All Levels",
    duration: "15 min",
    description: "Learn from others' errors",
    steps: [
      {
        title: "False Friends",
        content: "Words that sound similar but mean different things",
        example: "حار (Haar) = hot, NOT car\nفيل (fiil) = elephant, NOT feel\nدام (daam) = lasted, NOT dam",
        practice: "Keep a list of false friends you encounter",
        tip: "💡 Context usually clarifies the meaning"
      },
      {
        title: "Letter Confusion",
        content: "Letters that beginners often mix up",
        example: "ح vs ه (Haa vs haa)\nص vs ض (Saad vs Daad)\nذ vs ز (dhaal vs zaay)",
        practice: "Create minimal pairs to practice",
        tip: "💡 Focus on one confusing pair at a time"
      },
      {
        title: "Grammar Pitfalls",
        content: "Common grammatical errors",
        example: "❌ Forgetting to match gender\n❌ Wrong word order (VSO not SVO)\n❌ Literal translation from English",
        practice: "Think in Arabic patterns, not English",
        tip: "💡 Arabic sentence structure is flexible but has rules"
      },
      {
        title: "Pronunciation Errors",
        content: "Sounds that change meaning",
        example: "قلب (qalb - heart) vs كلب (kalb - dog)\nسم (samm - poison) vs سم (ism - name)",
        practice: "Record yourself and compare to native speakers",
        tip: "💡 Small pronunciation differences matter in Arabic"
      },
      {
        title: "Cultural Mistakes",
        content: "Language errors that offend",
        example: "❌ Using informal Arabic with elders\n❌ Wrong gender address\n❌ Translating idioms literally",
        practice: "When in doubt, be more formal",
        tip: "💡 Arabs appreciate effort even with mistakes"
      },
      {
        title: "Learning from Mistakes",
        content: "How to use errors to improve",
        example: "1. Keep error journal\n2. Review weekly\n3. Find patterns\n4. Target practice\n5. Test yourself",
        practice: "Mistakes are learning opportunities",
        tip: "💡 Native speakers make mistakes too - don't fear them"
      }
    ],
    quiz: {
      type: "error_correction",
      questions: ["Find mistakes", "Correct errors", "Explain why"]
    }
  },

  study_planning: {
    title: "📅 Creating Your Study Plan",
    level: "All Levels",
    duration: "15 min",
    description: "Design a personalized Arabic learning schedule",
    steps: [
      {
        title: "Assess Your Level",
        content: "Know where you're starting from",
        example: "Absolute beginner: Start with alphabet\nFalse beginner: Review basics\nIntermediate: Focus on gaps\nAdvanced: Polish and expand",
        practice: "Take an online placement test",
        tip: "💡 Be honest about your level for effective planning"
      },
      {
        title: "Set SMART Goals",
        content: "Specific, Measurable, Achievable, Relevant, Time-bound",
        example: "❌ 'Learn Arabic'\n✅ 'Learn 100 common words in 30 days'\n✅ 'Have 5-minute conversation in 3 months'",
        practice: "Write 3 SMART goals for this month",
        tip: "💡 Small wins build momentum"
      },
      {
        title: "Daily Minimums",
        content: "Consistency beats intensity",
        example: "15 minutes daily > 3 hours weekly\n• Morning: 5 min review\n• Lunch: 5 min new material\n• Evening: 5 min practice",
        practice: "Find your sustainable daily minimum",
        tip: "💡 Even 5 minutes maintains momentum"
      },
      {
        title: "Weekly Schedule Template",
        content: "Balanced skill development",
        example: "Monday: New vocabulary\nTuesday: Grammar\nWednesday: Listening\nThursday: Speaking\nFriday: Reading\nWeekend: Review & fun",
        practice: "Adapt to your schedule and goals",
        tip: "💡 Rotate skills to stay engaged"
      },
      {
        title: "Track Your Progress",
        content: "Measure to stay motivated",
        example: "• Words learned: ||||| (tally)\n• Days studied: calendar X\n• Conversations had: journal\n• Goals achieved: checklist",
        practice: "Choose one tracking method and stick to it",
        tip: "💡 Visual progress motivates continuation"
      },
      {
        title: "Adjust and Iterate",
        content: "Your plan should evolve",
        example: "Monthly review:\n• What worked?\n• What didn't?\n• What to change?\n• New goals?",
        practice: "Schedule monthly plan reviews",
        tip: "💡 Flexibility prevents burnout"
      }
    ],
    quiz: {
      type: "plan_creation",
      questions: ["Set goals", "Create schedule", "Track progress"]
    }
  }
};

// Tutorial categories for easy navigation
const TUTORIAL_CATEGORIES = {
  foundation: {
    title: "🏗️ Foundation",
    description: "Build your Arabic base",
    tutorials: ["alphabet_basics", "connections_advanced", "vowels_mastery", "numbers_and_counting"]
  },
  skills: {
    title: "💪 Core Skills",
    description: "Develop key abilities",
    tutorials: ["reading_techniques", "pronunciation_perfect", "writing_practice", "word_building"]
  },
  practical: {
    title: "🌟 Practical Usage",
    description: "Real-world Arabic",
    tutorials: ["practical_phrases", "cultural_context", "common_mistakes"]
  },
  acceleration: {
    title: "🚀 Learning Acceleration",
    description: "Learn faster and remember longer",
    tutorials: ["memory_techniques", "quick_learning_hacks", "study_planning"]
  }
};

// Interactive exercises for each tutorial
const TUTORIAL_EXERCISES = {
  letter_recognition: {
    title: "Letter Recognition Challenge",
    type: "interactive",
    generateExercise: () => {
      const letters = ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر"];
      const target = letters[Math.floor(Math.random() * letters.length)];
      return {
        instruction: "Find this letter:",
        target: target,
        options: shuffle([...letters]),
        correct: target
      };
    }
  },
  connection_practice: {
    title: "Connect the Letters",
    type: "interactive",
    generateExercise: () => {
      const words = [
        { separate: ["ك", "ت", "ا", "ب"], connected: "كتاب" },
        { separate: ["م", "د", "ر", "س", "ة"], connected: "مدرسة" },
        { separate: ["ب", "ي", "ت"], connected: "بيت" }
      ];
      const word = words[Math.floor(Math.random() * words.length)];
      return {
        instruction: "Connect these letters:",
        letters: word.separate,
        answer: word.connected
      };
    }
  },
  vowel_practice: {
    title: "Add the Correct Vowel",
    type: "interactive",
    generateExercise: () => {
      const exercises = [
        { base: "كتب", options: ["كَتَبَ", "كُتُب", "كاتِب"], correct: 0, meaning: "he wrote" },
        { base: "درس", options: ["دَرَسَ", "دَرْس", "مُدَرِّس"], correct: 0, meaning: "he studied" }
      ];
      const ex = exercises[Math.floor(Math.random() * exercises.length)];
      return {
        instruction: `Add vowels to make: "${ex.meaning}"`,
        base: ex.base,
        options: ex.options,
        correct: ex.correct
      };
    }
  }
};

// Spaced repetition algorithm
const SPACED_REPETITION = {
  intervals: [1, 3, 7, 14, 30, 90], // days
  getNextReview: (successCount) => {
    return SPACED_REPETITION.intervals[Math.min(successCount, SPACED_REPETITION.intervals.length - 1)];
  },
  calculateRetention: (reviews, successes) => {
    return reviews > 0 ? (successes / reviews * 100).toFixed(1) : 0;
  }
};

// Learning tips that rotate
const LEARNING_TIPS = [
  "💡 Study for 15 minutes daily rather than 2 hours weekly",
  "💡 Write new words by hand - it improves retention by 40%",
  "💡 Teach someone else what you learned - even if it's your pet!",
  "💡 Use Arabic words in your daily self-talk",
  "💡 Focus on high-frequency words first",
  "💡 Perfect pronunciation comes with time - communicate first!",
  "💡 Mistakes are learning opportunities - embrace them",
  "💡 Review before bed - your brain consolidates during sleep",
  "💡 Use multiple senses - see, hear, speak, write",
  "💡 Celebrate small wins - every word learned is progress"
];

// Export for use in main app
window.TUTORIALS_DATA = TUTORIALS_DATA;
window.TUTORIAL_CATEGORIES = TUTORIAL_CATEGORIES;
window.TUTORIAL_EXERCISES = TUTORIAL_EXERCISES;
window.SPACED_REPETITION = SPACED_REPETITION;
window.LEARNING_TIPS = LEARNING_TIPS;

// Helper function for tutorials
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}