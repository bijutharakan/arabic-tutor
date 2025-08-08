// Enhanced letter data with forms and diacritical marks
const LETTERS = [
  { 
    ar: "ا", name: "alif", phonics: "a", pic: "🍎", 
    hook: "Think 'apple' — short 'a'.",
    forms: { isolated: "ا", initial: "ا", medial: "ـا", final: "ـا" },
    canConnect: { before: false, after: true },
    examples: ["أسد (lion)", "باب (door)", "كتاب (book)"]
  },
  { 
    ar: "ب", name: "ba", phonics: "b", pic: "🍌", 
    hook: "Boat with 1 dot below — ba.",
    forms: { isolated: "ب", initial: "بـ", medial: "ـبـ", final: "ـب" },
    canConnect: { before: true, after: true },
    examples: ["بيت (house)", "كتب (books)", "باب (door)"]
  },
  { 
    ar: "ت", name: "ta", phonics: "t", pic: "🐯", 
    hook: "Two dots on top — ta.",
    forms: { isolated: "ت", initial: "تـ", medial: "ـتـ", final: "ـت" },
    canConnect: { before: true, after: true },
    examples: ["تفاح (apple)", "كتاب (book)", "بيت (house)"]
  },
  { 
    ar: "ث", name: "tha", phonics: "th", pic: "🦷", 
    hook: "Three dots — th like three.",
    forms: { isolated: "ث", initial: "ثـ", medial: "ـثـ", final: "ـث" },
    canConnect: { before: true, after: true },
    examples: ["ثلج (snow)", "ثعبان (snake)", "ثلاثة (three)"]
  },
  { 
    ar: "ج", name: "jeem", phonics: "j", pic: "🧃", 
    hook: "Dot below — j like juice.",
    forms: { isolated: "ج", initial: "جـ", medial: "ـجـ", final: "ـج" },
    canConnect: { before: true, after: true },
    examples: ["جمل (camel)", "نجمة (star)", "دجاج (chicken)"]
  },
  { 
    ar: "ح", name: "ḥa", phonics: "deep h", pic: "🏠", 
    hook: "No dot — deep h from throat.",
    forms: { isolated: "ح", initial: "حـ", medial: "ـحـ", final: "ـح" },
    canConnect: { before: true, after: true },
    examples: ["حصان (horse)", "بحر (sea)", "صباح (morning)"]
  },
  { 
    ar: "خ", name: "kha", phonics: "kh", pic: "🥐", 
    hook: "Dot on top — kh (fog the mirror).",
    forms: { isolated: "خ", initial: "خـ", medial: "ـخـ", final: "ـخ" },
    canConnect: { before: true, after: true },
    examples: ["خبز (bread)", "أخضر (green)", "مطبخ (kitchen)"]
  },
  { 
    ar: "د", name: "dal", phonics: "d", pic: "🐬", 
    hook: "Curvy d shape.",
    forms: { isolated: "د", initial: "د", medial: "ـد", final: "ـد" },
    canConnect: { before: false, after: true },
    examples: ["دب (bear)", "يد (hand)", "جديد (new)"]
  },
  { 
    ar: "ذ", name: "dhal", phonics: "dh", pic: "🦓", 
    hook: "Add a dot to dal — dh.",
    forms: { isolated: "ذ", initial: "ذ", medial: "ـذ", final: "ـذ" },
    canConnect: { before: false, after: true },
    examples: ["ذئب (wolf)", "ذهب (gold)", "ذيل (tail)"]
  },
  { 
    ar: "ر", name: "ra", phonics: "r", pic: "🚗", 
    hook: "Tiny roll 'r' like race car.",
    forms: { isolated: "ر", initial: "ر", medial: "ـر", final: "ـر" },
    canConnect: { before: false, after: true },
    examples: ["رأس (head)", "قمر (moon)", "أحمر (red)"]
  },
  { 
    ar: "ز", name: "zay", phonics: "z", pic: "🦓", 
    hook: "Z for zebra.",
    forms: { isolated: "ز", initial: "ز", medial: "ـز", final: "ـز" },
    canConnect: { before: false, after: true },
    examples: ["زهرة (flower)", "موز (banana)", "أزرق (blue)"]
  },
  { 
    ar: "س", name: "seen", phonics: "s", pic: "🐍", 
    hook: "Sss like snake.",
    forms: { isolated: "س", initial: "سـ", medial: "ـسـ", final: "ـس" },
    canConnect: { before: true, after: true },
    examples: ["سمك (fish)", "شمس (sun)", "درس (lesson)"]
  },
  { 
    ar: "ش", name: "sheen", phonics: "sh", pic: "🦈", 
    hook: "Shh like shark.",
    forms: { isolated: "ش", initial: "شـ", medial: "ـشـ", final: "ـش" },
    canConnect: { before: true, after: true },
    examples: ["شجرة (tree)", "شمس (sun)", "عشرة (ten)"]
  },
  { 
    ar: "ص", name: "ṣad", phonics: "heavy s", pic: "⚽", 
    hook: "Strong s.",
    forms: { isolated: "ص", initial: "صـ", medial: "ـصـ", final: "ـص" },
    canConnect: { before: true, after: true },
    examples: ["صباح (morning)", "أصفر (yellow)", "قصة (story)"]
  },
  { 
    ar: "ض", name: "ḍad", phonics: "heavy d", pic: "🛡️", 
    hook: "Strong d — Arabic special.",
    forms: { isolated: "ض", initial: "ضـ", medial: "ـضـ", final: "ـض" },
    canConnect: { before: true, after: true },
    examples: ["ضوء (light)", "أخضر (green)", "أبيض (white)"]
  },
  { 
    ar: "ط", name: "ṭa", phonics: "heavy t", pic: "🐯", 
    hook: "Strong t.",
    forms: { isolated: "ط", initial: "طـ", medial: "ـطـ", final: "ـط" },
    canConnect: { before: true, after: true },
    examples: ["طائر (bird)", "مطر (rain)", "خط (line)"]
  },
  { 
    ar: "ظ", name: "ẓa", phonics: "heavy th/z", pic: "🧭", 
    hook: "Strong 'the'.",
    forms: { isolated: "ظ", initial: "ظـ", medial: "ـظـ", final: "ـظ" },
    canConnect: { before: true, after: true },
    examples: ["ظل (shadow)", "نظيف (clean)", "عظيم (great)"]
  },
  { 
    ar: "ع", name: "ain", phonics: "throaty a", pic: "🌙", 
    hook: "Deep throat a.",
    forms: { isolated: "ع", initial: "عـ", medial: "ـعـ", final: "ـع" },
    canConnect: { before: true, after: true },
    examples: ["عين (eye)", "سمع (hearing)", "أربعة (four)"]
  },
  { 
    ar: "غ", name: "ghain", phonics: "gh", pic: "🦆", 
    hook: "Soft gargle gh.",
    forms: { isolated: "غ", initial: "غـ", medial: "ـغـ", final: "ـغ" },
    canConnect: { before: true, after: true },
    examples: ["غابة (forest)", "صغير (small)", "فارغ (empty)"]
  },
  { 
    ar: "ف", name: "fa", phonics: "f", pic: "🐟", 
    hook: "Bite lip for f.",
    forms: { isolated: "ف", initial: "فـ", medial: "ـفـ", final: "ـف" },
    canConnect: { before: true, after: true },
    examples: ["فيل (elephant)", "صف (class)", "هاتف (phone)"]
  },
  { 
    ar: "ق", name: "qaf", phonics: "deep k", pic: "👑", 
    hook: "Back-of-mouth k.",
    forms: { isolated: "ق", initial: "قـ", medial: "ـقـ", final: "ـق" },
    canConnect: { before: true, after: true },
    examples: ["قلم (pen)", "قمر (moon)", "شرق (east)"]
  },
  { 
    ar: "ك", name: "kaf", phonics: "k", pic: "🔑", 
    hook: "Key starts with k.",
    forms: { isolated: "ك", initial: "كـ", medial: "ـكـ", final: "ـك" },
    canConnect: { before: true, after: true },
    examples: ["كتاب (book)", "ملك (king)", "سمك (fish)"]
  },
  { 
    ar: "ل", name: "lam", phonics: "l", pic: "🍋", 
    hook: "L for lemon.",
    forms: { isolated: "ل", initial: "لـ", medial: "ـلـ", final: "ـل" },
    canConnect: { before: true, after: true },
    examples: ["ليل (night)", "قلم (pen)", "جمل (camel)"]
  },
  { 
    ar: "م", name: "meem", phonics: "m", pic: "🐵", 
    hook: "Close lips — mm.",
    forms: { isolated: "م", initial: "مـ", medial: "ـمـ", final: "ـم" },
    canConnect: { before: true, after: true },
    examples: ["ماء (water)", "قمر (moon)", "قلم (pen)"]
  },
  { 
    ar: "ن", name: "noon", phonics: "n", pic: "👃", 
    hook: "N for nose.",
    forms: { isolated: "ن", initial: "نـ", medial: "ـنـ", final: "ـن" },
    canConnect: { before: true, after: true },
    examples: ["نجمة (star)", "أنف (nose)", "لسان (tongue)"]
  },
  { 
    ar: "ه", name: "ha", phonics: "h", pic: "❤️", 
    hook: "Soft h like heart.",
    forms: { isolated: "ه", initial: "هـ", medial: "ـهـ", final: "ـه" },
    canConnect: { before: true, after: true },
    examples: ["هلال (crescent)", "وجه (face)", "فاكهة (fruit)"]
  },
  { 
    ar: "و", name: "waw", phonics: "w/oo", pic: "🦉", 
    hook: "Woo like an owl.",
    forms: { isolated: "و", initial: "و", medial: "ـو", final: "ـو" },
    canConnect: { before: false, after: true },
    examples: ["ولد (boy)", "يوم (day)", "ضوء (light)"]
  },
  { 
    ar: "ي", name: "ya", phonics: "y/ee", pic: "🧒", 
    hook: "Y like yes / ee like cheese.",
    forms: { isolated: "ي", initial: "يـ", medial: "ـيـ", final: "ـي" },
    canConnect: { before: true, after: true },
    examples: ["يد (hand)", "بيت (house)", "كرسي (chair)"]
  }
];

