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
}

// Header bindings
function bindHeader(){
  // Fix: Prevent default behavior and stop propagation
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-view]');
    if (btn && btn.closest('header')) { 
      e.preventDefault();
      e.stopPropagation();
      route(btn.dataset.view); 
    }
  });
  // hints toggle re-renders current view
  const hints = document.getElementById('hintsToggle');
  hints?.addEventListener('change', () => {
    route(currentView);
  });
  // voices
  window.speechSynthesis?.addEventListener('voiceschanged', loadVoices);
  loadVoices();
}

function loadVoices() {
  const select = document.getElementById('voiceSelect');
  if (!select || !('speechSynthesis' in window)) return;
  voices = speechSynthesis.getVoices() || [];
  select.innerHTML = "";
  const preferred = voices.filter(v => /Arabic|ar-|ar_/i.test(v.name + " " + v.lang));
  const list = preferred.length ? preferred : voices;
  list.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.voiceURI;
    opt.textContent = `${v.name} (${v.lang})`;
    select.appendChild(opt);
  });
}

function pickVoice() {
  const sel = document.getElementById('voiceSelect')?.value;
  return voices.find(v => v.voiceURI === sel) || voices.find(v => /ar|Arabic/i.test(v.lang)) || voices[0];
}

function speakAr(text){
  if (!('speechSynthesis' in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  const v = pickVoice();
  if (v){ u.voice = v; u.lang = v.lang; } else { u.lang = 'ar-SA'; }
  u.rate = 0.85;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

// Play sound effect
function playSound(type) {
  const audio = new Audio();
  const sounds = {
    'correct': 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSpyz+/bhTQGGWi98OScTgwOUKzn77VkHAc3lNn1zH0vBSd1yO7aiDYIHWq+8+OWT'
  };
  
  if (sounds[type]) {
    audio.src = sounds[type];
    audio.play().catch(() => {});
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
}

const Views = {
  letters(){
    app.innerHTML = `
      <div class="section"><h2>📚 Learn Letters</h2><div class="pill">Tip: Click 🔊 to hear the letter.</div></div>
      <div class="grid" id="letterGrid"></div>
    `;
    const showHints = document.getElementById('hintsToggle')?.checked;
    const grid = document.getElementById('letterGrid');
    LETTERS.forEach(L => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="kidpic">${L.pic}</div>
        <div class="glyph">${L.ar}</div>
        <div class="hintLine" ${showHints ? "" : "hidden"}><strong>${L.name}</strong> • <span>${L.phonics}</span></div>
        <div class="help">${L.hook}</div>
        <div class="row">
          <button class="say">🔊 Say</button>
          <button class="drill">Practice Words</button>
        </div>
      `;
      card.querySelector('.say').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        speakAr(L.ar);
      });
      card.querySelector('.drill').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        firstLetterDrill(L);
      });
      grid.appendChild(card);
    });
  },

  words(){
    app.innerHTML = `
      <div class="section"><h2>🐾 Learn Words</h2><div class="pill">Picture → Arabic word → English meaning</div></div>
      <div class="catbar" id="catbar"></div>
      <div class="grid" id="wordsGrid"></div>
    `;
    const catbar = document.getElementById('catbar');
    const grid = document.getElementById('wordsGrid');
    
    WORD_CATEGORIES.forEach((cat, idx) => {
      const b = document.createElement('button');
      b.textContent = `${cat.icon} ${cat.name}`;
      b.className = idx === 0 ? 'active' : '';
      b.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('#catbar button').forEach(btn => btn.classList.remove('active'));
        b.classList.add('active');
        showCategory(cat);
      });
      catbar.appendChild(b);
    });
    showCategory(WORD_CATEGORIES[0]);

    function showCategory(cat){
      grid.innerHTML = "";
      cat.words.forEach(w => {
        const card = document.createElement('div');
        card.className = 'card wordcard';
        card.innerHTML = `
          <div class="kidpic">${w.pic}</div>
          <div class="ar">${w.ar}</div>
          <div class="eng">${w.en}</div>
          <div class="row">
            <button class="say">🔊 Word</button>
            <button class="first">First Letter</button>
          </div>
        `;
        card.querySelector('.say').addEventListener('click', (e) => {
          e.preventDefault();
          speakAr(w.ar);
        });
        card.querySelector('.first').addEventListener('click', (e) => {
          e.preventDefault();
          const L = LETTERS.find(L => L.ar === w.first);
          if (L) { 
            showModal(`First letter: "${L.name}" → ${L.ar}`, () => speakAr(L.ar));
          }
        });
        grid.appendChild(card);
      });
    }
  },

  quizzes(){
    app.innerHTML = `
      <div class="section"><h2>🎯 Quizzes</h2></div>
      <div class="grid">
        <div class="card">
          <h3>🔊 Find the Letter</h3>
          <p class="help">Hear a letter → click the correct Arabic letter.</p>
          <button id="startFind" class="primary">Start Quiz</button>
          <div id="findBox" class="quiz"></div>
        </div>
        <div class="card">
          <h3>🖼️ Match Picture → First Letter</h3>
          <p class="help">See a picture & English word → pick the first Arabic letter.</p>
          <button id="startMatch" class="primary">Start Quiz</button>
          <div id="matchBox" class="quiz"></div>
        </div>
        <div class="card">
          <h3>📝 Word Builder</h3>
          <p class="help">Build Arabic words by selecting the correct letters in order.</p>
          <button id="startBuilder" class="primary">Start Quiz</button>
          <div id="builderBox" class="quiz"></div>
        </div>
      </div>
    `;
    document.getElementById('startFind')?.addEventListener('click', startFindLetter);
    document.getElementById('startMatch')?.addEventListener('click', startMatchFirst);
    document.getElementById('startBuilder')?.addEventListener('click', startWordBuilder);
  },

  games(){
    app.innerHTML = `
      <div class="section"><h2>🎮 Games</h2></div>
      <div class="grid">
        <div class="card">
          <h3>🧩 Letter Memory</h3>
          <p class="help">Match Arabic letters with their sounds. Click cards to flip them!</p>
          <button id="startMemory" class="primary">Play Memory Game</button>
          <div id="memoryBox" class="gamebox"></div>
        </div>
        <div class="card">
          <h3>🎯 Letter Collector</h3>
          <p class="help">Use arrow keys to collect letters in alphabetical order!</p>
          <button id="startCollector" class="primary">Play Collector</button>
          <div id="collectorBox" class="gamebox"></div>
        </div>
      </div>
    `;
    document.getElementById('startMemory')?.addEventListener('click', startMemoryGame);
    document.getElementById('startCollector')?.addEventListener('click', startCollectorGame);
  }
};

// Modal helper
function showModal(message, callback) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <p>${message}</p>
      <button class="primary">OK</button>
    </div>
  `;
  modal.querySelector('button').addEventListener('click', () => {
    document.body.removeChild(modal);
    if (callback) callback();
  });
  document.body.appendChild(modal);
}

// Drill - improved version
function firstLetterDrill(L) {
  const all = WORD_CATEGORIES.flatMap(c => c.words);
  const matches = all.filter(w => w.first === L.ar);
  if (!matches.length) { 
    showModal(`No sample words for "${L.name}" yet.`);
    return; 
  }
  
  const examples = matches.slice(0, 3).map(w => `${w.pic} ${w.en} → ${w.ar}`).join('<br>');
  showModal(`Examples starting with ${L.name} (${L.ar}):<br><br>${examples}`, () => {
    matches.forEach(w => speakAr(w.ar));
  });
}

// Quiz: Find Letter
function startFindLetter() {
  const box = document.getElementById('findBox');
  if (!box) return;
  
  let score = 0;
  let round = 0;
  const maxRounds = 5;
  
  function nextRound() {
    if (round >= maxRounds) {
      box.innerHTML = `<div class="score">Quiz Complete! Score: ${score}/${maxRounds}</div>`;
      playSound('correct');
      return;
    }
    
    round++;
    box.innerHTML = "";
    const target = LETTERS[Math.floor(Math.random()*LETTERS.length)];
    const choices = shuffle(pickMany(LETTERS, 4, target));
    
    const q = document.createElement('div'); 
    q.className = 'q';
    q.innerHTML = `
      <div class="row">
        <button class="primary" id="hear">🔊 Hear Letter</button>
        <span class="pill">Round ${round}/${maxRounds}</span>
      </div>
    `;
    
    const ch = document.createElement('div'); 
    ch.className='choices';
    
    choices.forEach(L => {
      const b = document.createElement('button'); 
      b.className='choice';
      b.innerHTML = `<span class="glyph">${L.ar}</span>`;
      b.addEventListener('click', () => {
        if (L.ar === target.ar) { 
          b.classList.add('correct'); 
          score++;
          playSound('correct');
          setTimeout(nextRound, 700); 
        } else { 
          b.classList.add('wrong'); 
          setTimeout(() => b.classList.remove('wrong'), 500);
        }
      });
      ch.appendChild(b);
    });
    
    q.appendChild(ch);
    box.appendChild(q);
    document.getElementById('hear').addEventListener('click', () => speakAr(target.ar));
    setTimeout(() => speakAr(target.ar), 200);
  }
  
  nextRound();
}

// Quiz: Match First Letter
function startMatchFirst() {
  const box = document.getElementById('matchBox');
  if (!box) return;
  
  let score = 0;
  let round = 0;
  const maxRounds = 5;
  
  function nextRound() {
    if (round >= maxRounds) {
      box.innerHTML = `<div class="score">Quiz Complete! Score: ${score}/${maxRounds}</div>`;
      playSound('correct');
      return;
    }
    
    round++;
    box.innerHTML = "";
    const cat = WORD_CATEGORIES[Math.floor(Math.random()*WORD_CATEGORIES.length)];
    const w = cat.words[Math.floor(Math.random()*cat.words.length)];
    const answer = LETTERS.find(L => L.ar === w.first);
    const choices = shuffle(pickMany(LETTERS, 4, answer));
    
    const q = document.createElement('div'); 
    q.className='q';
    q.innerHTML = `
      <div class="wordcard">
        <div class="kidpic">${w.pic}</div>
        <div class="eng">${w.en}</div>
      </div>
      <p class="help">Pick the first Arabic letter (Round ${round}/${maxRounds})</p>
    `;
    
    const ch = document.createElement('div'); 
    ch.className='choices';
    
    choices.forEach(L => {
      const b = document.createElement('button'); 
      b.className='choice';
      b.innerHTML = `<span class="glyph">${L.ar}</span>`;
      b.addEventListener('click', () => {
        if (L.ar === answer.ar) { 
          b.classList.add('correct'); 
          score++;
          playSound('correct');
          setTimeout(nextRound, 700); 
        } else { 
          b.classList.add('wrong'); 
          setTimeout(() => b.classList.remove('wrong'), 500);
        }
      });
      ch.appendChild(b);
    });
    
    q.appendChild(ch);
    box.appendChild(q);
  }
  
  nextRound();
}

// New Quiz: Word Builder
function startWordBuilder() {
  const box = document.getElementById('builderBox');
  if (!box) return;
  
  const allWords = WORD_CATEGORIES.flatMap(c => c.words);
  const word = allWords[Math.floor(Math.random() * allWords.length)];
  const letters = word.ar.split('');
  let currentIndex = 0;
  
  box.innerHTML = `
    <div class="q">
      <div class="wordcard">
        <div class="kidpic">${word.pic}</div>
        <div class="eng">${word.en}</div>
      </div>
      <p class="help">Build the word: <span id="progress"></span></p>
      <div class="choices" id="letterChoices"></div>
    </div>
  `;
  
  function updateProgress() {
    const progress = document.getElementById('progress');
    let html = '';
    for (let i = 0; i < letters.length; i++) {
      if (i < currentIndex) {
        html += `<span class="done">${letters[i]}</span>`;
      } else if (i === currentIndex) {
        html += `<span class="current">?</span>`;
      } else {
        html += `<span class="pending">_</span>`;
      }
    }
    progress.innerHTML = html;
  }
  
  function showChoices() {
    const choicesDiv = document.getElementById('letterChoices');
    choicesDiv.innerHTML = '';
    
    const correctLetter = letters[currentIndex];
    const allLetters = LETTERS.map(l => l.ar);
    const choices = shuffle([correctLetter, ...pickMany(allLetters.filter(l => l !== correctLetter), 3)]);
    
    choices.forEach(letter => {
      const btn = document.createElement('button');
      btn.className = 'choice';
      btn.innerHTML = `<span class="glyph">${letter}</span>`;
      btn.addEventListener('click', () => {
        if (letter === correctLetter) {
          btn.classList.add('correct');
          currentIndex++;
          playSound('correct');
          
          if (currentIndex >= letters.length) {
            setTimeout(() => {
              box.innerHTML = `<div class="score">Great! You built "${word.en}" in Arabic!</div>`;
              speakAr(word.ar);
            }, 500);
          } else {
            setTimeout(() => {
              updateProgress();
              showChoices();
            }, 500);
          }
        } else {
          btn.classList.add('wrong');
          setTimeout(() => btn.classList.remove('wrong'), 500);
        }
      });
      choicesDiv.appendChild(btn);
    });
  }
  
  updateProgress();
  showChoices();
}

// Memory Game
function startMemoryGame() {
  const box = document.getElementById('memoryBox');
  if (!box) return;
  
  const pairs = 6;
  const selectedLetters = shuffle(LETTERS).slice(0, pairs);
  const cards = [];
  
  selectedLetters.forEach(letter => {
    cards.push({ type: 'letter', value: letter.ar, match: letter.ar });
    cards.push({ type: 'name', value: letter.name, match: letter.ar });
  });
  
  shuffle(cards);
  
  let flipped = [];
  let matched = [];
  let moves = 0;
  
  box.innerHTML = '<div class="memory-grid"></div><div class="score">Moves: <span id="moves">0</span></div>';
  const grid = box.querySelector('.memory-grid');
  
  cards.forEach((card, index) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'memory-card';
    cardEl.dataset.index = index;
    cardEl.innerHTML = '<div class="card-back">?</div><div class="card-front"></div>';
    
    cardEl.addEventListener('click', () => {
      if (flipped.length >= 2 || flipped.includes(index) || matched.includes(index)) return;
      
      flipped.push(index);
      const front = cardEl.querySelector('.card-front');
      
      if (card.type === 'letter') {
        front.innerHTML = `<span class="glyph">${card.value}</span>`;
      } else {
        front.innerHTML = `<span class="name">${card.value}</span>`;
      }
      
      cardEl.classList.add('flipped');
      
      if (card.type === 'letter') {
        speakAr(card.value);
      }
      
      if (flipped.length === 2) {
        moves++;
        document.getElementById('moves').textContent = moves;
        
        const [first, second] = flipped;
        if (cards[first].match === cards[second].match) {
          matched.push(first, second);
          playSound('correct');
          flipped = [];
          
          if (matched.length === cards.length) {
            setTimeout(() => {
              box.innerHTML = `<div class="score">Congratulations! Completed in ${moves} moves!</div>`;
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
          }, 1000);
        }
      }
    });
    
    grid.appendChild(cardEl);
  });
}

// Letter Collector Game
function startCollectorGame() {
  const box = document.getElementById('collectorBox');
  if (!box) return;
  
  const gridSize = 8;
  const targetLetters = shuffle(LETTERS).slice(0, 5);
  let currentTarget = 0;
  let playerPos = 0;
  let score = 0;
  let moves = 0;
  
  box.innerHTML = `
    <div class="collector-info">
      <div>Collect: <span id="target" class="glyph"></span></div>
      <div>Score: <span id="score">0</span></div>
      <div>Moves: <span id="moves">0</span></div>
    </div>
    <div class="collector-grid" id="grid"></div>
    <div class="help">Use arrow keys to move!</div>
  `;
  
  const grid = document.getElementById('grid');
  const cells = [];
  
  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.className = 'collector-cell';
    grid.appendChild(cell);
    cells.push(cell);
  }
  
  function placeLetters() {
    // Clear previous letters
    cells.forEach(c => {
      if (c.classList.contains('letter')) {
        c.classList.remove('letter');
        c.textContent = '';
      }
    });
    
    // Place current target letter randomly
    const positions = [];
    for (let i = 0; i < 3; i++) {
      let pos;
      do {
        pos = Math.floor(Math.random() * cells.length);
      } while (positions.includes(pos) || pos === playerPos);
      positions.push(pos);
      cells[pos].classList.add('letter');
      cells[pos].textContent = targetLetters[currentTarget].ar;
    }
  }
  
  function updateDisplay() {
    document.getElementById('target').textContent = targetLetters[currentTarget].ar;
    document.getElementById('score').textContent = score;
    document.getElementById('moves').textContent = moves;
    
    // Speak the target letter
    speakAr(targetLetters[currentTarget].ar);
  }
  
  function movePlayer(dx, dy) {
    const x = playerPos % gridSize;
    const y = Math.floor(playerPos / gridSize);
    const newX = x + dx;
    const newY = y + dy;
    
    if (newX < 0 || newX >= gridSize || newY < 0 || newY >= gridSize) return;
    
    const newPos = newY * gridSize + newX;
    
    cells[playerPos].classList.remove('player');
    playerPos = newPos;
    cells[playerPos].classList.add('player');
    moves++;
    document.getElementById('moves').textContent = moves;
    
    // Check if collected a letter
    if (cells[playerPos].classList.contains('letter')) {
      const collectedLetter = cells[playerPos].textContent;
      if (collectedLetter === targetLetters[currentTarget].ar) {
        score++;
        playSound('correct');
        cells[playerPos].classList.remove('letter');
        cells[playerPos].textContent = '';
        
        // Check if all instances collected
        const remaining = Array.from(cells).filter(c => 
          c.classList.contains('letter') && c.textContent === targetLetters[currentTarget].ar
        );
        
        if (remaining.length === 0) {
          currentTarget++;
          if (currentTarget >= targetLetters.length) {
            setTimeout(() => {
              box.innerHTML = `<div class="score">Game Complete! Score: ${score} in ${moves} moves!</div>`;
            }, 500);
          } else {
            placeLetters();
            updateDisplay();
          }
        }
      }
    }
  }
  
  // Initialize game
  cells[playerPos].classList.add('player');
  placeLetters();
  updateDisplay();
  
  // Keyboard controls
  const keyHandler = (e) => {
    if (!box.parentElement) {
      window.removeEventListener('keydown', keyHandler);
      return;
    }
    
    if (e.key === 'ArrowLeft') movePlayer(-1, 0);
    if (e.key === 'ArrowRight') movePlayer(1, 0);
    if (e.key === 'ArrowUp') movePlayer(0, -1);
    if (e.key === 'ArrowDown') movePlayer(0, 1);
    e.preventDefault();
  };
  
  window.addEventListener('keydown', keyHandler);
}

// Helpers
function pickMany(list, n, includeOne) {
  const out = includeOne ? [includeOne] : [];
  const pool = list.filter(x => !out.includes(x)).slice();
  while (out.length < n && pool.length) {
    const x = pool.splice(Math.floor(Math.random()*pool.length),1)[0];
    if (!out.includes(x)) out.push(x);
  }
  while (out.length < n) out.push(list[Math.floor(Math.random()*list.length)]);
  return out;
}

function shuffle(a){ 
  const arr = [...a];
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]]
  } 
  return arr; 
}

})(); // IIFE