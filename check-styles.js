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
  
  // Check various element styles
  console.log('=== CHECKING STYLES ===\n');
  
  // Check body font
  const bodyFont = await page.evaluate(() => {
    const body = document.body;
    return window.getComputedStyle(body).fontFamily;
  });
  console.log('Body font-family:', bodyFont);
  
  // Check h1 styles
  const h1Styles = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    const styles = window.getComputedStyle(h1);
    return {
      fontFamily: styles.fontFamily,
      fontWeight: styles.fontWeight,
      color: styles.color
    };
  });
  console.log('H1 styles:', h1Styles);
  
  // Check button styles
  const buttonStyles = await page.evaluate(() => {
    const buttons = document.querySelectorAll('button');
    const results = [];
    buttons.forEach((btn, index) => {
      const styles = window.getComputedStyle(btn);
      results.push({
        text: btn.textContent.trim().substring(0, 20),
        fontFamily: styles.fontFamily,
        fontWeight: styles.fontWeight,
        backgroundColor: styles.backgroundColor,
        color: styles.color
      });
    });
    return results;
  });
  console.log('\nButton styles:');
  buttonStyles.slice(0, 5).forEach(btn => {
    console.log(`- "${btn.text}":`, btn);
  });
  
  // Check font switcher styles
  const fontSwitcherStyles = await page.evaluate(() => {
    const switcher = document.querySelector('.font-switcher-toggle');
    if (switcher) {
      const styles = window.getComputedStyle(switcher);
      return {
        backgroundColor: styles.backgroundColor,
        backgroundImage: styles.backgroundImage,
        color: styles.color,
        fontWeight: styles.fontWeight
      };
    }
    return null;
  });
  console.log('\nFont switcher styles:', fontSwitcherStyles);
  
  // Check for any CSS errors
  const cssErrors = await page.evaluate(() => {
    const errors = [];
    const sheets = document.styleSheets;
    for (let sheet of sheets) {
      try {
        const rules = sheet.cssRules || sheet.rules;
        // Check if accessible
      } catch (e) {
        errors.push(`Cannot access stylesheet: ${sheet.href || 'inline'}`);
      }
    }
    return errors;
  });
  if (cssErrors.length > 0) {
    console.log('\nCSS Errors:', cssErrors);
  }
  
  // Check for conflicting font-family declarations
  const conflictingStyles = await page.evaluate(() => {
    const conflicts = [];
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, button, .card');
    elements.forEach(el => {
      const computed = window.getComputedStyle(el);
      if (!computed.fontFamily.includes('Fredoka')) {
        conflicts.push({
          tag: el.tagName.toLowerCase(),
          class: el.className,
          fontFamily: computed.fontFamily,
          fontWeight: computed.fontWeight
        });
      }
    });
    return conflicts;
  });
  if (conflictingStyles.length > 0) {
    console.log('\nElements not using Fredoka font:');
    conflictingStyles.slice(0, 10).forEach(el => {
      console.log(`- <${el.tag}> class="${el.class}": ${el.fontFamily} (weight: ${el.fontWeight})`);
    });
  }
  
  // Take a screenshot for visual inspection
  await page.screenshot({ path: 'style-check.png', fullPage: false });
  console.log('\nScreenshot saved as style-check.png');
  
  await browser.close();
})();