// Diacritical marks (Harakat)
const DIACRITICS = [
  { 
    ar: "َ", name: "Fatha", sound: "a", 
    description: "Short 'a' sound like in 'cat'",
    examples: ["كَتَبَ (kataba - he wrote)", "ذَهَبَ (dhahaba - he went)"],
    pic: "🔺"
  },
  { 
    ar: "ِ", name: "Kasra", sound: "i", 
    description: "Short 'i' sound like in 'sit'",
    examples: ["كِتَاب (kitaab - book)", "بِنْت (bint - girl)"],
    pic: "🔻"
  },
  { 
    ar: "ُ", name: "Damma", sound: "u", 
    description: "Short 'u' sound like in 'put'",
    examples: ["كُتُب (kutub - books)", "أُمّ (umm - mother)"],
    pic: "🔵"
  },
  { 
    ar: "ْ", name: "Sukun", sound: "no vowel", 
    description: "No vowel sound - consonant only",
    examples: ["أَكْتُب (aktub - I write)", "يَكْتُب (yaktub - he writes)"],
    pic: "⭕"
  },
  { 
    ar: "ّ", name: "Shadda", sound: "double", 
    description: "Doubles the consonant",
    examples: ["مُدَرِّس (mudarris - teacher)", "سَلَّم (sallam - greeted)"],
    pic: "➿"
  },
  { 
    ar: "ً", name: "Tanween Fatha", sound: "an", 
    description: "Adds 'an' sound at the end",
    examples: ["كِتَابًا (kitaaban - a book)", "شُكْرًا (shukran - thanks)"],
    pic: "🔺🔺"
  },
  { 
    ar: "ٍ", name: "Tanween Kasra", sound: "in", 
    description: "Adds 'in' sound at the end",
    examples: ["طَالِبٍ (taalibin - a student)", "يَوْمٍ (yawmin - a day)"],
    pic: "🔻🔻"
  },
  { 
    ar: "ٌ", name: "Tanween Damma", sound: "un", 
    description: "Adds 'un' sound at the end",
    examples: ["كِتَابٌ (kitaabun - a book)", "وَلَدٌ (waladun - a boy)"],
    pic: "🔵🔵"
  }
];

