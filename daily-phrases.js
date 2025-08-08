// Comprehensive Daily Life Phrases and Conversations for Arabic Learners

const DAILY_PHRASES = {
  // Essential Greetings & Farewells
  greetings: {
    title: "👋 Greetings & Farewells",
    icon: "👋",
    description: "Essential ways to say hello and goodbye",
    phrases: [
      { ar: "السلام عليكم", en: "Peace be upon you (Hello)", transliteration: "as-salāmu ʿalaykum", usage: "Universal greeting, any time" },
      { ar: "وعليكم السلام", en: "And upon you peace (Hello reply)", transliteration: "wa ʿalaykumu s-salām", usage: "Response to السلام عليكم" },
      { ar: "صباح الخير", en: "Good morning", transliteration: "ṣabāḥ al-khayr", usage: "Morning greeting" },
      { ar: "صباح النور", en: "Morning of light (reply)", transliteration: "ṣabāḥ an-nūr", usage: "Response to صباح الخير" },
      { ar: "مساء الخير", en: "Good evening", transliteration: "masāʾ al-khayr", usage: "Evening greeting" },
      { ar: "مساء النور", en: "Evening of light (reply)", transliteration: "masāʾ an-nūr", usage: "Response to مساء الخير" },
      { ar: "أهلاً", en: "Hello/Welcome", transliteration: "ahlan", usage: "Informal greeting" },
      { ar: "أهلاً وسهلاً", en: "Welcome (formal)", transliteration: "ahlan wa-sahlan", usage: "Welcoming someone" },
      { ar: "مرحباً", en: "Hello", transliteration: "marḥaban", usage: "General greeting" },
      { ar: "مع السلامة", en: "Goodbye (with peace)", transliteration: "maʿa s-salāma", usage: "Formal farewell" },
      { ar: "إلى اللقاء", en: "Until we meet", transliteration: "ilā l-liqāʾ", usage: "See you later" },
      { ar: "تصبح على خير", en: "Good night (to male)", transliteration: "tuṣbiḥ ʿalā khayr", usage: "Bedtime farewell" },
      { ar: "تصبحين على خير", en: "Good night (to female)", transliteration: "tuṣbiḥīn ʿalā khayr", usage: "Bedtime farewell" },
      { ar: "وأنت من أهله", en: "And you too (male reply)", transliteration: "wa-anta min ahlih", usage: "Reply to good night" },
      { ar: "وأنتِ من أهله", en: "And you too (female reply)", transliteration: "wa-anti min ahlih", usage: "Reply to good night" }
    ]
  },

  // Polite Expressions
  polite: {
    title: "🙏 Polite Expressions",
    icon: "🙏",
    description: "Essential courtesy phrases",
    phrases: [
      { ar: "من فضلك", en: "Please (to male)", transliteration: "min faḍlik", usage: "Making requests" },
      { ar: "من فضلكِ", en: "Please (to female)", transliteration: "min faḍlik", usage: "Making requests" },
      { ar: "لو سمحت", en: "If you please/Excuse me", transliteration: "law samaḥt", usage: "Getting attention" },
      { ar: "شكراً", en: "Thank you", transliteration: "shukran", usage: "Expressing gratitude" },
      { ar: "شكراً جزيلاً", en: "Thank you very much", transliteration: "shukran jazīlan", usage: "Strong gratitude" },
      { ar: "عفواً", en: "You're welcome/Excuse me", transliteration: "ʿafwan", usage: "Multiple uses" },
      { ar: "العفو", en: "You're welcome", transliteration: "al-ʿafw", usage: "Reply to thanks" },
      { ar: "آسف", en: "Sorry (male)", transliteration: "āsif", usage: "Apology" },
      { ar: "آسفة", en: "Sorry (female)", transliteration: "āsifa", usage: "Apology" },
      { ar: "معذرة", en: "Excuse me/Pardon", transliteration: "maʿdhira", usage: "Getting past someone" },
      { ar: "لا بأس", en: "No problem/It's okay", transliteration: "lā baʾs", usage: "Accepting apology" },
      { ar: "تفضل", en: "Please, go ahead (to male)", transliteration: "tafaḍḍal", usage: "Offering/inviting" },
      { ar: "تفضلي", en: "Please, go ahead (to female)", transliteration: "tafaḍḍalī", usage: "Offering/inviting" },
      { ar: "بإذنك", en: "With your permission", transliteration: "bi-idhnik", usage: "Asking permission" }
    ]
  },

  // How Are You & Responses
  howAreYou: {
    title: "💬 How Are You?",
    icon: "💬",
    description: "Asking about wellbeing and responses",
    phrases: [
      { ar: "كيف حالك؟", en: "How are you? (to male)", transliteration: "kayf ḥāluk?", usage: "Asking wellbeing" },
      { ar: "كيف حالكِ؟", en: "How are you? (to female)", transliteration: "kayf ḥālik?", usage: "Asking wellbeing" },
      { ar: "كيفك؟", en: "How are you? (informal)", transliteration: "kayfak?", usage: "Casual greeting" },
      { ar: "إزيك؟", en: "How are you? (Egyptian)", transliteration: "izzayyak?", usage: "Egyptian dialect" },
      { ar: "شو أخبارك؟", en: "What's your news?", transliteration: "shū akhbārak?", usage: "Levantine dialect" },
      { ar: "أنا بخير", en: "I'm fine", transliteration: "anā bi-khayr", usage: "Standard response" },
      { ar: "الحمد لله", en: "Praise be to God (I'm fine)", transliteration: "al-ḥamdu lillāh", usage: "Common response" },
      { ar: "بخير، الحمد لله", en: "Fine, thank God", transliteration: "bi-khayr, al-ḥamdu lillāh", usage: "Full response" },
      { ar: "تمام", en: "Perfect/Great", transliteration: "tamām", usage: "Informal response" },
      { ar: "ماشي الحال", en: "Things are going okay", transliteration: "māshī l-ḥāl", usage: "So-so response" },
      { ar: "لا بأس", en: "Not bad", transliteration: "lā baʾs", usage: "Neutral response" },
      { ar: "تعبان", en: "Tired (male)", transliteration: "taʿbān", usage: "Honest response" },
      { ar: "تعبانة", en: "Tired (female)", transliteration: "taʿbāna", usage: "Honest response" },
      { ar: "وأنت؟", en: "And you? (male)", transliteration: "wa-anta?", usage: "Returning question" },
      { ar: "وأنتِ؟", en: "And you? (female)", transliteration: "wa-anti?", usage: "Returning question" }
    ]
  },

  // Introductions & Meeting People
  introductions: {
    title: "🤝 Introductions",
    icon: "🤝",
    description: "Meeting new people and introducing yourself",
    phrases: [
      { ar: "ما اسمك؟", en: "What's your name? (to male)", transliteration: "mā ismuk?", usage: "Asking name" },
      { ar: "ما اسمكِ؟", en: "What's your name? (to female)", transliteration: "mā ismik?", usage: "Asking name" },
      { ar: "اسمي...", en: "My name is...", transliteration: "ismī...", usage: "Giving name" },
      { ar: "أنا...", en: "I am...", transliteration: "anā...", usage: "Introduction" },
      { ar: "تشرفنا", en: "Nice to meet you", transliteration: "tasharrafnā", usage: "Formal meeting" },
      { ar: "فرصة سعيدة", en: "Happy occasion (nice to meet you)", transliteration: "furṣa saʿīda", usage: "Formal meeting" },
      { ar: "أنا سعيد بمعرفتك", en: "I'm happy to know you (male speaking)", transliteration: "anā saʿīd bi-maʿrifatik", usage: "Expressing pleasure" },
      { ar: "من أين أنت؟", en: "Where are you from? (male)", transliteration: "min ayna anta?", usage: "Asking origin" },
      { ar: "من أين أنتِ؟", en: "Where are you from? (female)", transliteration: "min ayna anti?", usage: "Asking origin" },
      { ar: "أنا من...", en: "I'm from...", transliteration: "anā min...", usage: "Stating origin" },
      { ar: "أعيش في...", en: "I live in...", transliteration: "aʿīsh fī...", usage: "Stating residence" },
      { ar: "كم عمرك؟", en: "How old are you?", transliteration: "kam ʿumruk?", usage: "Asking age" },
      { ar: "عمري... سنة", en: "I'm ... years old", transliteration: "ʿumrī... sana", usage: "Stating age" },
      { ar: "ماذا تعمل؟", en: "What do you do? (job)", transliteration: "mādhā taʿmal?", usage: "Asking profession" },
      { ar: "أنا طالب", en: "I'm a student (male)", transliteration: "anā ṭālib", usage: "Stating profession" },
      { ar: "أنا طالبة", en: "I'm a student (female)", transliteration: "anā ṭāliba", usage: "Stating profession" }
    ]
  },

  // Shopping & Market
  shopping: {
    title: "🛍️ Shopping & Market",
    icon: "🛍️",
    description: "Essential phrases for shopping",
    phrases: [
      { ar: "بكم هذا؟", en: "How much is this?", transliteration: "bi-kam hādhā?", usage: "Asking price" },
      { ar: "كم السعر؟", en: "What's the price?", transliteration: "kam as-siʿr?", usage: "Asking price" },
      { ar: "كم الحساب؟", en: "What's the total?", transliteration: "kam al-ḥisāb?", usage: "Asking for bill" },
      { ar: "غالي", en: "Expensive", transliteration: "ghālī", usage: "Price comment" },
      { ar: "رخيص", en: "Cheap", transliteration: "rakhīṣ", usage: "Price comment" },
      { ar: "هل يوجد خصم؟", en: "Is there a discount?", transliteration: "hal yūjad khaṣm?", usage: "Asking for discount" },
      { ar: "أريد هذا", en: "I want this", transliteration: "urīd hādhā", usage: "Making selection" },
      { ar: "أعطني", en: "Give me", transliteration: "aʿṭinī", usage: "Requesting item" },
      { ar: "كيلو", en: "Kilogram", transliteration: "kīlū", usage: "Weight measure" },
      { ar: "نصف كيلو", en: "Half kilogram", transliteration: "niṣf kīlū", usage: "Weight measure" },
      { ar: "قطعة", en: "Piece", transliteration: "qiṭʿa", usage: "Counting items" },
      { ar: "كيس", en: "Bag", transliteration: "kīs", usage: "Requesting bag" },
      { ar: "الباقي", en: "The change", transliteration: "al-bāqī", usage: "Money change" },
      { ar: "احتفظ بالباقي", en: "Keep the change", transliteration: "iḥtafiẓ bil-bāqī", usage: "Tipping" },
      { ar: "هل تقبل البطاقة؟", en: "Do you accept card?", transliteration: "hal taqbal al-biṭāqa?", usage: "Payment method" },
      { ar: "نقداً", en: "Cash", transliteration: "naqdan", usage: "Payment method" },
      { ar: "فاتورة", en: "Receipt/Invoice", transliteration: "fātūra", usage: "Requesting receipt" }
    ]
  },

  // Restaurant & Food
  restaurant: {
    title: "🍽️ Restaurant & Food",
    icon: "🍽️",
    description: "Ordering food and dining out",
    phrases: [
      { ar: "القائمة من فضلك", en: "The menu please", transliteration: "al-qāʾima min faḍlik", usage: "Requesting menu" },
      { ar: "ماذا تنصح؟", en: "What do you recommend?", transliteration: "mādhā tanṣaḥ?", usage: "Asking recommendation" },
      { ar: "أريد...", en: "I want/I'd like...", transliteration: "urīd...", usage: "Ordering" },
      { ar: "سآخذ...", en: "I'll take...", transliteration: "sa-ākhudh...", usage: "Ordering" },
      { ar: "بدون...", en: "Without...", transliteration: "bidūn...", usage: "Customizing order" },
      { ar: "مع...", en: "With...", transliteration: "maʿa...", usage: "Adding to order" },
      { ar: "حار", en: "Spicy/Hot", transliteration: "ḥārr", usage: "Food description" },
      { ar: "بارد", en: "Cold", transliteration: "bārid", usage: "Food description" },
      { ar: "ساخن", en: "Hot (temperature)", transliteration: "sākhin", usage: "Food temperature" },
      { ar: "طازج", en: "Fresh", transliteration: "ṭāzaj", usage: "Food quality" },
      { ar: "لذيذ", en: "Delicious", transliteration: "ladhīdh", usage: "Compliment" },
      { ar: "جائع", en: "Hungry (male)", transliteration: "jāʾiʿ", usage: "Expressing hunger" },
      { ar: "جائعة", en: "Hungry (female)", transliteration: "jāʾiʿa", usage: "Expressing hunger" },
      { ar: "عطشان", en: "Thirsty (male)", transliteration: "ʿaṭshān", usage: "Expressing thirst" },
      { ar: "عطشانة", en: "Thirsty (female)", transliteration: "ʿaṭshāna", usage: "Expressing thirst" },
      { ar: "شبعان", en: "Full (male)", transliteration: "shabʿān", usage: "After eating" },
      { ar: "شبعانة", en: "Full (female)", transliteration: "shabʿāna", usage: "After eating" },
      { ar: "الحساب من فضلك", en: "The bill please", transliteration: "al-ḥisāb min faḍlik", usage: "Requesting bill" },
      { ar: "بالهناء والشفاء", en: "Bon appétit", transliteration: "bil-hanāʾ wash-shifāʾ", usage: "Before eating" },
      { ar: "صحة وهنا", en: "To your health (reply)", transliteration: "ṣaḥḥa wa-hanā", usage: "Reply to bon appétit" }
    ]
  },

  // Directions & Location
  directions: {
    title: "🗺️ Directions & Location",
    icon: "🗺️",
    description: "Asking for and giving directions",
    phrases: [
      { ar: "أين...؟", en: "Where is...?", transliteration: "ayna...?", usage: "Asking location" },
      { ar: "كيف أذهب إلى...؟", en: "How do I go to...?", transliteration: "kayf adhhab ilā...?", usage: "Asking directions" },
      { ar: "هل هذا قريب؟", en: "Is it near?", transliteration: "hal hādhā qarīb?", usage: "Asking distance" },
      { ar: "هل هذا بعيد؟", en: "Is it far?", transliteration: "hal hādhā baʿīd?", usage: "Asking distance" },
      { ar: "يمين", en: "Right", transliteration: "yamīn", usage: "Direction" },
      { ar: "يسار", en: "Left", transliteration: "yasār", usage: "Direction" },
      { ar: "أمام", en: "In front/Straight", transliteration: "amām", usage: "Direction" },
      { ar: "خلف", en: "Behind", transliteration: "khalf", usage: "Direction" },
      { ar: "بجانب", en: "Next to", transliteration: "bi-jānib", usage: "Location" },
      { ar: "قريب من", en: "Near to", transliteration: "qarīb min", usage: "Location" },
      { ar: "بعيد عن", en: "Far from", transliteration: "baʿīd ʿan", usage: "Location" },
      { ar: "هنا", en: "Here", transliteration: "hunā", usage: "Location" },
      { ar: "هناك", en: "There", transliteration: "hunāk", usage: "Location" },
      { ar: "الشارع", en: "The street", transliteration: "ash-shāriʿ", usage: "Location type" },
      { ar: "الطريق", en: "The road/way", transliteration: "aṭ-ṭarīq", usage: "Location type" },
      { ar: "المحطة", en: "The station", transliteration: "al-maḥaṭṭa", usage: "Location type" },
      { ar: "الزاوية", en: "The corner", transliteration: "az-zāwiya", usage: "Location type" },
      { ar: "الإشارة", en: "The traffic light", transliteration: "al-ishāra", usage: "Landmark" },
      { ar: "الدوار", en: "The roundabout", transliteration: "ad-dawwār", usage: "Landmark" }
    ]
  },

  // Transportation
  transportation: {
    title: "🚕 Transportation",
    icon: "🚕",
    description: "Getting around and transport",
    phrases: [
      { ar: "تاكسي", en: "Taxi", transliteration: "tāksī", usage: "Transport type" },
      { ar: "باص", en: "Bus", transliteration: "bāṣ", usage: "Transport type" },
      { ar: "قطار", en: "Train", transliteration: "qiṭār", usage: "Transport type" },
      { ar: "مترو", en: "Metro/Subway", transliteration: "mitrū", usage: "Transport type" },
      { ar: "سيارة", en: "Car", transliteration: "sayyāra", usage: "Transport type" },
      { ar: "إلى المطار من فضلك", en: "To the airport please", transliteration: "ilā l-maṭār min faḍlik", usage: "Giving destination" },
      { ar: "كم الأجرة؟", en: "How much is the fare?", transliteration: "kam al-ujra?", usage: "Asking price" },
      { ar: "توقف هنا", en: "Stop here", transliteration: "tawaqqaf hunā", usage: "Requesting stop" },
      { ar: "انتظر من فضلك", en: "Wait please", transliteration: "intaẓir min faḍlik", usage: "Asking to wait" },
      { ar: "بسرعة", en: "Quickly", transliteration: "bi-surʿa", usage: "Speed request" },
      { ar: "ببطء", en: "Slowly", transliteration: "bi-buṭʾ", usage: "Speed request" },
      { ar: "متى يصل؟", en: "When does it arrive?", transliteration: "matā yaṣil?", usage: "Asking arrival time" },
      { ar: "متى يغادر؟", en: "When does it leave?", transliteration: "matā yughādir?", usage: "Asking departure" },
      { ar: "أين المحطة؟", en: "Where is the station?", transliteration: "ayna l-maḥaṭṭa?", usage: "Finding station" },
      { ar: "تذكرة", en: "Ticket", transliteration: "tadhkira", usage: "Transport document" },
      { ar: "ذهاب فقط", en: "One way", transliteration: "dhahāb faqaṭ", usage: "Ticket type" },
      { ar: "ذهاب وعودة", en: "Round trip", transliteration: "dhahāb wa-ʿawda", usage: "Ticket type" }
    ]
  },

  // Time & Schedule
  time: {
    title: "⏰ Time & Schedule",
    icon: "⏰",
    description: "Talking about time and schedules",
    phrases: [
      { ar: "كم الساعة؟", en: "What time is it?", transliteration: "kam as-sāʿa?", usage: "Asking time" },
      { ar: "الساعة...", en: "It's ... o'clock", transliteration: "as-sāʿa...", usage: "Telling time" },
      { ar: "متى؟", en: "When?", transliteration: "matā?", usage: "Asking when" },
      { ar: "الآن", en: "Now", transliteration: "al-ān", usage: "Time reference" },
      { ar: "بعد قليل", en: "In a little while", transliteration: "baʿd qalīl", usage: "Near future" },
      { ar: "لاحقاً", en: "Later", transliteration: "lāḥiqan", usage: "Future time" },
      { ar: "اليوم", en: "Today", transliteration: "al-yawm", usage: "Day reference" },
      { ar: "أمس", en: "Yesterday", transliteration: "ams", usage: "Day reference" },
      { ar: "غداً", en: "Tomorrow", transliteration: "ghadan", usage: "Day reference" },
      { ar: "هذا الأسبوع", en: "This week", transliteration: "hādhā l-usbūʿ", usage: "Week reference" },
      { ar: "الأسبوع القادم", en: "Next week", transliteration: "al-usbūʿ al-qādim", usage: "Week reference" },
      { ar: "الأسبوع الماضي", en: "Last week", transliteration: "al-usbūʿ al-māḍī", usage: "Week reference" },
      { ar: "صباحاً", en: "In the morning", transliteration: "ṣabāḥan", usage: "Time of day" },
      { ar: "ظهراً", en: "At noon", transliteration: "ẓuhran", usage: "Time of day" },
      { ar: "مساءً", en: "In the evening", transliteration: "masāʾan", usage: "Time of day" },
      { ar: "ليلاً", en: "At night", transliteration: "laylan", usage: "Time of day" },
      { ar: "كل يوم", en: "Every day", transliteration: "kull yawm", usage: "Frequency" },
      { ar: "أحياناً", en: "Sometimes", transliteration: "aḥyānan", usage: "Frequency" },
      { ar: "دائماً", en: "Always", transliteration: "dāʾiman", usage: "Frequency" },
      { ar: "أبداً", en: "Never", transliteration: "abadan", usage: "Frequency" }
    ]
  },

  // Emergency & Help
  emergency: {
    title: "🆘 Emergency & Help",
    icon: "🆘",
    description: "Important phrases for emergencies",
    phrases: [
      { ar: "ساعدني!", en: "Help me!", transliteration: "sāʿidnī!", usage: "Urgent help" },
      { ar: "النجدة!", en: "Help!/Emergency!", transliteration: "an-najda!", usage: "Emergency call" },
      { ar: "اتصل بالشرطة", en: "Call the police", transliteration: "ittaṣil bish-shurṭa", usage: "Emergency request" },
      { ar: "اتصل بالإسعاف", en: "Call an ambulance", transliteration: "ittaṣil bil-isʿāf", usage: "Medical emergency" },
      { ar: "أنا مريض", en: "I'm sick (male)", transliteration: "anā marīḍ", usage: "Health issue" },
      { ar: "أنا مريضة", en: "I'm sick (female)", transliteration: "anā marīḍa", usage: "Health issue" },
      { ar: "أحتاج طبيب", en: "I need a doctor", transliteration: "aḥtāj ṭabīb", usage: "Medical need" },
      { ar: "أين المستشفى؟", en: "Where is the hospital?", transliteration: "ayna l-mustashfā?", usage: "Finding hospital" },
      { ar: "أين الصيدلية؟", en: "Where is the pharmacy?", transliteration: "ayna ṣ-ṣaydaliyya?", usage: "Finding pharmacy" },
      { ar: "عندي ألم", en: "I have pain", transliteration: "ʿindī alam", usage: "Describing pain" },
      { ar: "هنا يؤلمني", en: "It hurts here", transliteration: "hunā yuʾlimunī", usage: "Locating pain" },
      { ar: "أنا ضائع", en: "I'm lost (male)", transliteration: "anā ḍāʾiʿ", usage: "Being lost" },
      { ar: "أنا ضائعة", en: "I'm lost (female)", transliteration: "anā ḍāʾiʿa", usage: "Being lost" },
      { ar: "سُرق مني", en: "I've been robbed", transliteration: "suriqa minnī", usage: "Crime report" },
      { ar: "فقدت...", en: "I lost...", transliteration: "faqadtu...", usage: "Lost items" },
      { ar: "جواز سفري", en: "My passport", transliteration: "jawāz safarī", usage: "Important document" },
      { ar: "هذا خطر", en: "This is dangerous", transliteration: "hādhā khaṭar", usage: "Warning" },
      { ar: "احذر!", en: "Be careful!", transliteration: "iḥdhar!", usage: "Warning" }
    ]
  },

  // Phone & Internet
  phone: {
    title: "📱 Phone & Internet",
    icon: "📱",
    description: "Communication and connectivity",
    phrases: [
      { ar: "رقم الهاتف", en: "Phone number", transliteration: "raqm al-hātif", usage: "Contact info" },
      { ar: "ما رقمك؟", en: "What's your number?", transliteration: "mā raqmuk?", usage: "Asking number" },
      { ar: "اتصل بي", en: "Call me", transliteration: "ittaṣil bī", usage: "Request call" },
      { ar: "أرسل رسالة", en: "Send a message", transliteration: "arsil risāla", usage: "Messaging" },
      { ar: "واتساب", en: "WhatsApp", transliteration: "wātsāb", usage: "App name" },
      { ar: "هل يوجد واي فاي؟", en: "Is there WiFi?", transliteration: "hal yūjad wāy fāy?", usage: "Internet access" },
      { ar: "ما كلمة السر؟", en: "What's the password?", transliteration: "mā kalimat as-sirr?", usage: "WiFi access" },
      { ar: "شحن الهاتف", en: "Phone charging", transliteration: "shaḥn al-hātif", usage: "Battery" },
      { ar: "بطاريتي ضعيفة", en: "My battery is low", transliteration: "baṭṭāriyyatī ḍaʿīfa", usage: "Battery status" },
      { ar: "لا يوجد شبكة", en: "No network/signal", transliteration: "lā yūjad shabaka", usage: "Connection issue" },
      { ar: "البريد الإلكتروني", en: "Email", transliteration: "al-barīd al-iliktrūnī", usage: "Communication" },
      { ar: "الإنترنت بطيء", en: "The internet is slow", transliteration: "al-intarnit baṭīʾ", usage: "Connection quality" },
      { ar: "أرسل لي", en: "Send me", transliteration: "arsil lī", usage: "Request" },
      { ar: "شارك معي", en: "Share with me", transliteration: "shārik maʿī", usage: "Sharing request" }
    ]
  },

  // Money & Banking
  money: {
    title: "💰 Money & Banking",
    icon: "💰",
    description: "Financial transactions and banking",
    phrases: [
      { ar: "فلوس", en: "Money", transliteration: "fulūs", usage: "General term" },
      { ar: "نقود", en: "Cash/Money", transliteration: "nuqūd", usage: "Formal term" },
      { ar: "صرف", en: "Exchange", transliteration: "ṣarf", usage: "Currency exchange" },
      { ar: "أين البنك؟", en: "Where is the bank?", transliteration: "ayna l-bank?", usage: "Finding bank" },
      { ar: "أين الصراف الآلي؟", en: "Where is the ATM?", transliteration: "ayna ṣ-ṣarrāf al-ālī?", usage: "Finding ATM" },
      { ar: "أريد أن أصرف", en: "I want to exchange", transliteration: "urīd an uṣarrif", usage: "Exchange request" },
      { ar: "دولار", en: "Dollar", transliteration: "dūlār", usage: "Currency" },
      { ar: "يورو", en: "Euro", transliteration: "yūrū", usage: "Currency" },
      { ar: "كم سعر الصرف؟", en: "What's the exchange rate?", transliteration: "kam siʿr aṣ-ṣarf?", usage: "Rate inquiry" },
      { ar: "بطاقة ائتمان", en: "Credit card", transliteration: "biṭāqat iʾtimān", usage: "Payment method" },
      { ar: "حساب بنكي", en: "Bank account", transliteration: "ḥisāb bankī", usage: "Banking" },
      { ar: "تحويل", en: "Transfer", transliteration: "taḥwīl", usage: "Money transfer" },
      { ar: "إيصال", en: "Receipt", transliteration: "īṣāl", usage: "Transaction proof" },
      { ar: "رصيد", en: "Balance", transliteration: "raṣīd", usage: "Account balance" },
      { ar: "قرض", en: "Loan", transliteration: "qarḍ", usage: "Banking service" }
    ]
  },

  // Accommodation
  accommodation: {
    title: "🏨 Accommodation",
    icon: "🏨",
    description: "Hotel and lodging phrases",
    phrases: [
      { ar: "فندق", en: "Hotel", transliteration: "funduq", usage: "Accommodation type" },
      { ar: "غرفة", en: "Room", transliteration: "ghurfa", usage: "Accommodation" },
      { ar: "حجز", en: "Reservation", transliteration: "ḥajz", usage: "Booking" },
      { ar: "عندي حجز", en: "I have a reservation", transliteration: "ʿindī ḥajz", usage: "Check-in" },
      { ar: "هل يوجد غرفة فارغة؟", en: "Is there a vacant room?", transliteration: "hal yūjad ghurfa fārigha?", usage: "Availability" },
      { ar: "كم سعر الليلة؟", en: "How much per night?", transliteration: "kam siʿr al-layla?", usage: "Price inquiry" },
      { ar: "مفتاح الغرفة", en: "Room key", transliteration: "miftāḥ al-ghurfa", usage: "Access" },
      { ar: "تكييف", en: "Air conditioning", transliteration: "takyīf", usage: "Amenity" },
      { ar: "حمام", en: "Bathroom", transliteration: "ḥammām", usage: "Facility" },
      { ar: "ماء ساخن", en: "Hot water", transliteration: "māʾ sākhin", usage: "Amenity" },
      { ar: "إفطار", en: "Breakfast", transliteration: "ifṭār", usage: "Meal" },
      { ar: "خدمة الغرف", en: "Room service", transliteration: "khidmat al-ghuraf", usage: "Service" },
      { ar: "تنظيف", en: "Cleaning", transliteration: "tanẓīf", usage: "Service" },
      { ar: "متى وقت الخروج؟", en: "When is checkout?", transliteration: "matā waqt al-khurūj?", usage: "Departure" },
      { ar: "هادئ", en: "Quiet", transliteration: "hādiʾ", usage: "Room preference" },
      { ar: "مطل على...", en: "With a view of...", transliteration: "muṭill ʿalā...", usage: "Room preference" }
    ]
  },

  // Weather & Climate
  weather: {
    title: "☀️ Weather & Climate",
    icon: "☀️",
    description: "Talking about weather",
    phrases: [
      { ar: "كيف الطقس؟", en: "How's the weather?", transliteration: "kayf aṭ-ṭaqs?", usage: "Weather inquiry" },
      { ar: "الجو حار", en: "It's hot", transliteration: "al-jaww ḥārr", usage: "Temperature" },
      { ar: "الجو بارد", en: "It's cold", transliteration: "al-jaww bārid", usage: "Temperature" },
      { ar: "الجو جميل", en: "The weather is nice", transliteration: "al-jaww jamīl", usage: "Good weather" },
      { ar: "مشمس", en: "Sunny", transliteration: "mushmis", usage: "Weather type" },
      { ar: "غائم", en: "Cloudy", transliteration: "ghāʾim", usage: "Weather type" },
      { ar: "ممطر", en: "Rainy", transliteration: "mumṭir", usage: "Weather type" },
      { ar: "عاصف", en: "Stormy", transliteration: "ʿāṣif", usage: "Weather type" },
      { ar: "رطب", en: "Humid", transliteration: "raṭib", usage: "Weather condition" },
      { ar: "جاف", en: "Dry", transliteration: "jāff", usage: "Weather condition" },
      { ar: "ثلج", en: "Snow", transliteration: "thalj", usage: "Precipitation" },
      { ar: "مطر", en: "Rain", transliteration: "maṭar", usage: "Precipitation" },
      { ar: "رياح", en: "Wind", transliteration: "riyāḥ", usage: "Weather element" },
      { ar: "عاصفة", en: "Storm", transliteration: "ʿāṣifa", usage: "Weather event" },
      { ar: "درجة الحرارة", en: "Temperature", transliteration: "darajat al-ḥarāra", usage: "Measurement" }
    ]
  },

  // Family & Relationships
  family: {
    title: "👨‍👩‍👧‍👦 Family & Relationships",
    icon: "👨‍👩‍👧‍👦",
    description: "Family members and relationships",
    phrases: [
      { ar: "عائلة", en: "Family", transliteration: "ʿāʾila", usage: "General term" },
      { ar: "أب", en: "Father", transliteration: "ab", usage: "Parent" },
      { ar: "أم", en: "Mother", transliteration: "umm", usage: "Parent" },
      { ar: "ابن", en: "Son", transliteration: "ibn", usage: "Child" },
      { ar: "ابنة", en: "Daughter", transliteration: "ibna", usage: "Child" },
      { ar: "أخ", en: "Brother", transliteration: "akh", usage: "Sibling" },
      { ar: "أخت", en: "Sister", transliteration: "ukht", usage: "Sibling" },
      { ar: "زوج", en: "Husband", transliteration: "zawj", usage: "Spouse" },
      { ar: "زوجة", en: "Wife", transliteration: "zawja", usage: "Spouse" },
      { ar: "جد", en: "Grandfather", transliteration: "jadd", usage: "Grandparent" },
      { ar: "جدة", en: "Grandmother", transliteration: "jadda", usage: "Grandparent" },
      { ar: "عم", en: "Uncle (father's side)", transliteration: "ʿamm", usage: "Extended family" },
      { ar: "خال", en: "Uncle (mother's side)", transliteration: "khāl", usage: "Extended family" },
      { ar: "عمة", en: "Aunt (father's side)", transliteration: "ʿamma", usage: "Extended family" },
      { ar: "خالة", en: "Aunt (mother's side)", transliteration: "khāla", usage: "Extended family" },
      { ar: "صديق", en: "Friend (male)", transliteration: "ṣadīq", usage: "Relationship" },
      { ar: "صديقة", en: "Friend (female)", transliteration: "ṣadīqa", usage: "Relationship" },
      { ar: "حبيبي", en: "My love/dear (to male)", transliteration: "ḥabībī", usage: "Term of endearment" },
      { ar: "حبيبتي", en: "My love/dear (to female)", transliteration: "ḥabībtī", usage: "Term of endearment" }
    ]
  },

  // Opinions & Feelings
  opinions: {
    title: "💭 Opinions & Feelings",
    icon: "💭",
    description: "Expressing opinions and emotions",
    phrases: [
      { ar: "أحب", en: "I love/like", transliteration: "uḥibb", usage: "Preference" },
      { ar: "أكره", en: "I hate/dislike", transliteration: "akrah", usage: "Dislike" },
      { ar: "أعتقد", en: "I think/believe", transliteration: "aʿtaqid", usage: "Opinion" },
      { ar: "أظن", en: "I suppose/think", transliteration: "aẓunn", usage: "Uncertainty" },
      { ar: "ربما", en: "Maybe/Perhaps", transliteration: "rubbamā", usage: "Possibility" },
      { ar: "بالتأكيد", en: "Certainly/Definitely", transliteration: "bit-taʾkīd", usage: "Certainty" },
      { ar: "ممكن", en: "Possible/Maybe", transliteration: "mumkin", usage: "Possibility" },
      { ar: "مستحيل", en: "Impossible", transliteration: "mustaḥīl", usage: "Impossibility" },
      { ar: "سعيد", en: "Happy (male)", transliteration: "saʿīd", usage: "Emotion" },
      { ar: "سعيدة", en: "Happy (female)", transliteration: "saʿīda", usage: "Emotion" },
      { ar: "حزين", en: "Sad (male)", transliteration: "ḥazīn", usage: "Emotion" },
      { ar: "حزينة", en: "Sad (female)", transliteration: "ḥazīna", usage: "Emotion" },
      { ar: "غضبان", en: "Angry (male)", transliteration: "ghaḍbān", usage: "Emotion" },
      { ar: "غضبانة", en: "Angry (female)", transliteration: "ghaḍbāna", usage: "Emotion" },
      { ar: "خائف", en: "Afraid (male)", transliteration: "khāʾif", usage: "Emotion" },
      { ar: "خائفة", en: "Afraid (female)", transliteration: "khāʾifa", usage: "Emotion" },
      { ar: "متحمس", en: "Excited (male)", transliteration: "mutaḥammis", usage: "Emotion" },
      { ar: "متحمسة", en: "Excited (female)", transliteration: "mutaḥammisa", usage: "Emotion" },
      { ar: "مرتاح", en: "Comfortable (male)", transliteration: "murtāḥ", usage: "Feeling" },
      { ar: "مرتاحة", en: "Comfortable (female)", transliteration: "murtāḥa", usage: "Feeling" }
    ]
  }
};

