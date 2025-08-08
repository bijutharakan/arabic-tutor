
(() => {
// Ensure code runs after DOM & data are ready
function ready(fn){ if(document.readyState!='loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
ready(init);

let voices = [];
function init(){
  bindHeader();
  loadVoices();
  route('letters'); // default
}

// Header bindings
function bindHeader(){
  // Defensive: event delegation for header buttons
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-view]');
    if (btn) { route(btn.dataset.view); }
  });
  // hints toggle re-renders current view
  const hints = document.getElementById('hintsToggle');
  hints?.addEventListener('change', () => {
    const current = document.querySelector('main#app').dataset.view || 'letters';
    route(current);
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
  u.rate = 0.95;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

// Router & Views
const app = document.getElementById('app');
function route(view){
  (Views[view] || Views.letters)();
  app.dataset.view = view;
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <button class="drill">First-letter Drill</button>
        </div>
      `;
      card.querySelector('.say').addEventListener('click', () => speakAr(L.ar));
      card.querySelector('.drill').addEventListener('click', () => firstLetterDrill(L));
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
    WORD_CATEGORIES.forEach(cat => {
      const b = document.createElement('button');
      b.textContent = `${cat.icon} ${cat.name}`;
      b.addEventListener('click', () => showCategory(cat));
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
        card.querySelector('.say').addEventListener('click', () => speakAr(w.ar));
        card.querySelector('.first').addEventListener('click', () => {
          const L = LETTERS.find(L => L.ar === w.first);
          if (L) { alert(`First letter is "${L.name}" → ${L.ar}`); speakAr(L.ar); }
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
          <h3>Find the Letter</h3>
          <p class="help">Hear a letter → click the correct Arabic letter.</p>
          <button id="startFind" class="primary">Start</button>
          <div id="findBox" class="quiz"></div>
        </div>
        <div class="card">
          <h3>Match Picture → First Letter</h3>
          <p class="help">See a picture & English word → pick the first Arabic letter.</p>
          <button id="startMatch" class="primary">Start</button>
          <div id="matchBox" class="quiz"></div>
        </div>
      </div>
    `;
    document.getElementById('startFind').addEventListener('click', startFindLetter);
    document.getElementById('startMatch').addEventListener('click', startMatchFirst);
  },

  games(){
    app.innerHTML = `
      <div class="section"><h2>🎮 Games</h2></div>
      <div class="gamebox">
        <div class="q">
          <h3>Mouse & Cheese</h3>
          <p class="help">Use arrow keys. Step on a letter to hear it.</p>
          <div id="maze"></div>
        </div>
      </div>
    `;
    buildMaze();
  }
};

// Drill
function firstLetterDrill(L) {
  const all = WORD_CATEGORIES.flatMap(c => c.words);
  const matches = all.filter(w => w.first === L.ar);
  if (!matches.length) { alert(`No sample words for "${L.name}" yet.`); return; }
  const w = matches[Math.floor(Math.random()*matches.length)];
  alert(`Example: ${w.en} → ${w.ar}`);
  speakAr(w.ar);
}

// Quizzes
function startFindLetter() {
  const box = document.getElementById('findBox');
  if (!box) return;
  box.innerHTML = "";
  const target = LETTERS[Math.floor(Math.random()*LETTERS.length)];
  const choices = shuffle(pickMany(LETTERS, 4, target));
  const q = document.createElement('div'); q.className = 'q';
  q.innerHTML = `<div class="row"><button class="primary" id="hear">🔊 Hear</button><span class="pill">Click the right letter</span></div>`;
  const ch = document.createElement('div'); ch.className='choices';
  choices.forEach(L => {
    const b = document.createElement('button'); b.className='choice';
    b.innerHTML = `<span class="glyph">${L.ar}</span>`;
    b.addEventListener('click', () => {
      if (L.ar === target.ar) { b.classList.add('correct'); setTimeout(startFindLetter, 700); }
      else { b.classList.add('wrong'); }
    });
    ch.appendChild(b);
  });
  q.appendChild(ch);
  box.appendChild(q);
  document.getElementById('hear').addEventListener('click', () => speakAr(target.ar));
  setTimeout(() => speakAr(target.ar), 200);
}

function startMatchFirst() {
  const box = document.getElementById('matchBox');
  if (!box) return;
  box.innerHTML = "";
  const cat = WORD_CATEGORIES[Math.floor(Math.random()*WORD_CATEGORIES.length)];
  const w = cat.words[Math.floor(Math.random()*cat.words.length)];
  const answer = LETTERS.find(L => L.ar === w.first);
  const choices = shuffle(pickMany(LETTERS, 4, answer));
  const q = document.createElement('div'); q.className='q';
  q.innerHTML = `<div class="wordcard"><div class="kidpic">${w.pic}</div><div class="eng">${w.en}</div></div><p class="help">Pick the first Arabic letter</p>`;
  const ch = document.createElement('div'); ch.className='choices';
  choices.forEach(L => {
    const b = document.createElement('button'); b.className='choice';
    b.innerHTML = `<span class="glyph">${L.ar}</span>`;
    b.addEventListener('click', () => {
      if (L.ar === answer.ar) { b.classList.add('correct'); setTimeout(startMatchFirst, 700); }
      else { b.classList.add('wrong'); }
    });
    ch.appendChild(b);
  });
  q.appendChild(ch);
  box.appendChild(q);
}

// Helpers
function pickMany(list, n, includeOne) {
  const out = includeOne ? [includeOne] : [];
  const pool = list.filter(x => !out.includes(x)).slice();
  while (out.length < n && pool.length) {
    const x = pool.splice(Math.floor(Math.random()*pool.length),1)[0];
    if (!out.includes(x)) out.push(x);
  }
  // ensure 4
  while (out.length < n) out.push(list[Math.floor(Math.random()*list.length)]);
  return shuffle(out);
}
function shuffle(a){ for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]} return a; }

// Maze
function buildMaze() {
  const N = 8;
  const maze = document.getElementById('maze');
  if (!maze) return;
  maze.innerHTML = "";
  const cells = [];
  for (let i=0;i<N*N;i++){
    const div = document.createElement('div');
    div.className = 'cell';
    maze.appendChild(div);
    cells.push(div);
  }
  const walls = new Set([3,4,12,20,21,22,30,38,39,46,54,55,62]);
  walls.forEach(i => cells[i].classList.add('wall'));
  let player = 0;
  let goal = N*N-1;
  cells[player].classList.add('player');
  cells[goal].classList.add('goal');

  const letterIndices = [];
  while (letterIndices.length < 10) {
    const idx = Math.floor(Math.random()*N*N);
    if (idx!==player && idx!==goal && !walls.has(idx) && !letterIndices.includes(idx)) letterIndices.push(idx);
  }
  letterIndices.forEach((i, k) => {
    const L = LETTERS[k % LETTERS.length];
    cells[i].textContent = L.ar;
  });

  function move(dx, dy) {
    const x = player % N, y = Math.floor(player / N);
    const nx = x + dx, ny = y + dy;
    if (nx<0||ny<0||nx>=N||ny>=N) return;
    const ni = ny*N + nx;
    if (walls.has(ni)) return;
    cells[player].classList.remove('player');
    player = ni;
    const tile = cells[player];
    tile.classList.add('player');
    if (tile.textContent && tile.textContent.trim().length) {
      speakAr(tile.textContent.trim());
      tile.textContent = ""; // collect
    }
    if (player === goal) {
      setTimeout(() => alert('Great job! You reached the cheese!'), 50);
      buildMaze();
    }
  }
  window.onkeydown = (e) => {
    if (e.key === 'ArrowLeft') move(-1, 0);
    if (e.key === 'ArrowRight') move(1, 0);
    if (e.key === 'ArrowUp') move(0, -1);
    if (e.key === 'ArrowDown') move(0, 1);
  };
}

})(); // IIFE
