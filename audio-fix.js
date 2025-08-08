// Safe audio initialization without security warnings
let audioInitialized = false;
let firstInteraction = true;

// Silent audio initialization on first user interaction
function initAudioSilently() {
  if (audioInitialized) return;
  
  try {
    // For iOS devices
    if (window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance('');
      utterance.volume = 0;
      speechSynthesis.speak(utterance);
    }
    
    // Create audio context if needed
    if (window.AudioContext || window.webkitAudioContext) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const context = new AudioContext();
      
      if (context.state === 'suspended') {
        context.resume();
      }
    }
    
    audioInitialized = true;
  } catch (e) {
    // Silently fail - will try again on next interaction
    console.log('Audio init deferred');
  }
}

// Enhanced speech synthesis for all devices
function enhancedSpeak(text, lang = 'ar-SA', rate = 0.85) {
  // Initialize audio on first attempt
  if (firstInteraction) {
    initAudioSilently();
    firstInteraction = false;
  }
  
  if (!window.speechSynthesis) {
    console.warn('Speech synthesis not supported');
    return;
  }
  
  try {
    // Cancel any ongoing speech
    speechSynthesis.cancel();
    
    // Small delay for better compatibility
    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Get available voices
      const voices = speechSynthesis.getVoices();
      
      // Find best Arabic voice
      let arabicVoice = voices.find(v => 
        v.lang.includes('ar-') || 
        v.lang === 'ar' || 
        v.lang.includes('AR')
      );
      
      // Fallback to any Arabic-named voice
      if (!arabicVoice) {
        arabicVoice = voices.find(v => 
          v.name.toLowerCase().includes('arabic') ||
          v.name.includes('صوت') // Arabic word for voice
        );
      }
      
      if (arabicVoice) {
        utterance.voice = arabicVoice;
        utterance.lang = arabicVoice.lang;
      } else {
        // Use language tag even without specific voice
        utterance.lang = lang;
      }
      
      utterance.rate = rate;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      // Error handling
      utterance.onerror = (e) => {
        if (e.error === 'not-allowed') {
          // Try to reinitialize on next interaction
          audioInitialized = false;
          firstInteraction = true;
        }
      };
      
      // Speak
      speechSynthesis.speak(utterance);
    }, 10);
    
  } catch (e) {
    console.error('Speech error:', e);
  }
}

// Initialize on first user interaction (any click or touch)
if (typeof document !== 'undefined') {
  const initOnInteraction = () => {
    initAudioSilently();
    // Keep listener for subsequent interactions if needed
  };
  
  // Add listeners for various interaction types
  document.addEventListener('click', initOnInteraction, { passive: true });
  document.addEventListener('touchstart', initOnInteraction, { passive: true });
  document.addEventListener('touchend', initOnInteraction, { passive: true });
  
  // Load voices when available
  if (window.speechSynthesis) {
    // Some browsers need time to load voices
    if (speechSynthesis.getVoices().length === 0) {
      speechSynthesis.addEventListener('voiceschanged', () => {
        // Voices are now available
        console.log('Voices loaded:', speechSynthesis.getVoices().length);
      });
    }
    
    // For browsers that already have voices
    setTimeout(() => {
      const voices = speechSynthesis.getVoices();
      if (voices.length > 0) {
        console.log('Voices available:', voices.length);
      }
    }, 100);
  }
}

// Compatibility fixes for various browsers
(function() {
  // Fix for Chrome on Android
  if (/Chrome/.test(navigator.userAgent) && /Android/.test(navigator.userAgent)) {
    const originalSpeak = window.speechSynthesis.speak;
    window.speechSynthesis.speak = function(utterance) {
      window.speechSynthesis.cancel();
      setTimeout(() => {
        originalSpeak.call(window.speechSynthesis, utterance);
      }, 10);
    };
  }
  
  // Fix for Safari on iOS
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && window.speechSynthesis) {
        // Resume speech synthesis when app becomes visible
        if (speechSynthesis.paused) {
          speechSynthesis.resume();
        }
      }
    });
  }
})();

// Make function globally available
window.enhancedSpeak = enhancedSpeak;