// Sample Conversations for Practice
const ARABIC_CONVERSATIONS = {
  // Meeting Someone New
  meeting: {
    title: "🤝 Meeting Someone New",
    icon: "🤝",
    description: "First time meeting conversation",
    dialogue: [
      { speaker: "A", ar: "السلام عليكم", en: "Peace be upon you", role: "Greeting" },
      { speaker: "B", ar: "وعليكم السلام", en: "And upon you peace", role: "Response" },
      { speaker: "A", ar: "كيف حالك؟", en: "How are you?", role: "Inquiry" },
      { speaker: "B", ar: "بخير، الحمد لله. وأنت؟", en: "I'm fine, thank God. And you?", role: "Response + Return" },
      { speaker: "A", ar: "أنا بخير أيضاً، شكراً", en: "I'm also fine, thanks", role: "Response" },
      { speaker: "A", ar: "ما اسمك؟", en: "What's your name?", role: "Question" },
      { speaker: "B", ar: "اسمي أحمد. وأنت؟", en: "My name is Ahmad. And you?", role: "Answer + Return" },
      { speaker: "A", ar: "اسمي سارة. تشرفنا", en: "My name is Sara. Nice to meet you", role: "Introduction" },
      { speaker: "B", ar: "أنا سعيد بمعرفتك", en: "I'm happy to know you", role: "Courtesy" },
      { speaker: "A", ar: "من أين أنت؟", en: "Where are you from?", role: "Question" },
      { speaker: "B", ar: "أنا من مصر. وأنتِ؟", en: "I'm from Egypt. And you?", role: "Answer + Return" },
      { speaker: "A", ar: "أنا من الأردن", en: "I'm from Jordan", role: "Answer" },
      { speaker: "B", ar: "جميل! أهلاً وسهلاً", en: "Beautiful! Welcome", role: "Response" }
    ],
    notes: "Notice the reciprocal nature of Arabic conversations - always return the question"
  },

  // At the Restaurant
  restaurant: {
    title: "🍽️ At the Restaurant",
    icon: "🍽️",
    description: "Ordering food conversation",
    dialogue: [
      { speaker: "Waiter", ar: "أهلاً وسهلاً. تفضل", en: "Welcome. Please (have a seat)", role: "Greeting" },
      { speaker: "Customer", ar: "شكراً", en: "Thank you", role: "Response" },
      { speaker: "Waiter", ar: "هل تريد القائمة؟", en: "Do you want the menu?", role: "Offer" },
      { speaker: "Customer", ar: "نعم، من فضلك", en: "Yes, please", role: "Request" },
      { speaker: "Waiter", ar: "تفضل القائمة", en: "Here's the menu", role: "Service" },
      { speaker: "Customer", ar: "شكراً. ماذا تنصح؟", en: "Thanks. What do you recommend?", role: "Question" },
      { speaker: "Waiter", ar: "الكباب لذيذ جداً اليوم", en: "The kebab is very delicious today", role: "Recommendation" },
      { speaker: "Customer", ar: "جيد. أريد الكباب", en: "Good. I want the kebab", role: "Order" },
      { speaker: "Waiter", ar: "ممتاز. وماذا تريد أن تشرب؟", en: "Excellent. And what would you like to drink?", role: "Question" },
      { speaker: "Customer", ar: "عصير برتقال، من فضلك", en: "Orange juice, please", role: "Order" },
      { speaker: "Waiter", ar: "حاضر. هل تريد شيئاً آخر؟", en: "Right away. Do you want anything else?", role: "Inquiry" },
      { speaker: "Customer", ar: "لا، شكراً. هذا كافي", en: "No, thanks. That's enough", role: "Response" },
      { speaker: "Waiter", ar: "حسناً. انتظر قليلاً", en: "Okay. Wait a little", role: "Service" },
      { speaker: "Later...", ar: "", en: "(After eating)", role: "Time pass" },
      { speaker: "Customer", ar: "الحساب من فضلك", en: "The bill please", role: "Request" },
      { speaker: "Waiter", ar: "تفضل. المجموع خمسون ريال", en: "Here you go. The total is 50 riyals", role: "Bill" },
      { speaker: "Customer", ar: "تفضل. احتفظ بالباقي", en: "Here you go. Keep the change", role: "Payment" },
      { speaker: "Waiter", ar: "شكراً جزيلاً! مع السلامة", en: "Thank you very much! Goodbye", role: "Thanks" }
    ],
    notes: "Restaurant vocabulary is essential for travelers"
  },

  // Asking for Directions
  directions: {
    title: "🗺️ Asking for Directions",
    icon: "🗺️",
    description: "Finding your way conversation",
    dialogue: [
      { speaker: "Tourist", ar: "عفواً، من فضلك", en: "Excuse me, please", role: "Getting attention" },
      { speaker: "Local", ar: "نعم، تفضل", en: "Yes, go ahead", role: "Response" },
      { speaker: "Tourist", ar: "أنا ضائع. أين المتحف؟", en: "I'm lost. Where is the museum?", role: "Question" },
      { speaker: "Local", ar: "المتحف؟ ليس بعيداً", en: "The museum? It's not far", role: "Reassurance" },
      { speaker: "Tourist", ar: "كيف أذهب إلى هناك؟", en: "How do I go there?", role: "Question" },
      { speaker: "Local", ar: "امشِ مستقيماً", en: "Walk straight", role: "Direction" },
      { speaker: "Local", ar: "ثم انعطف يميناً عند الإشارة", en: "Then turn right at the traffic light", role: "Direction" },
      { speaker: "Tourist", ar: "يميناً عند الإشارة؟", en: "Right at the traffic light?", role: "Confirmation" },
      { speaker: "Local", ar: "نعم، بعد ذلك امشِ خمس دقائق", en: "Yes, after that walk five minutes", role: "Direction" },
      { speaker: "Local", ar: "ستجد المتحف على اليسار", en: "You'll find the museum on the left", role: "Direction" },
      { speaker: "Tourist", ar: "هل هو مبنى كبير؟", en: "Is it a big building?", role: "Clarification" },
      { speaker: "Local", ar: "نعم، مبنى أبيض كبير", en: "Yes, a big white building", role: "Description" },
      { speaker: "Tourist", ar: "شكراً جزيلاً", en: "Thank you very much", role: "Thanks" },
      { speaker: "Local", ar: "عفواً. بالتوفيق", en: "You're welcome. Good luck", role: "Response" }
    ],
    notes: "Always repeat directions to confirm understanding"
  },

  // Shopping at the Market
  shopping: {
    title: "🛒 Shopping at the Market",
    icon: "🛒",
    description: "Buying items conversation",
    dialogue: [
      { speaker: "Vendor", ar: "أهلاً! تفضل", en: "Hello! Welcome", role: "Greeting" },
      { speaker: "Customer", ar: "أهلاً. عندك تفاح؟", en: "Hello. Do you have apples?", role: "Inquiry" },
      { speaker: "Vendor", ar: "نعم، عندي تفاح طازج", en: "Yes, I have fresh apples", role: "Confirmation" },
      { speaker: "Customer", ar: "بكم الكيلو؟", en: "How much per kilo?", role: "Price inquiry" },
      { speaker: "Vendor", ar: "الكيلو بعشرة جنيه", en: "A kilo for 10 pounds", role: "Price" },
      { speaker: "Customer", ar: "غالي شوية", en: "A bit expensive", role: "Negotiation" },
      { speaker: "Vendor", ar: "هذا أحسن سعر. التفاح ممتاز", en: "This is the best price. The apples are excellent", role: "Defense" },
      { speaker: "Customer", ar: "طيب، أعطني كيلو", en: "Okay, give me a kilo", role: "Purchase" },
      { speaker: "Vendor", ar: "تفضل. تريد شيئاً آخر؟", en: "Here you go. Do you want anything else?", role: "Upsell" },
      { speaker: "Customer", ar: "نعم، نصف كيلو موز", en: "Yes, half a kilo of bananas", role: "Additional order" },
      { speaker: "Vendor", ar: "حاضر. هذا خمسة جنيه", en: "Right away. That's 5 pounds", role: "Price" },
      { speaker: "Customer", ar: "المجموع كم؟", en: "What's the total?", role: "Total inquiry" },
      { speaker: "Vendor", ar: "خمسة عشر جنيه", en: "Fifteen pounds", role: "Total" },
      { speaker: "Customer", ar: "تفضل عشرين", en: "Here's twenty", role: "Payment" },
      { speaker: "Vendor", ar: "والباقي خمسة. شكراً", en: "And five change. Thanks", role: "Change" },
      { speaker: "Customer", ar: "شكراً. مع السلامة", en: "Thanks. Goodbye", role: "Farewell" }
    ],
    notes: "Bargaining is common in traditional markets"
  },

  // Taking a Taxi
  taxi: {
    title: "🚕 Taking a Taxi",
    icon: "🚕",
    description: "Taxi ride conversation",
    dialogue: [
      { speaker: "Passenger", ar: "تاكسي! تاكسي!", en: "Taxi! Taxi!", role: "Hailing" },
      { speaker: "Driver", ar: "تفضل. إلى أين؟", en: "Get in. Where to?", role: "Question" },
      { speaker: "Passenger", ar: "إلى المطار، من فضلك", en: "To the airport, please", role: "Destination" },
      { speaker: "Driver", ar: "المطار بعيد", en: "The airport is far", role: "Information" },
      { speaker: "Passenger", ar: "كم الأجرة؟", en: "How much is the fare?", role: "Price inquiry" },
      { speaker: "Driver", ar: "خمسين ريال", en: "Fifty riyals", role: "Price" },
      { speaker: "Passenger", ar: "كثير! أربعين؟", en: "Too much! Forty?", role: "Negotiation" },
      { speaker: "Driver", ar: "لا، خمسة وأربعين آخر سعر", en: "No, forty-five final price", role: "Counter offer" },
      { speaker: "Passenger", ar: "حسناً. يلا نذهب", en: "Okay. Let's go", role: "Agreement" },
      { speaker: "During ride...", ar: "", en: "", role: "Time pass" },
      { speaker: "Passenger", ar: "كم باقي للمطار؟", en: "How much left to the airport?", role: "Time inquiry" },
      { speaker: "Driver", ar: "عشر دقائق تقريباً", en: "About ten minutes", role: "Time estimate" },
      { speaker: "Passenger", ar: "من فضلك، بسرعة. عندي طائرة", en: "Please, quickly. I have a flight", role: "Request" },
      { speaker: "Driver", ar: "إن شاء الله نصل بسرعة", en: "God willing we'll arrive quickly", role: "Assurance" },
      { speaker: "At arrival...", ar: "", en: "", role: "Arrival" },
      { speaker: "Driver", ar: "وصلنا. المطار", en: "We've arrived. The airport", role: "Announcement" },
      { speaker: "Passenger", ar: "تفضل الفلوس. شكراً", en: "Here's the money. Thanks", role: "Payment" },
      { speaker: "Driver", ar: "عفواً. رحلة سعيدة", en: "You're welcome. Have a good trip", role: "Farewell" }
    ],
    notes: "Always agree on price before starting the journey"
  },

  // At the Hotel
  hotel: {
    title: "🏨 At the Hotel",
    icon: "🏨",
    description: "Hotel check-in conversation",
    dialogue: [
      { speaker: "Guest", ar: "مساء الخير", en: "Good evening", role: "Greeting" },
      { speaker: "Receptionist", ar: "مساء النور. أهلاً وسهلاً", en: "Good evening. Welcome", role: "Response" },
      { speaker: "Guest", ar: "عندي حجز", en: "I have a reservation", role: "Information" },
      { speaker: "Receptionist", ar: "باسم من؟", en: "Under what name?", role: "Question" },
      { speaker: "Guest", ar: "باسم محمد علي", en: "Under Mohammed Ali", role: "Answer" },
      { speaker: "Receptionist", ar: "لحظة من فضلك... نعم، موجود", en: "One moment please... Yes, found it", role: "Confirmation" },
      { speaker: "Receptionist", ar: "غرفة مفردة لثلاث ليالي؟", en: "Single room for three nights?", role: "Verification" },
      { speaker: "Guest", ar: "نعم، صحيح", en: "Yes, correct", role: "Confirmation" },
      { speaker: "Receptionist", ar: "جواز السفر، من فضلك", en: "Passport, please", role: "Request" },
      { speaker: "Guest", ar: "تفضل", en: "Here you go", role: "Compliance" },
      { speaker: "Receptionist", ar: "شكراً. غرفتك رقم ٢٠٥", en: "Thanks. Your room is number 205", role: "Information" },
      { speaker: "Guest", ar: "في أي طابق؟", en: "On which floor?", role: "Question" },
      { speaker: "Receptionist", ar: "الطابق الثاني. هذا المفتاح", en: "Second floor. Here's the key", role: "Information" },
      { speaker: "Guest", ar: "هل الإفطار مشمول؟", en: "Is breakfast included?", role: "Question" },
      { speaker: "Receptionist", ar: "نعم، من السابعة إلى العاشرة", en: "Yes, from seven to ten", role: "Information" },
      { speaker: "Guest", ar: "ممتاز. شكراً", en: "Excellent. Thanks", role: "Response" },
      { speaker: "Receptionist", ar: "عفواً. إقامة سعيدة", en: "You're welcome. Have a pleasant stay", role: "Courtesy" }
    ],
    notes: "Hotels often require passport for check-in"
  },

  // Phone Conversation
  phone: {
    title: "📞 Phone Conversation",
    icon: "📞",
    description: "Making a phone call",
    dialogue: [
      { speaker: "Caller", ar: "ألو", en: "Hello", role: "Answering" },
      { speaker: "Receiver", ar: "ألو، مرحباً", en: "Hello, hi", role: "Response" },
      { speaker: "Caller", ar: "هل أحمد موجود؟", en: "Is Ahmad there?", role: "Question" },
      { speaker: "Receiver", ar: "من معي؟", en: "Who's speaking?", role: "Identification" },
      { speaker: "Caller", ar: "أنا صديقه سامي", en: "I'm his friend Sami", role: "Introduction" },
      { speaker: "Receiver", ar: "لحظة من فضلك", en: "One moment please", role: "Request to wait" },
      { speaker: "Ahmad", ar: "ألو، سامي؟", en: "Hello, Sami?", role: "New speaker" },
      { speaker: "Caller", ar: "أهلاً أحمد. كيف حالك؟", en: "Hi Ahmad. How are you?", role: "Greeting" },
      { speaker: "Ahmad", ar: "الحمد لله. وأنت؟", en: "Thank God. And you?", role: "Response" },
      { speaker: "Caller", ar: "بخير. عندك وقت غداً؟", en: "I'm fine. Do you have time tomorrow?", role: "Question" },
      { speaker: "Ahmad", ar: "غداً؟ نعم، لماذا؟", en: "Tomorrow? Yes, why?", role: "Response" },
      { speaker: "Caller", ar: "نلتقي في المقهى؟", en: "Shall we meet at the café?", role: "Suggestion" },
      { speaker: "Ahmad", ar: "فكرة جيدة. أي ساعة؟", en: "Good idea. What time?", role: "Agreement" },
      { speaker: "Caller", ar: "الساعة خمسة مساءً؟", en: "At 5 PM?", role: "Time suggestion" },
      { speaker: "Ahmad", ar: "ممتاز. إلى اللقاء", en: "Excellent. See you", role: "Confirmation" },
      { speaker: "Caller", ar: "إلى اللقاء", en: "See you", role: "Farewell" }
    ],
    notes: "Phone etiquette is important in Arabic culture"
  },

  // At the Doctor
  doctor: {
    title: "👨‍⚕️ At the Doctor",
    icon: "👨‍⚕️",
    description: "Medical consultation conversation",
    dialogue: [
      { speaker: "Doctor", ar: "تفضل، اجلس", en: "Please, sit down", role: "Welcome" },
      { speaker: "Patient", ar: "شكراً دكتور", en: "Thank you, doctor", role: "Response" },
      { speaker: "Doctor", ar: "ما المشكلة؟", en: "What's the problem?", role: "Inquiry" },
      { speaker: "Patient", ar: "عندي صداع شديد", en: "I have a severe headache", role: "Complaint" },
      { speaker: "Doctor", ar: "منذ متى؟", en: "Since when?", role: "Question" },
      { speaker: "Patient", ar: "منذ ثلاثة أيام", en: "For three days", role: "Duration" },
      { speaker: "Doctor", ar: "هل عندك حرارة؟", en: "Do you have a fever?", role: "Symptom check" },
      { speaker: "Patient", ar: "نعم، قليلاً", en: "Yes, a little", role: "Confirmation" },
      { speaker: "Doctor", ar: "أين يؤلمك بالضبط؟", en: "Where exactly does it hurt?", role: "Location" },
      { speaker: "Patient", ar: "هنا، في الجبهة", en: "Here, in the forehead", role: "Pointing" },
      { speaker: "Doctor", ar: "حسناً. سأفحصك", en: "Okay. I'll examine you", role: "Action" },
      { speaker: "After examination...", ar: "", en: "", role: "Time pass" },
      { speaker: "Doctor", ar: "عندك التهاب بسيط", en: "You have a minor infection", role: "Diagnosis" },
      { speaker: "Patient", ar: "هل هو خطير؟", en: "Is it serious?", role: "Concern" },
      { speaker: "Doctor", ar: "لا، لا تقلق", en: "No, don't worry", role: "Reassurance" },
      { speaker: "Doctor", ar: "سأكتب لك دواء", en: "I'll prescribe medicine for you", role: "Treatment" },
      { speaker: "Patient", ar: "كم مرة آخذه؟", en: "How many times do I take it?", role: "Dosage inquiry" },
      { speaker: "Doctor", ar: "ثلاث مرات يومياً بعد الأكل", en: "Three times daily after meals", role: "Instructions" },
      { speaker: "Patient", ar: "شكراً جزيلاً دكتور", en: "Thank you very much, doctor", role: "Gratitude" }
    ],
    notes: "Medical vocabulary is crucial for emergencies"
  },

  // Making Friends
  friends: {
    title: "👥 Making Friends",
    icon: "👥",
    description: "Casual friendly conversation",
    dialogue: [
      { speaker: "A", ar: "مرحباً! أنت طالب هنا؟", en: "Hi! Are you a student here?", role: "Opening" },
      { speaker: "B", ar: "نعم، أنا طالب جديد", en: "Yes, I'm a new student", role: "Response" },
      { speaker: "A", ar: "أهلاً وسهلاً! أنا أيضاً طالب", en: "Welcome! I'm also a student", role: "Connection" },
      { speaker: "B", ar: "ما تخصصك؟", en: "What's your major?", role: "Question" },
      { speaker: "A", ar: "أدرس الهندسة. وأنت؟", en: "I study engineering. And you?", role: "Answer + Return" },
      { speaker: "B", ar: "أدرس الطب", en: "I study medicine", role: "Answer" },
      { speaker: "A", ar: "ممتاز! صعب جداً", en: "Excellent! Very difficult", role: "Comment" },
      { speaker: "B", ar: "نعم، لكن ممتع", en: "Yes, but interesting", role: "Agreement" },
      { speaker: "A", ar: "من أي بلد أنت؟", en: "Which country are you from?", role: "Question" },
      { speaker: "B", ar: "من تونس. وأنت؟", en: "From Tunisia. And you?", role: "Answer + Return" },
      { speaker: "A", ar: "من السعودية", en: "From Saudi Arabia", role: "Answer" },
      { speaker: "B", ar: "جميل! أول مرة هنا؟", en: "Nice! First time here?", role: "Question" },
      { speaker: "A", ar: "لا، أنا في السنة الثانية", en: "No, I'm in second year", role: "Information" },
      { speaker: "B", ar: "ممكن تساعدني؟", en: "Can you help me?", role: "Request" },
      { speaker: "A", ar: "طبعاً! بكل سرور", en: "Of course! With pleasure", role: "Offer" },
      { speaker: "B", ar: "شكراً! نتبادل الأرقام؟", en: "Thanks! Shall we exchange numbers?", role: "Suggestion" },
      { speaker: "A", ar: "فكرة ممتازة!", en: "Excellent idea!", role: "Agreement" }
    ],
    notes: "Making friends helps with language practice"
  },

  // Daily Routine
  daily: {
    title: "☀️ Daily Routine",
    icon: "☀️",
    description: "Talking about daily activities",
    dialogue: [
      { speaker: "A", ar: "متى تستيقظ عادة؟", en: "When do you usually wake up?", role: "Question" },
      { speaker: "B", ar: "أستيقظ الساعة السابعة", en: "I wake up at seven o'clock", role: "Answer" },
      { speaker: "A", ar: "مبكر! وماذا تفعل؟", en: "Early! And what do you do?", role: "Comment + Question" },
      { speaker: "B", ar: "أصلي ثم أفطر", en: "I pray then have breakfast", role: "Routine" },
      { speaker: "A", ar: "ماذا تأكل في الإفطار؟", en: "What do you eat for breakfast?", role: "Question" },
      { speaker: "B", ar: "خبز وجبنة وشاي", en: "Bread, cheese, and tea", role: "Answer" },
      { speaker: "A", ar: "ومتى تذهب للعمل؟", en: "And when do you go to work?", role: "Question" },
      { speaker: "B", ar: "الساعة الثامنة والنصف", en: "At eight thirty", role: "Time" },
      { speaker: "A", ar: "كيف تذهب؟ بالسيارة؟", en: "How do you go? By car?", role: "Question" },
      { speaker: "B", ar: "لا، بالباص", en: "No, by bus", role: "Answer" },
      { speaker: "A", ar: "كم يستغرق؟", en: "How long does it take?", role: "Duration inquiry" },
      { speaker: "B", ar: "نصف ساعة تقريباً", en: "About half an hour", role: "Duration" },
      { speaker: "A", ar: "ومتى ترجع للبيت؟", en: "And when do you return home?", role: "Question" },
      { speaker: "B", ar: "الساعة الخامسة مساءً", en: "At five PM", role: "Time" },
      { speaker: "A", ar: "وماذا تفعل بالمساء؟", en: "And what do you do in the evening?", role: "Question" },
      { speaker: "B", ar: "أشاهد التلفاز أو أقرأ", en: "I watch TV or read", role: "Activities" },
      { speaker: "A", ar: "ومتى تنام؟", en: "And when do you sleep?", role: "Question" },
      { speaker: "B", ar: "حوالي الحادية عشرة", en: "Around eleven", role: "Bedtime" }
    ],
    notes: "Daily routine vocabulary is essential for conversation"
  }
};

// Helper function to get random phrases for practice
function getRandomPhrases(category, count = 5) {
  const phrases = DAILY_PHRASES[category].phrases;
  const shuffled = [...phrases].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Helper function to get conversation by topic
function getConversation(topic) {
  return ARABIC_CONVERSATIONS[topic] || null;
}

// Export for use in main app
window.DAILY_PHRASES = DAILY_PHRASES;
window.ARABIC_CONVERSATIONS = ARABIC_CONVERSATIONS;
window.getRandomPhrases = getRandomPhrases;
window.getConversation = getConversation;