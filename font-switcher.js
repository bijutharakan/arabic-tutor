// Arabic Font Switcher System
const ARABIC_FONTS = [
  {
    id: 'noto-naskh',
    name: 'Noto Naskh Arabic',
    class: 'font-noto-naskh',
    description: 'Clear & modern, perfect for learning',
    preview: 'السَّلَامُ عَلَيْكُمْ',
    recommended: true
  },
  {
    id: 'scheherazade',
    name: 'Scheherazade New',
    class: 'font-scheherazade',
    description: 'Best for Quran & texts with harakat',
    preview: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    recommended: true
  },
  {
    id: 'amiri',
    name: 'Amiri',
    class: 'font-amiri',
    description: 'Traditional & elegant style',
    preview: 'كِتَابٌ جَمِيلٌ',
    recommended: false
  },
  {
    id: 'cairo',
    name: 'Cairo',
    class: 'font-cairo',
    description: 'Modern sans-serif, clean UI',
    preview: 'مَرْحَبًا بِكُمْ',
    recommended: false
  },
  {
    id: 'tajawal',
    name: 'Tajawal',
    class: 'font-tajawal',
    description: 'Simple & highly readable',
    preview: 'أَهْلًا وَسَهْلًا',
    recommended: false
  },
  {
    id: 'almarai',
    name: 'Almarai',
    class: 'font-almarai',
    description: 'Modern with clean lines',
    preview: 'شُكْرًا جَزِيلًا',
    recommended: false
  },
  {
    id: 'lateef',
    name: 'Lateef',
    class: 'font-lateef',
    description: 'Traditional, good for religious texts',
    preview: 'اللَّهُ أَكْبَر',
    recommended: false
  },
  {
    id: 'mirza',
    name: 'Mirza',
    class: 'font-mirza',
    description: 'Balanced traditional-modern',
    preview: 'صَبَاحُ الْخَيْر',
    recommended: false
  },
  {
    id: 'markazi',
    name: 'Markazi Text',
    class: 'font-markazi',
    description: 'Compact, space-efficient',
    preview: 'مَسَاءُ النُّور',
    recommended: false
  }
];

class FontSwitcher {
  constructor() {
    this.currentFont = this.loadSavedFont() || 'noto-naskh';
    this.isOpen = false;
    this.init();
  }

  init() {
    this.createFontSwitcher();
    this.attachEventListeners();
    this.addKeyboardShortcuts();
    // Apply font immediately and after a short delay to catch all elements
    this.applyFont(this.currentFont);
    setTimeout(() => this.applyFont(this.currentFont), 100);
    setTimeout(() => this.applyFont(this.currentFont), 300);
  }

  createFontSwitcher() {
    // Create font switcher container
    const switcher = document.createElement('div');
    switcher.className = 'font-switcher';
    switcher.innerHTML = `
      <button class="font-switcher-toggle" id="fontToggle">
        <span>🔤</span>
        <span>Arabic Font</span>
        <span style="margin-left: auto;">▼</span>
      </button>
      <div class="font-options" id="fontOptions">
        <div style="padding: 10px; border-bottom: 1px solid #e2e8f0;">
          <strong>Choose Arabic Font:</strong>
          <div style="font-size: 12px; color: #718096; margin-top: 5px;">
            Select the font that displays Arabic letters most clearly for you
          </div>
        </div>
        ${ARABIC_FONTS.map(font => `
          <div class="font-option ${font.id === this.currentFont ? 'active' : ''}" 
               data-font="${font.id}">
            <div style="display: flex; justify-content: space-between; align-items: start;">
              <div>
                <div class="font-option-name">
                  ${font.name}
                  ${font.recommended ? '<span style="color: #48bb78; font-size: 12px;"> ⭐ Recommended</span>' : ''}
                </div>
                <div class="font-option-description">${font.description}</div>
              </div>
            </div>
            <div class="font-option-preview ${font.class}">
              ${font.preview}
            </div>
          </div>
        `).join('')}
        <div style="padding: 10px; border-top: 1px solid #e2e8f0; margin-top: 10px;">
          <div style="font-size: 12px; color: #718096;">
            <strong>Tips:</strong><br>
            • Noto Naskh: Best for beginners<br>
            • Scheherazade: Best for Quranic text<br>
            • Use ⌘/Ctrl + Shift + F to cycle fonts
          </div>
        </div>
      </div>
    `;

    // Add to body (will be positioned fixed in top-right)
    document.body.appendChild(switcher);
    
    // Store references
    this.switcher = switcher;
    this.toggle = document.getElementById('fontToggle');
    this.options = document.getElementById('fontOptions');
  }

