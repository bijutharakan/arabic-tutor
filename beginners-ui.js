// Beginners Module UI Implementation
class BeginnersUI {
  constructor() {
    this.currentLesson = 0;
    this.currentLetter = 0;
    this.currentGreetingIndex = 0;
    this.progress = this.loadProgress() || {
      lettersLearned: [],
      wordsLearned: [],
      streak: 0,
      lastPractice: null,
      totalMinutes: 0,
      achievements: []
    };
  }

  init() {
    this.checkDailyStreak();
    this.updateProgressBar();
  }

  renderBeginnersHub() {
    return `
      <div class="beginners-hub">
        <div class="hub-header">
          <h2>🌟 Beginners Hub</h2>
          <p>Start your Arabic learning journey with easy, fun lessons!</p>
          ${this.renderProgressSummary()}
        </div>

        <div class="hub-modules">
          ${this.renderAlphabetJourney()}
          ${this.renderFirst100Words()}
          ${this.renderSimpleGreetings()}
          ${this.renderNumbersSection()}
          ${this.renderColorsShapes()}
          ${this.renderDailyPhrases()}
          ${this.renderMiniGames()}
          ${this.renderWritingPractice()}
        </div>

        <div class="achievements-panel">
          ${this.renderAchievements()}
        </div>
      </div>
    `;
  }

  renderProgressSummary() {
    const letterProgress = (this.progress.lettersLearned.length / 28) * 100;
    const wordProgress = (this.progress.wordsLearned.length / 100) * 100;
    
    return `
      <div class="progress-summary">
        <div class="progress-item">
          <span class="progress-icon">🔤</span>
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${letterProgress}%"></div>
          </div>
          <span class="progress-text">${this.progress.lettersLearned.length}/28 Letters</span>
        </div>
        <div class="progress-item">
          <span class="progress-icon">📚</span>
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${wordProgress}%"></div>
          </div>
          <span class="progress-text">${this.progress.wordsLearned.length}/100 Words</span>
        </div>
        <div class="progress-item">
          <span class="progress-icon">🔥</span>
          <span class="progress-text">${this.progress.streak} Day Streak</span>
        </div>
      </div>
    `;
  }

  renderAlphabetJourney() {
    const journey = BEGINNERS_MODULE.alphabetJourney;
    return `
      <div class="module-card alphabet-journey">
        <div class="module-header">
          <h3>🎯 ${journey.title}</h3>
          <p>${journey.description}</p>
        </div>
        <div class="letter-carousel">
          ${journey.lessons.slice(0, 3).map(letter => `
            <div class="letter-preview-card ${this.progress.lettersLearned.includes(letter.id) ? 'completed' : ''}">
              <div class="letter-display">${letter.letter}</div>
              <div class="letter-name">${letter.name}</div>
              <div class="letter-mnemonic">${letter.mnemonicImage} ${letter.mnemonicPhrase}</div>
              <button class="learn-letter-btn" onclick="beginners.startLetterLesson('${letter.id}')">
                ${this.progress.lettersLearned.includes(letter.id) ? 'Review' : 'Learn'}
              </button>
            </div>
          `).join('')}
        </div>
        <button class="view-all-btn" onclick="beginners.showAllLetters()">View All Letters →</button>
      </div>
    `;
  }

