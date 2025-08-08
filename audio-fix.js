// Enhanced audio initialization for Samsung Galaxy Tab and other Android devices
let audioInitialized = false;
let audioContext = null;

function initializeAudio() {
  if (audioInitialized) return true;
  
  try {
    // Create audio context
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioContext = new AudioContext();
      
      // Resume if suspended (common on mobile)
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      
      // Create a silent buffer to trigger audio system
      const buffer = audioContext.createBuffer(1, 1, 22050);
      const source = audioContext.createBufferSource();
      source.buffer = buffer;
      source.connect(audioContext.destination);
      source.start(0);
      
      audioInitialized = true;
      
      // Hide the initialization button if it exists
      const initBtn = document.getElementById('init-audio-btn');
      if (initBtn) {
        initBtn.style.display = 'none';
      }
      
      // Show success message
      showNotification('✅ Audio enabled successfully!');
      
      return true;
    }
  } catch (e) {
    console.error('Audio initialization error:', e);
    return false;
  }
  
  return false;
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'audio-notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #10b981;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    z-index: 10000;
    animation: slideDown 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideUp 0.3s ease';
    setTimeout(() => document.body.removeChild(notification), 300);
  }, 2000);
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from { transform: translate(-50%, -100%); opacity: 0; }
    to { transform: translate(-50%, 0); opacity: 1; }
  }
  @keyframes slideUp {
    from { transform: translate(-50%, 0); opacity: 1; }
    to { transform: translate(-50%, -100%); opacity: 0; }
  }
  
  .audio-init-banner {
    background: linear-gradient(135deg, #f59e0b, #ef4444);
    color: white;
    padding: 16px;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  
  .audio-init-banner button {
    background: white;
    color: #ef4444;
    border: none;
    padding: 10px 24px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    margin-left: 12px;
  }
  
  .audio-init-banner button:active {
    transform: scale(0.95);
  }
`;
document.head.appendChild(style);

// Check if audio needs initialization (especially for Samsung/Android)
function checkAudioSupport() {
  const isAndroid = /android/i.test(navigator.userAgent);
  const isSamsung = /samsung/i.test(navigator.userAgent);
  const isTablet = /tablet|ipad|playbook|silk/i.test(navigator.userAgent) || 
                   (isAndroid && !/mobile/i.test(navigator.userAgent));
  
  if ((isAndroid || isSamsung || isTablet) && !audioInitialized) {
    // Show initialization banner
    const banner = document.createElement('div');
    banner.className = 'audio-init-banner';
    banner.id = 'init-audio-btn';
    banner.innerHTML = `
      <span>🔊 Tap to enable audio for Arabic pronunciation</span>
      <button onclick="initializeAudio()">Enable Audio</button>
    `;
    
    // Insert at the beginning of body
    document.body.insertBefore(banner, document.body.firstChild);
  }
}

// Enhanced speech synthesis with fallback
function enhancedSpeak(text, lang = 'ar-SA', rate = 0.85) {
  // First try to initialize audio if not done
  if (!audioInitialized) {
    initializeAudio();
  }
  
  if (!window.speechSynthesis) {
    console.warn('Speech synthesis not supported');
    return;
  }
  
  try {
    // Cancel any ongoing speech
    speechSynthesis.cancel();
    
    // Create utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Get available voices
    const voices = speechSynthesis.getVoices();
    
    // Find Arabic voice
    const arabicVoice = voices.find(v => v.lang.includes('ar')) ||
                        voices.find(v => v.lang.includes('AR')) ||
                        voices.find(v => v.name.includes('Arabic'));
    
    if (arabicVoice) {
      utterance.voice = arabicVoice;
      utterance.lang = arabicVoice.lang;
    } else {
      utterance.lang = lang;
    }
    
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    // Error handling
    utterance.onerror = (e) => {
      console.error('Speech error:', e);
      // Try fallback
      if (e.error === 'not-allowed') {
        showNotification('⚠️ Please tap "Enable Audio" first');
      }
    };
    
    // Speak
    speechSynthesis.speak(utterance);
    
  } catch (e) {
    console.error('Enhanced speak error:', e);
    showNotification('⚠️ Audio error - please refresh the page');
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  checkAudioSupport();
  
  // Auto-initialize on first user interaction
  const autoInit = () => {
    initializeAudio();
    document.removeEventListener('click', autoInit);
    document.removeEventListener('touchstart', autoInit);
  };
  
  document.addEventListener('click', autoInit, { once: true });
  document.addEventListener('touchstart', autoInit, { once: true });
});

// Make functions globally available
window.initializeAudio = initializeAudio;
window.enhancedSpeak = enhancedSpeak;