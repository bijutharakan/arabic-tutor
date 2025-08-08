(() => {
// Ensure code runs after DOM & data are ready
function ready(fn){ if(document.readyState!='loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
ready(init);

let voices = [];
let currentView = 'letters';

function init(){
  bindHeader();
  loadVoices();
  route('letters'); // default
  setupTouchEvents();
}

// Touch event setup for mobile/tablet
function setupTouchEvents() {
  // Enable touch events
  if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function() {}, {passive: true});
  }
  
  // Fix iOS audio
  const audioContext = window.AudioContext || window.webkitAudioContext;
  if (audioContext) {
    const unlockAudio = () => {
      const ctx = new audioContext();
      ctx.resume();
      document.removeEventListener('touchstart', unlockAudio);
      document.removeEventListener('click', unlockAudio);
    };
    document.addEventListener('touchstart', unlockAudio, false);
    document.addEventListener('click', unlockAudio, false);
  }
}

// Header bindings
function bindHeader(){
  // Handle navigation clicks
  document.body.addEventListener('click', handleClick);
  document.body.addEventListener('touchend', handleClick);
  
  function handleClick(e) {
    const btn = e.target.closest('[data-view]');
    if (btn && btn.closest('header')) { 
      e.preventDefault();
      e.stopPropagation();
      route(btn.dataset.view); 
    }
  }
  
  // Toggle handlers
  const hints = document.getElementById('hintsToggle');
  hints?.addEventListener('change', () => route(currentView));
  
  const harakat = document.getElementById('harakatToggle');
  harakat?.addEventListener('change', () => route(currentView));
  
  // Voice loading
  if (window.speechSynthesis) {
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
    loadVoices();
  }
}

function loadVoices() {
  const select = document.getElementById('voiceSelect');
  if (!select || !('speechSynthesis' in window)) return;
  
  voices = speechSynthesis.getVoices() || [];
  select.innerHTML = '<option value="">Default</option>';
  
  const arabicVoices = voices.filter(v => /ar|Arabic/i.test(v.lang + v.name));
  const voiceList = arabicVoices.length ? arabicVoices : voices;
  
  voiceList.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.voiceURI;
    opt.textContent = `${v.name} (${v.lang})`;
    select.appendChild(opt);
  });
}

function pickVoice() {
  const sel = document.getElementById('voiceSelect')?.value;
  if (!sel) return voices.find(v => /ar|Arabic/i.test(v.lang)) || voices[0];
  return voices.find(v => v.voiceURI === sel) || voices[0];
}

function speakAr(text, rate = 0.85) {
  // Use enhanced speak if available, fallback to regular
  if (window.enhancedSpeak) {
    window.enhancedSpeak(text, 'ar-SA', rate);
    return;
  }
  
  if (!window.speechSynthesis) return;
  
  try {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = pickVoice();
    
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang || 'ar-SA';
    } else {
      utterance.lang = 'ar-SA';
    }
    
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    speechSynthesis.speak(utterance);
  } catch (e) {
    console.error('Speech synthesis error:', e);
  }
}

// Play sound effect
function playSound(type) {
  try {
    const audio = new Audio();
    const sounds = {
      'correct': 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSpyz+/bhTQGGWi98OScTgwOUKzn77VkHAc3lNn1zH0vBSd1yO7aiDYIHWq+8+OWT',
      'wrong': 'data:audio/wav;base64,UklGRpsAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YXcAAACAxMgA//8A//8A//8AgMTIAMgAAP//AP//AMTIAIAAwADAAMAAwADAyADEAAAAgAD/xAAAiMj//wAAyMj/'
    };
    
    if (sounds[type]) {
      audio.src = sounds[type];
      audio.play().catch(() => {});
    }
  } catch (e) {
    console.error('Audio error:', e);
  }
}

