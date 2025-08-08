// Letters with English hints and memory hooks
const LETTERS = [
  { ar: "ا", name: "alif", phonics: "a", pic: "🍎", hook: "Think 'apple' — short 'a'." },
  { ar: "ب", name: "ba", phonics: "b", pic: "🍌", hook: "Boat with 1 dot below — ba." },
  { ar: "ت", name: "ta", phonics: "t", pic: "🐯", hook: "Two dots on top — ta." },
  { ar: "ث", name: "tha", phonics: "th", pic: "🦷", hook: "Three dots — th like three." },
  { ar: "ج", name: "jeem", phonics: "j", pic: "🧃", hook: "Dot below — j like juice." },
  { ar: "ح", name: "ḥa", phonics: "deep h", pic: "🏠", hook: "No dot — deep h from throat." },
  { ar: "خ", name: "kha", phonics: "kh", pic: "🥐", hook: "Dot on top — kh (fog the mirror)." },
  { ar: "د", name: "dal", phonics: "d", pic: "🐬", hook: "Curvy d shape." },
  { ar: "ذ", name: "dhal", phonics: "dh", pic: "🦓", hook: "Add a dot to dal — dh." },
  { ar: "ر", name: "ra", phonics: "r", pic: "🚗", hook: "Tiny roll 'r' like race car." },
  { ar: "ز", name: "zay", phonics: "z", pic: "🦓", hook: "Z for zebra." },
  { ar: "س", name: "seen", phonics: "s", pic: "🐍", hook: "Sss like snake." },
  { ar: "ش", name: "sheen", phonics: "sh", pic: "🦈", hook: "Shh like shark." },
  { ar: "ص", name: "ṣad", phonics: "heavy s", pic: "⚽", hook: "Strong s." },
  { ar: "ض", name: "ḍad", phonics: "heavy d", pic: "🛡️", hook: "Strong d — Arabic special." },
  { ar: "ط", name: "ṭa", phonics: "heavy t", pic: "🐯", hook: "Strong t." },
  { ar: "ظ", name: "ẓa", phonics: "heavy th/z", pic: "🧭", hook: "Strong 'the'." },
  { ar: "ع", name: "ain", phonics: "throaty a", pic: "🌙", hook: "Deep throat a." },
  { ar: "غ", name: "ghain", phonics: "gh", pic: "🦆", hook: "Soft gargle gh." },
  { ar: "ف", name: "fa", phonics: "f", pic: "🐟", hook: "Bite lip for f." },
  { ar: "ق", name: "qaf", phonics: "deep k", pic: "👑", hook: "Back-of-mouth k." },
  { ar: "ك", name: "kaf", phonics: "k", pic: "🔑", hook: "Key starts with k." },
  { ar: "ل", name: "lam", phonics: "l", pic: "🍋", hook: "L for lemon." },
  { ar: "م", name: "meem", phonics: "m", pic: "🐵", hook: "Close lips — mm." },
  { ar: "ن", name: "noon", phonics: "n", pic: "👃", hook: "N for nose." },
  { ar: "ه", name: "ha", phonics: "h", pic: "❤️", hook: "Soft h like heart." },
  { ar: "و", name: "waw", phonics: "w/oo", pic: "🦉", hook: "Woo like an owl." },
  { ar: "ي", name: "ya", phonics: "y/ee", pic: "🧒", hook: "Y like yes / ee like cheese." }
];

