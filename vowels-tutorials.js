// Comprehensive Vowels (Harakat) Tutorials
const VOWELS_TUTORIALS = [
  {
    id: "vowels-intro",
    title: "Introduction to Arabic Vowels (Harakat)",
    icon: "📝",
    difficulty: "beginner",
    content: `
      <div class="tutorial-section">
        <h3>What are Harakat?</h3>
        <p>Harakat (حَرَكَات) are diacritical marks in Arabic that indicate vowel sounds. They are essential for proper pronunciation and meaning.</p>
        
        <div class="info-box">
          <p><strong>Key Point:</strong> Arabic has 3 short vowels and 3 long vowels, plus additional marks that modify pronunciation.</p>
        </div>

        <h3>Why Learn Harakat?</h3>
        <ul>
          <li>📖 Essential for reading Quran and classical texts</li>
          <li>🗣️ Crucial for correct pronunciation</li>
          <li>💡 Helps distinguish between similar words</li>
          <li>📚 Foundation for understanding Arabic grammar</li>
        </ul>

        <h3>Where You'll See Harakat</h3>
        <ul>
          <li>Religious texts (Quran, Hadith)</li>
          <li>Children's books</li>
          <li>Learning materials</li>
          <li>Poetry and classical literature</li>
          <li>Dictionaries</li>
        </ul>

        <div class="practice-tip">
          <strong>Note:</strong> Modern Arabic writing often omits harakat, but knowing them is essential for proper reading and pronunciation.
        </div>
      </div>
    `,
    examples: [
      { arabic: "كَتَبَ", english: "he wrote", note: "With full harakat" },
      { arabic: "كتب", english: "he wrote", note: "Without harakat (common in modern text)" }
    ]
  },

  {
    id: "short-vowels",
    title: "The Three Short Vowels",
    icon: "🔤",
    difficulty: "beginner",
    content: `
      <div class="tutorial-section">
        <h3>1. Fatha (َ) - The 'A' Sound</h3>
        <div class="vowel-box">
          <div class="large-arabic">بَ</div>
          <p>Fatha (فَتْحَة) creates an 'a' sound like in 'cat'</p>
          <p>Written as a small diagonal line above the letter</p>
        </div>

        <h4>Examples with Fatha:</h4>
        <div class="examples-grid">
          <div>كَتَبَ (ka-ta-ba) - he wrote</div>
          <div>ذَهَبَ (dha-ha-ba) - he went</div>
          <div>فَتَحَ (fa-ta-ha) - he opened</div>
        </div>

        <h3>2. Kasra (ِ) - The 'I' Sound</h3>
        <div class="vowel-box">
          <div class="large-arabic">بِ</div>
          <p>Kasra (كَسْرَة) creates an 'i' sound like in 'sit'</p>
          <p>Written as a small diagonal line below the letter</p>
        </div>

        <h4>Examples with Kasra:</h4>
        <div class="examples-grid">
          <div>كِتَاب (ki-taab) - book</div>
          <div>مِنْ (min) - from</div>
          <div>فِي (fii) - in</div>
        </div>

        <h3>3. Damma (ُ) - The 'U' Sound</h3>
        <div class="vowel-box">
          <div class="large-arabic">بُ</div>
          <p>Damma (ضَمَّة) creates a 'u' sound like in 'put'</p>
          <p>Written as a small waw-like symbol above the letter</p>
        </div>

        <h4>Examples with Damma:</h4>
        <div class="examples-grid">
          <div>كُتُب (ku-tub) - books</div>
          <div>يَكْتُبُ (yak-tu-bu) - he writes</div>
          <div>أُمّ (umm) - mother</div>
        </div>

        <div class="practice-tip">
          <strong>Practice Tip:</strong> Try reading the same letter with different vowels to hear the difference:
          <div class="large-arabic">بَ بِ بُ</div>
          <div>ba - bi - bu</div>
        </div>
      </div>
    `,
    examples: [
      { arabic: "بَ", english: "ba", note: "with fatha" },
      { arabic: "بِ", english: "bi", note: "with kasra" },
      { arabic: "بُ", english: "bu", note: "with damma" }
    ]
  },

  {
    id: "long-vowels",
    title: "Long Vowels (Madd)",
    icon: "📏",
    difficulty: "beginner",
    content: `
      <div class="tutorial-section">
        <h3>Understanding Long Vowels</h3>
        <p>Long vowels in Arabic are created by combining short vowels with specific letters:</p>

        <h3>1. Long 'AA' - Fatha + Alif</h3>
        <div class="vowel-box">
          <div class="large-arabic">بَا</div>
          <p>Fatha + Alif (ا) = Long 'aa' sound</p>
          <p>Like the 'a' in 'father'</p>
        </div>

        <h4>Examples:</h4>
        <div class="examples-grid">
          <div>كَاتِب (kaa-tib) - writer</div>
          <div>بَاب (baab) - door</div>
          <div>سَلَام (sa-laam) - peace</div>
        </div>

        <h3>2. Long 'II' - Kasra + Yaa</h3>
        <div class="vowel-box">
          <div class="large-arabic">بِي</div>
          <p>Kasra + Yaa (ي) = Long 'ii' sound</p>
          <p>Like the 'ee' in 'seen'</p>
        </div>

        <h4>Examples:</h4>
        <div class="examples-grid">
          <div>كَبِير (ka-biir) - big</div>
          <div>جَمِيل (ja-miil) - beautiful</div>
          <div>طَوِيل (ta-wiil) - tall</div>
        </div>

        <h3>3. Long 'UU' - Damma + Waw</h3>
        <div class="vowel-box">
          <div class="large-arabic">بُو</div>
          <p>Damma + Waw (و) = Long 'uu' sound</p>
          <p>Like the 'oo' in 'moon'</p>
        </div>

        <h4>Examples:</h4>
        <div class="examples-grid">
          <div>يَقُول (ya-quul) - he says</div>
          <div>نُور (nuur) - light</div>
          <div>سُوق (suuq) - market</div>
        </div>

        <div class="comparison-box">
          <h4>Short vs Long Vowels:</h4>
          <table>
            <tr>
              <th>Short</th>
              <th>Long</th>
              <th>Difference</th>
            </tr>
            <tr>
              <td>بَ (ba)</td>
              <td>بَا (baa)</td>
              <td>Duration doubles</td>
            </tr>
            <tr>
              <td>بِ (bi)</td>
              <td>بِي (bii)</td>
              <td>Duration doubles</td>
            </tr>
            <tr>
              <td>بُ (bu)</td>
              <td>بُو (buu)</td>
              <td>Duration doubles</td>
            </tr>
          </table>
        </div>
      </div>
    `,
    examples: [
      { arabic: "قَالَ", english: "qaala", note: "he said (with long aa)" },
      { arabic: "فِيل", english: "fiil", note: "elephant (with long ii)" },
      { arabic: "نُور", english: "nuur", note: "light (with long uu)" }
    ]
  },

  {
    id: "sukoon-shadda",
    title: "Sukoon and Shadda",
    icon: "⭕",
    difficulty: "intermediate",
    content: `
      <div class="tutorial-section">
        <h3>Sukoon (ْ) - The Silent Mark</h3>
        <div class="vowel-box">
          <div class="large-arabic">بْ</div>
          <p>Sukoon (سُكُون) indicates no vowel sound</p>
          <p>The letter is pronounced with its consonant sound only</p>
        </div>

        <h4>Understanding Sukoon:</h4>
        <ul>
          <li>Written as a small circle above the letter</li>
          <li>Means the letter has no vowel</li>
          <li>Creates a consonant cluster with the next letter</li>
        </ul>

        <h4>Examples with Sukoon:</h4>
        <div class="examples-grid">
          <div>يَكْتُبُ (yak-tu-bu) - he writes</div>
          <div>مَكْتَب (mak-tab) - office</div>
          <div>قَلْب (qalb) - heart</div>
        </div>

        <h3>Shadda (ّ) - The Doubling Mark</h3>
        <div class="vowel-box">
          <div class="large-arabic">بّ</div>
          <p>Shadda (شَدَّة) doubles the consonant</p>
          <p>The letter is pronounced twice</p>
        </div>

        <h4>Understanding Shadda:</h4>
        <ul>
          <li>Written as a small 'w' shape above the letter</li>
          <li>Doubles the consonant sound</li>
          <li>Can combine with vowels: بَّ (bb+a), بِّ (bb+i), بُّ (bb+u)</li>
        </ul>

        <h4>Examples with Shadda:</h4>
        <div class="examples-grid">
          <div>مُدَرِّس (mu-dar-ris) - teacher</div>
          <div>سَلَّمَ (sal-la-ma) - he greeted</div>
          <div>حَجّ (hajj) - pilgrimage</div>
        </div>

        <div class="comparison-box">
          <h4>With and Without Shadda:</h4>
          <table>
            <tr>
              <th>Without Shadda</th>
              <th>With Shadda</th>
              <th>Meaning Change</th>
            </tr>
            <tr>
              <td>دَرَسَ (da-ra-sa)</td>
              <td>دَرَّسَ (dar-ra-sa)</td>
              <td>studied → taught</td>
            </tr>
            <tr>
              <td>عَلِمَ (a-li-ma)</td>
              <td>عَلَّمَ (al-la-ma)</td>
              <td>knew → taught</td>
            </tr>
          </table>
        </div>
      </div>
    `,
    examples: [
      { arabic: "مَكْتُوب", english: "mak-tuub", note: "written (with sukoon)" },
      { arabic: "مُعَلِّم", english: "mu-al-lim", note: "teacher (with shadda)" }
    ]
  },

  {
    id: "tanween",
    title: "Tanween (Nunation)",
    icon: "🔄",
    difficulty: "intermediate",
    content: `
      <div class="tutorial-section">
        <h3>What is Tanween?</h3>
        <p>Tanween (تَنْوِين) adds an 'n' sound to the end of indefinite nouns. It's like saying "a/an" in English.</p>

        <h3>Three Types of Tanween</h3>

        <h3>1. Tanween Fath (ً)</h3>
        <div class="vowel-box">
          <div class="large-arabic">كِتَابًا</div>
          <p>Double fatha = 'an' sound</p>
          <p>Used in accusative case</p>
        </div>

        <h4>Examples:</h4>
        <div class="examples-grid">
          <div>كِتَابًا (ki-taa-ban) - a book (object)</div>
          <div>قَلَمًا (qa-la-man) - a pen (object)</div>
          <div>شُكْرًا (shuk-ran) - thanks</div>
        </div>

        <h3>2. Tanween Kasr (ٍ)</h3>
        <div class="vowel-box">
          <div class="large-arabic">كِتَابٍ</div>
          <p>Double kasra = 'in' sound</p>
          <p>Used in genitive case</p>
        </div>

        <h4>Examples:</h4>
        <div class="examples-grid">
          <div>فِي بَيْتٍ (fii bay-tin) - in a house</div>
          <div>مِنْ كِتَابٍ (min ki-taa-bin) - from a book</div>
        </div>

        <h3>3. Tanween Damm (ٌ)</h3>
        <div class="vowel-box">
          <div class="large-arabic">كِتَابٌ</div>
          <p>Double damma = 'un' sound</p>
          <p>Used in nominative case</p>
        </div>

        <h4>Examples:</h4>
        <div class="examples-grid">
          <div>كِتَابٌ جَمِيلٌ (ki-taa-bun ja-mii-lun) - a beautiful book</div>
          <div>وَلَدٌ صَغِيرٌ (wa-la-dun sa-ghii-run) - a small boy</div>
        </div>

        <div class="info-box">
          <h4>Remember:</h4>
          <ul>
            <li>Tanween only appears on indefinite nouns</li>
            <li>It's written but often not pronounced in casual speech</li>
            <li>Essential for formal Arabic and Quranic recitation</li>
            <li>With tanween fath, an alif is usually added: ـًا</li>
          </ul>
        </div>
      </div>
    `,
    examples: [
      { arabic: "رَجُلٌ", english: "ra-ju-lun", note: "a man (nominative)" },
      { arabic: "رَجُلًا", english: "ra-ju-lan", note: "a man (accusative)" },
      { arabic: "رَجُلٍ", english: "ra-ju-lin", note: "a man (genitive)" }
    ]
  },

  {
    id: "special-marks",
    title: "Special Marks and Signs",
    icon: "✨",
    difficulty: "intermediate",
    content: `
      <div class="tutorial-section">
        <h3>Hamza (ء)</h3>
        <div class="vowel-box">
          <div class="large-arabic">ء</div>
          <p>Hamza represents a glottal stop</p>
          <p>Can appear independently or on letters</p>
        </div>

        <h4>Hamza Positions:</h4>
        <div class="examples-grid">
          <div>أَ (on alif) - أَكَلَ (a-ka-la) - he ate</div>
          <div>ؤُ (on waw) - سُؤَال (su-aal) - question</div>
          <div>ئِ (on yaa) - قَائِد (qaa-id) - leader</div>
          <div>ء (independent) - سَمَاء (sa-maa) - sky</div>
        </div>

        <h3>Madda (آ)</h3>
        <div class="vowel-box">
          <div class="large-arabic">آ</div>
          <p>Madda = hamza + long alif</p>
          <p>Pronounced as long 'aa' with glottal stop</p>
        </div>

        <h4>Examples:</h4>
        <div class="examples-grid">
          <div>آمَنَ (aa-ma-na) - he believed</div>
          <div>قُرْآن (qur-aan) - Quran</div>
          <div>آخَر (aa-khar) - another</div>
        </div>

        <h3>Alif Khanjariyya (ٰ)</h3>
        <div class="vowel-box">
          <div class="large-arabic">هٰذَا</div>
          <p>Small alif above the letter</p>
          <p>Indicates a long 'aa' sound</p>
        </div>

        <h4>Common Words:</h4>
        <div class="examples-grid">
          <div>هٰذَا (haa-dhaa) - this (masculine)</div>
          <div>هٰذِهِ (haa-dhi-hi) - this (feminine)</div>
          <div>ذٰلِكَ (dhaa-li-ka) - that</div>
          <div>الرَّحْمٰن (ar-rah-maan) - The Most Merciful</div>
        </div>

        <h3>Wasla (ٱ)</h3>
        <div class="vowel-box">
          <div class="large-arabic">ٱلْكِتَاب</div>
          <p>Connecting hamza</p>
          <p>Silent when connected, pronounced when starting</p>
        </div>

        <h4>Usage:</h4>
        <ul>
          <li>Common in the definite article ال</li>
          <li>Dropped in connected speech</li>
          <li>Pronounced when starting a sentence</li>
        </ul>

        <div class="practice-tip">
          <strong>Advanced Tip:</strong> These marks are crucial for Quranic recitation and formal Arabic. Practice recognizing them in religious texts.
        </div>
      </div>
    `,
    examples: [
      { arabic: "أَحْمَد", english: "ahmad", note: "with initial hamza" },
      { arabic: "آمِين", english: "aamiin", note: "with madda" },
      { arabic: "هٰذَا", english: "haadhaa", note: "with alif khanjariyya" }
    ]
  },

  {
    id: "reading-practice",
    title: "Reading with Harakat - Practice",
    icon: "📖",
    difficulty: "practice",
    content: `
      <div class="tutorial-section">
        <h3>Progressive Reading Practice</h3>
        
        <h4>Level 1: Single Words</h4>
        <div class="practice-words">
          <div class="word-item">
            <div class="large-arabic">كَتَبَ</div>
            <div>ka-ta-ba (he wrote)</div>
          </div>
          <div class="word-item">
            <div class="large-arabic">ذَهَبَ</div>
            <div>dha-ha-ba (he went)</div>
          </div>
          <div class="word-item">
            <div class="large-arabic">شَرِبَ</div>
            <div>sha-ri-ba (he drank)</div>
          </div>
        </div>

        <h4>Level 2: Words with Sukoon</h4>
        <div class="practice-words">
          <div class="word-item">
            <div class="large-arabic">مَكْتَب</div>
            <div>mak-tab (office)</div>
          </div>
          <div class="word-item">
            <div class="large-arabic">مَدْرَسَة</div>
            <div>mad-ra-sa (school)</div>
          </div>
          <div class="word-item">
            <div class="large-arabic">مُسْتَشْفَى</div>
            <div>mus-tash-fa (hospital)</div>
          </div>
        </div>

        <h4>Level 3: Words with Shadda</h4>
        <div class="practice-words">
          <div class="word-item">
            <div class="large-arabic">مُدَرِّس</div>
            <div>mu-dar-ris (teacher)</div>
          </div>
          <div class="word-item">
            <div class="large-arabic">طَبَّاخ</div>
            <div>tab-baakh (cook)</div>
          </div>
          <div class="word-item">
            <div class="large-arabic">سَيَّارَة</div>
            <div>say-yaa-ra (car)</div>
          </div>
        </div>

        <h4>Level 4: Short Phrases</h4>
        <div class="practice-phrases">
          <div class="phrase-item">
            <div class="large-arabic">السَّلَامُ عَلَيْكُمْ</div>
            <div>as-sa-laa-mu a-lay-kum</div>
            <div>(Peace be upon you)</div>
          </div>
          <div class="phrase-item">
            <div class="large-arabic">صَبَاحُ الْخَيْرِ</div>
            <div>sa-baa-hul-khayr</div>
            <div>(Good morning)</div>
          </div>
          <div class="phrase-item">
            <div class="large-arabic">كَيْفَ حَالُكَ؟</div>
            <div>kay-fa haa-lu-ka?</div>
            <div>(How are you?)</div>
          </div>
        </div>

        <h4>Level 5: Complete Sentences</h4>
        <div class="practice-sentences">
          <div class="sentence-item">
            <div class="large-arabic">ذَهَبَ الْوَلَدُ إِلَى الْمَدْرَسَةِ</div>
            <div>dha-ha-bal-wa-la-du i-lal-mad-ra-sa-ti</div>
            <div>The boy went to school</div>
          </div>
          <div class="sentence-item">
            <div class="large-arabic">قَرَأْتُ كِتَابًا جَمِيلًا</div>
            <div>qa-ra'-tu ki-taa-ban ja-mii-lan</div>
            <div>I read a beautiful book</div>
          </div>
        </div>

        <div class="practice-tip">
          <strong>Practice Strategy:</strong>
          <ol>
            <li>Start with single syllables</li>
            <li>Progress to complete words</li>
            <li>Practice words with special marks</li>
            <li>Read short phrases</li>
            <li>Finally, read complete sentences</li>
          </ol>
        </div>
      </div>
    `,
    examples: []
  },

  {
    id: "common-patterns",
    title: "Common Vowel Patterns",
    icon: "🎯",
    difficulty: "advanced",
    content: `
      <div class="tutorial-section">
        <h3>Recognizing Patterns in Arabic</h3>
        <p>Arabic words follow specific patterns. Understanding these helps predict vowels even when not written.</p>

        <h3>Verb Patterns</h3>
        
        <h4>Past Tense Pattern: فَعَلَ</h4>
        <div class="pattern-box">
          <div class="examples-grid">
            <div>كَتَبَ (ka-ta-ba) - wrote</div>
            <div>ذَهَبَ (dha-ha-ba) - went</div>
            <div>فَتَحَ (fa-ta-ha) - opened</div>
            <div>جَلَسَ (ja-la-sa) - sat</div>
          </div>
        </div>

        <h4>Present Tense Pattern: يَفْعَلُ</h4>
        <div class="pattern-box">
          <div class="examples-grid">
            <div>يَكْتُبُ (yak-tu-bu) - writes</div>
            <div>يَذْهَبُ (yadh-ha-bu) - goes</div>
            <div>يَفْتَحُ (yaf-ta-hu) - opens</div>
            <div>يَجْلِسُ (yaj-li-su) - sits</div>
          </div>
        </div>

        <h3>Noun Patterns</h3>

        <h4>Actor Pattern: فَاعِل</h4>
        <div class="pattern-box">
          <div class="examples-grid">
            <div>كَاتِب (kaa-tib) - writer</div>
            <div>طَالِب (taa-lib) - student</div>
            <div>عَامِل (aa-mil) - worker</div>
            <div>سَائِق (saa-iq) - driver</div>
          </div>
        </div>

        <h4>Place Pattern: مَفْعَل</h4>
        <div class="pattern-box">
          <div class="examples-grid">
            <div>مَكْتَب (mak-tab) - office</div>
            <div>مَطْبَخ (mat-bakh) - kitchen</div>
            <div>مَدْخَل (mad-khal) - entrance</div>
            <div>مَخْرَج (makh-raj) - exit</div>
          </div>
        </div>

        <h3>Adjective Patterns</h3>

        <h4>فَعِيل Pattern</h4>
        <div class="pattern-box">
          <div class="examples-grid">
            <div>جَمِيل (ja-miil) - beautiful</div>
            <div>كَبِير (ka-biir) - big</div>
            <div>صَغِير (sa-ghiir) - small</div>
            <div>قَدِيم (qa-diim) - old</div>
          </div>
        </div>

        <h4>أَفْعَل Pattern (Comparative)</h4>
        <div class="pattern-box">
          <div class="examples-grid">
            <div>أَكْبَر (ak-bar) - bigger</div>
            <div>أَصْغَر (as-ghar) - smaller</div>
            <div>أَجْمَل (aj-mal) - more beautiful</div>
            <div>أَفْضَل (af-dal) - better</div>
          </div>
        </div>

        <div class="info-box">
          <h4>Pattern Recognition Tips:</h4>
          <ul>
            <li>Most past tense verbs follow فَعَلَ</li>
            <li>Job/profession words often follow فَاعِل</li>
            <li>Place names often start with مَ</li>
            <li>Many adjectives follow فَعِيل</li>
            <li>Comparatives start with أَ and follow أَفْعَل</li>
          </ul>
        </div>
      </div>
    `,
    examples: [
      { arabic: "Pattern فَعَلَ", english: "fa-a-la", note: "3-letter verb pattern" },
      { arabic: "Pattern فَاعِل", english: "faa-il", note: "doer/actor pattern" },
      { arabic: "Pattern مَفْعَل", english: "maf-al", note: "place pattern" }
    ]
  }
];

// Add vowels tutorials to the main tutorials if they exist
if (typeof TUTORIALS_DATA !== 'undefined') {
  // Add a new section for vowels
  const vowelsSection = {
    category: "Vowels & Harakat",
    icon: "📝",
    tutorials: VOWELS_TUTORIALS
  };
  
  // Insert after alphabet section (or at beginning if not found)
  const alphabetIndex = TUTORIALS_DATA.findIndex(section => 
    section.category === "Arabic Alphabet" || section.category === "Alphabet"
  );
  
  if (alphabetIndex !== -1) {
    TUTORIALS_DATA.splice(alphabetIndex + 1, 0, vowelsSection);
  } else {
    TUTORIALS_DATA.unshift(vowelsSection);
  }
} else {
  window.VOWELS_TUTORIALS = VOWELS_TUTORIALS;
}