// Router & Views
const app = document.getElementById('app');
function route(view){
  currentView = view;
  (Views[view] || Views.letters)();
  app.dataset.view = view;
  
  // Update active button styling
  document.querySelectorAll('[data-view]').forEach(btn => {
    btn.classList.toggle('primary', btn.dataset.view === view);
  });
  
  // Auto-scroll on mobile devices to show content
  if (window.innerWidth <= 768 || 'ontouchstart' in window) {
    setTimeout(() => {
      const mainContent = document.getElementById('app');
      if (mainContent) {
        const offset = mainContent.offsetTop - 20;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    }, 100);
  }
}

const Views = {
  letters() {
    const showHints = document.getElementById('hintsToggle')?.checked;
    
    app.innerHTML = `
      <div class="section">
        <h2>📚 Arabic Letters</h2>
        <div class="pill">Click letters to hear pronunciation</div>
      </div>
      <div class="grid" id="letterGrid"></div>
    `;
    
    const grid = document.getElementById('letterGrid');
    LETTERS.forEach(L => {
      const card = document.createElement('div');
      card.className = 'card letter-card';
      card.innerHTML = `
        <div class="kidpic">${L.pic}</div>
        <div class="glyph">${L.ar}</div>
        <div class="hintLine" ${showHints ? "" : "hidden"}>
          <strong>${L.name}</strong> • <span>${L.phonics}</span>
        </div>
        <div class="help">${L.hook}</div>
        <div class="examples">Examples: ${L.examples[0]}</div>
        <div class="row">
          <button class="say btn-touch">🔊 Say</button>
          <button class="drill btn-touch">Practice</button>
        </div>
      `;
      
      const sayBtn = card.querySelector('.say');
      const drillBtn = card.querySelector('.drill');
      
      sayBtn.addEventListener('click', (e) => {
        e.preventDefault();
        speakAr(L.ar);
      });
      
      drillBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showLetterExamples(L);
      });
      
      grid.appendChild(card);
    });
  },

  letterforms() {
    app.innerHTML = `
      <div class="section">
        <h2>✍️ Letter Forms</h2>
        <div class="pill">Letters change shape based on position in words</div>
      </div>
      <div class="grid" id="formsGrid"></div>
    `;
    
    const grid = document.getElementById('formsGrid');
    LETTERS.forEach(L => {
      const card = document.createElement('div');
      card.className = 'card forms-card';
      card.innerHTML = `
        <h3>${L.name} (${L.ar})</h3>
        <div class="forms-table">
          <div class="form-row">
            <span class="form-label">Isolated:</span>
            <span class="form-glyph">${L.forms.isolated}</span>
          </div>
          <div class="form-row">
            <span class="form-label">Initial:</span>
            <span class="form-glyph">${L.forms.initial}</span>
          </div>
          <div class="form-row">
            <span class="form-label">Medial:</span>
            <span class="form-glyph">${L.forms.medial}</span>
          </div>
          <div class="form-row">
            <span class="form-label">Final:</span>
            <span class="form-glyph">${L.forms.final}</span>
          </div>
        </div>
        <div class="connection-info">
          ${L.canConnect.before ? '✅ Connects before' : '❌ No connection before'}<br>
          ${L.canConnect.after ? '✅ Connects after' : '❌ No connection after'}
        </div>
        <button class="say btn-touch">🔊 Hear Examples</button>
      `;
      
      card.querySelector('.say').addEventListener('click', () => {
        L.examples.forEach((ex, i) => {
          setTimeout(() => {
            const arabicPart = ex.split(' (')[0];
            speakAr(arabicPart);
          }, i * 1500);
        });
      });
      
      grid.appendChild(card);
    });
  },

  diacritics() {
    app.innerHTML = `
      <div class="section">
        <h2>🔤 Diacritical Marks (Harakat)</h2>
        <div class="pill">These marks change vowel sounds</div>
      </div>
      <div class="grid" id="diacriticsGrid"></div>
    `;
    
    const grid = document.getElementById('diacriticsGrid');
    DIACRITICS.forEach(D => {
      const card = document.createElement('div');
      card.className = 'card diacritic-card';
      card.innerHTML = `
        <div class="diacritic-symbol">
          <span class="base-letter">د</span><span class="diacritic">${D.ar}</span>
        </div>
        <h3>${D.name}</h3>
        <div class="sound-info">${D.pic} Sound: "${D.sound}"</div>
        <p class="description">${D.description}</p>
        <div class="diacritic-examples">
          ${D.examples.map(ex => `<div class="example-item">${ex}</div>`).join('')}
        </div>
        <button class="say btn-touch">🔊 Hear Examples</button>
      `;
      
      card.querySelector('.say').addEventListener('click', () => {
        D.examples.forEach((ex, i) => {
          setTimeout(() => {
            const arabicPart = ex.split(' (')[0];
            speakAr(arabicPart, 0.7);
          }, i * 2000);
        });
      });
      
      grid.appendChild(card);
    });
  },

  words() {
    const showHarakat = document.getElementById('harakatToggle')?.checked;
    
    app.innerHTML = `
      <div class="section">
        <h2>🐾 Vocabulary</h2>
        <div class="pill">Learn words by category</div>
      </div>
      <div class="catbar" id="catbar"></div>
      <div class="grid" id="wordsGrid"></div>
    `;
    
    const catbar = document.getElementById('catbar');
    const grid = document.getElementById('wordsGrid');
    
    WORD_CATEGORIES.forEach((cat, idx) => {
      const btn = document.createElement('button');
      btn.className = idx === 0 ? 'active btn-touch' : 'btn-touch';
      btn.textContent = `${cat.icon} ${cat.name}`;
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('#catbar button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        showCategory(cat);
      });
      catbar.appendChild(btn);
    });
    
    function showCategory(cat) {
      grid.innerHTML = "";
      cat.words.forEach(w => {
        const card = document.createElement('div');
        card.className = 'card wordcard';
        card.innerHTML = `
          <div class="kidpic">${w.pic}</div>
          <div class="ar">${showHarakat ? w.harakat : w.ar}</div>
          <div class="eng">${w.en}</div>
          <div class="btn-group">
            <button class="icon-btn say btn-touch" title="Listen to word">🔊</button>
            <button class="icon-btn spell btn-touch" title="Spell letters">🔤</button>
          </div>
        `;
        
        card.querySelector('.say').addEventListener('click', (e) => {
          e.preventDefault();
          speakAr(w.ar);
        });
        
        card.querySelector('.spell').addEventListener('click', (e) => {
          e.preventDefault();
          spellWord(w);
        });
        
        grid.appendChild(card);
      });
    }
    
    showCategory(WORD_CATEGORIES[0]);
  },

  phrases() {
    app.innerHTML = `
      <div class="section">
        <h2>💬 Common Phrases</h2>
        <div class="pill">Essential Arabic phrases for daily use</div>
      </div>
      <div class="grid" id="phrasesGrid"></div>
    `;
    
    const grid = document.getElementById('phrasesGrid');
    const categories = [...new Set(PHRASES.map(p => p.category))];
    
    categories.forEach(cat => {
      const section = document.createElement('div');
      section.className = 'phrase-section';
      section.innerHTML = `<h3>${cat.charAt(0).toUpperCase() + cat.slice(1)}</h3>`;
      
      const phrasesInCat = PHRASES.filter(p => p.category === cat);
      phrasesInCat.forEach(phrase => {
        const card = document.createElement('div');
        card.className = 'card phrase-card';
        card.innerHTML = `
          <div class="arabic-phrase">${phrase.ar}</div>
          <div class="english-phrase">${phrase.en}</div>
          <div class="transliteration">${phrase.transliteration}</div>
          <button class="say btn-touch">🔊 Listen</button>
        `;
        
        card.querySelector('.say').addEventListener('click', () => {
          speakAr(phrase.ar, 0.75);
        });
        
        section.appendChild(card);
      });
      
      grid.appendChild(section);
    });
  },

  quizzes() {
    app.innerHTML = `
      <div class="section">
        <h2>🎯 Quizzes</h2>
        <div class="pill">Test your Arabic knowledge</div>
      </div>
      <div class="quiz-menu">
        <div class="quiz-card">
          <h3>🔊 Listening Quiz</h3>
          <p>Hear Arabic and choose the correct answer</p>
          <button id="startListening" class="primary btn-touch">Start</button>
        </div>
        <div class="quiz-card">
          <h3>📝 Spelling Quiz</h3>
          <p>Build Arabic words letter by letter</p>
          <button id="startSpelling" class="primary btn-touch">Start</button>
        </div>
        <div class="quiz-card">
          <h3>🔄 Translation Quiz</h3>
          <p>Translate between Arabic and English</p>
          <button id="startTranslation" class="primary btn-touch">Start</button>
        </div>
        <div class="quiz-card">
          <h3>✍️ Forms Quiz</h3>
          <p>Identify letter forms in different positions</p>
          <button id="startForms" class="primary btn-touch">Start</button>
        </div>
      </div>
      <div id="quizArea"></div>
    `;
    
    document.getElementById('startListening')?.addEventListener('click', startListeningQuiz);
    document.getElementById('startSpelling')?.addEventListener('click', startSpellingQuiz);
    document.getElementById('startTranslation')?.addEventListener('click', startTranslationQuiz);
    document.getElementById('startForms')?.addEventListener('click', startFormsQuiz);
  },

  games() {
    app.innerHTML = `
      <div class="section">
        <h2>🎮 Educational Games</h2>
        <div class="pill">Learn while having fun!</div>
      </div>
      <div class="games-menu">
        <div class="game-card">
          <h3>🧩 Memory Match</h3>
          <p>Match Arabic letters with their sounds or words with pictures</p>
          <button id="startMemory" class="primary btn-touch">Play</button>
        </div>
        <div class="game-card">
          <h3>🎯 Word Hunter</h3>
          <p>Find and collect Arabic words in a grid</p>
          <button id="startHunter" class="primary btn-touch">Play</button>
        </div>
        <div class="game-card">
          <h3>🏃 Speed Challenge</h3>
          <p>How fast can you identify Arabic letters?</p>
          <button id="startSpeed" class="primary btn-touch">Play</button>
        </div>
      </div>
      <div id="gameArea"></div>
    `;
    
    document.getElementById('startMemory')?.addEventListener('click', startMemoryGame);
    document.getElementById('startHunter')?.addEventListener('click', startWordHunter);
    document.getElementById('startSpeed')?.addEventListener('click', startSpeedChallenge);
  },

  tutorials() {
    app.innerHTML = `
      <div class="section">
        <h2>📖 Tutorials</h2>
        <div class="pill">Learn how Arabic works</div>
      </div>
      <div class="tutorial-list">
        <div class="tutorial-card">
          <h3>🔤 How Letters Connect</h3>
          <p>Learn the rules of Arabic letter connections</p>
          <button class="start-tutorial btn-touch" data-tutorial="connections">Start Tutorial</button>
        </div>
        <div class="tutorial-card">
          <h3>📝 Writing Direction</h3>
          <p>Arabic is written from right to left</p>
          <button class="start-tutorial btn-touch" data-tutorial="direction">Start Tutorial</button>
        </div>
        <div class="tutorial-card">
          <h3>🎵 Vowel Sounds</h3>
          <p>Understanding harakat and vowel marks</p>
          <button class="start-tutorial btn-touch" data-tutorial="vowels">Start Tutorial</button>
        </div>
        <div class="tutorial-card">
          <h3>🏗️ Building Words</h3>
          <p>How to combine letters into words</p>
          <button class="start-tutorial btn-touch" data-tutorial="words">Start Tutorial</button>
        </div>
      </div>
      <div id="tutorialArea"></div>
    `;
    
    document.querySelectorAll('.start-tutorial').forEach(btn => {
      btn.addEventListener('click', () => startTutorial(btn.dataset.tutorial));
    });
  }
};