// Common phrases for practice
const PHRASES = [
  { ar: "السَّلامُ عَلَيْكُم", en: "Peace be upon you", transliteration: "as-salāmu ʿalaykum", category: "greeting" },
  { ar: "صَباح الخَير", en: "Good morning", transliteration: "ṣabāḥ al-khayr", category: "greeting" },
  { ar: "مَساء الخَير", en: "Good evening", transliteration: "masāʾ al-khayr", category: "greeting" },
  { ar: "كَيْفَ حالُك؟", en: "How are you?", transliteration: "kayfa ḥāluk?", category: "greeting" },
  { ar: "ما اسْمُك؟", en: "What is your name?", transliteration: "mā ismuk?", category: "question" },
  { ar: "أَيْنَ تَسْكُن؟", en: "Where do you live?", transliteration: "ayna taskun?", category: "question" },
  { ar: "شُكْرًا", en: "Thank you", transliteration: "shukran", category: "polite" },
  { ar: "عَفْوًا", en: "You're welcome", transliteration: "ʿafwan", category: "polite" },
  { ar: "مِن فَضْلِك", en: "Please", transliteration: "min faḍlik", category: "polite" },
  { ar: "أُحِبُّك", en: "I love you", transliteration: "uḥibbuk", category: "expression" },
  { ar: "أَنا جائِع", en: "I am hungry", transliteration: "anā jāʾiʿ", category: "expression" },
  { ar: "أُريدُ الماء", en: "I want water", transliteration: "urīdu al-māʾ", category: "expression" }
];

