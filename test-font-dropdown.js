const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Load the local HTML file
  const filePath = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(filePath);
  
  // Wait for page to load
  await page.waitForTimeout(1000);
  
  // Click the font switcher to open dropdown
  await page.click('.font-switcher-toggle');
  await page.waitForTimeout(500);
  
  // Take screenshot of the dropdown
  await page.screenshot({ path: 'font-dropdown-fixed.png', fullPage: false });
  console.log('Screenshot saved as font-dropdown-fixed.png');
  
  // Check font option styles
  const fontOptionStyles = await page.evaluate(() => {
    const options = document.querySelectorAll('.font-option');
    const results = [];
    options.forEach((option, index) => {
      if (index < 3) { // Check first 3 options
        const styles = window.getComputedStyle(option);
        const nameEl = option.querySelector('.font-option-name');
        const descEl = option.querySelector('.font-option-description');
        const previewEl = option.querySelector('.font-option-preview');
        
        results.push({
          background: styles.backgroundColor,
          color: styles.color,
          nameColor: nameEl ? window.getComputedStyle(nameEl).color : null,
          descColor: descEl ? window.getComputedStyle(descEl).color : null,
          previewBg: previewEl ? window.getComputedStyle(previewEl).backgroundColor : null,
          previewColor: previewEl ? window.getComputedStyle(previewEl).color : null
        });
      }
    });
    return results;
  });
  
  console.log('\nFont option styles:');
  fontOptionStyles.forEach((style, index) => {
    console.log(`Option ${index + 1}:`, style);
  });
  
  await browser.close();
})();