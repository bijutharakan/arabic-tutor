
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

// Word categories
const WORD_CATEGORIES = [
  {
    key: "animals", name: "Animals", icon: "🐾",
    words: [
      { ar:"قط", en:"cat", first:"ق", pic:"🐱" },
      { ar:"كلب", en:"dog", first:"ك", pic:"🐶" },
      { ar:"أسد", en:"lion", first:"ا", pic:"🦁" },
      { ar:"سمك", en:"fish", first:"س", pic:"🐟" },
      { ar:"طائر", en:"bird", first:"ط", pic:"🐦" }
    ]
  },
  {
    key: "fruits", name: "Fruits", icon: "🍓",
    words: [
      { ar:"تفاح", en:"apple", first:"ت", pic:"🍎" },
      { ar:"موز", en:"banana", first:"م", pic:"🍌" },
      { ar:"عنب", en:"grapes", first:"ع", pic:"🍇" },
      { ar:"برتقال", en:"orange", first:"ب", pic:"🍊" },
      { ar:"فراولة", en:"strawberry", first:"ف", pic:"🍓" }
    ]
  },
  {
    key: "school", name: "School", icon: "🏫",
    words: [
      { ar:"كتاب", en:"book", first:"ك", pic:"📖" },
      { ar:"قلم", en:"pen", first:"ق", pic:"🖊️" },
      { ar:"مكتب", en:"desk", first:"م", pic:"🪑" },
      { ar:"كرسي", en:"chair", first:"ك", pic:"🪑" },
      { ar:"مدرسة", en:"school", first:"م", pic:"🏫" }
    ]
  }
];