// Helper Functions
function showModal(content, callback) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      ${content}
      <button class="primary btn-touch">OK</button>
    </div>
  `;
  
  const okBtn = modal.querySelector('button');
  okBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
    if (callback) callback();
  });
  
  document.body.appendChild(modal);
}

function showLetterExamples(letter) {
  const examples = letter.examples.join('<br>');
  showModal(`
    <h3>${letter.name} (${letter.ar})</h3>
    <div class="examples-list">${examples}</div>
  `, () => {
    letter.examples.forEach((ex, i) => {
      setTimeout(() => {
        const arabicPart = ex.split(' (')[0];
        speakAr(arabicPart);
      }, i * 1500);
    });
  });
}

function spellWord(word) {
  const letters = word.ar.split('');
  letters.forEach((letter, i) => {
    setTimeout(() => speakAr(letter), i * 500);
  });
  setTimeout(() => speakAr(word.ar), letters.length * 500 + 500);
}

// Quiz Functions
function startListeningQuiz() {
  const area = document.getElementById('quizArea');
  const allWords = WORD_CATEGORIES.flatMap(c => c.words);
  let score = 0;
  let round = 0;
  const maxRounds = 10;
  
  function nextRound() {
    if (round >= maxRounds) {
      area.innerHTML = `
        <div class="quiz-complete">
          <h3>Quiz Complete!</h3>
          <div class="score">Score: ${score}/${maxRounds}</div>
          <button class="primary btn-touch" onclick="route('quizzes')">Back to Quizzes</button>
        </div>
      `;
      playSound('correct');
      return;
    }
    
    round++;
    const correctWord = allWords[Math.floor(Math.random() * allWords.length)];
    const options = shuffle([correctWord, ...pickMany(allWords.filter(w => w !== correctWord), 3)]);
    
    area.innerHTML = `
      <div class="quiz-round">
        <h3>Round ${round}/${maxRounds}</h3>
        <button class="hear-btn btn-touch">🔊 Listen Again</button>
        <div class="quiz-options">
          ${options.map(w => `
            <button class="option-btn btn-touch" data-word="${w.ar}">
              <span class="option-pic">${w.pic}</span>
              <span class="option-text">${w.en}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
    
    const hearBtn = area.querySelector('.hear-btn');
    hearBtn.addEventListener('click', () => speakAr(correctWord.ar));
    
    area.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.word === correctWord.ar) {
          btn.classList.add('correct');
          score++;
          playSound('correct');
          setTimeout(nextRound, 1000);
        } else {
          btn.classList.add('wrong');
          playSound('wrong');
        }
      });
    });
    
    setTimeout(() => speakAr(correctWord.ar), 500);
  }
  
  nextRound();
}

function startSpellingQuiz() {
  const area = document.getElementById('quizArea');
  const allWords = WORD_CATEGORIES.flatMap(c => c.words);
  const word = allWords[Math.floor(Math.random() * allWords.length)];
  const letters = word.ar.split('');
  let currentIndex = 0;
  
  area.innerHTML = `
    <div class="spelling-quiz">
      <h3>Spell the word for:</h3>
      <div class="word-prompt">
        <div class="word-pic">${word.pic}</div>
        <div class="word-en">${word.en}</div>
      </div>
      <div class="spelling-progress" id="progress"></div>
      <div class="letter-options" id="letterOptions"></div>
    </div>
  `;
  
  function updateProgress() {
    const progress = document.getElementById('progress');
    progress.innerHTML = letters.map((l, i) => {
      if (i < currentIndex) return `<span class="done">${l}</span>`;
      if (i === currentIndex) return `<span class="current">?</span>`;
      return `<span class="pending">_</span>`;
    }).join('');
  }
  
  function showOptions() {
    const optionsDiv = document.getElementById('letterOptions');
    const correctLetter = letters[currentIndex];
    const allLetters = LETTERS.map(l => l.ar);
    const options = shuffle([correctLetter, ...pickMany(allLetters.filter(l => l !== correctLetter), 5)]);
    
    optionsDiv.innerHTML = options.map(letter => 
      `<button class="letter-option btn-touch">${letter}</button>`
    ).join('');
    
    optionsDiv.querySelectorAll('.letter-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.textContent === correctLetter) {
          btn.classList.add('correct');
          currentIndex++;
          playSound('correct');
          
          if (currentIndex >= letters.length) {
            setTimeout(() => {
              area.innerHTML = `
                <div class="quiz-complete">
                  <h3>Perfect! You spelled "${word.en}"</h3>
                  <div class="arabic-result">${word.ar}</div>
                  <button class="primary btn-touch" onclick="speakAr('${word.ar}')">🔊 Listen</button>
                  <button class="primary btn-touch" onclick="startSpellingQuiz()">Next Word</button>
                </div>
              `;
            }, 500);
          } else {
            setTimeout(() => {
              updateProgress();
              showOptions();
            }, 500);
          }
        } else {
          btn.classList.add('wrong');
          playSound('wrong');
        }
      });
    });
  }
  
  updateProgress();
  showOptions();
}

function startTranslationQuiz() {
  const area = document.getElementById('quizArea');
  const allWords = WORD_CATEGORIES.flatMap(c => c.words);
  let score = 0;
  let round = 0;
  const maxRounds = 10;
  
  function nextRound() {
    if (round >= maxRounds) {
      area.innerHTML = `
        <div class="quiz-complete">
          <h3>Translation Quiz Complete!</h3>
          <div class="score">Score: ${score}/${maxRounds}</div>
          <button class="primary btn-touch" onclick="route('quizzes')">Back to Quizzes</button>
        </div>
      `;
      return;
    }
    
    round++;
    const isArabicToEnglish = Math.random() > 0.5;
    const correctWord = allWords[Math.floor(Math.random() * allWords.length)];
    const options = shuffle([correctWord, ...pickMany(allWords.filter(w => w !== correctWord), 3)]);
    
    area.innerHTML = `
      <div class="translation-quiz">
        <h3>Round ${round}/${maxRounds}</h3>
        <div class="translate-prompt">
          ${isArabicToEnglish ? 
            `<div class="arabic-text">${correctWord.ar}</div>` :
            `<div class="english-text">${correctWord.pic} ${correctWord.en}</div>`
          }
        </div>
        <p>Choose the translation:</p>
        <div class="translation-options">
          ${options.map(w => `
            <button class="trans-option btn-touch" data-word="${w.ar}">
              ${isArabicToEnglish ? 
                `${w.pic} ${w.en}` :
                `<span class="arabic-option">${w.ar}</span>`
              }
            </button>
          `).join('')}
        </div>
      </div>
    `;
    
    area.querySelectorAll('.trans-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.word === correctWord.ar) {
          btn.classList.add('correct');
          score++;
          playSound('correct');
          setTimeout(nextRound, 1000);
        } else {
          btn.classList.add('wrong');
          playSound('wrong');
        }
      });
    });
  }
  
  nextRound();
}

function startFormsQuiz() {
  const area = document.getElementById('quizArea');
  let score = 0;
  let round = 0;
  const maxRounds = 10;
  
  function nextRound() {
    if (round >= maxRounds) {
      area.innerHTML = `
        <div class="quiz-complete">
          <h3>Forms Quiz Complete!</h3>
          <div class="score">Score: ${score}/${maxRounds}</div>
          <button class="primary btn-touch" onclick="route('quizzes')">Back to Quizzes</button>
        </div>
      `;
      return;
    }
    
    round++;
    const letter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
    const positions = ['isolated', 'initial', 'medial', 'final'];
    const correctPosition = positions[Math.floor(Math.random() * positions.length)];
    
    area.innerHTML = `
      <div class="forms-quiz">
        <h3>Round ${round}/${maxRounds}</h3>
        <p>Which position is this letter in?</p>
        <div class="form-display">${letter.forms[correctPosition]}</div>
        <p class="letter-name">${letter.name}</p>
        <div class="position-options">
          ${positions.map(pos => `
            <button class="pos-option btn-touch" data-position="${pos}">
              ${pos.charAt(0).toUpperCase() + pos.slice(1)}
            </button>
          `).join('')}
        </div>
      </div>
    `;
    
    area.querySelectorAll('.pos-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.position === correctPosition) {
          btn.classList.add('correct');
          score++;
          playSound('correct');
          setTimeout(nextRound, 1000);
        } else {
          btn.classList.add('wrong');
          playSound('wrong');
        }
      });
    });
  }
  
  nextRound();
}

// Game Functions
function startMemoryGame() {
  const area = document.getElementById('gameArea');
  const pairs = 8;
  const selectedWords = shuffle(WORD_CATEGORIES.flatMap(c => c.words)).slice(0, pairs);
  const cards = [];
  
  selectedWords.forEach(word => {
    cards.push({ type: 'arabic', value: word.ar, match: word.ar });
    cards.push({ type: 'picture', value: word.pic, match: word.ar });
  });
  
  shuffle(cards);
  
  let flipped = [];
  let matched = [];
  let moves = 0;
  
  area.innerHTML = `
    <div class="memory-game">
      <div class="game-stats">
        <span>Moves: <span id="moves">0</span></span>
        <span>Pairs: <span id="pairs">0</span>/${pairs}</span>
      </div>
      <div class="memory-grid"></div>
    </div>
  `;
  
  const grid = area.querySelector('.memory-grid');
  
  cards.forEach((card, index) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'memory-card';
    cardEl.dataset.index = index;
    cardEl.innerHTML = `
      <div class="card-back">?</div>
      <div class="card-front"></div>
    `;
    
    cardEl.addEventListener('click', () => {
      if (flipped.length >= 2 || flipped.includes(index) || matched.includes(index)) return;
      
      flipped.push(index);
      const front = cardEl.querySelector('.card-front');
      
      if (card.type === 'arabic') {
        front.innerHTML = `<span class="arabic-text">${card.value}</span>`;
        speakAr(card.value);
      } else {
        front.innerHTML = `<span class="pic-text">${card.value}</span>`;
      }
      
      cardEl.classList.add('flipped');
      
      if (flipped.length === 2) {
        moves++;
        document.getElementById('moves').textContent = moves;
        
        const [first, second] = flipped;
        if (cards[first].match === cards[second].match) {
          matched.push(first, second);
          document.getElementById('pairs').textContent = matched.length / 2;
          playSound('correct');
          flipped = [];
          
          if (matched.length === cards.length) {
            setTimeout(() => {
              area.innerHTML = `
                <div class="game-complete">
                  <h3>Congratulations!</h3>
                  <p>Completed in ${moves} moves!</p>
                  <button class="primary btn-touch" onclick="startMemoryGame()">Play Again</button>
                </div>
              `;
            }, 500);
          }
        } else {
          setTimeout(() => {
            document.querySelectorAll('.memory-card').forEach(c => {
              if (flipped.includes(parseInt(c.dataset.index))) {
                c.classList.remove('flipped');
              }
            });
            flipped = [];
          }, 1500);
        }
      }
    });
    
    grid.appendChild(cardEl);
  });
}

function startWordHunter() {
  const area = document.getElementById('gameArea');
  const gridSize = 8;
  const words = shuffle(WORD_CATEGORIES.flatMap(c => c.words)).slice(0, 5);
  let foundWords = [];
  let score = 0;
  
  // Create letter grid
  const grid = [];
  for (let i = 0; i < gridSize; i++) {
    grid[i] = [];
    for (let j = 0; j < gridSize; j++) {
      grid[i][j] = LETTERS[Math.floor(Math.random() * LETTERS.length)].ar;
    }
  }
  
  // Place words in grid
  words.forEach(word => {
    const letters = word.ar.split('');
    const placed = false;
    let attempts = 0;
    
    while (!placed && attempts < 50) {
      const row = Math.floor(Math.random() * gridSize);
      const col = Math.floor(Math.random() * (gridSize - letters.length));
      
      if (col + letters.length <= gridSize) {
        for (let i = 0; i < letters.length; i++) {
          grid[row][col + i] = letters[i];
        }
        break;
      }
      attempts++;
    }
  });
  
  area.innerHTML = `
    <div class="word-hunter">
      <div class="hunter-info">
        <h3>Find these words:</h3>
        <div class="words-to-find">
          ${words.map(w => `
            <div class="word-item ${foundWords.includes(w.ar) ? 'found' : ''}" data-word="${w.ar}">
              ${w.pic} ${w.en}
            </div>
          `).join('')}
        </div>
        <div class="score">Score: <span id="score">0</span></div>
      </div>
      <div class="letter-grid">
        ${grid.map((row, i) => 
          row.map((letter, j) => 
            `<div class="grid-cell" data-row="${i}" data-col="${j}">${letter}</div>`
          ).join('')
        ).join('')}
      </div>
    </div>
  `;
  
  let selectedCells = [];
  
  area.querySelectorAll('.grid-cell').forEach(cell => {
    cell.addEventListener('click', () => {
      cell.classList.toggle('selected');
      
      const selected = Array.from(area.querySelectorAll('.grid-cell.selected'));
      const selectedWord = selected.map(c => c.textContent).join('');
      
      words.forEach(word => {
        if (selectedWord === word.ar && !foundWords.includes(word.ar)) {
          foundWords.push(word.ar);
          score += 10;
          document.getElementById('score').textContent = score;
          
          area.querySelector(`[data-word="${word.ar}"]`).classList.add('found');
          selected.forEach(c => c.classList.add('found-cell'));
          playSound('correct');
          speakAr(word.ar);
          
          if (foundWords.length === words.length) {
            setTimeout(() => {
              area.innerHTML = `
                <div class="game-complete">
                  <h3>All words found!</h3>
                  <p>Final Score: ${score}</p>
                  <button class="primary btn-touch" onclick="startWordHunter()">Play Again</button>
                </div>
              `;
            }, 1000);
          }
        }
      });
    });
  });
}

function startSpeedChallenge() {
  const area = document.getElementById('gameArea');
  let score = 0;
  let timeLeft = 60;
  let gameActive = true;
  
  function showLetter() {
    if (!gameActive) return;
    
    const letter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
    const options = shuffle([letter, ...pickMany(LETTERS.filter(l => l !== letter), 3)]);
    
    area.innerHTML = `
      <div class="speed-challenge">
        <div class="game-header">
          <div>Score: <span id="score">${score}</span></div>
          <div>Time: <span id="time">${timeLeft}</span>s</div>
        </div>
        <div class="challenge-prompt">
          <h3>Find this letter:</h3>
          <div class="target-letter">${letter.ar}</div>
          <div class="letter-name">${letter.name}</div>
        </div>
        <div class="speed-options">
          ${options.map(l => `
            <button class="speed-option btn-touch" data-letter="${l.ar}">
              ${l.ar}
            </button>
          `).join('')}
        </div>
      </div>
    `;
    
    area.querySelectorAll('.speed-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.letter === letter.ar) {
          score += 5;
          playSound('correct');
          showLetter();
        } else {
          score = Math.max(0, score - 2);
          playSound('wrong');
        }
      });
    });
  }
  
  showLetter();
  speakAr("Start!");
  
  const timer = setInterval(() => {
    timeLeft--;
    if (document.getElementById('time')) {
      document.getElementById('time').textContent = timeLeft;
    }
    
    if (timeLeft <= 0) {
      clearInterval(timer);
      gameActive = false;
      area.innerHTML = `
        <div class="game-complete">
          <h3>Time's Up!</h3>
          <p>Final Score: ${score}</p>
          <button class="primary btn-touch" onclick="startSpeedChallenge()">Play Again</button>
        </div>
      `;
    }
  }, 1000);
}

// Tutorial Functions
function startTutorial(type) {
  const area = document.getElementById('tutorialArea');
  
  const tutorials = {
    connections: {
      title: "How Letters Connect",
      steps: [
        {
          content: "Arabic letters connect to form words. Most letters change shape based on their position.",
          example: "ب + ي + ت = بيت (house)"
        },
        {
          content: "Some letters only connect to the right (like د, ر, ز, و)",
          example: "د connects: دار but not ـد"
        },
        {
          content: "Most letters have 4 forms: isolated, initial, medial, and final",
          example: "Letter ع: ع (isolated), عـ (initial), ـعـ (medial), ـع (final)"
        }
      ]
    },
    direction: {
      title: "Writing Direction",
      steps: [
        {
          content: "Arabic is written from right to left ←",
          example: "مرحبا (Hello) starts from م on the right"
        },
        {
          content: "Numbers are still written left to right →",
          example: "123 in Arabic: ١٢٣"
        }
      ]
    },
    vowels: {
      title: "Vowel Sounds (Harakat)",
      steps: [
        {
          content: "Fatha (َ) makes an 'a' sound",
          example: "كَتَبَ (kataba - he wrote)"
        },
        {
          content: "Kasra (ِ) makes an 'i' sound",
          example: "كِتاب (kitaab - book)"
        },
        {
          content: "Damma (ُ) makes an 'u' sound",
          example: "كُتُب (kutub - books)"
        }
      ]
    },
    words: {
      title: "Building Words",
      steps: [
        {
          content: "Start with root letters (usually 3)",
          example: "ك-ت-ب (k-t-b) relates to writing"
        },
        {
          content: "Add patterns to create words",
          example: "كَتَبَ (wrote), كِتاب (book), مَكْتَب (office)"
        },
        {
          content: "Practice connecting letters smoothly",
          example: "س + ل + ا + م = سلام (peace)"
        }
      ]
    }
  };
  
  const tutorial = tutorials[type];
  let currentStep = 0;
  
  function showStep() {
    const step = tutorial.steps[currentStep];
    area.innerHTML = `
      <div class="tutorial-content">
        <h3>${tutorial.title}</h3>
        <div class="step-indicator">Step ${currentStep + 1} of ${tutorial.steps.length}</div>
        <div class="step-content">
          <p>${step.content}</p>
          <div class="step-example">${step.example}</div>
        </div>
        <div class="tutorial-nav">
          ${currentStep > 0 ? '<button class="prev-btn btn-touch">Previous</button>' : ''}
          ${currentStep < tutorial.steps.length - 1 ? 
            '<button class="next-btn btn-touch">Next</button>' :
            '<button class="complete-btn btn-touch">Complete</button>'
          }
        </div>
      </div>
    `;
    
    area.querySelector('.prev-btn')?.addEventListener('click', () => {
      currentStep--;
      showStep();
    });
    
    area.querySelector('.next-btn')?.addEventListener('click', () => {
      currentStep++;
      showStep();
    });
    
    area.querySelector('.complete-btn')?.addEventListener('click', () => {
      area.innerHTML = `
        <div class="tutorial-complete">
          <h3>Tutorial Complete!</h3>
          <p>Great job learning about ${tutorial.title}!</p>
          <button class="primary btn-touch" onclick="route('tutorials')">Back to Tutorials</button>
        </div>
      `;
    });
    
    // Speak the example
    if (step.example.includes('(')) {
      const arabicPart = step.example.split(' (')[0].split(':').pop().trim();
      if (arabicPart && /[\u0600-\u06FF]/.test(arabicPart)) {
        setTimeout(() => speakAr(arabicPart), 500);
      }
    }
  }
  
  showStep();
}

// Utility Functions
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickMany(list, count) {
  const shuffled = shuffle(list);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Make functions globally available for onclick handlers
window.route = route;
window.speakAr = speakAr;
window.startSpellingQuiz = startSpellingQuiz;
window.startMemoryGame = startMemoryGame;
window.startWordHunter = startWordHunter;
window.startSpeedChallenge = startSpeedChallenge;

})();