  renderFirst100Words() {
    const module = BEGINNERS_MODULE.first100Words;
    return `
      <div class="module-card first-words">
        <div class="module-header">
          <h3>💬 ${module.title}</h3>
          <p>${module.description}</p>
        </div>
        <div class="word-categories">
          ${module.categories.map(cat => `
            <div class="word-category-card">
              <div class="category-icon">${cat.icon}</div>
              <div class="category-name">${cat.name}</div>
              <div class="word-count">${cat.words.length} words</div>
              <button class="explore-btn" onclick="beginners.showCategoryWords('${cat.name}')">
                Explore
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderSimpleGreetings() {
    const module = BEGINNERS_MODULE.simpleGreetings;
    return `
      <div class="module-card greetings">
        <div class="module-header">
          <h3>👋 ${module.title}</h3>
          <p>${module.description}</p>
        </div>
        <div class="greetings-grid">
          ${module.greetings.slice(0, 4).map(greeting => `
            <div class="greeting-card">
              <div class="greeting-emoji">${greeting.emoji}</div>
              <div class="greeting-arabic">${greeting.arabic}</div>
              <div class="greeting-english">${greeting.english}</div>
              <div class="greeting-transliteration">${greeting.transliteration}</div>
              <button class="play-audio-btn" onclick="beginners.playAudio('${greeting.arabic}')">
                🔊 Listen
              </button>
            </div>
          `).join('')}
        </div>
        <button class="practice-btn" onclick="beginners.practiceGreetings()">
          Practice All Greetings
        </button>
      </div>
    `;
  }

  renderNumbersSection() {
    const module = BEGINNERS_MODULE.numbersAndCounting;
    return `
      <div class="module-card numbers">
        <div class="module-header">
          <h3>🔢 ${module.title}</h3>
          <p>${module.description}</p>
        </div>
        <div class="numbers-display">
          ${module.numbers.slice(0, 6).map(num => `
            <div class="number-card">
              <div class="number-digit">${num.digit}</div>
              <div class="number-arabic">${num.arabic}</div>
              <div class="number-english">${num.english}</div>
              <div class="number-gesture">${num.handGesture}</div>
            </div>
          `).join('')}
        </div>
        <button class="counting-game-btn" onclick="beginners.startCountingGame()">
          Play Counting Game
        </button>
      </div>
    `;
  }

  renderColorsShapes() {
    const module = BEGINNERS_MODULE.colorsAndShapes;
    return `
      <div class="module-card colors-shapes">
        <div class="module-header">
          <h3>🎨 ${module.title}</h3>
          <p>${module.description}</p>
        </div>
        <div class="colors-shapes-grid">
          <div class="colors-section">
            <h4>Colors</h4>
            <div class="colors-list">
              ${module.colors.slice(0, 5).map(color => `
                <div class="color-item">
                  <span class="color-circle" style="background: ${color.hex}"></span>
                  <span class="color-arabic">${color.arabic}</span>
                  <span class="color-emoji">${color.emoji}</span>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="shapes-section">
            <h4>Shapes</h4>
            <div class="shapes-list">
              ${module.shapes.slice(0, 4).map(shape => `
                <div class="shape-item">
                  <span class="shape-symbol">${shape.symbol}</span>
                  <span class="shape-arabic">${shape.arabic}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderDailyPhrases() {
    const module = BEGINNERS_MODULE.dailyPhrases;
    return `
      <div class="module-card daily-phrases">
        <div class="module-header">
          <h3>🗣️ ${module.title}</h3>
          <p>${module.description}</p>
        </div>
        <div class="phrase-categories">
          ${module.phrases.map(category => `
            <div class="phrase-category">
              <h4>${category.category}</h4>
              <div class="phrase-list">
                ${category.items.slice(0, 3).map(phrase => `
                  <div class="phrase-item">
                    <span class="phrase-arabic">${phrase.arabic}</span>
                    <span class="phrase-english">${phrase.english}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderMiniGames() {
    const module = BEGINNERS_MODULE.miniGames;
    return `
      <div class="module-card mini-games">
        <div class="module-header">
          <h3>🎮 ${module.title}</h3>
          <p>${module.description}</p>
        </div>
        <div class="games-grid">
          ${module.games.map(game => `
            <div class="game-card">
              <div class="game-icon">${game.icon}</div>
              <div class="game-name">${game.name}</div>
              <div class="game-description">${game.description}</div>
              <div class="game-difficulty difficulty-${game.difficulty}">${game.difficulty}</div>
              <button class="play-game-btn" onclick="beginners.startGame('${game.name}')">
                Play
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderWritingPractice() {
    const module = BEGINNERS_MODULE.writingPractice;
    return `
      <div class="module-card writing-practice">
        <div class="module-header">
          <h3>✍️ ${module.title}</h3>
          <p>${module.description}</p>
        </div>
        <div class="writing-features">
          ${module.features.map(feature => `
            <div class="writing-feature">
              <span class="feature-icon">${feature.icon}</span>
              <div class="feature-content">
                <h4>${feature.name}</h4>
                <p>${feature.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
        <button class="start-writing-btn" onclick="beginners.startWritingPractice()">
          Start Writing Practice
        </button>
      </div>
    `;
  }

  renderAchievements() {
    const achievements = BEGINNERS_MODULE.progressTracking.achievements;
    return `
      <div class="achievements-section">
        <h3>🏆 Achievements</h3>
        <div class="achievements-grid">
          ${achievements.map(achievement => `
            <div class="achievement ${this.progress.achievements.includes(achievement.id) ? 'unlocked' : 'locked'}">
              <div class="achievement-icon">${achievement.icon}</div>
              <div class="achievement-name">${achievement.name}</div>
              <div class="achievement-description">${achievement.description}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Interactive lesson for letters
  startLetterLesson(letterId) {
    const letter = BEGINNERS_MODULE.alphabetJourney.lessons.find(l => l.id === letterId);
    if (!letter) return;

    const lessonHTML = `
      <div class="letter-lesson-modal">
        <div class="lesson-content">
          <button class="close-btn" onclick="beginners.closeLesson()">×</button>
          
          <div class="lesson-header">
            <h2>Learning: ${letter.name}</h2>
            <div class="lesson-progress">
              <div class="progress-steps">
                <span class="step active">1. Letter</span>
                <span class="step">2. Forms</span>
                <span class="step">3. Words</span>
                <span class="step">4. Practice</span>
              </div>
            </div>
          </div>

          <div class="lesson-body">
            <div class="letter-showcase">
              <div class="main-letter">${letter.letter}</div>
              <div class="letter-info">
                <p class="pronunciation">Pronounced: ${letter.pronunciation}</p>
                <p class="mnemonic">${letter.mnemonicImage} ${letter.mnemonicPhrase}</p>
              </div>
            </div>

            <div class="letter-forms">
              <h3>Letter Forms</h3>
              <div class="forms-grid">
                <div class="form-card">
                  <span class="form-label">Isolated</span>
                  <span class="form-letter">${letter.shapes.isolated}</span>
                </div>
                <div class="form-card">
                  <span class="form-label">Initial</span>
                  <span class="form-letter">${letter.shapes.initial}</span>
                </div>
                <div class="form-card">
                  <span class="form-label">Medial</span>
                  <span class="form-letter">${letter.shapes.medial}</span>
                </div>
                <div class="form-card">
                  <span class="form-label">Final</span>
                  <span class="form-letter">${letter.shapes.final}</span>
                </div>
              </div>
            </div>

            <div class="example-words">
              <h3>Example Words</h3>
              ${letter.examples.map(ex => `
                <div class="example-word">
                  <span class="word-arabic">${ex.arabic}</span>
                  <span class="word-english">${ex.english}</span>
                  <span class="word-transliteration">${ex.transliteration}</span>
                  <button onclick="beginners.playAudio('${ex.arabic}')">🔊</button>
                </div>
              `).join('')}
            </div>

            <div class="practice-section">
              <h3>Practice Words</h3>
              <div class="practice-words">
                ${letter.practiceWords.map(word => `
                  <span class="practice-word">${word}</span>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="lesson-footer">
            <button class="complete-btn" onclick="beginners.completeLetterLesson('${letterId}')">
              Complete Lesson ✓
            </button>
          </div>
        </div>
      </div>
    `;

    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'lesson-modal-overlay';
    modal.innerHTML = lessonHTML;
    document.body.appendChild(modal);
  }

  completeLetterLesson(letterId) {
    if (!this.progress.lettersLearned.includes(letterId)) {
      this.progress.lettersLearned.push(letterId);
      this.saveProgress();
      this.checkAchievements();
    }
    this.closeLesson();
    this.showCongratulations();
  }

  showCongratulations() {
    const congrats = document.createElement('div');
    congrats.className = 'congratulations-popup';
    congrats.innerHTML = `
      <div class="congrats-content">
        <div class="congrats-icon">🎉</div>
        <h3>Great Job!</h3>
        <p>You've learned a new letter!</p>
        <div class="congrats-stats">
          <span>Letters Learned: ${this.progress.lettersLearned.length}/28</span>
        </div>
      </div>
    `;
    document.body.appendChild(congrats);
    
    setTimeout(() => {
      congrats.remove();
    }, 3000);
  }

  closeLesson() {
    const modal = document.querySelector('.lesson-modal-overlay');
    if (modal) modal.remove();
  }

  // Games implementation
  startCountingGame() {
    const numbers = BEGINNERS_MODULE.numbersAndCounting.numbers;
    const randomNum = numbers[Math.floor(Math.random() * numbers.length)];
    
    const gameHTML = `
      <div class="counting-game-modal">
        <div class="game-content">
          <button class="close-game-btn" onclick="beginners.closeGameModal()">×</button>
          <h3>Counting Game</h3>
          <div class="game-question">
            <p>What number is this?</p>
            <div class="number-display">${randomNum.arabic}</div>
          </div>
          <div class="game-options">
            ${this.shuffleArray(numbers).slice(0, 4).map(num => `
              <button class="option-btn" onclick="beginners.checkAnswer('${num.english}', '${randomNum.english}')">
                ${num.english}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    
    this.showGameModal(gameHTML);
  }

  checkAnswer(selected, correct) {
    if (selected === correct) {
      this.showFeedback('Correct! 🎉', 'success');
      setTimeout(() => this.closeGameModal(), 1500);
    } else {
      this.showFeedback('Try again! 🤔', 'error');
    }
  }

  showFeedback(message, type) {
    const feedback = document.createElement('div');
    feedback.className = `feedback-popup ${type}`;
    feedback.textContent = message;
    document.body.appendChild(feedback);
    
    setTimeout(() => feedback.remove(), 2000);
  }

  // Utility functions
  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  playAudio(text) {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  }

  checkDailyStreak() {
    const today = new Date().toDateString();
    if (this.progress.lastPractice !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (this.progress.lastPractice === yesterday.toDateString()) {
        this.progress.streak++;
      } else {
        this.progress.streak = 1;
      }
      
      this.progress.lastPractice = today;
      this.saveProgress();
    }
  }

  checkAchievements() {
    const achievements = BEGINNERS_MODULE.progressTracking.achievements;
    
    // Check first letter achievement
    if (this.progress.lettersLearned.length >= 1 && !this.progress.achievements.includes('first_letter')) {
      this.unlockAchievement('first_letter');
    }
    
    // Check word collector achievement
    if (this.progress.wordsLearned.length >= 10 && !this.progress.achievements.includes('10_words')) {
      this.unlockAchievement('10_words');
    }
    
    // Check week streak achievement
    if (this.progress.streak >= 7 && !this.progress.achievements.includes('week_streak')) {
      this.unlockAchievement('week_streak');
    }
  }

  unlockAchievement(achievementId) {
    this.progress.achievements.push(achievementId);
    this.saveProgress();
    
    const achievement = BEGINNERS_MODULE.progressTracking.achievements.find(a => a.id === achievementId);
    if (achievement) {
      this.showAchievementUnlocked(achievement);
    }
  }

  showAchievementUnlocked(achievement) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
      <div class="achievement-content">
        <div class="achievement-icon">${achievement.icon}</div>
        <div class="achievement-text">
          <h4>Achievement Unlocked!</h4>
          <p>${achievement.name}</p>
          <small>${achievement.description}</small>
        </div>
      </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 5000);
  }

  saveProgress() {
    localStorage.setItem('beginnersProgress', JSON.stringify(this.progress));
  }

  loadProgress() {
    const saved = localStorage.getItem('beginnersProgress');
    return saved ? JSON.parse(saved) : null;
  }

  updateProgressBar() {
    // Update any progress bars in the UI
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.transition = 'width 0.5s ease';
    });
  }

  showGameModal(html) {
    // Remove any existing game modal first
    this.closeGameModal();
    
    const modal = document.createElement('div');
    modal.className = 'game-modal-overlay';
    modal.innerHTML = html;
    document.body.appendChild(modal);
    
    // Click overlay to close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }
  
  closeGameModal() {
    const modal = document.querySelector('.game-modal-overlay');
    if (modal) modal.remove();
  }

  // Additional methods for other features
  showCategoryWords(categoryName) {
    const category = BEGINNERS_MODULE.first100Words.categories.find(c => c.name === categoryName);
    if (!category) return;
    
    const wordsHTML = `
      <div class="category-words-modal">
        <div class="words-content">
          <button class="close-btn" onclick="beginners.closeCategoryWords()">×</button>
          <h3>${category.icon} ${category.name} Words</h3>
          <div class="words-grid">
            ${category.words.map(word => `
              <div class="word-card-mini">
                <div class="word-image">${word.image}</div>
                <div class="word-arabic">${word.arabic}</div>
                <div class="word-english">${word.english}</div>
                <div class="word-transliteration">${word.transliteration}</div>
                <button class="mini-audio-btn" onclick="beginners.playAudio('${word.arabic}')">🔊</button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    
    this.showModal(wordsHTML, 'category-modal-overlay');
  }
  
  closeCategoryWords() {
    const modal = document.querySelector('.category-modal-overlay');
    if (modal) modal.remove();
  }
  
  showModal(html, className = 'modal-overlay') {
    // Remove any existing modal
    document.querySelectorAll('.' + className).forEach(m => m.remove());
    
    const modal = document.createElement('div');
    modal.className = className;
    modal.innerHTML = html;
    document.body.appendChild(modal);
    
    // Click overlay to close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }

  practiceGreetings() {
    const greetings = BEGINNERS_MODULE.simpleGreetings.greetings;
    const currentIndex = this.currentGreetingIndex || 0;
    const greeting = greetings[currentIndex];
    
    const practiceHTML = `
        <div class="greeting-practice-modal">
          <div class="practice-content">
            <button class="close-btn" onclick="beginners.closePractice()">×</button>
            <h3>Practice Greetings (${currentIndex + 1}/${greetings.length})</h3>
            <div class="greeting-practice-card">
              <div class="practice-emoji">${greeting.emoji}</div>
              <div class="practice-arabic">${greeting.arabic}</div>
              <div class="practice-english">${greeting.english}</div>
              <div class="practice-transliteration">${greeting.transliteration}</div>
              <div class="practice-usage">${greeting.usage}</div>
              ${greeting.response ? `
                <div class="practice-response">
                  <strong>Response:</strong> ${greeting.response}
                  ${greeting.responseTransliteration ? `(${greeting.responseTransliteration})` : ''}
                </div>
              ` : ''}
            </div>
            <div class="practice-controls">
              <button class="practice-audio-btn" onclick="beginners.playAudio('${greeting.arabic}')">🔊 Listen</button>
              <button class="practice-next-btn" onclick="beginners.nextGreeting(${currentIndex})">Next →</button>
            </div>
          </div>
        </div>
      `;
    
    this.showModal(practiceHTML, 'practice-modal-overlay');
  }
  
  nextGreeting(currentIndex) {
    const greetings = BEGINNERS_MODULE.simpleGreetings.greetings;
    const nextIndex = currentIndex + 1;
    
    if (nextIndex < greetings.length) {
      this.closePractice();
      setTimeout(() => {
        this.currentGreetingIndex = nextIndex;
        this.practiceGreetings();
      }, 100);
    } else {
      this.showFeedback('Practice Complete! 🎉', 'success');
      setTimeout(() => this.closePractice(), 2000);
    }
  }
  
  closePractice() {
    const modal = document.querySelector('.practice-modal-overlay');
    if (modal) modal.remove();
  }

  startGame(gameName) {
    // Placeholder for different games
    const gameHTML = `
      <div class="game-placeholder-modal">
        <div class="placeholder-content">
          <button class="close-btn" onclick="beginners.closeGamePlaceholder()">×</button>
          <h3>🎮 ${gameName}</h3>
          <p>This game is coming soon!</p>
          <p>We're working on making it fun and educational.</p>
        </div>
      </div>
    `;
    
    this.showModal(gameHTML, 'game-placeholder-overlay');
  }
  
  closeGamePlaceholder() {
    const modal = document.querySelector('.game-placeholder-overlay');
    if (modal) modal.remove();
  }

  startWritingPractice() {
    const writingHTML = `
      <div class="writing-practice-modal">
        <div class="writing-content">
          <button class="close-btn" onclick="beginners.closeWriting()">×</button>
          <h3>✍️ Writing Practice</h3>
          <p>Writing practice feature coming soon!</p>
          <p>This will include:</p>
          <ul>
            <li>Animated stroke order guides</li>
            <li>Interactive tracing exercises</li>
            <li>Printable practice sheets</li>
          </ul>
        </div>
      </div>
    `;
    
    this.showModal(writingHTML, 'writing-modal-overlay');
  }
  
  closeWriting() {
    const modal = document.querySelector('.writing-modal-overlay');
    if (modal) modal.remove();
  }

  showAllLetters() {
    const letters = BEGINNERS_MODULE.alphabetJourney.lessons;
    const lettersHTML = `
      <div class="all-letters-modal">
        <div class="letters-content">
          <button class="close-btn" onclick="beginners.closeAllLetters()">×</button>
          <h3>🔤 Complete Arabic Alphabet</h3>
          <div class="all-letters-grid">
            ${letters.map(letter => `
              <div class="letter-tile ${this.progress.lettersLearned.includes(letter.id) ? 'learned' : ''}">
                <div class="tile-letter">${letter.letter}</div>
                <div class="tile-name">${letter.name}</div>
                <button class="tile-learn-btn" onclick="beginners.startLetterLesson('${letter.id}')">
                  ${this.progress.lettersLearned.includes(letter.id) ? '✓' : 'Learn'}
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    
    this.showModal(lettersHTML, 'letters-modal-overlay');
  }
  
  closeAllLetters() {
    const modal = document.querySelector('.letters-modal-overlay');
    if (modal) modal.remove();
  }
}

// Initialize beginners module
const beginners = new BeginnersUI();

// Export for use in main app
window.beginners = beginners;