// Expanded word categories with more vocabulary
const WORD_CATEGORIES = [
  {
    key: "animals", name: "Animals", icon: "🐾",
    words: [
      { ar:"قِط", en:"cat", first:"ق", pic:"🐱", harakat: "قِطّ" },
      { ar:"كَلْب", en:"dog", first:"ك", pic:"🐶", harakat: "كَلْب" },
      { ar:"أَسَد", en:"lion", first:"ا", pic:"🦁", harakat: "أَسَد" },
      { ar:"سَمَك", en:"fish", first:"س", pic:"🐟", harakat: "سَمَك" },
      { ar:"طائِر", en:"bird", first:"ط", pic:"🐦", harakat: "طائِر" },
      { ar:"فيل", en:"elephant", first:"ف", pic:"🐘", harakat: "فيل" },
      { ar:"حِصان", en:"horse", first:"ح", pic:"🐴", harakat: "حِصان" },
      { ar:"بَقَرة", en:"cow", first:"ب", pic:"🐄", harakat: "بَقَرة" },
      { ar:"دَجاج", en:"chicken", first:"د", pic:"🐔", harakat: "دَجاج" },
      { ar:"نَحْلة", en:"bee", first:"ن", pic:"🐝", harakat: "نَحْلة" },
      { ar:"فَراشة", en:"butterfly", first:"ف", pic:"🦋", harakat: "فَراشة" },
      { ar:"أَرْنَب", en:"rabbit", first:"ا", pic:"🐰", harakat: "أَرْنَب" }
    ]
  },
  {
    key: "fruits", name: "Fruits", icon: "🍓",
    words: [
      { ar:"تُفّاح", en:"apple", first:"ت", pic:"🍎", harakat: "تُفّاح" },
      { ar:"مَوْز", en:"banana", first:"م", pic:"🍌", harakat: "مَوْز" },
      { ar:"عِنَب", en:"grapes", first:"ع", pic:"🍇", harakat: "عِنَب" },
      { ar:"بُرْتُقال", en:"orange", first:"ب", pic:"🍊", harakat: "بُرْتُقال" },
      { ar:"فَراوِلة", en:"strawberry", first:"ف", pic:"🍓", harakat: "فَراوِلة" },
      { ar:"بَطّيخ", en:"watermelon", first:"ب", pic:"🍉", harakat: "بَطّيخ" },
      { ar:"أَناناس", en:"pineapple", first:"ا", pic:"🍍", harakat: "أَناناس" },
      { ar:"خَوْخ", en:"peach", first:"خ", pic:"🍑", harakat: "خَوْخ" },
      { ar:"كَرَز", en:"cherry", first:"ك", pic:"🍒", harakat: "كَرَز" },
      { ar:"لَيْمون", en:"lemon", first:"ل", pic:"🍋", harakat: "لَيْمون" }
    ]
  },
  {
    key: "school", name: "School", icon: "🏫",
    words: [
      { ar:"كِتاب", en:"book", first:"ك", pic:"📖", harakat: "كِتاب" },
      { ar:"قَلَم", en:"pen", first:"ق", pic:"🖊️", harakat: "قَلَم" },
      { ar:"مَكْتَب", en:"desk", first:"م", pic:"🪑", harakat: "مَكْتَب" },
      { ar:"كُرْسي", en:"chair", first:"ك", pic:"🪑", harakat: "كُرْسي" },
      { ar:"مَدْرَسة", en:"school", first:"م", pic:"🏫", harakat: "مَدْرَسة" },
      { ar:"مُعَلِّم", en:"teacher", first:"م", pic:"👨‍🏫", harakat: "مُعَلِّم" },
      { ar:"طالِب", en:"student", first:"ط", pic:"👨‍🎓", harakat: "طالِب" },
      { ar:"حَقيبة", en:"bag", first:"ح", pic:"🎒", harakat: "حَقيبة" },
      { ar:"مِمْحاة", en:"eraser", first:"م", pic:"🧽", harakat: "مِمْحاة" },
      { ar:"مِسْطَرة", en:"ruler", first:"م", pic:"📏", harakat: "مِسْطَرة" }
    ]
  },
  {
    key: "family", name: "Family", icon: "👨‍👩‍👧‍👦",
    words: [
      { ar:"أَب", en:"father", first:"ا", pic:"👨", harakat: "أَب" },
      { ar:"أُمّ", en:"mother", first:"ا", pic:"👩", harakat: "أُمّ" },
      { ar:"أَخ", en:"brother", first:"ا", pic:"👦", harakat: "أَخ" },
      { ar:"أُخْت", en:"sister", first:"ا", pic:"👧", harakat: "أُخْت" },
      { ar:"جَدّ", en:"grandfather", first:"ج", pic:"👴", harakat: "جَدّ" },
      { ar:"جَدّة", en:"grandmother", first:"ج", pic:"👵", harakat: "جَدّة" },
      { ar:"طِفْل", en:"child", first:"ط", pic:"👶", harakat: "طِفْل" },
      { ar:"عائِلة", en:"family", first:"ع", pic:"👨‍👩‍👧‍👦", harakat: "عائِلة" }
    ]
  },
  {
    key: "colors", name: "Colors", icon: "🎨",
    words: [
      { ar:"أَحْمَر", en:"red", first:"ا", pic:"🔴", harakat: "أَحْمَر" },
      { ar:"أَزْرَق", en:"blue", first:"ا", pic:"🔵", harakat: "أَزْرَق" },
      { ar:"أَخْضَر", en:"green", first:"ا", pic:"🟢", harakat: "أَخْضَر" },
      { ar:"أَصْفَر", en:"yellow", first:"ا", pic:"🟡", harakat: "أَصْفَر" },
      { ar:"أَسْوَد", en:"black", first:"ا", pic:"⚫", harakat: "أَسْوَد" },
      { ar:"أَبْيَض", en:"white", first:"ا", pic:"⚪", harakat: "أَبْيَض" },
      { ar:"بُرْتُقالي", en:"orange", first:"ب", pic:"🟠", harakat: "بُرْتُقالي" },
      { ar:"بَنَفْسَجي", en:"purple", first:"ب", pic:"🟣", harakat: "بَنَفْسَجي" },
      { ar:"وَرْدي", en:"pink", first:"و", pic:"🩷", harakat: "وَرْدي" },
      { ar:"رَمادي", en:"gray", first:"ر", pic:"🔘", harakat: "رَمادي" }
    ]
  },
  {
    key: "body", name: "Body Parts", icon: "👤",
    words: [
      { ar:"عَيْن", en:"eye", first:"ع", pic:"👁️", harakat: "عَيْن" },
      { ar:"أَنْف", en:"nose", first:"ا", pic:"👃", harakat: "أَنْف" },
      { ar:"فَم", en:"mouth", first:"ف", pic:"👄", harakat: "فَم" },
      { ar:"أُذُن", en:"ear", first:"ا", pic:"👂", harakat: "أُذُن" },
      { ar:"يَد", en:"hand", first:"ي", pic:"✋", harakat: "يَد" },
      { ar:"قَدَم", en:"foot", first:"ق", pic:"🦶", harakat: "قَدَم" },
      { ar:"رَأْس", en:"head", first:"ر", pic:"🗣️", harakat: "رَأْس" },
      { ar:"شَعْر", en:"hair", first:"ش", pic:"💇", harakat: "شَعْر" },
      { ar:"قَلْب", en:"heart", first:"ق", pic:"❤️", harakat: "قَلْب" }
    ]
  },
  {
    key: "nature", name: "Nature", icon: "🌳",
    words: [
      { ar:"شَمْس", en:"sun", first:"ش", pic:"☀️", harakat: "شَمْس" },
      { ar:"قَمَر", en:"moon", first:"ق", pic:"🌙", harakat: "قَمَر" },
      { ar:"نَجْمة", en:"star", first:"ن", pic:"⭐", harakat: "نَجْمة" },
      { ar:"شَجَرة", en:"tree", first:"ش", pic:"🌳", harakat: "شَجَرة" },
      { ar:"زَهْرة", en:"flower", first:"ز", pic:"🌸", harakat: "زَهْرة" },
      { ar:"سَحابة", en:"cloud", first:"س", pic:"☁️", harakat: "سَحابة" },
      { ar:"مَطَر", en:"rain", first:"م", pic:"🌧️", harakat: "مَطَر" },
      { ar:"بَحْر", en:"sea", first:"ب", pic:"🌊", harakat: "بَحْر" },
      { ar:"جَبَل", en:"mountain", first:"ج", pic:"⛰️", harakat: "جَبَل" }
    ]
  },
  {
    key: "food", name: "Food", icon: "🍽️",
    words: [
      { ar:"خُبْز", en:"bread", first:"خ", pic:"🍞", harakat: "خُبْز" },
      { ar:"حَليب", en:"milk", first:"ح", pic:"🥛", harakat: "حَليب" },
      { ar:"بَيْض", en:"eggs", first:"ب", pic:"🥚", harakat: "بَيْض" },
      { ar:"جُبْن", en:"cheese", first:"ج", pic:"🧀", harakat: "جُبْن" },
      { ar:"لَحْم", en:"meat", first:"ل", pic:"🥩", harakat: "لَحْم" },
      { ar:"أَرُزّ", en:"rice", first:"ا", pic:"🍚", harakat: "أَرُزّ" },
      { ar:"سُكَّر", en:"sugar", first:"س", pic:"🍬", harakat: "سُكَّر" },
      { ar:"مِلْح", en:"salt", first:"م", pic:"🧂", harakat: "مِلْح" },
      { ar:"ماء", en:"water", first:"م", pic:"💧", harakat: "ماء" },
      { ar:"عَصير", en:"juice", first:"ع", pic:"🧃", harakat: "عَصير" }
    ]
  },
  {
    key: "numbers", name: "Numbers", icon: "🔢",
    words: [
      { ar:"واحِد", en:"one (1)", first:"و", pic:"1️⃣", harakat: "واحِد" },
      { ar:"اِثْنان", en:"two (2)", first:"ا", pic:"2️⃣", harakat: "اِثْنان" },
      { ar:"ثَلاثة", en:"three (3)", first:"ث", pic:"3️⃣", harakat: "ثَلاثة" },
      { ar:"أَرْبَعة", en:"four (4)", first:"ا", pic:"4️⃣", harakat: "أَرْبَعة" },
      { ar:"خَمْسة", en:"five (5)", first:"خ", pic:"5️⃣", harakat: "خَمْسة" },
      { ar:"سِتّة", en:"six (6)", first:"س", pic:"6️⃣", harakat: "سِتّة" },
      { ar:"سَبْعة", en:"seven (7)", first:"س", pic:"7️⃣", harakat: "سَبْعة" },
      { ar:"ثَمانية", en:"eight (8)", first:"ث", pic:"8️⃣", harakat: "ثَمانية" },
      { ar:"تِسْعة", en:"nine (9)", first:"ت", pic:"9️⃣", harakat: "تِسْعة" },
      { ar:"عَشَرة", en:"ten (10)", first:"ع", pic:"🔟", harakat: "عَشَرة" }
    ]
  },
  {
    key: "transport", name: "Transport", icon: "🚗",
    words: [
      { ar:"سَيّارة", en:"car", first:"س", pic:"🚗", harakat: "سَيّارة" },
      { ar:"طائِرة", en:"airplane", first:"ط", pic:"✈️", harakat: "طائِرة" },
      { ar:"قِطار", en:"train", first:"ق", pic:"🚂", harakat: "قِطار" },
      { ar:"حافِلة", en:"bus", first:"ح", pic:"🚌", harakat: "حافِلة" },
      { ar:"دَرّاجة", en:"bicycle", first:"د", pic:"🚲", harakat: "دَرّاجة" },
      { ar:"قارِب", en:"boat", first:"ق", pic:"⛵", harakat: "قارِب" },
      { ar:"سَفينة", en:"ship", first:"س", pic:"🚢", harakat: "سَفينة" }
    ]
  },
  {
    key: "home", name: "Home", icon: "🏠",
    words: [
      { ar:"بَيْت", en:"house", first:"ب", pic:"🏠", harakat: "بَيْت" },
      { ar:"باب", en:"door", first:"ب", pic:"🚪", harakat: "باب" },
      { ar:"نافِذة", en:"window", first:"ن", pic:"🪟", harakat: "نافِذة" },
      { ar:"سَرير", en:"bed", first:"س", pic:"🛏️", harakat: "سَرير" },
      { ar:"طاوِلة", en:"table", first:"ط", pic:"🪑", harakat: "طاوِلة" },
      { ar:"ثَلّاجة", en:"fridge", first:"ث", pic:"🧊", harakat: "ثَلّاجة" },
      { ar:"تِلْفاز", en:"TV", first:"ت", pic:"📺", harakat: "تِلْفاز" },
      { ar:"هاتِف", en:"phone", first:"ه", pic:"📱", harakat: "هاتِف" },
      { ar:"مِفْتاح", en:"key", first:"م", pic:"🔑", harakat: "مِفْتاح" }
    ]
  }
];