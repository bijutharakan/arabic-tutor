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
        <div class="pill">Test your Arabic knowledge with improved scoring and feedback</div>
      </div>
      <div class="quiz-menu">
        <div class="quiz-card">
          <h3>🔊 Listening Quiz</h3>
          <p>Hear Arabic and choose the correct answer</p>
          <div class="quiz-features">• Proper scoring • Wrong answer prevention • Detailed feedback</div>
          <button id="startListening" class="primary btn-touch">Start</button>
        </div>
        <div class="quiz-card">
          <h3>📝 Spelling Quiz</h3>
          <p>Build Arabic words letter by letter (Right-to-Left)</p>
          <div class="quiz-features">• Fixed RTL display • Progressive hints • Score tracking</div>
          <button id="startSpelling" class="primary btn-touch">Start</button>
        </div>
        <div class="quiz-card">
          <h3>🔄 Translation Quiz</h3>
          <p>Translate between Arabic and English</p>
          <div class="quiz-features">• Bidirectional • Audio feedback • Detailed results</div>
          <button id="startTranslation" class="primary btn-touch">Start</button>
        </div>
        <div class="quiz-card">
          <h3>✍️ Forms Quiz</h3>
          <p>Identify letter forms in different positions</p>
          <div class="quiz-features">• Connection info • Visual guides • Explanations</div>
          <button id="startForms" class="primary btn-touch">Start</button>
        </div>
        <div class="quiz-card">
          <h3>🎵 Diacritics Quiz</h3>
          <p>Test your knowledge of Arabic vowel marks</p>
          <div class="quiz-features">• Harakat practice • Sound differences • NEW!</div>
          <button id="startDiacritics" class="primary btn-touch">Start</button>
        </div>
        <div class="quiz-card">
          <h3>⚡ Speed Quiz</h3>
          <p>Quick-fire Arabic letter and word recognition</p>
          <div class="quiz-features">• Timed challenges • Multiple difficulty levels • NEW!</div>
          <button id="startSpeedQuiz" class="primary btn-touch">Start</button>
        </div>
      </div>
      <div id="quizArea"></div>
    `;
    
    document.getElementById('startListening')?.addEventListener('click', startListeningQuiz);
    document.getElementById('startSpelling')?.addEventListener('click', startSpellingQuiz);
    document.getElementById('startTranslation')?.addEventListener('click', startTranslationQuiz);
    document.getElementById('startForms')?.addEventListener('click', startFormsQuiz);
    document.getElementById('startDiacritics')?.addEventListener('click', startDiacriticsQuiz);
    document.getElementById('startSpeedQuiz')?.addEventListener('click', startSpeedQuiz);
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
    // Check if comprehensive tutorials are loaded
    const hasAdvancedTutorials = typeof TUTORIALS_DATA !== 'undefined';
    
    if (hasAdvancedTutorials) {
      // Show comprehensive tutorial categories
      let categoriesHTML = '';
      for (const [key, category] of Object.entries(TUTORIAL_CATEGORIES)) {
        categoriesHTML += `
          <div class="tutorial-category">
            <h3>${category.title}</h3>
            <p class="category-desc">${category.description}</p>
            <div class="tutorial-grid">`;
        
        category.tutorials.forEach(tutorialId => {
          const tutorial = TUTORIALS_DATA[tutorialId];
          if (tutorial) {
            categoriesHTML += `
              <div class="tutorial-card">
                <div class="tutorial-header">
                  <span class="tutorial-icon">${tutorial.title.charAt(0)}</span>
                  <span class="tutorial-level">${tutorial.level}</span>
                </div>
                <h4>${tutorial.title.substring(2)}</h4>
                <p>${tutorial.description}</p>
                <div class="tutorial-meta">
                  <span>⏱️ ${tutorial.duration}</span>
                  <span>📚 ${tutorial.steps.length} lessons</span>
                </div>
                <button class="start-tutorial primary btn-touch" data-tutorial="${tutorialId}">Start Learning</button>
              </div>`;
          }
        });
        
        categoriesHTML += `</div></div>`;
      }
      
      // Add daily tip
      const tipIndex = new Date().getDate() % LEARNING_TIPS.length;
      const dailyTip = LEARNING_TIPS[tipIndex];
      
      app.innerHTML = `
        <div class="section">
          <h2>📖 Comprehensive Arabic Learning</h2>
          <div class="pill">Structured lessons to master Arabic</div>
          <div class="daily-tip">${dailyTip}</div>
        </div>
        ${categoriesHTML}
        <div id="tutorialArea"></div>
      `;
    } else {
      // Fallback to simple tutorials
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
    }
    
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
  let wrongAnswers = 0;
  let round = 0;
  const maxRounds = 10;
  
  function nextRound() {
    if (round >= maxRounds) {
      const percentage = Math.round((score / maxRounds) * 100);
      area.innerHTML = `
        <div class="quiz-complete">
          <h3>Listening Quiz Complete!</h3>
          <div class="score-details">
            <div class="score-main">Score: ${score}/${maxRounds} (${percentage}%)</div>
            <div class="score-breakdown">
              ✅ Correct: ${score} | ❌ Wrong: ${wrongAnswers}
            </div>
          </div>
          ${percentage >= 80 ? '<div class="achievement">🏆 Excellent work!</div>' : 
            percentage >= 60 ? '<div class="achievement">👍 Good job!</div>' : 
            '<div class="encouragement">💪 Keep practicing!</div>'}
          <div class="quiz-actions">
            <button class="primary btn-touch" onclick="startListeningQuiz()">Try Again</button>
            <button class="btn-touch" onclick="route('quizzes')">Back to Quizzes</button>
          </div>
        </div>
      `;
      playSound(percentage >= 80 ? 'correct' : 'wrong');
      return;
    }
    
    round++;
    const correctWord = allWords[Math.floor(Math.random() * allWords.length)];
    const options = shuffle([correctWord, ...pickMany(allWords.filter(w => w !== correctWord), 3)]);
    let answered = false;
    
    area.innerHTML = `
      <div class="quiz-round">
        <div class="quiz-header">
          <h3>Round ${round}/${maxRounds}</h3>
          <div class="score-display">Score: ${score}/${round - 1}</div>
        </div>
        <div class="audio-section">
          <button class="hear-btn btn-touch">🔊 Listen Again</button>
          <div class="instructions">Choose the word you hear:</div>
        </div>
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
        if (answered) return; // Prevent multiple answers
        
        answered = true;
        if (btn.dataset.word === correctWord.ar) {
          btn.classList.add('correct');
          score++;
          playSound('correct');
          // Show correct feedback
          area.innerHTML += `<div class="feedback correct-feedback">✅ Correct! "${correctWord.en}" is ${correctWord.ar}</div>`;
          setTimeout(nextRound, 1500);
        } else {
          btn.classList.add('wrong');
          wrongAnswers++;
          playSound('wrong');
          // Show the correct answer
          const correctBtn = area.querySelector(`[data-word="${correctWord.ar}"]`);
          correctBtn.classList.add('correct-highlight');
          area.innerHTML += `<div class="feedback wrong-feedback">❌ Wrong! The correct answer was "${correctWord.en}" (${correctWord.ar})</div>`;
          // Disable all buttons
          area.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
          setTimeout(nextRound, 2500);
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
  let score = 0;
  let totalWords = 0;
  
  function startNewWord() {
    const word = allWords[Math.floor(Math.random() * allWords.length)];
    const letters = word.ar.split('');
    let currentIndex = 0;
    let mistakes = 0;
    
    area.innerHTML = `
      <div class="spelling-quiz">
        <div class="quiz-header">
          <h3>Spell the word for:</h3>
          <div class="quiz-stats">Words: ${totalWords} | Score: ${score}</div>
        </div>
        <div class="word-prompt">
          <div class="word-pic">${word.pic}</div>
          <div class="word-en">${word.en}</div>
          <button class="hint-btn btn-touch" onclick="speakAr('${word.ar}')">🔊 Hear Word</button>
        </div>
        <div class="spelling-direction-note">Build the Arabic word from right to left ←</div>
        <div class="spelling-progress" id="progress"></div>
        <div class="letter-options" id="letterOptions"></div>
        <div class="spelling-actions">
          <button class="skip-btn btn-touch" onclick="startSpellingQuiz()">Skip Word</button>
        </div>
      </div>
    `;
    
    function updateProgress() {
      const progress = document.getElementById('progress');
      // Build Arabic text from right to left - reverse the display order
      const displayLetters = [];
      for (let i = letters.length - 1; i >= 0; i--) {
        if (i >= letters.length - currentIndex) {
          displayLetters.push(`<span class="done">${letters[i]}</span>`);
        } else if (i === letters.length - currentIndex - 1) {
          displayLetters.push(`<span class="current">?</span>`);
        } else {
          displayLetters.push(`<span class="pending">_</span>`);
        }
      }
      progress.innerHTML = `<div class="rtl-progress">${displayLetters.join('')}</div>`;
      
      // Add progress indicator
      const progressPercent = (currentIndex / letters.length) * 100;
      progress.innerHTML += `
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progressPercent}%"></div>
        </div>
        <div class="progress-text">Letter ${currentIndex + 1} of ${letters.length}</div>
      `;
    }
    
    function showOptions() {
      const optionsDiv = document.getElementById('letterOptions');
      const correctLetter = letters[currentIndex];
      const allLetters = LETTERS.map(l => l.ar);
      const options = shuffle([correctLetter, ...pickMany(allLetters.filter(l => l !== correctLetter), 5)]);
      let answered = false;
      
      optionsDiv.innerHTML = `
        <div class="letter-instruction">Choose the ${currentIndex === 0 ? 'first (rightmost)' : 
          currentIndex === letters.length - 1 ? 'last (leftmost)' : 'next'} letter:</div>
        <div class="letter-grid">
          ${options.map(letter => 
            `<button class="letter-option btn-touch">${letter}</button>`
          ).join('')}
        </div>
      `;
      
      optionsDiv.querySelectorAll('.letter-option').forEach(btn => {
        btn.addEventListener('click', () => {
          if (answered) return; // Prevent multiple clicks
          answered = true;
          
          if (btn.textContent === correctLetter) {
            btn.classList.add('correct');
            currentIndex++;
            playSound('correct');
            
            if (currentIndex >= letters.length) {
              totalWords++;
              const wordScore = Math.max(1, 3 - mistakes); // 3 points if perfect, minimum 1
              score += wordScore;
              
              setTimeout(() => {
                area.innerHTML = `
                  <div class="word-complete">
                    <h3>Excellent! You spelled "${word.en}"</h3>
                    <div class="arabic-result-display">
                      <div class="arabic-word">${word.ar}</div>
                      <div class="word-meaning">(${word.en})</div>
                    </div>
                    <div class="word-score">+${wordScore} points ${mistakes === 0 ? '🏆 Perfect!' : ''}</div>
                    <div class="quiz-actions">
                      <button class="primary btn-touch" onclick="speakAr('${word.ar}')">🔊 Listen</button>
                      <button class="primary btn-touch" onclick="startSpellingQuiz().startNewWord()">Next Word</button>
                      <button class="btn-touch" onclick="route('quizzes')">Finish Quiz</button>
                    </div>
                  </div>
                `;
              }, 800);
            } else {
              setTimeout(() => {
                updateProgress();
                showOptions();
              }, 600);
            }
          } else {
            btn.classList.add('wrong');
            mistakes++;
            playSound('wrong');
            
            // Show feedback and correct answer
            const correctBtn = optionsDiv.querySelector(`button:nth-child(${options.indexOf(correctLetter) + 1})`);
            setTimeout(() => {
              if (correctBtn) correctBtn.classList.add('correct-highlight');
              // Disable all buttons briefly
              optionsDiv.querySelectorAll('.letter-option').forEach(b => b.disabled = true);
              
              setTimeout(() => {
                answered = false;
                optionsDiv.querySelectorAll('.letter-option').forEach(b => {
                  b.disabled = false;
                  b.classList.remove('wrong', 'correct-highlight');
                });
              }, 1500);
            }, 300);
          }
        });
      });
    }
    
    updateProgress();
    showOptions();
  }
  
  // Add this property to make startNewWord accessible
  startSpellingQuiz.startNewWord = startNewWord;
  startNewWord();
}