// Expanded word categories with more vocabulary
const WORD_CATEGORIES = [
  {
    key: "animals", name: "Animals", icon: "🐾",
    words: [
      { ar:"قط", en:"cat", first:"ق", pic:"🐱" },
      { ar:"كلب", en:"dog", first:"ك", pic:"🐶" },
      { ar:"أسد", en:"lion", first:"ا", pic:"🦁" },
      { ar:"سمك", en:"fish", first:"س", pic:"🐟" },
      { ar:"طائر", en:"bird", first:"ط", pic:"🐦" },
      { ar:"فيل", en:"elephant", first:"ف", pic:"🐘" },
      { ar:"حصان", en:"horse", first:"ح", pic:"🐴" },
      { ar:"بقرة", en:"cow", first:"ب", pic:"🐄" },
      { ar:"دجاج", en:"chicken", first:"د", pic:"🐔" },
      { ar:"نحلة", en:"bee", first:"ن", pic:"🐝" },
      { ar:"فراشة", en:"butterfly", first:"ف", pic:"🦋" },
      { ar:"أرنب", en:"rabbit", first:"ا", pic:"🐰" }
    ]
  },
  {
    key: "fruits", name: "Fruits", icon: "🍓",
    words: [
      { ar:"تفاح", en:"apple", first:"ت", pic:"🍎" },
      { ar:"موز", en:"banana", first:"م", pic:"🍌" },
      { ar:"عنب", en:"grapes", first:"ع", pic:"🍇" },
      { ar:"برتقال", en:"orange", first:"ب", pic:"🍊" },
      { ar:"فراولة", en:"strawberry", first:"ف", pic:"🍓" },
      { ar:"بطيخ", en:"watermelon", first:"ب", pic:"🍉" },
      { ar:"أناناس", en:"pineapple", first:"ا", pic:"🍍" },
      { ar:"خوخ", en:"peach", first:"خ", pic:"🍑" },
      { ar:"كرز", en:"cherry", first:"ك", pic:"🍒" },
      { ar:"ليمون", en:"lemon", first:"ل", pic:"🍋" }
    ]
  },
  {
    key: "school", name: "School", icon: "🏫",
    words: [
      { ar:"كتاب", en:"book", first:"ك", pic:"📖" },
      { ar:"قلم", en:"pen", first:"ق", pic:"🖊️" },
      { ar:"مكتب", en:"desk", first:"م", pic:"🪑" },
      { ar:"كرسي", en:"chair", first:"ك", pic:"🪑" },
      { ar:"مدرسة", en:"school", first:"م", pic:"🏫" },
      { ar:"معلم", en:"teacher", first:"م", pic:"👨‍🏫" },
      { ar:"طالب", en:"student", first:"ط", pic:"👨‍🎓" },
      { ar:"حقيبة", en:"bag", first:"ح", pic:"🎒" },
      { ar:"ممحاة", en:"eraser", first:"م", pic:"🧽" },
      { ar:"مسطرة", en:"ruler", first:"م", pic:"📏" }
    ]
  },
  {
    key: "family", name: "Family", icon: "👨‍👩‍👧‍👦",
    words: [
      { ar:"أب", en:"father", first:"ا", pic:"👨" },
      { ar:"أم", en:"mother", first:"ا", pic:"👩" },
      { ar:"أخ", en:"brother", first:"ا", pic:"👦" },
      { ar:"أخت", en:"sister", first:"ا", pic:"👧" },
      { ar:"جد", en:"grandfather", first:"ج", pic:"👴" },
      { ar:"جدة", en:"grandmother", first:"ج", pic:"👵" },
      { ar:"طفل", en:"child", first:"ط", pic:"👶" },
      { ar:"عائلة", en:"family", first:"ع", pic:"👨‍👩‍👧‍👦" }
    ]
  },
  {
    key: "colors", name: "Colors", icon: "🎨",
    words: [
      { ar:"أحمر", en:"red", first:"ا", pic:"🔴" },
      { ar:"أزرق", en:"blue", first:"ا", pic:"🔵" },
      { ar:"أخضر", en:"green", first:"ا", pic:"🟢" },
      { ar:"أصفر", en:"yellow", first:"ا", pic:"🟡" },
      { ar:"أسود", en:"black", first:"ا", pic:"⚫" },
      { ar:"أبيض", en:"white", first:"ا", pic:"⚪" },
      { ar:"برتقالي", en:"orange", first:"ب", pic:"🟠" },
      { ar:"بنفسجي", en:"purple", first:"ب", pic:"🟣" },
      { ar:"وردي", en:"pink", first:"و", pic:"🩷" },
      { ar:"رمادي", en:"gray", first:"ر", pic:"🔘" }
    ]
  },
  {
    key: "body", name: "Body Parts", icon: "👤",
    words: [
      { ar:"عين", en:"eye", first:"ع", pic:"👁️" },
      { ar:"أنف", en:"nose", first:"ا", pic:"👃" },
      { ar:"فم", en:"mouth", first:"ف", pic:"👄" },
      { ar:"أذن", en:"ear", first:"ا", pic:"👂" },
      { ar:"يد", en:"hand", first:"ي", pic:"✋" },
      { ar:"قدم", en:"foot", first:"ق", pic:"🦶" },
      { ar:"رأس", en:"head", first:"ر", pic:"🗣️" },
      { ar:"شعر", en:"hair", first:"ش", pic:"💇" },
      { ar:"قلب", en:"heart", first:"ق", pic:"❤️" }
    ]
  },
  {
    key: "nature", name: "Nature", icon: "🌳",
    words: [
      { ar:"شمس", en:"sun", first:"ش", pic:"☀️" },
      { ar:"قمر", en:"moon", first:"ق", pic:"🌙" },
      { ar:"نجمة", en:"star", first:"ن", pic:"⭐" },
      { ar:"شجرة", en:"tree", first:"ش", pic:"🌳" },
      { ar:"زهرة", en:"flower", first:"ز", pic:"🌸" },
      { ar:"سحابة", en:"cloud", first:"س", pic:"☁️" },
      { ar:"مطر", en:"rain", first:"م", pic:"🌧️" },
      { ar:"بحر", en:"sea", first:"ب", pic:"🌊" },
      { ar:"جبل", en:"mountain", first:"ج", pic:"⛰️" }
    ]
  },
  {
    key: "food", name: "Food", icon: "🍽️",
    words: [
      { ar:"خبز", en:"bread", first:"خ", pic:"🍞" },
      { ar:"حليب", en:"milk", first:"ح", pic:"🥛" },
      { ar:"بيض", en:"eggs", first:"ب", pic:"🥚" },
      { ar:"جبن", en:"cheese", first:"ج", pic:"🧀" },
      { ar:"لحم", en:"meat", first:"ل", pic:"🥩" },
      { ar:"أرز", en:"rice", first:"ا", pic:"🍚" },
      { ar:"سكر", en:"sugar", first:"س", pic:"🍬" },
      { ar:"ملح", en:"salt", first:"م", pic:"🧂" },
      { ar:"ماء", en:"water", first:"م", pic:"💧" },
      { ar:"عصير", en:"juice", first:"ع", pic:"🧃" }
    ]
  },
  {
    key: "transport", name: "Transport", icon: "🚗",
    words: [
      { ar:"سيارة", en:"car", first:"س", pic:"🚗" },
      { ar:"طائرة", en:"airplane", first:"ط", pic:"✈️" },
      { ar:"قطار", en:"train", first:"ق", pic:"🚂" },
      { ar:"حافلة", en:"bus", first:"ح", pic:"🚌" },
      { ar:"دراجة", en:"bicycle", first:"د", pic:"🚲" },
      { ar:"قارب", en:"boat", first:"ق", pic:"⛵" },
      { ar:"سفينة", en:"ship", first:"س", pic:"🚢" }
    ]
  },
  {
    key: "home", name: "Home", icon: "🏠",
    words: [
      { ar:"بيت", en:"house", first:"ب", pic:"🏠" },
      { ar:"باب", en:"door", first:"ب", pic:"🚪" },
      { ar:"نافذة", en:"window", first:"ن", pic:"🪟" },
      { ar:"سرير", en:"bed", first:"س", pic:"🛏️" },
      { ar:"طاولة", en:"table", first:"ط", pic:"🪑" },
      { ar:"ثلاجة", en:"fridge", first:"ث", pic:"🧊" },
      { ar:"تلفاز", en:"TV", first:"ت", pic:"📺" },
      { ar:"هاتف", en:"phone", first:"ه", pic:"📱" },
      { ar:"مفتاح", en:"key", first:"م", pic:"🔑" }
    ]
  }
];