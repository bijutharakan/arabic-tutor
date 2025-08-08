// Comprehensive Quiz Fixes for Audio and Timing Issues

// Enhanced speech function with queue management
let speechQueue = [];
let isSpeaking = false;

function enhancedSpeakAr(text, rate = 0.85, callback = null) {
  // Add to queue
  speechQueue.push({ text, rate, callback });
  processSpeechQueue();
}

function processSpeechQueue() {
  if (isSpeaking || speechQueue.length === 0) return;
  
  const { text, rate, callback } = speechQueue.shift();
  isSpeaking = true;
  
  if (window.enhancedSpeak) {
    window.enhancedSpeak(text, 'ar-SA', rate);
  } else if (window.speechSynthesis) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.rate = rate;
    
    utterance.onend = () => {
      isSpeaking = false;
      if (callback) callback();
      setTimeout(() => processSpeechQueue(), 200);
    };
    
    utterance.onerror = () => {
      isSpeaking = false;
      setTimeout(() => processSpeechQueue(), 200);
    };
    
    speechSynthesis.speak(utterance);
  } else {
    isSpeaking = false;
    if (callback) callback();
  }
}

// Replace the original speakAr with queue-managed version
const originalSpeakAr = window.speakAr;
window.speakAr = function(text, rate = 0.85) {
  // Cancel any pending speech for immediate playback
  speechSynthesis.cancel();
  speechQueue = [];
  isSpeaking = false;
  
  // Use the enhanced version with proper timing
  if (window.enhancedSpeak) {
    window.enhancedSpeak(text, 'ar-SA', rate);
  } else {
    originalSpeakAr(text, rate);
  }
};

// Quiz timing constants
const QUIZ_TIMINGS = {
  INITIAL_AUDIO_DELAY: 800,      // Delay before playing initial audio
  SUCCESS_FEEDBACK_DELAY: 2000,   // Time to show success before next question
  ERROR_FEEDBACK_DELAY: 3000,     // Time to show error and correct answer
  AUDIO_COMPLETION_DELAY: 500,    // Extra time after audio completes
  MINIMUM_INTERACTION_TIME: 1500, // Minimum time before allowing next action
  SPELL_LETTER_DELAY: 600,        // Delay between spelling letters
  TRANSITION_ANIMATION: 300       // UI transition time
};

// Track interaction timing
let lastInteractionTime = 0;
let isTransitioning = false;

function canProceed() {
  const now = Date.now();
  const timeSinceLastInteraction = now - lastInteractionTime;
  return !isTransitioning && timeSinceLastInteraction >= QUIZ_TIMINGS.MINIMUM_INTERACTION_TIME;
}

function setTransitioning(value) {
  isTransitioning = value;
  if (value) {
    lastInteractionTime = Date.now();
  }
}

// Enhanced quiz transition with proper delays
function safeNextRound(nextRoundFunc, delay = QUIZ_TIMINGS.SUCCESS_FEEDBACK_DELAY) {
  if (isTransitioning) return;
  
  setTransitioning(true);
  
  // Ensure all audio completes before transitioning
  setTimeout(() => {
    speechSynthesis.cancel();
    speechQueue = [];
    isSpeaking = false;
    setTransitioning(false);
    nextRoundFunc();
  }, delay);
}

// Fix for rushed spelling in word spelling
function spellWordWithProperTiming(word, callback) {
  const letters = word.split('');
  let currentIndex = 0;
  
  function speakNextLetter() {
    if (currentIndex < letters.length) {
      speakAr(letters[currentIndex], 0.7);
      currentIndex++;
      setTimeout(speakNextLetter, QUIZ_TIMINGS.SPELL_LETTER_DELAY);
    } else {
      // Speak the complete word after spelling
      setTimeout(() => {
        speakAr(word, 0.85);
        if (callback) {
          setTimeout(callback, QUIZ_TIMINGS.AUDIO_COMPLETION_DELAY);
        }
      }, QUIZ_TIMINGS.SPELL_LETTER_DELAY);
    }
  }
  
  speakNextLetter();
}

// Enhanced playSound with better timing
function enhancedPlaySound(type) {
  try {
    const audio = new Audio();
    const sounds = {
      correct: 'data:audio/mp3;base64,SUQzAwAAAAAAIVRYWFgAAAAJAAAAU29mdHdhcmUATGF2YzU4LjI5SUQzAwAAAAAAIVRYWFgAAAAJAAAAU29mdHdhcmUATGF2YzU4LjI5//OEwAAAAAAAAAAAAEluZm8AAAAPAAAAAwAAA6QAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAAATGF2YzU4LjU0AAAAAAAAAAAAAAAAJAM0AAAAAAAAAAOQ',
      wrong: 'data:audio/mp3;base64,SUQzAwAAAAAAIVRYWFgAAAAJAAAAU29mdHdhcmUATGF2YzU4LjI5SUQzAwAAAAAAIVRYWFgAAAAJAAAAU29mdHdhcmUATGF2YzU4LjI5//OEwAAAAAAAAAAAAEluZm8AAAAPAAAAAwAAA6QAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAAATGF2YzU4LjU0AAAAAAAAAAAAAAAAJAM0AAAAAAAAAAOQ'
    };
    
    if (sounds[type]) {
      audio.src = sounds[type];
      audio.volume = 0.3;
      audio.play().catch(() => {});
    }
  } catch (e) {
    console.log('Sound effect failed:', e);
  }
}