function startTranslationQuiz() {
  const area = document.getElementById('quizArea');
  const allWords = WORD_CATEGORIES.flatMap(c => c.words);
  let score = 0;
  let wrongAnswers = 0;
  let round = 0;
  const maxRounds = 10;
  
  function nextRound() {
    if (round >= maxRounds) {
      const percentage = Math.round((score / maxRounds) * 100);
      area.innerHTML = `
        <div class="quiz-complete">
          <h3>Translation Quiz Complete!</h3>
          <div class="score-details">
            <div class="score-main">Score: ${score}/${maxRounds} (${percentage}%)</div>
            <div class="score-breakdown">
              ✅ Correct: ${score} | ❌ Wrong: ${wrongAnswers}
            </div>
          </div>
          ${percentage >= 80 ? '<div class="achievement">🏆 Excellent translation skills!</div>' : 
            percentage >= 60 ? '<div class="achievement">👍 Good work on translations!</div>' : 
            '<div class="encouragement">💪 Keep studying vocabulary!</div>'}
          <div class="quiz-actions">
            <button class="primary btn-touch" onclick="startTranslationQuiz()">Try Again</button>
            <button class="btn-touch" onclick="route('quizzes')">Back to Quizzes</button>
          </div>
        </div>
      `;
      return;
    }
    
    round++;
    const isArabicToEnglish = Math.random() > 0.5;
    const correctWord = allWords[Math.floor(Math.random() * allWords.length)];
    const options = shuffle([correctWord, ...pickMany(allWords.filter(w => w !== correctWord), 3)]);
    let answered = false;
    
    area.innerHTML = `
      <div class="translation-quiz">
        <div class="quiz-header">
          <h3>Round ${round}/${maxRounds}</h3>
          <div class="score-display">Score: ${score}/${round - 1}</div>
        </div>
        <div class="translate-prompt">
          <div class="translation-type">${isArabicToEnglish ? 'Arabic → English' : 'English → Arabic'}</div>
          ${isArabicToEnglish ? 
            `<div class="arabic-text">${correctWord.ar}</div>
             <button class="hear-translation btn-touch" onclick="speakAr('${correctWord.ar}')">🔊</button>` :
            `<div class="english-text">${correctWord.pic} ${correctWord.en}</div>`
          }
        </div>
        <p class="instruction">Choose the ${isArabicToEnglish ? 'English' : 'Arabic'} translation:</p>
        <div class="translation-options">
          ${options.map(w => `
            <button class="trans-option btn-touch" data-word="${w.ar}">
              ${isArabicToEnglish ? 
                `<span class="option-icon">${w.pic}</span>
                 <span class="option-text">${w.en}</span>` :
                `<span class="arabic-option">${w.ar}</span>`
              }
            </button>
          `).join('')}
        </div>
      </div>
    `;
    
    area.querySelectorAll('.trans-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return; // Prevent multiple answers
        
        answered = true;
        if (btn.dataset.word === correctWord.ar) {
          btn.classList.add('correct');
          score++;
          playSound('correct');
          
          // Show success feedback
          const feedback = document.createElement('div');
          feedback.className = 'feedback correct-feedback';
          feedback.innerHTML = `✅ Correct! ${correctWord.ar} = "${correctWord.en}"`;
          area.appendChild(feedback);
          
          if (isArabicToEnglish) {
            setTimeout(() => speakAr(correctWord.ar), 500);
          }
          
          setTimeout(nextRound, 1800);
        } else {
          btn.classList.add('wrong');
          wrongAnswers++;
          playSound('wrong');
          
          // Show correct answer
          const correctBtn = area.querySelector(`[data-word="${correctWord.ar}"]`);
          correctBtn.classList.add('correct-highlight');
          
          // Show error feedback
          const feedback = document.createElement('div');
          feedback.className = 'feedback wrong-feedback';
          feedback.innerHTML = `❌ Wrong! The correct answer is: ${correctWord.ar} = "${correctWord.en}"`;
          area.appendChild(feedback);
          
          // Disable all options
          area.querySelectorAll('.trans-option').forEach(b => b.disabled = true);
          
          // Speak the correct answer
          setTimeout(() => speakAr(correctWord.ar), 500);
          
          setTimeout(nextRound, 2500);
        }
      });
    });
  }
  
  nextRound();
}

