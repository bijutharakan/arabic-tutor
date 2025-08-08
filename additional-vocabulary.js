// Additional Vocabulary Categories
// Senses, Health, Directions, Quantities, and more practical categories

const ADDITIONAL_VOCABULARY = [
  // The Five Senses & Perception
  {
    key: "senses-perception",
    name: "Senses & Perception",
    icon: "👁️",
    words: [
      // The Five Senses
      { en: "sight", ar: "بَصَر", harakat: "بَصَر", pic: "👁️" },
      { en: "hearing", ar: "سَمْع", harakat: "سَمْع", pic: "👂" },
      { en: "smell", ar: "شَمّ", harakat: "شَمّ", pic: "👃" },
      { en: "taste", ar: "ذَوْق", harakat: "ذَوْق", pic: "👅" },
      { en: "touch", ar: "لَمْس", harakat: "لَمْس", pic: "🤚" },
      
      // Sight Related
      { en: "to see", ar: "يَرَى", harakat: "يَرَى", pic: "👀" },
      { en: "to look", ar: "يَنْظُر", harakat: "يَنْظُر", pic: "👁️" },
      { en: "to watch", ar: "يُشَاهِد", harakat: "يُشَاهِد", pic: "📺" },
      { en: "to observe", ar: "يُرَاقِب", harakat: "يُرَاقِب", pic: "🔍" },
      { en: "vision", ar: "رُؤْيَة", harakat: "رُؤْيَة", pic: "👁️" },
      { en: "blind", ar: "أَعْمَى", harakat: "أَعْمَى", pic: "🦯" },
      { en: "glasses", ar: "نَظَّارَة", harakat: "نَظَّارَة", pic: "👓" },
      { en: "light", ar: "ضَوْء", harakat: "ضَوْء", pic: "💡" },
      { en: "dark", ar: "ظَلَام", harakat: "ظَلَام", pic: "🌑" },
      { en: "bright", ar: "مُشْرِق", harakat: "مُشْرِق", pic: "☀️" },
      { en: "dim", ar: "خَافِت", harakat: "خَافِت", pic: "🔅" },
      { en: "clear", ar: "وَاضِح", harakat: "وَاضِح", pic: "✨" },
      { en: "blurry", ar: "ضَبَابِي", harakat: "ضَبَابِي", pic: "🌫️" },
      
      // Hearing Related
      { en: "to hear", ar: "يَسْمَع", harakat: "يَسْمَع", pic: "👂" },
      { en: "to listen", ar: "يَسْتَمِع", harakat: "يَسْتَمِع", pic: "🎧" },
      { en: "sound", ar: "صَوْت", harakat: "صَوْت", pic: "🔊" },
      { en: "noise", ar: "ضَوْضَاء", harakat: "ضَوْضَاء", pic: "📢" },
      { en: "loud", ar: "عَالِي", harakat: "عَالِي", pic: "🔊" },
      { en: "quiet", ar: "هَادِئ", harakat: "هَادِئ", pic: "🔇" },
      { en: "silent", ar: "صَامِت", harakat: "صَامِت", pic: "🤫" },
      { en: "deaf", ar: "أَصَمّ", harakat: "أَصَمّ", pic: "🦻" },
      { en: "echo", ar: "صَدَى", harakat: "صَدَى", pic: "🔉" },
      { en: "whisper", ar: "هَمْس", harakat: "هَمْس", pic: "🤫" },
      { en: "shout", ar: "صُرَاخ", harakat: "صُرَاخ", pic: "📣" },
      { en: "music", ar: "مُوسِيقَى", harakat: "مُوسِيقَى", pic: "🎵" },
      
      // Smell Related
      { en: "to smell", ar: "يَشُمّ", harakat: "يَشُمّ", pic: "👃" },
      { en: "odor", ar: "رَائِحَة", harakat: "رَائِحَة", pic: "👃" },
      { en: "fragrance", ar: "عِطْر", harakat: "عِطْر", pic: "🌸" },
      { en: "perfume", ar: "بَرْفَان", harakat: "بَرْفَان", pic: "🍶" },
      { en: "stink", ar: "نَتَانَة", harakat: "نَتَانَة", pic: "🦨" },
      { en: "fresh", ar: "طَازَج", harakat: "طَازَج", pic: "🌿" },
      { en: "aromatic", ar: "عَطِر", harakat: "عَطِر", pic: "🌺" },
      { en: "scentless", ar: "بِلَا رَائِحَة", harakat: "بِلَا رَائِحَة", pic: "⭕" },
      
      // Taste Related
      { en: "to taste", ar: "يَذُوق", harakat: "يَذُوق", pic: "👅" },
      { en: "flavor", ar: "نَكْهَة", harakat: "نَكْهَة", pic: "🍽️" },
      { en: "sweet", ar: "حُلْو", harakat: "حُلْو", pic: "🍬" },
      { en: "sour", ar: "حَامِض", harakat: "حَامِض", pic: "🍋" },
      { en: "salty", ar: "مَالِح", harakat: "مَالِح", pic: "🧂" },
      { en: "bitter", ar: "مُرّ", harakat: "مُرّ", pic: "🫖" },
      { en: "spicy", ar: "حَارّ", harakat: "حَارّ", pic: "🌶️" },
      { en: "bland", ar: "بِلَا طَعْم", harakat: "بِلَا طَعْم", pic: "🥔" },
      { en: "delicious", ar: "لَذِيذ", harakat: "لَذِيذ", pic: "😋" },
      { en: "disgusting", ar: "مُقْرِف", harakat: "مُقْرِف", pic: "🤢" },
      
      // Touch Related
      { en: "to touch", ar: "يَلْمِس", harakat: "يَلْمِس", pic: "👆" },
      { en: "to feel", ar: "يَشْعُر", harakat: "يَشْعُر", pic: "🤲" },
      { en: "soft", ar: "نَاعِم", harakat: "نَاعِم", pic: "🧸" },
      { en: "hard", ar: "صَلْب", harakat: "صَلْب", pic: "🪨" },
      { en: "rough", ar: "خَشِن", harakat: "خَشِن", pic: "🪵" },
      { en: "smooth", ar: "أَمْلَس", harakat: "أَمْلَس", pic: "🎱" },
      { en: "hot", ar: "سَاخِن", harakat: "سَاخِن", pic: "🔥" },
      { en: "cold", ar: "بَارِد", harakat: "بَارِد", pic: "🧊" },
      { en: "warm", ar: "دَافِئ", harakat: "دَافِئ", pic: "☀️" },
      { en: "cool", ar: "بَارِد", harakat: "بَارِد", pic: "❄️" },
      { en: "wet", ar: "مُبَلَّل", harakat: "مُبَلَّل", pic: "💧" },
      { en: "dry", ar: "جَافّ", harakat: "جَافّ", pic: "🏜️" },
      { en: "sticky", ar: "لَزِج", harakat: "لَزِج", pic: "🍯" },
      { en: "slippery", ar: "زَلِق", harakat: "زَلِق", pic: "🧊" },
      { en: "sharp", ar: "حَادّ", harakat: "حَادّ", pic: "🔪" },
      { en: "dull", ar: "كَلِيل", harakat: "كَلِيل", pic: "🥄" },
      
      // General Perception
      { en: "to sense", ar: "يُحِسّ", harakat: "يُحِسّ", pic: "🎯" },
      { en: "to perceive", ar: "يُدْرِك", harakat: "يُدْرِك", pic: "🧠" },
      { en: "sensation", ar: "إِحْسَاس", harakat: "إِحْسَاس", pic: "✨" },
      { en: "feeling", ar: "شُعُور", harakat: "شُعُور", pic: "💭" },
      { en: "awareness", ar: "وَعْي", harakat: "وَعْي", pic: "🧘" },
      { en: "sensitive", ar: "حَسَّاس", harakat: "حَسَّاس", pic: "🌡️" },
      { en: "numb", ar: "خَدِر", harakat: "خَدِر", pic: "😶" }
    ]
  },

  // Health & Medical
  {
    key: "health-medical",
    name: "Health & Medical",
    icon: "🏥",
    words: [
      // General Health
      { en: "health", ar: "صِحَّة", harakat: "صِحَّة", pic: "❤️" },
      { en: "healthy", ar: "صِحِّي", harakat: "صِحِّي", pic: "💚" },
      { en: "sick", ar: "مَرِيض", harakat: "مَرِيض", pic: "🤒" },
      { en: "illness", ar: "مَرَض", harakat: "مَرَض", pic: "🦠" },
      { en: "disease", ar: "دَاء", harakat: "دَاء", pic: "🦠" },
      { en: "cure", ar: "عِلَاج", harakat: "عِلَاج", pic: "💊" },
      { en: "treatment", ar: "مُعَالَجَة", harakat: "مُعَالَجَة", pic: "🏥" },
      { en: "recovery", ar: "شِفَاء", harakat: "شِفَاء", pic: "💚" },
      
      // Symptoms
      { en: "pain", ar: "أَلَم", harakat: "أَلَم", pic: "😣" },
      { en: "ache", ar: "وَجَع", harakat: "وَجَع", pic: "😫" },
      { en: "fever", ar: "حُمَّى", harakat: "حُمَّى", pic: "🤒" },
      { en: "cough", ar: "سُعَال", harakat: "سُعَال", pic: "🤧" },
      { en: "sneeze", ar: "عُطَاس", harakat: "عُطَاس", pic: "🤧" },
      { en: "headache", ar: "صُدَاع", harakat: "صُدَاع", pic: "🤕" },
      { en: "stomachache", ar: "أَلَم البَطْن", harakat: "أَلَم البَطْن", pic: "🤢" },
      { en: "toothache", ar: "أَلَم الأَسْنَان", harakat: "أَلَم الأَسْنَان", pic: "🦷" },
      { en: "sore throat", ar: "أَلَم الحَلْق", harakat: "أَلَم الحَلْق", pic: "😷" },
      { en: "dizzy", ar: "دُوَار", harakat: "دُوَار", pic: "😵" },
      { en: "nausea", ar: "غَثَيَان", harakat: "غَثَيَان", pic: "🤢" },
      { en: "tired", ar: "تَعَب", harakat: "تَعَب", pic: "😴" },
      { en: "weak", ar: "ضَعِيف", harakat: "ضَعِيف", pic: "😔" },
      { en: "allergy", ar: "حَسَاسِيَّة", harakat: "حَسَاسِيَّة", pic: "🤧" },
      { en: "infection", ar: "عَدْوَى", harakat: "عَدْوَى", pic: "🦠" },
      { en: "wound", ar: "جُرْح", harakat: "جُرْح", pic: "🩹" },
      { en: "bruise", ar: "كَدْمَة", harakat: "كَدْمَة", pic: "🟣" },
      { en: "burn", ar: "حَرْق", harakat: "حَرْق", pic: "🔥" },
      { en: "broken", ar: "مَكْسُور", harakat: "مَكْسُور", pic: "🦴" },
      { en: "swollen", ar: "مُتَوَرِّم", harakat: "مُتَوَرِّم", pic: "🎈" },
      
      // Medical Items
      { en: "medicine", ar: "دَوَاء", harakat: "دَوَاء", pic: "💊" },
      { en: "pill", ar: "حَبَّة", harakat: "حَبَّة", pic: "💊" },
      { en: "injection", ar: "حُقْنَة", harakat: "حُقْنَة", pic: "💉" },
      { en: "vaccine", ar: "لُقَاح", harakat: "لُقَاح", pic: "💉" },
      { en: "bandage", ar: "ضِمَادَة", harakat: "ضِمَادَة", pic: "🩹" },
      { en: "thermometer", ar: "مِيزَان حَرَارَة", harakat: "مِيزَان حَرَارَة", pic: "🌡️" },
      { en: "stethoscope", ar: "سَمَّاعَة طَبِيب", harakat: "سَمَّاعَة طَبِيب", pic: "🩺" },
      { en: "wheelchair", ar: "كُرْسِي مُتَحَرِّك", harakat: "كُرْسِي مُتَحَرِّك", pic: "🦽" },
      { en: "crutches", ar: "عُكَّاز", harakat: "عُكَّاز", pic: "🩼" },
      { en: "ambulance", ar: "سَيَّارَة إِسْعَاف", harakat: "سَيَّارَة إِسْعَاف", pic: "🚑" },
      
      // Medical Places & People
      { en: "hospital", ar: "مُسْتَشْفَى", harakat: "مُسْتَشْفَى", pic: "🏥" },
      { en: "clinic", ar: "عِيَادَة", harakat: "عِيَادَة", pic: "🏥" },
      { en: "pharmacy", ar: "صَيْدَلِيَّة", harakat: "صَيْدَلِيَّة", pic: "💊" },
      { en: "emergency", ar: "طَوَارِئ", harakat: "طَوَارِئ", pic: "🚨" },
      { en: "doctor", ar: "طَبِيب", harakat: "طَبِيب", pic: "👨‍⚕️" },
      { en: "nurse", ar: "مُمَرِّضَة", harakat: "مُمَرِّضَة", pic: "👩‍⚕️" },
      { en: "dentist", ar: "طَبِيب أَسْنَان", harakat: "طَبِيب أَسْنَان", pic: "🦷" },
      { en: "surgeon", ar: "جَرَّاح", harakat: "جَرَّاح", pic: "👨‍⚕️" },
      { en: "patient", ar: "مَرِيض", harakat: "مَرِيض", pic: "🤒" },
      
      // Actions
      { en: "to examine", ar: "يَفْحَص", harakat: "يَفْحَص", pic: "🔍" },
      { en: "to heal", ar: "يَشْفِي", harakat: "يَشْفِي", pic: "💚" },
      { en: "to rest", ar: "يَرْتَاح", harakat: "يَرْتَاح", pic: "😴" },
      { en: "to recover", ar: "يَتَعَافَى", harakat: "يَتَعَافَى", pic: "💪" }
    ]
  },

  // Directions & Position
  {
    key: "directions-position",
    name: "Directions & Position",
    icon: "🧭",
    words: [
      // Cardinal Directions
      { en: "north", ar: "شَمَال", harakat: "شَمَال", pic: "⬆️" },
      { en: "south", ar: "جَنُوب", harakat: "جَنُوب", pic: "⬇️" },
      { en: "east", ar: "شَرْق", harakat: "شَرْق", pic: "➡️" },
      { en: "west", ar: "غَرْب", harakat: "غَرْب", pic: "⬅️" },
      { en: "northeast", ar: "شَمَال شَرْق", harakat: "شَمَال شَرْق", pic: "↗️" },
      { en: "northwest", ar: "شَمَال غَرْب", harakat: "شَمَال غَرْب", pic: "↖️" },
      { en: "southeast", ar: "جَنُوب شَرْق", harakat: "جَنُوب شَرْق", pic: "↘️" },
      { en: "southwest", ar: "جَنُوب غَرْب", harakat: "جَنُوب غَرْب", pic: "↙️" },
      
      // Basic Directions
      { en: "right", ar: "يَمِين", harakat: "يَمِين", pic: "👉" },
      { en: "left", ar: "يَسَار", harakat: "يَسَار", pic: "👈" },
      { en: "up", ar: "فَوْق", harakat: "فَوْق", pic: "👆" },
      { en: "down", ar: "تَحْت", harakat: "تَحْت", pic: "👇" },
      { en: "forward", ar: "أَمَام", harakat: "أَمَام", pic: "⏩" },
      { en: "backward", ar: "خَلْف", harakat: "خَلْف", pic: "⏪" },
      { en: "straight", ar: "مُسْتَقِيم", harakat: "مُسْتَقِيم", pic: "➡️" },
      { en: "turn", ar: "دَوْر", harakat: "دَوْر", pic: "↪️" },
      
      // Positions
      { en: "here", ar: "هُنَا", harakat: "هُنَا", pic: "📍" },
      { en: "there", ar: "هُنَاك", harakat: "هُنَاك", pic: "👉" },
      { en: "everywhere", ar: "فِي كُلّ مَكَان", harakat: "فِي كُلّ مَكَان", pic: "🌍" },
      { en: "nowhere", ar: "لَا مَكَان", harakat: "لَا مَكَان", pic: "❌" },
      { en: "somewhere", ar: "فِي مَكَان مَا", harakat: "فِي مَكَان مَا", pic: "❓" },
      { en: "inside", ar: "دَاخِل", harakat: "دَاخِل", pic: "📦" },
      { en: "outside", ar: "خَارِج", harakat: "خَارِج", pic: "🌳" },
      { en: "above", ar: "فَوْق", harakat: "فَوْق", pic: "☝️" },
      { en: "below", ar: "تَحْت", harakat: "تَحْت", pic: "👇" },
      { en: "beside", ar: "بِجَانِب", harakat: "بِجَانِب", pic: "↔️" },
      { en: "between", ar: "بَيْن", harakat: "بَيْن", pic: "🔀" },
      { en: "behind", ar: "وَرَاء", harakat: "وَرَاء", pic: "👤" },
      { en: "in front of", ar: "أَمَام", harakat: "أَمَام", pic: "🎭" },
      { en: "next to", ar: "بِجَانِب", harakat: "بِجَانِب", pic: "👥" },
      { en: "opposite", ar: "مُقَابِل", harakat: "مُقَابِل", pic: "🔄" },
      { en: "around", ar: "حَوْل", harakat: "حَوْل", pic: "🔄" },
      { en: "through", ar: "خِلَال", harakat: "خِلَال", pic: "➡️" },
      { en: "across", ar: "عَبْر", harakat: "عَبْر", pic: "🌉" },
      { en: "along", ar: "عَلَى طُول", harakat: "عَلَى طُول", pic: "🛤️" },
      { en: "near", ar: "قَرِيب", harakat: "قَرِيب", pic: "📏" },
      { en: "far", ar: "بَعِيد", harakat: "بَعِيد", pic: "🔭" },
      { en: "close", ar: "قَرِيب", harakat: "قَرِيب", pic: "🤏" },
      { en: "distant", ar: "بَعِيد", harakat: "بَعِيد", pic: "🌌" },
      
      // Movement
      { en: "to go", ar: "يَذْهَب", harakat: "يَذْهَب", pic: "🚶" },
      { en: "to come", ar: "يَأْتِي", harakat: "يَأْتِي", pic: "👋" },
      { en: "to arrive", ar: "يَصِل", harakat: "يَصِل", pic: "🎯" },
      { en: "to leave", ar: "يُغَادِر", harakat: "يُغَادِر", pic: "🚪" },
      { en: "to enter", ar: "يَدْخُل", harakat: "يَدْخُل", pic: "🚪" },
      { en: "to exit", ar: "يَخْرُج", harakat: "يَخْرُج", pic: "🏃" },
      { en: "to return", ar: "يَرْجِع", harakat: "يَرْجِع", pic: "↩️" },
      { en: "to follow", ar: "يَتْبَع", harakat: "يَتْبَع", pic: "👣" }
    ]
  },

  // Quantities & Measurements
  {
    key: "quantities-measurements",
    name: "Quantities & Measurements",
    icon: "⚖️",
    words: [
      // Quantities
      { en: "all", ar: "كُلّ", harakat: "كُلّ", pic: "💯" },
      { en: "some", ar: "بَعْض", harakat: "بَعْض", pic: "🤏" },
      { en: "none", ar: "لَا شَيْء", harakat: "لَا شَيْء", pic: "⭕" },
      { en: "many", ar: "كَثِير", harakat: "كَثِير", pic: "🔢" },
      { en: "few", ar: "قَلِيل", harakat: "قَلِيل", pic: "☝️" },
      { en: "more", ar: "أَكْثَر", harakat: "أَكْثَر", pic: "➕" },
      { en: "less", ar: "أَقَلّ", harakat: "أَقَلّ", pic: "➖" },
      { en: "enough", ar: "كَافِي", harakat: "كَافِي", pic: "✅" },
      { en: "too much", ar: "كَثِير جِدًّا", harakat: "كَثِير جِدًّا", pic: "🔴" },
      { en: "a little", ar: "قَلِيل", harakat: "قَلِيل", pic: "🤏" },
      { en: "a lot", ar: "كَثِير", harakat: "كَثِير", pic: "📦" },
      { en: "half", ar: "نِصْف", harakat: "نِصْف", pic: "½" },
      { en: "quarter", ar: "رُبْع", harakat: "رُبْع", pic: "¼" },
      { en: "third", ar: "ثُلْث", harakat: "ثُلْث", pic: "⅓" },
      { en: "whole", ar: "كَامِل", harakat: "كَامِل", pic: "⭕" },
      { en: "part", ar: "جُزْء", harakat: "جُزْء", pic: "🧩" },
      { en: "piece", ar: "قِطْعَة", harakat: "قِطْعَة", pic: "🍕" },
      
      // Size
      { en: "size", ar: "حَجْم", harakat: "حَجْم", pic: "📏" },
      { en: "big", ar: "كَبِير", harakat: "كَبِير", pic: "🐘" },
      { en: "small", ar: "صَغِير", harakat: "صَغِير", pic: "🐭" },
      { en: "huge", ar: "ضَخْم", harakat: "ضَخْم", pic: "🦕" },
      { en: "tiny", ar: "صَغِير جِدًّا", harakat: "صَغِير جِدًّا", pic: "🐜" },
      { en: "medium", ar: "مُتَوَسِّط", harakat: "مُتَوَسِّط", pic: "👕" },
      { en: "large", ar: "كَبِير", harakat: "كَبِير", pic: "📦" },
      
      // Weight
      { en: "weight", ar: "وَزْن", harakat: "وَزْن", pic: "⚖️" },
      { en: "heavy", ar: "ثَقِيل", harakat: "ثَقِيل", pic: "🏋️" },
      { en: "light", ar: "خَفِيف", harakat: "خَفِيف", pic: "🪶" },
      { en: "kilogram", ar: "كِيلُوغْرَام", harakat: "كِيلُوغْرَام", pic: "⚖️" },
      { en: "gram", ar: "غْرَام", harakat: "غْرَام", pic: "⚖️" },
      { en: "ton", ar: "طُنّ", harakat: "طُنّ", pic: "🚚" },
      
      // Length
      { en: "length", ar: "طُول", harakat: "طُول", pic: "📏" },
      { en: "long", ar: "طَوِيل", harakat: "طَوِيل", pic: "🦒" },
      { en: "short", ar: "قَصِير", harakat: "قَصِير", pic: "📐" },
      { en: "tall", ar: "طَوِيل", harakat: "طَوِيل", pic: "🏢" },
      { en: "wide", ar: "عَرِيض", harakat: "عَرِيض", pic: "↔️" },
      { en: "narrow", ar: "ضَيِّق", harakat: "ضَيِّق", pic: "🚪" },
      { en: "thick", ar: "سَمِيك", harakat: "سَمِيك", pic: "📚" },
      { en: "thin", ar: "رَقِيق", harakat: "رَقِيق", pic: "📄" },
      { en: "meter", ar: "مِتْر", harakat: "مِتْر", pic: "📏" },
      { en: "centimeter", ar: "سَنْتِيمِتْر", harakat: "سَنْتِيمِتْر", pic: "📏" },
      { en: "kilometer", ar: "كِيلُومِتْر", harakat: "كِيلُومِتْر", pic: "🛣️" },
      
      // Volume
      { en: "liter", ar: "لِتْر", harakat: "لِتْر", pic: "🥛" },
      { en: "milliliter", ar: "مِيلِيلِتْر", harakat: "مِيلِيلِتْر", pic: "💧" },
      { en: "full", ar: "مُمْتَلِئ", harakat: "مُمْتَلِئ", pic: "🪣" },
      { en: "empty", ar: "فَارِغ", harakat: "فَارِغ", pic: "⭕" },
      
      // Speed
      { en: "fast", ar: "سَرِيع", harakat: "سَرِيع", pic: "🏃" },
      { en: "slow", ar: "بَطِيء", harakat: "بَطِيء", pic: "🐌" },
      { en: "quick", ar: "سَرِيع", harakat: "سَرِيع", pic: "⚡" },
      { en: "speed", ar: "سُرْعَة", harakat: "سُرْعَة", pic: "💨" },
      
      // Temperature
      { en: "temperature", ar: "دَرَجَة حَرَارَة", harakat: "دَرَجَة حَرَارَة", pic: "🌡️" },
      { en: "degree", ar: "دَرَجَة", harakat: "دَرَجَة", pic: "°" },
      { en: "celsius", ar: "مِئَوِي", harakat: "مِئَوِي", pic: "🌡️" },
      { en: "fahrenheit", ar: "فَهْرَنْهَايْت", harakat: "فَهْرَنْهَايْت", pic: "🌡️" }
    ]
  },

  // Questions & Interrogatives
  {
    key: "questions-interrogatives",
    name: "Questions & Interrogatives",
    icon: "❓",
    words: [
      { en: "what", ar: "مَا", harakat: "مَا", pic: "❓" },
      { en: "what (thing)", ar: "مَاذَا", harakat: "مَاذَا", pic: "❓" },
      { en: "who", ar: "مَنْ", harakat: "مَنْ", pic: "👤" },
      { en: "where", ar: "أَيْنَ", harakat: "أَيْنَ", pic: "📍" },
      { en: "when", ar: "مَتَى", harakat: "مَتَى", pic: "⏰" },
      { en: "why", ar: "لِمَاذَا", harakat: "لِمَاذَا", pic: "🤔" },
      { en: "how", ar: "كَيْفَ", harakat: "كَيْفَ", pic: "🔧" },
      { en: "how many", ar: "كَمْ", harakat: "كَمْ", pic: "🔢" },
      { en: "how much", ar: "كَمْ", harakat: "كَمْ", pic: "💰" },
      { en: "which", ar: "أَيّ", harakat: "أَيّ", pic: "👉" },
      { en: "whose", ar: "لِمَنْ", harakat: "لِمَنْ", pic: "👤" },
      { en: "is it?", ar: "هَلْ", harakat: "هَلْ", pic: "❓" },
      { en: "isn't it?", ar: "أَلَيْسَ", harakat: "أَلَيْسَ", pic: "❓" },
      { en: "can I?", ar: "هَلْ أَسْتَطِيع", harakat: "هَلْ أَسْتَطِيع", pic: "🤚" },
      { en: "may I?", ar: "هَلْ يُمْكِنُنِي", harakat: "هَلْ يُمْكِنُنِي", pic: "🙏" },
      { en: "do you have?", ar: "هَلْ عِنْدَك", harakat: "هَلْ عِنْدَك", pic: "🤲" },
      { en: "where from?", ar: "مِنْ أَيْنَ", harakat: "مِنْ أَيْنَ", pic: "🌍" },
      { en: "until when?", ar: "إِلَى مَتَى", harakat: "إِلَى مَتَى", pic: "⏳" },
      { en: "for what?", ar: "لِأَيّ شَيْء", harakat: "لِأَيّ شَيْء", pic: "🎯" },
      { en: "with whom?", ar: "مَعَ مَنْ", harakat: "مَعَ مَنْ", pic: "👥" }
    ]
  },

  // Common Adjectives
  {
    key: "common-adjectives",
    name: "Common Adjectives",
    icon: "✨",
    words: [
      // Quality
      { en: "good", ar: "جَيِّد", harakat: "جَيِّد", pic: "👍" },
      { en: "bad", ar: "سَيِّئ", harakat: "سَيِّئ", pic: "👎" },
      { en: "excellent", ar: "مُمْتَاز", harakat: "مُمْتَاز", pic: "⭐" },
      { en: "perfect", ar: "كَامِل", harakat: "كَامِل", pic: "💯" },
      { en: "terrible", ar: "فَظِيع", harakat: "فَظِيع", pic: "😱" },
      { en: "wonderful", ar: "رَائِع", harakat: "رَائِع", pic: "🌟" },
      { en: "amazing", ar: "مُذْهِل", harakat: "مُذْهِل", pic: "🤩" },
      { en: "ordinary", ar: "عَادِي", harakat: "عَادِي", pic: "😐" },
      { en: "special", ar: "خَاصّ", harakat: "خَاصّ", pic: "✨" },
      { en: "unique", ar: "فَرِيد", harakat: "فَرِيد", pic: "💎" },
      
      // Age & Time
      { en: "new", ar: "جَدِيد", harakat: "جَدِيد", pic: "✨" },
      { en: "old", ar: "قَدِيم", harakat: "قَدِيم", pic: "📜" },
      { en: "young", ar: "شَابّ", harakat: "شَابّ", pic: "👶" },
      { en: "ancient", ar: "قَدِيم جِدًّا", harakat: "قَدِيم جِدًّا", pic: "🏛️" },
      { en: "modern", ar: "حَدِيث", harakat: "حَدِيث", pic: "🏢" },
      { en: "fresh", ar: "طَازَج", harakat: "طَازَج", pic: "🌿" },
      { en: "stale", ar: "بَائِت", harakat: "بَائِت", pic: "🍞" },
      
      // Difficulty
      { en: "easy", ar: "سَهْل", harakat: "سَهْل", pic: "😊" },
      { en: "difficult", ar: "صَعْب", harakat: "صَعْب", pic: "😓" },
      { en: "hard", ar: "صَعْب", harakat: "صَعْب", pic: "💪" },
      { en: "simple", ar: "بَسِيط", harakat: "بَسِيط", pic: "🟢" },
      { en: "complex", ar: "مُعَقَّد", harakat: "مُعَقَّد", pic: "🌀" },
      { en: "complicated", ar: "مُعَقَّد", harakat: "مُعَقَّد", pic: "🧩" },
      
      // Safety
      { en: "safe", ar: "آمِن", harakat: "آمِن", pic: "🛡️" },
      { en: "dangerous", ar: "خَطِر", harakat: "خَطِر", pic: "⚠️" },
      { en: "careful", ar: "حَذِر", harakat: "حَذِر", pic: "⚡" },
      { en: "secure", ar: "آمِن", harakat: "آمِن", pic: "🔒" },
      
      // Truth
      { en: "true", ar: "صَحِيح", harakat: "صَحِيح", pic: "✅" },
      { en: "false", ar: "خَاطِئ", harakat: "خَاطِئ", pic: "❌" },
      { en: "real", ar: "حَقِيقِي", harakat: "حَقِيقِي", pic: "💎" },
      { en: "fake", ar: "مُزَيَّف", harakat: "مُزَيَّف", pic: "🎭" },
      { en: "honest", ar: "صَادِق", harakat: "صَادِق", pic: "🤝" },
      
      // Appearance
      { en: "beautiful", ar: "جَمِيل", harakat: "جَمِيل", pic: "🌹" },
      { en: "ugly", ar: "قَبِيح", harakat: "قَبِيح", pic: "👹" },
      { en: "pretty", ar: "جَمِيل", harakat: "جَمِيل", pic: "💐" },
      { en: "handsome", ar: "وَسِيم", harakat: "وَسِيم", pic: "🤵" },
      { en: "attractive", ar: "جَذَّاب", harakat: "جَذَّاب", pic: "✨" },
      { en: "plain", ar: "عَادِي", harakat: "عَادِي", pic: "⬜" },
      
      // Cost
      { en: "expensive", ar: "غَالِي", harakat: "غَالِي", pic: "💸" },
      { en: "cheap", ar: "رَخِيص", harakat: "رَخِيص", pic: "💵" },
      { en: "free", ar: "مَجَّانِي", harakat: "مَجَّانِي", pic: "🆓" },
      { en: "valuable", ar: "ثَمِين", harakat: "ثَمِين", pic: "💎" },
      { en: "worthless", ar: "بِلَا قِيمَة", harakat: "بِلَا قِيمَة", pic: "🗑️" },
      
      // Availability
      { en: "available", ar: "مُتَاح", harakat: "مُتَاح", pic: "✅" },
      { en: "busy", ar: "مَشْغُول", harakat: "مَشْغُول", pic: "🔴" },
      { en: "occupied", ar: "مَشْغُول", harakat: "مَشْغُول", pic: "🚫" },
      { en: "vacant", ar: "شَاغِر", harakat: "شَاغِر", pic: "🟢" },
      { en: "ready", ar: "جَاهِز", harakat: "جَاهِز", pic: "✅" }
    ]
  },

  // Communication & Technology
  {
    key: "communication-technology",
    name: "Communication & Technology",
    icon: "📱",
    words: [
      // Communication
      { en: "message", ar: "رِسَالَة", harakat: "رِسَالَة", pic: "💬" },
      { en: "email", ar: "بَرِيد إِلِكْتْرُونِي", harakat: "بَرِيد إِلِكْتْرُونِي", pic: "📧" },
      { en: "letter", ar: "خِطَاب", harakat: "خِطَاب", pic: "✉️" },
      { en: "call", ar: "مُكَالَمَة", harakat: "مُكَالَمَة", pic: "📞" },
      { en: "text", ar: "رِسَالَة نَصِّيَّة", harakat: "رِسَالَة نَصِّيَّة", pic: "📱" },
      { en: "chat", ar: "دَرْدَشَة", harakat: "دَرْدَشَة", pic: "💬" },
      { en: "video call", ar: "مُكَالَمَة فِيدْيُو", harakat: "مُكَالَمَة فِيدْيُو", pic: "📹" },
      { en: "notification", ar: "إِشْعَار", harakat: "إِشْعَار", pic: "🔔" },
      { en: "news", ar: "أَخْبَار", harakat: "أَخْبَار", pic: "📰" },
      { en: "information", ar: "مَعْلُومَات", harakat: "مَعْلُومَات", pic: "ℹ️" },
      
      // Internet & Social Media
      { en: "internet", ar: "إِنْتَرْنِت", harakat: "إِنْتَرْنِت", pic: "🌐" },
      { en: "website", ar: "مَوْقِع", harakat: "مَوْقِع", pic: "🌐" },
      { en: "social media", ar: "وَسَائِل التَّوَاصُل", harakat: "وَسَائِل التَّوَاصُل", pic: "📱" },
      { en: "post", ar: "مَنْشُور", harakat: "مَنْشُور", pic: "📝" },
      { en: "like", ar: "إِعْجَاب", harakat: "إِعْجَاب", pic: "👍" },
      { en: "share", ar: "مُشَارَكَة", harakat: "مُشَارَكَة", pic: "🔄" },
      { en: "comment", ar: "تَعْلِيق", harakat: "تَعْلِيق", pic: "💬" },
      { en: "follow", ar: "مُتَابَعَة", harakat: "مُتَابَعَة", pic: "➕" },
      { en: "subscribe", ar: "اِشْتِرَاك", harakat: "اِشْتِرَاك", pic: "🔔" },
      { en: "upload", ar: "رَفْع", harakat: "رَفْع", pic: "⬆️" },
      { en: "download", ar: "تَحْمِيل", harakat: "تَحْمِيل", pic: "⬇️" },
      { en: "online", ar: "عَلَى الإِنْتَرْنِت", harakat: "عَلَى الإِنْتَرْنِت", pic: "🟢" },
      { en: "offline", ar: "غَيْر مُتَّصِل", harakat: "غَيْر مُتَّصِل", pic: "🔴" },
      { en: "wifi", ar: "وَاي فَاي", harakat: "وَاي فَاي", pic: "📶" },
      { en: "password", ar: "كَلِمَة سِرّ", harakat: "كَلِمَة سِرّ", pic: "🔐" },
      { en: "username", ar: "اِسْم مُسْتَخْدِم", harakat: "اِسْم مُسْتَخْدِم", pic: "👤" },
      { en: "profile", ar: "مِلَفّ شَخْصِي", harakat: "مِلَفّ شَخْصِي", pic: "👤" },
      { en: "account", ar: "حِسَاب", harakat: "حِسَاب", pic: "👤" },
      { en: "settings", ar: "إِعْدَادَات", harakat: "إِعْدَادَات", pic: "⚙️" },
      
      // Devices
      { en: "phone", ar: "هَاتِف", harakat: "هَاتِف", pic: "📱" },
      { en: "computer", ar: "حَاسُوب", harakat: "حَاسُوب", pic: "💻" },
      { en: "tablet", ar: "جِهَاز لَوْحِي", harakat: "جِهَاز لَوْحِي", pic: "📱" },
      { en: "laptop", ar: "حَاسُوب مَحْمُول", harakat: "حَاسُوب مَحْمُول", pic: "💻" },
      { en: "screen", ar: "شَاشَة", harakat: "شَاشَة", pic: "🖥️" },
      { en: "keyboard", ar: "لَوْحَة مَفَاتِيح", harakat: "لَوْحَة مَفَاتِيح", pic: "⌨️" },
      { en: "mouse", ar: "فَأْرَة", harakat: "فَأْرَة", pic: "🖱️" },
      { en: "printer", ar: "طَابِعَة", harakat: "طَابِعَة", pic: "🖨️" },
      { en: "camera", ar: "كَامِيرَا", harakat: "كَامِيرَا", pic: "📷" },
      { en: "microphone", ar: "مِيكْرُوفُون", harakat: "مِيكْرُوفُون", pic: "🎤" },
      { en: "speaker", ar: "سَمَّاعَة", harakat: "سَمَّاعَة", pic: "🔊" },
      { en: "headphones", ar: "سَمَّاعَات", harakat: "سَمَّاعَات", pic: "🎧" },
      
      // Actions
      { en: "to type", ar: "يَكْتُب", harakat: "يَكْتُب", pic: "⌨️" },
      { en: "to click", ar: "يَنْقُر", harakat: "يَنْقُر", pic: "👆" },
      { en: "to search", ar: "يَبْحَث", harakat: "يَبْحَث", pic: "🔍" },
      { en: "to browse", ar: "يَتَصَفَّح", harakat: "يَتَصَفَّح", pic: "🌐" },
      { en: "to log in", ar: "يُسَجِّل الدُّخُول", harakat: "يُسَجِّل الدُّخُول", pic: "🔑" },
      { en: "to log out", ar: "يُسَجِّل الخُرُوج", harakat: "يُسَجِّل الخُرُوج", pic: "🚪" },
      { en: "to save", ar: "يَحْفَظ", harakat: "يَحْفَظ", pic: "💾" },
      { en: "to delete", ar: "يَحْذِف", harakat: "يَحْذِف", pic: "🗑️" },
      { en: "to copy", ar: "يَنْسَخ", harakat: "يَنْسَخ", pic: "📋" },
      { en: "to paste", ar: "يَلْصَق", harakat: "يَلْصَق", pic: "📋" },
      { en: "to print", ar: "يَطْبَع", harakat: "يَطْبَع", pic: "🖨️" },
      { en: "to scan", ar: "يَمْسَح", harakat: "يَمْسَح", pic: "📄" }
    ]
  }
];

// Add to existing WORD_CATEGORIES if it exists
if (typeof WORD_CATEGORIES !== 'undefined') {
  ADDITIONAL_VOCABULARY.forEach(cat => {
    // Check if category already exists
    const existingCat = WORD_CATEGORIES.find(c => c.key === cat.key);
    if (!existingCat) {
      WORD_CATEGORIES.push(cat);
    }
  });
}

// Export to global scope
window.ADDITIONAL_VOCABULARY = ADDITIONAL_VOCABULARY;