// Override the global playSound
window.playSound = enhancedPlaySound;

// Fix for listening quiz timing
window.fixListeningQuiz = function() {
  const originalStartListeningQuiz = window.startListeningQuiz;
  
  window.startListeningQuiz = function() {
    const area = document.getElementById('quizArea');
    const allWords = WORD_CATEGORIES.flatMap(c => c.words);
    let score = 0;
    let wrongAnswers = 0;
    let round = 0;
    const maxRounds = 10;
    let isProcessing = false;
    
    function nextRound() {
      if (round >= maxRounds) {
        const percentage = Math.round((score / maxRounds) * 100);
        area.innerHTML = `
          <div class="quiz-complete">
            <h3>Listening Quiz Complete!</h3>
            <div class="score">Score: ${score}/${maxRounds} (${percentage}%)</div>
            <div class="score-message">${percentage >= 80 ? '🏆 Excellent!' : percentage >= 60 ? '👍 Good job!' : '📚 Keep practicing!'}</div>
            <button class="primary btn-touch" onclick="route('quizzes')">Back to Quizzes</button>
          </div>
        `;
        playSound(percentage >= 80 ? 'correct' : 'wrong');
        return;
      }
      
      isProcessing = false;
      round++;
      const correctWord = allWords[Math.floor(Math.random() * allWords.length)];
      const options = shuffle([correctWord, ...pickMany(allWords.filter(w => w !== correctWord), 3)]);
      
      area.innerHTML = `
        <div class="quiz-round">
          <h3>Round ${round}/${maxRounds}</h3>
          <div class="score-tracker">Score: ${score} | Wrong: ${wrongAnswers}</div>
          <button class="hear-btn btn-touch">🔊 Listen to the Word</button>
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
      hearBtn.addEventListener('click', () => {
        speakAr(correctWord.ar, 0.75);
      });
      
      area.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (isProcessing) return; // Prevent multiple clicks
          isProcessing = true;
          
          // Disable all buttons immediately
          area.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
          
          if (btn.dataset.word === correctWord.ar) {
            btn.classList.add('correct');
            score++;
            playSound('correct');
            
            // Show success feedback
            const feedback = document.createElement('div');
            feedback.className = 'feedback correct-feedback';
            feedback.innerHTML = `✅ Correct! "${correctWord.en}" is "${correctWord.ar}"`;
            area.appendChild(feedback);
            
            // Play the word again as confirmation
            setTimeout(() => speakAr(correctWord.ar, 0.75), 300);
            
            // Move to next round after proper delay
            setTimeout(() => nextRound(), QUIZ_TIMINGS.SUCCESS_FEEDBACK_DELAY);
          } else {
            btn.classList.add('wrong');
            wrongAnswers++;
            playSound('wrong');
            
            // Highlight correct answer
            const correctBtn = area.querySelector(`[data-word="${correctWord.ar}"]`);
            if (correctBtn) {
              correctBtn.classList.add('correct');
              correctBtn.style.animation = 'pulse 0.5s 2';
            }
            
            // Show error feedback
            const feedback = document.createElement('div');
            feedback.className = 'feedback wrong-feedback';
            feedback.innerHTML = `❌ Wrong! The correct answer is "${correctWord.en}" (${correctWord.ar})`;
            area.appendChild(feedback);
            
            // Play correct answer
            setTimeout(() => speakAr(correctWord.ar, 0.75), 500);
            
            // Move to next round after longer delay
            setTimeout(() => nextRound(), QUIZ_TIMINGS.ERROR_FEEDBACK_DELAY);
          }
        });
      });
      
      // Auto-play the word after a delay
      setTimeout(() => speakAr(correctWord.ar, 0.75), QUIZ_TIMINGS.INITIAL_AUDIO_DELAY);
    }
    
    nextRound();
  };
};

// Fix for spelling quiz timing
window.fixSpellingQuiz = function() {
  const originalStartSpellingQuiz = window.startSpellingQuiz;
  
  window.startSpellingQuiz = function() {
    const area = document.getElementById('quizArea');
    const allWords = WORD_CATEGORIES.flatMap(c => c.words);
    let totalScore = 0;
    let wordsCompleted = 0;
    let isProcessing = false;
    
    function startNewWord() {
      if (wordsCompleted >= 5) {
        area.innerHTML = `
          <div class="quiz-complete">
            <h3>Spelling Quiz Complete!</h3>
            <div class="score">Total Score: ${totalScore}</div>
            <div class="words-completed">Words Completed: ${wordsCompleted}</div>
            <button class="primary btn-touch" onclick="route('quizzes')">Back to Quizzes</button>
          </div>
        `;
        return;
      }
      
      const word = allWords[Math.floor(Math.random() * allWords.length)];
      const letters = word.ar.split('');
      let currentIndex = 0;
      let mistakes = 0;
      let lettersSoFar = [];
      isProcessing = false;
      
      area.innerHTML = `
        <div class="spelling-quiz">
          <h3>Spell the word for:</h3>
          <div class="word-prompt">
            <div class="word-pic">${word.pic}</div>
            <div class="word-en">${word.en}</div>
            <button class="hint-btn btn-touch">🔊 Hear Word</button>
          </div>
          <div class="spelling-direction-note">← Build the Arabic word from right to left</div>
          <div class="spelling-progress" id="progress"></div>
          <div class="letter-options" id="letterOptions"></div>
        </div>
      `;
      
      // Hint button to hear the word
      area.querySelector('.hint-btn')?.addEventListener('click', () => {
        if (!isProcessing) {
          speakAr(word.ar, 0.75);
        }
      });
      
      function updateProgress() {
        const progress = document.getElementById('progress');
        const display = [...lettersSoFar].reverse().join('');
        progress.innerHTML = `
          <div class="arabic-spelling" dir="rtl">
            ${display || '_'}
          </div>
          <div class="progress-indicator">${currentIndex}/${letters.length} letters</div>
        `;
      }
      
      function showOptions() {
        const optionsDiv = document.getElementById('letterOptions');
        const correctLetter = letters[currentIndex];
        const allLetters = LETTERS.map(l => l.ar);
        const options = shuffle([correctLetter, ...pickMany(allLetters.filter(l => l !== correctLetter), 5)]);
        
        optionsDiv.innerHTML = options.map(letter => `
          <button class="letter-option btn-touch" data-letter="${letter}">
            ${letter}
          </button>
        `).join('');
        
        optionsDiv.querySelectorAll('.letter-option').forEach(btn => {
          btn.addEventListener('click', () => {
            if (isProcessing) return;
            isProcessing = true;
            
            if (btn.dataset.letter === correctLetter) {
              btn.classList.add('correct');
              lettersSoFar.push(correctLetter);
              currentIndex++;
              playSound('correct');
              
              // Speak the letter
              speakAr(correctLetter, 0.7);
              
              if (currentIndex >= letters.length) {
                // Word complete
                const wordScore = Math.max(10 - mistakes * 2, 2);
                totalScore += wordScore;
                wordsCompleted++;
                
                setTimeout(() => {
                  area.innerHTML = `
                    <div class="word-complete">
                      <h3>✅ Perfect! You spelled "${word.en}"</h3>
                      <div class="arabic-result">${word.ar}</div>
                      <div class="word-score">+${wordScore} points ${mistakes === 0 ? '🏆 Perfect!' : ''}</div>
                      <div class="quiz-actions">
                        <button class="primary btn-touch listen-complete">🔊 Listen</button>
                        <button class="primary btn-touch next-word">Next Word</button>
                        <button class="btn-touch" onclick="route('quizzes')">Finish Quiz</button>
                      </div>
                    </div>
                  `;
                  
                  area.querySelector('.listen-complete')?.addEventListener('click', () => {
                    speakAr(word.ar, 0.75);
                  });
                  
                  area.querySelector('.next-word')?.addEventListener('click', () => {
                    startNewWord();
                  });
                  
                  // Play complete word
                  setTimeout(() => speakAr(word.ar, 0.75), 500);
                }, 500);
              } else {
                setTimeout(() => {
                  isProcessing = false;
                  updateProgress();
                  showOptions();
                }, 800);
              }
            } else {
              btn.classList.add('wrong');
              mistakes++;
              playSound('wrong');
              
              // Highlight correct answer briefly
              const correctBtn = optionsDiv.querySelector(`[data-letter="${correctLetter}"]`);
              if (correctBtn) {
                correctBtn.classList.add('correct');
                setTimeout(() => speakAr(correctLetter, 0.7), 300);
              }
              
              setTimeout(() => {
                isProcessing = false;
              }, 1500);
            }
          });
        });
      }
      
      updateProgress();
      showOptions();
      
      // Initial pronunciation
      setTimeout(() => speakAr(word.ar, 0.75), QUIZ_TIMINGS.INITIAL_AUDIO_DELAY);
    }
    
    startNewWord();
    return { startNewWord };
  };
};

// Apply all fixes when document is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.fixListeningQuiz();
    window.fixSpellingQuiz();
  });
} else {
  window.fixListeningQuiz();
  window.fixSpellingQuiz();
}

// Export timing constants for other uses
window.QUIZ_TIMINGS = QUIZ_TIMINGS;