function startFormsQuiz() {
  const area = document.getElementById('quizArea');
  let score = 0;
  let wrongAnswers = 0;
  let round = 0;
  const maxRounds = 10;
  
  function nextRound() {
    if (round >= maxRounds) {
      const percentage = Math.round((score / maxRounds) * 100);
      area.innerHTML = `
        <div class="quiz-complete">
          <h3>Letter Forms Quiz Complete!</h3>
          <div class="score-details">
            <div class="score-main">Score: ${score}/${maxRounds} (${percentage}%)</div>
            <div class="score-breakdown">
              ✅ Correct: ${score} | ❌ Wrong: ${wrongAnswers}
            </div>
          </div>
          ${percentage >= 80 ? '<div class="achievement">🏆 Master of Arabic letter forms!</div>' : 
            percentage >= 60 ? '<div class="achievement">👍 Good knowledge of letter forms!</div>' : 
            '<div class="encouragement">💪 Study the letter forms more!</div>'}
          <div class="quiz-actions">
            <button class="primary btn-touch" onclick="startFormsQuiz()">Try Again</button>
            <button class="btn-touch" onclick="route('letterforms')">Study Letter Forms</button>
            <button class="btn-touch" onclick="route('quizzes')">Back to Quizzes</button>
          </div>
        </div>
      `;
      return;
    }
    
    round++;
    const letter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
    const positions = ['isolated', 'initial', 'medial', 'final'];
    const correctPosition = positions[Math.floor(Math.random() * positions.length)];
    let answered = false;
    
    // Show connection information
    const connectionInfo = letter.canConnect.before && letter.canConnect.after ? 'Connects both ways' :
                          letter.canConnect.before ? 'Only connects to previous letter' :
                          letter.canConnect.after ? 'Only connects to next letter' : 
                          'Does not connect to other letters';
    
    area.innerHTML = `
      <div class="forms-quiz">
        <div class="quiz-header">
          <h3>Round ${round}/${maxRounds}</h3>
          <div class="score-display">Score: ${score}/${round - 1}</div>
        </div>
        <div class="forms-question">
          <p class="question">Which position is this letter form in?</p>
          <div class="form-display-container">
            <div class="form-display">${letter.forms[correctPosition]}</div>
            <div class="letter-info">
              <div class="letter-name">Letter: ${letter.name} (${letter.ar})</div>
              <div class="connection-info">${connectionInfo}</div>
            </div>
          </div>
          <div class="position-explanation">
            <div class="pos-guide">
              <span>📍 Isolated</span> • <span>🔗 Initial</span> • <span>🔗 Medial</span> • <span>🏁 Final</span>
            </div>
          </div>
        </div>
        <div class="position-options">
          ${positions.map(pos => {
            const icons = { isolated: '📍', initial: '🔗', medial: '🔗', final: '🏁' };
            const examples = {
              isolated: letter.forms.isolated,
              initial: letter.forms.initial, 
              medial: letter.forms.medial,
              final: letter.forms.final
            };
            return `
              <button class="pos-option btn-touch" data-position="${pos}">
                <div class="pos-label">${icons[pos]} ${pos.charAt(0).toUpperCase() + pos.slice(1)}</div>
                <div class="pos-example">${examples[pos]}</div>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
    
    area.querySelectorAll('.pos-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return; // Prevent multiple answers
        
        answered = true;
        if (btn.dataset.position === correctPosition) {
          btn.classList.add('correct');
          score++;
          playSound('correct');
          
          // Show success feedback
          const feedback = document.createElement('div');
          feedback.className = 'feedback correct-feedback';
          feedback.innerHTML = `✅ Correct! This is the ${correctPosition} form of ${letter.name}`;
          area.appendChild(feedback);
          
          setTimeout(nextRound, 1500);
        } else {
          btn.classList.add('wrong');
          wrongAnswers++;
          playSound('wrong');
          
          // Show correct answer
          const correctBtn = area.querySelector(`[data-position="${correctPosition}"]`);
          correctBtn.classList.add('correct-highlight');
          
          // Show error feedback with explanation
          const feedback = document.createElement('div');
          feedback.className = 'feedback wrong-feedback';
          const explanations = {
            isolated: 'stands alone, not connected to other letters',
            initial: 'starts a word, connects only to the right',
            medial: 'in the middle, connects on both sides', 
            final: 'ends a word, connects only to the left'
          };
          feedback.innerHTML = `❌ Wrong! This is the <strong>${correctPosition}</strong> form - it ${explanations[correctPosition]}.`;
          area.appendChild(feedback);
          
          // Disable all options
          area.querySelectorAll('.pos-option').forEach(b => b.disabled = true);
          
          setTimeout(nextRound, 2500);
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
  
  // Check if comprehensive tutorials are available
  if (typeof TUTORIALS_DATA !== 'undefined' && TUTORIALS_DATA[type]) {
    const tutorial = TUTORIALS_DATA[type];
    let currentStep = 0;
    
    // Scroll to tutorial area
    setTimeout(() => {
      area.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    
    function showStep() {
      const step = tutorial.steps[currentStep];
      
      // Generate practice exercise if available
      let exerciseHTML = '';
      if (tutorial.quiz && typeof TUTORIAL_EXERCISES !== 'undefined') {
        const exerciseType = tutorial.quiz.type;
        if (TUTORIAL_EXERCISES[exerciseType]) {
          exerciseHTML = `
            <div class="step-exercise">
              <h4>Try it yourself:</h4>
              <button class="practice-btn btn-touch" data-exercise="${exerciseType}">Practice Exercise</button>
            </div>`;
        }
      }
      
      area.innerHTML = `
        <div class="tutorial-content enhanced">
          <div class="tutorial-header-full">
            <h3>${tutorial.title}</h3>
            <span class="tutorial-level-badge">${tutorial.level}</span>
          </div>
          <div class="step-indicator">
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${((currentStep + 1) / tutorial.steps.length) * 100}%"></div>
            </div>
            <span>Lesson ${currentStep + 1} of ${tutorial.steps.length}</span>
          </div>
          <div class="step-content">
            ${step.title ? `<h4 class="step-title">${step.title}</h4>` : ''}
            <p class="step-text">${step.content}</p>
            <div class="step-example">
              <div class="example-label">Example:</div>
              <div class="example-content">${step.example.replace(/\n/g, '<br>')}</div>
            </div>
            ${step.practice ? `
              <div class="step-practice">
                <div class="practice-label">Practice:</div>
                <div class="practice-content">${step.practice}</div>
              </div>` : ''}
            ${step.tip ? `
              <div class="step-tip">
                ${step.tip}
              </div>` : ''}
            ${exerciseHTML}
          </div>
          <div class="tutorial-nav">
            ${currentStep > 0 ? '<button class="prev-btn btn-touch">← Previous</button>' : '<div></div>'}
            ${currentStep < tutorial.steps.length - 1 ? 
              '<button class="next-btn primary btn-touch">Next →</button>' :
              '<button class="complete-btn primary btn-touch">Complete ✓</button>'
            }
          </div>
        </div>
      `;
      
      // Event listeners
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
            <div class="completion-icon">🎉</div>
            <h3>Tutorial Complete!</h3>
            <p>Excellent work completing <strong>${tutorial.title}</strong>!</p>
            <div class="completion-stats">
              <div>📚 ${tutorial.steps.length} lessons completed</div>
              <div>⏱️ ${tutorial.duration} of focused learning</div>
            </div>
            <div class="next-steps">
              <p>Ready for more?</p>
              <button class="primary btn-touch" onclick="route('tutorials')">Explore More Tutorials</button>
              <button class="btn-touch" onclick="route('quizzes')">Test Your Knowledge</button>
            </div>
          </div>
        `;
      });
      
      area.querySelector('.practice-btn')?.addEventListener('click', (e) => {
        const exerciseType = e.target.dataset.exercise;
        if (TUTORIAL_EXERCISES[exerciseType]) {
          const exercise = TUTORIAL_EXERCISES[exerciseType].generateExercise();
          showModal(`
            <h3>Practice Exercise</h3>
            <p>${exercise.instruction}</p>
            <div class="exercise-content">
              ${JSON.stringify(exercise)}
            </div>
          `);
        }
      });
      
      // Speak Arabic examples
      if (step.example && /[\u0600-\u06FF]/.test(step.example)) {
        const arabicParts = step.example.match(/[\u0600-\u06FF]+/g);
        if (arabicParts && arabicParts.length > 0) {
          setTimeout(() => {
            speakAr(arabicParts[0], 0.7);
          }, 500);
        }
      }
    }
    
    showStep();
    return;
  }
  
  // Fallback to simple tutorials
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

// New Quiz Functions
function startDiacriticsQuiz() {
  const area = document.getElementById('quizArea');
  let score = 0;
  let wrongAnswers = 0;
  let round = 0;
  const maxRounds = 8;
  
  function nextRound() {
    if (round >= maxRounds) {
      const percentage = Math.round((score / maxRounds) * 100);
      area.innerHTML = `
        <div class="quiz-complete">
          <h3>Diacritics Quiz Complete!</h3>
          <div class="score-details">
            <div class="score-main">Score: ${score}/${maxRounds} (${percentage}%)</div>
            <div class="score-breakdown">
              ✅ Correct: ${score} | ❌ Wrong: ${wrongAnswers}
            </div>
          </div>
          ${percentage >= 80 ? '<div class="achievement">🏆 Harakat master!</div>' : 
            percentage >= 60 ? '<div class="achievement">👍 Good diacritics knowledge!</div>' : 
            '<div class="encouragement">💪 Practice more with harakat!</div>'}
          <div class="quiz-actions">
            <button class="primary btn-touch" onclick="startDiacriticsQuiz()">Try Again</button>
            <button class="btn-touch" onclick="route('diacritics')">Study Diacritics</button>
            <button class="btn-touch" onclick="route('quizzes')">Back to Quizzes</button>
          </div>
        </div>
      `;
      return;
    }
    
    round++;
    const diacritic = DIACRITICS[Math.floor(Math.random() * DIACRITICS.length)];
    const options = shuffle([diacritic, ...pickMany(DIACRITICS.filter(d => d !== diacritic), 3)]);
    let answered = false;
    
    area.innerHTML = `
      <div class="diacritics-quiz">
        <div class="quiz-header">
          <h3>Round ${round}/${maxRounds}</h3>
          <div class="score-display">Score: ${score}/${round - 1}</div>
        </div>
        <div class="diacritic-question">
          <p class="question">What sound does this diacritic make?</p>
          <div class="diacritic-display">
            <span class="base-letter">د</span><span class="test-diacritic">${diacritic.ar}</span>
          </div>
          <button class="hear-diacritic btn-touch" onclick="speakAr('د${diacritic.ar}', 0.6)">🔊 Hear Sound</button>
        </div>
        <div class="diacritic-options">
          ${options.map(d => `
            <button class="diac-option btn-touch" data-sound="${d.sound}" data-name="${d.name}">
              <div class="option-symbol">د${d.ar}</div>
              <div class="option-name">${d.name}</div>
              <div class="option-sound">"${d.sound}"</div>
            </button>
          `).join('')}
        </div>
      </div>
    `;
    
    area.querySelectorAll('.diac-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        
        answered = true;
        if (btn.dataset.sound === diacritic.sound) {
          btn.classList.add('correct');
          score++;
          playSound('correct');
          
          const feedback = document.createElement('div');
          feedback.className = 'feedback correct-feedback';
          feedback.innerHTML = `✅ Correct! ${diacritic.name} makes the "${diacritic.sound}" sound`;
          area.appendChild(feedback);
          
          setTimeout(() => speakAr(`د${diacritic.ar}`, 0.6), 500);
          setTimeout(nextRound, 1800);
        } else {
          btn.classList.add('wrong');
          wrongAnswers++;
          playSound('wrong');
          
          const correctBtn = area.querySelector(`[data-sound="${diacritic.sound}"]`);
          correctBtn.classList.add('correct-highlight');
          
          const feedback = document.createElement('div');
          feedback.className = 'feedback wrong-feedback';
          feedback.innerHTML = `❌ Wrong! ${diacritic.name} makes the "${diacritic.sound}" sound, not "${btn.dataset.sound}"`;
          area.appendChild(feedback);
          
          area.querySelectorAll('.diac-option').forEach(b => b.disabled = true);
          setTimeout(() => speakAr(`د${diacritic.ar}`, 0.6), 500);
          setTimeout(nextRound, 2500);
        }
      });
    });
    
    // Auto-play the sound after a short delay
    setTimeout(() => speakAr(`د${diacritic.ar}`, 0.6), 800);
  }
  
  nextRound();
}

function startSpeedQuiz() {
  const area = document.getElementById('quizArea');
  
  area.innerHTML = `
    <div class="speed-quiz-menu">
      <h3>Choose Your Speed Challenge</h3>
      <div class="difficulty-options">
        <div class="difficulty-card">
          <h4>👍 Easy Mode</h4>
          <p>Letter Recognition • 90 seconds • 4 choices</p>
          <button class="start-difficulty btn-touch" data-mode="easy">Start Easy</button>
        </div>
        <div class="difficulty-card">
          <h4>💪 Medium Mode</h4>
          <p>Word Recognition • 60 seconds • 6 choices</p>
          <button class="start-difficulty btn-touch" data-mode="medium">Start Medium</button>
        </div>
        <div class="difficulty-card">
          <h4>🔥 Hard Mode</h4>
          <p>Mixed Challenge • 45 seconds • 8 choices</p>
          <button class="start-difficulty btn-touch" data-mode="hard">Start Hard</button>
        </div>
      </div>
    </div>
  `;
  
  area.querySelectorAll('.start-difficulty').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;
      startSpeedMode(mode);
    });
  });
}

function startSpeedMode(difficulty) {
  const area = document.getElementById('quizArea');
  const configs = {
    easy: { time: 90, optionCount: 4, type: 'letters' },
    medium: { time: 60, optionCount: 6, type: 'words' },
    hard: { time: 45, optionCount: 8, type: 'mixed' }
  };
  
  const config = configs[difficulty];
  let score = 0;
  let timeLeft = config.time;
  let gameActive = true;
  let combo = 0;
  let maxCombo = 0;
  
  function showChallenge() {
    if (!gameActive) return;
    
    let target, options, isWordChallenge = false;
    
    if (config.type === 'letters' || (config.type === 'mixed' && Math.random() > 0.5)) {
      // Letter challenge
      target = LETTERS[Math.floor(Math.random() * LETTERS.length)];
      options = shuffle([target, ...pickMany(LETTERS.filter(l => l !== target), config.optionCount - 1)]);
    } else {
      // Word challenge
      const allWords = WORD_CATEGORIES.flatMap(c => c.words);
      target = allWords[Math.floor(Math.random() * allWords.length)];
      options = shuffle([target, ...pickMany(allWords.filter(w => w !== target), config.optionCount - 1)]);
      isWordChallenge = true;
    }
    
    area.innerHTML = `
      <div class="speed-challenge">
        <div class="game-header">
          <div class="stats-row">
            <div>Score: <span id="score">${score}</span></div>
            <div>Time: <span id="time">${timeLeft}</span>s</div>
            <div>Combo: <span id="combo">${combo}</span>x</div>
          </div>
          <div class="difficulty-badge">${difficulty.toUpperCase()} MODE</div>
        </div>
        <div class="challenge-content">
          ${isWordChallenge ? `
            <h3>Find: ${target.pic} "${target.en}"</h3>
            <div class="speed-options word-options">
              ${options.map(w => `
                <button class="speed-option btn-touch" data-correct="${w === target}">
                  ${w.ar}
                </button>
              `).join('')}
            </div>
          ` : `
            <h3>Find the letter:</h3>
            <div class="target-display">
              <div class="target-letter">${target.ar}</div>
              <div class="target-name">${target.name}</div>
            </div>
            <div class="speed-options letter-options">
              ${options.map(l => `
                <button class="speed-option btn-touch" data-correct="${l === target}">
                  ${l.ar}
                </button>
              `).join('')}
            </div>
          `}
        </div>
      </div>
    `;
    
    let answered = false;
    area.querySelectorAll('.speed-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        
        if (btn.dataset.correct === 'true') {
          combo++;
          maxCombo = Math.max(maxCombo, combo);
          const points = isWordChallenge ? 3 : 2;
          const comboBonus = Math.floor(combo / 5);
          score += points + comboBonus;
          
          btn.classList.add('correct');
          playSound('correct');
          
          setTimeout(showChallenge, 300);
        } else {
          combo = 0;
          btn.classList.add('wrong');
          playSound('wrong');
          
          setTimeout(showChallenge, 800);
        }
      });
    });
  }
  
  showChallenge();
  speakAr("Start!");
  
  const timer = setInterval(() => {
    timeLeft--;
    if (document.getElementById('time')) {
      document.getElementById('time').textContent = timeLeft;
    }
    if (document.getElementById('score')) {
      document.getElementById('score').textContent = score;
    }
    if (document.getElementById('combo')) {
      document.getElementById('combo').textContent = combo;
    }
    
    if (timeLeft <= 0) {
      clearInterval(timer);
      gameActive = false;
      
      const rating = score >= 100 ? 'Amazing!' : 
                    score >= 60 ? 'Great job!' : 
                    score >= 30 ? 'Good work!' : 'Keep practicing!';
                    
      area.innerHTML = `
        <div class="game-complete">
          <h3>Speed Quiz Complete!</h3>
          <div class="final-stats">
            <div class="main-score">Final Score: ${score}</div>
            <div class="performance-rating">${rating}</div>
            <div class="detailed-stats">
              <div>Difficulty: ${difficulty.toUpperCase()}</div>
              <div>Max Combo: ${maxCombo}x</div>
              <div>Time: ${config.time} seconds</div>
            </div>
          </div>
          <div class="quiz-actions">
            <button class="primary btn-touch" onclick="startSpeedQuiz()">Try Different Mode</button>
            <button class="btn-touch" onclick="startSpeedMode('${difficulty}')">Same Mode Again</button>
            <button class="btn-touch" onclick="route('quizzes')">Back to Quizzes</button>
          </div>
        </div>
      `;
    }
  }, 1000);
}

// Function to show phrase category
function showPhraseCategory(categoryKey) {
  const content = document.getElementById('phrasesContent');
  if (!content || !DAILY_PHRASES[categoryKey]) return;
  
  const category = DAILY_PHRASES[categoryKey];
  
  content.innerHTML = `
    <div class="category-header">
      <h3>${category.icon} ${category.title}</h3>
      <p class="category-description">${category.description}</p>
    </div>
    <div class="phrases-grid">
      ${category.phrases.map(phrase => `
        <div class="phrase-card enhanced">
          <div class="phrase-arabic">${phrase.ar}</div>
          <div class="phrase-english">${phrase.en}</div>
          <div class="phrase-transliteration">${phrase.transliteration}</div>
          <div class="phrase-usage">${phrase.usage}</div>
          <button class="listen-btn btn-touch" data-text="${phrase.ar}">🔊 Listen</button>
        </div>
      `).join('')}
    </div>
  `;
  
  // Add click handlers for listen buttons
  content.querySelectorAll('.listen-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      speakAr(btn.dataset.text, 0.7);
    });
  });
  
  // Scroll to content
  content.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Function to show conversation
function showConversation(conversationKey) {
  const content = document.getElementById('phrasesContent');
  if (!content || !ARABIC_CONVERSATIONS[conversationKey]) return;
  
  const conversation = ARABIC_CONVERSATIONS[conversationKey];
  
  content.innerHTML = `
    <div class="conversation-header">
      <h3>${conversation.icon} ${conversation.title}</h3>
      <p class="conversation-description">${conversation.description}</p>
    </div>
    <div class="conversation-dialogue">
      ${conversation.dialogue.map((line, index) => `
        <div class="dialogue-line ${line.speaker.toLowerCase()}">
          <div class="speaker-label">${line.speaker}:</div>
          <div class="dialogue-content">
            <div class="arabic-text">${line.ar}</div>
            <div class="english-text">${line.en}</div>
            ${line.role ? `<div class="role-label">${line.role}</div>` : ''}
          </div>
          ${line.ar ? `<button class="play-line btn-touch" data-text="${line.ar}">🔊</button>` : ''}
        </div>
      `).join('')}
    </div>
    ${conversation.notes ? `
      <div class="conversation-notes">
        <h4>💡 Learning Note:</h4>
        <p>${conversation.notes}</p>
      </div>
    ` : ''}
    <div class="conversation-actions">
      <button class="play-all btn-touch">🎭 Play Full Conversation</button>
      <button class="practice-btn btn-touch">🎯 Practice This Conversation</button>
    </div>
  `;
  
  // Add click handlers
  content.querySelectorAll('.play-line').forEach(btn => {
    btn.addEventListener('click', () => {
      speakAr(btn.dataset.text, 0.75);
    });
  });
  
  // Play full conversation
  const playAllBtn = content.querySelector('.play-all');
  if (playAllBtn) {
    playAllBtn.addEventListener('click', () => {
      let delay = 0;
      conversation.dialogue.forEach(line => {
        if (line.ar) {
          setTimeout(() => speakAr(line.ar, 0.75), delay);
          delay += 2500; // Adjust timing between lines
        }
      });
    });
  }
  
  // Practice mode
  const practiceBtn = content.querySelector('.practice-btn');
  if (practiceBtn) {
    practiceBtn.addEventListener('click', () => {
      startConversationPractice(conversationKey);
    });
  }
  
  // Scroll to content
  content.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Function for conversation practice
function startConversationPractice(conversationKey) {
  const conversation = ARABIC_CONVERSATIONS[conversationKey];
  if (!conversation) return;
  
  const content = document.getElementById('phrasesContent');
  let currentLine = 0;
  
  function showPracticeLine() {
    if (currentLine >= conversation.dialogue.length) {
      content.innerHTML = `
        <div class="practice-complete">
          <h3>🎉 Conversation Practice Complete!</h3>
          <p>Great job practicing "${conversation.title}"!</p>
          <button class="btn-touch" onclick="showConversation('${conversationKey}')">Review Conversation</button>
          <button class="primary btn-touch" onclick="route('phrases')">Back to Phrases</button>
        </div>
      `;
      return;
    }
    
    const line = conversation.dialogue[currentLine];
    const nextLine = conversation.dialogue[currentLine + 1];
    
    content.innerHTML = `
      <div class="practice-mode">
        <h3>Practice Mode: ${conversation.title}</h3>
        <div class="practice-progress">Line ${currentLine + 1} of ${conversation.dialogue.length}</div>
        
        <div class="practice-line">
          <div class="speaker">${line.speaker} says:</div>
          <div class="arabic-large">${line.ar}</div>
          <div class="english-translation">${line.en}</div>
          <button class="listen-btn btn-touch">🔊 Listen Again</button>
        </div>
        
        ${nextLine ? `
          <div class="your-turn">
            <h4>Your turn! Try to say:</h4>
            <div class="response-preview">
              <div class="english-hint">${nextLine.en}</div>
              <button class="reveal-btn btn-touch">Show Arabic</button>
              <div class="arabic-answer" style="display: none;">${nextLine.ar}</div>
            </div>
          </div>
        ` : ''}
        
        <div class="practice-controls">
          <button class="next-btn primary btn-touch">Next →</button>
          <button class="skip-btn btn-touch">Skip Practice</button>
        </div>
      </div>
    `;
    
    // Event handlers
    content.querySelector('.listen-btn')?.addEventListener('click', () => {
      speakAr(line.ar, 0.7);
    });
    
    content.querySelector('.reveal-btn')?.addEventListener('click', (e) => {
      content.querySelector('.arabic-answer').style.display = 'block';
      e.target.style.display = 'none';
      if (nextLine) speakAr(nextLine.ar, 0.7);
    });
    
    content.querySelector('.next-btn').addEventListener('click', () => {
      currentLine++;
      showPracticeLine();
    });
    
    content.querySelector('.skip-btn').addEventListener('click', () => {
      showConversation(conversationKey);
    });
    
    // Auto-play current line
    setTimeout(() => speakAr(line.ar, 0.7), 500);
  }
  
  showPracticeLine();
}

// Make functions globally available for onclick handlers
window.route = route;
window.speakAr = speakAr;
window.startSpellingQuiz = startSpellingQuiz;
window.startDiacriticsQuiz = startDiacriticsQuiz;
window.startSpeedQuiz = startSpeedQuiz;
window.startSpeedMode = startSpeedMode;
window.startMemoryGame = startMemoryGame;
window.startWordHunter = startWordHunter;
window.startSpeedChallenge = startSpeedChallenge;
window.showPhraseCategory = showPhraseCategory;
window.showConversation = showConversation;
window.startConversationPractice = startConversationPractice;

})();