  attachEventListeners() {
    // Toggle dropdown
    this.toggle.addEventListener('click', () => {
      this.isOpen = !this.isOpen;
      this.options.classList.toggle('active', this.isOpen);
      this.toggle.querySelector('span:last-child').textContent = this.isOpen ? '▲' : '▼';
    });

    // Font selection
    document.querySelectorAll('.font-option').forEach(option => {
      option.addEventListener('click', () => {
        const fontId = option.dataset.font;
        this.selectFont(fontId);
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!this.switcher.contains(e.target) && this.isOpen) {
        this.isOpen = false;
        this.options.classList.remove('active');
        this.toggle.querySelector('span:last-child').textContent = '▼';
      }
    });
  }

  addKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + Shift + F to cycle through fonts
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'F') {
        e.preventDefault();
        this.cycleFont();
      }
      
      // Ctrl/Cmd + Shift + R to reset to recommended font
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'R') {
        e.preventDefault();
        this.selectFont('noto-naskh');
        this.showNotification('Font reset to Noto Naskh Arabic (Recommended)');
      }
    });
  }

  selectFont(fontId) {
    this.currentFont = fontId;
    this.saveFont(fontId);
    this.applyFont(fontId);
    
    // Update UI
    document.querySelectorAll('.font-option').forEach(option => {
      option.classList.toggle('active', option.dataset.font === fontId);
    });
    
    // Show notification
    this.showNotification(`Font changed to ${ARABIC_FONTS.find(f => f.id === fontId).name}`);
  }

  cycleFont() {
    const currentIndex = ARABIC_FONTS.findIndex(f => f.id === this.currentFont);
    const nextIndex = (currentIndex + 1) % ARABIC_FONTS.length;
    this.selectFont(ARABIC_FONTS[nextIndex].id);
  }

  applyFont(fontId) {
    const font = ARABIC_FONTS.find(f => f.id === fontId);
    if (!font) return;

    // Remove all font classes from body
    ARABIC_FONTS.forEach(f => {
      document.body.classList.remove(f.class);
    });

    // Add new font class to body (for CSS cascading)
    document.body.classList.add(font.class);

    // Note: The actual font application happens through CSS rules that target
    // .font-xxx .glyph, .font-xxx .arabic, etc.
    // This ensures English text remains in Fredoka font

    // Add switching animation to Arabic elements only
    const arabicElements = document.querySelectorAll(
      '.glyph, .form-glyph, .arabic, .arabic-text, .ar, [lang="ar"], ' +
      '.word-arabic, .arabic-phrase, .phrase-arabic, .conversation-arabic, ' +
      '.large-arabic, .arabic-large, .vowel-box'
    );

    arabicElements.forEach(element => {
      element.classList.add('font-switching');
      setTimeout(() => element.classList.remove('font-switching'), 300);
    });

    // Update font switcher button text
    const fontName = font.name.split(' ')[0]; // Use first word of font name
    this.toggle.querySelector('span:nth-child(2)').textContent = fontName;
  }

  saveFont(fontId) {
    localStorage.setItem('selectedArabicFont', fontId);
  }

  loadSavedFont() {
    return localStorage.getItem('selectedArabicFont');
  }

  showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.font-notification');
    if (existing) existing.remove();

    // Create notification
    const notification = document.createElement('div');
    notification.className = 'font-notification';
    notification.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 10000;
      animation: slideUp 0.3s ease;
      font-size: 14px;
    `;
    notification.textContent = message;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideUp {
        from {
          transform: translate(-50%, 100%);
          opacity: 0;
        }
        to {
          transform: translate(-50%, 0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'slideUp 0.3s ease reverse';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Method to get current font info
  getCurrentFont() {
    return ARABIC_FONTS.find(f => f.id === this.currentFont);
  }

  // Method to check if current font is good for harakat
  isHarakatFont() {
    return ['scheherazade', 'lateef', 'amiri', 'noto-naskh'].includes(this.currentFont);
  }

  // Auto-switch to best font for specific content
  autoSwitchForContent(contentType) {
    let recommendedFont = 'noto-naskh';
    
    switch(contentType) {
      case 'quran':
      case 'harakat':
        recommendedFont = 'scheherazade';
        break;
      case 'modern':
      case 'ui':
        recommendedFont = 'cairo';
        break;
      case 'learning':
      case 'beginner':
        recommendedFont = 'noto-naskh';
        break;
      case 'traditional':
        recommendedFont = 'amiri';
        break;
    }
    
    if (this.currentFont !== recommendedFont) {
      this.selectFont(recommendedFont);
    }
  }
}

// Initialize font switcher when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.fontSwitcher = new FontSwitcher();
  
  // Apply font to dynamically loaded content
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            // Check for all Arabic elements including glyph
            const arabicSelectors = '.glyph, .form-glyph, .arabic, .arabic-text, .ar, [lang="ar"], .arabic-phrase';
            const arabicElements = node.querySelectorAll(arabicSelectors);
            
            // Check if the node itself is an Arabic element
            const nodeIsArabic = node.classList && (
              node.classList.contains('glyph') ||
              node.classList.contains('form-glyph') ||
              node.classList.contains('arabic') ||
              node.classList.contains('ar') ||
              node.classList.contains('arabic-text') ||
              node.classList.contains('arabic-phrase')
            );
            
            if (arabicElements.length || nodeIsArabic) {
              const currentFont = window.fontSwitcher.getCurrentFont();
              if (nodeIsArabic) {
                node.classList.add(currentFont.class);
              }
              arabicElements.forEach(el => el.classList.add(currentFont.class));
            }
          }
        });
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  // Add compact font size controls
  const addFontSizeControls = () => {
    const controls = document.createElement('div');
    controls.className = 'font-size-controls';
    controls.style.cssText = `
      position: fixed;
      top: 15px;
      right: 280px;
      z-index: 1000;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%);
      backdrop-filter: blur(10px);
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      padding: 6px 8px;
      display: flex;
      gap: 4px;
      align-items: center;
      border: 1px solid rgba(255, 255, 255, 0.8);
    `;
    
    controls.innerHTML = `
      <span style="font-size: 13px; color: #4a5568; margin-right: 6px; font-weight: 600;">Size:</span>
      <button class="size-btn" onclick="adjustFontSize(-0.1)" style="padding: 4px 10px; border: 1px solid rgba(226, 232, 240, 0.8); border-radius: 6px; cursor: pointer; background: rgba(255, 255, 255, 0.9); font-size: 12px; font-weight: 600; transition: all 0.2s;">A-</button>
      <button class="size-btn" onclick="adjustFontSize(0.1)" style="padding: 4px 10px; border: 1px solid rgba(226, 232, 240, 0.8); border-radius: 6px; cursor: pointer; background: rgba(255, 255, 255, 0.9); font-size: 12px; font-weight: 600; transition: all 0.2s;">A+</button>
      <button class="size-btn" onclick="resetFontSize()" style="padding: 4px 10px; border: 1px solid rgba(226, 232, 240, 0.8); border-radius: 6px; cursor: pointer; background: rgba(255, 255, 255, 0.9); font-size: 12px; transition: all 0.2s;">↺</button>
    `;
    
    document.body.appendChild(controls);
  };
  
  // Font size adjustment functions
  window.adjustFontSize = (delta) => {
    const arabicElements = document.querySelectorAll('.glyph, .arabic, .arabic-text, .ar, [lang="ar"]');
    arabicElements.forEach(el => {
      const currentSize = parseFloat(window.getComputedStyle(el).fontSize);
      el.style.fontSize = `${currentSize + (currentSize * delta)}px`;
    });
  };
  
  window.resetFontSize = () => {
    const arabicElements = document.querySelectorAll('.glyph, .arabic, .arabic-text, .ar, [lang="ar"]');
    arabicElements.forEach(el => {
      el.style.fontSize = '';
    });
  };
  
  // Add font size controls after a delay
  setTimeout(addFontSizeControls, 100);
  
  // Re-apply font after app initialization to catch any missed elements
  setTimeout(() => {
    if (window.fontSwitcher) {
      const currentFontId = window.fontSwitcher.currentFont;
      window.fontSwitcher.applyFont(currentFontId);
    }
  }, 500);
  
  // Also re-apply when view changes (for Letters, Letter Forms, etc.)
  document.addEventListener('click', (e) => {
    if (e.target.matches('[data-view]')) {
      setTimeout(() => {
        if (window.fontSwitcher) {
          const currentFontId = window.fontSwitcher.currentFont;
          window.fontSwitcher.applyFont(currentFontId);
        }
      }, 100);
    }
  });
});

// Export for use in other scripts
window.FontSwitcher = FontSwitcher;
window.ARABIC_FONTS = ARABIC_FONTS;