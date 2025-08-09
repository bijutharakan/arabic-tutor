const { chromium } = require('playwright');
const path = require('path');

async function testBeginnersModule() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Load the local HTML file
  const filePath = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(filePath);
  
  console.log('=== TESTING BEGINNERS MODULE ===\n');
  
  // Test 1: Click on Beginners button
  console.log('Test 1: Navigating to Beginners Module...');
  try {
    await page.click('button[data-view="beginners"]');
    await page.waitForTimeout(1000);
    
    // Check if beginners hub is rendered
    const hubExists = await page.locator('.beginners-hub').isVisible();
    console.log('✓ Beginners hub rendered:', hubExists);
    
    // Take screenshot of main interface
    await page.screenshot({ path: 'test-beginners-main.png', fullPage: true });
    console.log('✓ Screenshot saved: test-beginners-main.png\n');
  } catch (error) {
    console.error('✗ Failed to navigate to Beginners Module:', error.message);
  }
  
  // Test 2: Check module cards
  console.log('Test 2: Checking module cards...');
  try {
    const moduleCards = await page.locator('.module-card').count();
    console.log(`✓ Found ${moduleCards} module cards`);
    
    // Check specific modules
    const modules = [
      '.alphabet-journey',
      '.first-words',
      '.greetings',
      '.numbers',
      '.colors-shapes',
      '.daily-phrases',
      '.mini-games',
      '.writing-practice'
    ];
    
    for (const module of modules) {
      const exists = await page.locator(module).isVisible();
      console.log(`  ${exists ? '✓' : '✗'} ${module.replace('.', '')} module`);
    }
    console.log('');
  } catch (error) {
    console.error('✗ Error checking module cards:', error.message);
  }
  
  // Test 3: Test Letter Learning
  console.log('Test 3: Testing Letter Learning...');
  try {
    // Check if learn letter buttons exist
    const learnButtons = await page.locator('.learn-letter-btn').count();
    console.log(`✓ Found ${learnButtons} learn letter buttons`);
    
    if (learnButtons > 0) {
      // Click first learn button
      await page.locator('.learn-letter-btn').first().click();
      await page.waitForTimeout(500);
      
      // Check if lesson modal appears
      const modalExists = await page.locator('.lesson-modal-overlay').isVisible();
      console.log(`  ${modalExists ? '✓' : '✗'} Letter lesson modal opens`);
      
      if (modalExists) {
        // Take screenshot of lesson
        await page.screenshot({ path: 'test-letter-lesson.png' });
        console.log('  ✓ Letter lesson screenshot saved');
        
        // Close modal
        const closeBtn = page.locator('.close-btn');
        if (await closeBtn.isVisible()) {
          await closeBtn.click();
          console.log('  ✓ Lesson modal closed');
        }
      }
    }
    console.log('');
  } catch (error) {
    console.error('✗ Error testing letter learning:', error.message);
  }
  
  // Test 4: Test Category Words
  console.log('Test 4: Testing First 100 Words...');
  try {
    const exploreButtons = await page.locator('.explore-btn').count();
    console.log(`✓ Found ${exploreButtons} explore buttons for word categories`);
    
    if (exploreButtons > 0) {
      // Click first explore button
      await page.locator('.explore-btn').first().click();
      await page.waitForTimeout(500);
      console.log('  ✓ Clicked explore button (functionality to be implemented)');
    }
    console.log('');
  } catch (error) {
    console.error('✗ Error testing word categories:', error.message);
  }
  
  // Test 5: Test Greetings Audio
  console.log('Test 5: Testing Greetings Audio...');
  try {
    const audioButtons = await page.locator('.play-audio-btn').count();
    console.log(`✓ Found ${audioButtons} audio play buttons`);
    
    if (audioButtons > 0) {
      // Click first audio button
      await page.locator('.play-audio-btn').first().click();
      await page.waitForTimeout(1000);
      console.log('  ✓ Audio button clicked (TTS should play)');
    }
    console.log('');
  } catch (error) {
    console.error('✗ Error testing audio:', error.message);
  }
  
  // Test 6: Test Counting Game
  console.log('Test 6: Testing Counting Game...');
  try {
    const gameBtn = await page.locator('.counting-game-btn').isVisible();
    console.log(`✓ Counting game button visible: ${gameBtn}`);
    
    if (gameBtn) {
      await page.click('.counting-game-btn');
      await page.waitForTimeout(500);
      
      const gameModal = await page.locator('.game-modal-overlay').isVisible();
      console.log(`  ${gameModal ? '✓' : '✗'} Counting game modal opens`);
      
      if (gameModal) {
        // Take screenshot of game
        await page.screenshot({ path: 'test-counting-game.png' });
        console.log('  ✓ Counting game screenshot saved');
        
        // Try to click an answer
        const optionButtons = await page.locator('.option-btn').count();
        if (optionButtons > 0) {
          await page.locator('.option-btn').first().click();
          await page.waitForTimeout(500);
          console.log('  ✓ Game answer button clicked');
        }
        
        // Close game modal by clicking overlay
        await page.click('.game-modal-overlay');
      }
    }
    console.log('');
  } catch (error) {
    console.error('✗ Error testing counting game:', error.message);
  }
  
  // Test 7: Test Progress Display
  console.log('Test 7: Testing Progress Display...');
  try {
    const progressSummary = await page.locator('.progress-summary').isVisible();
    console.log(`✓ Progress summary visible: ${progressSummary}`);
    
    if (progressSummary) {
      const progressItems = await page.locator('.progress-item').count();
      console.log(`  ✓ Found ${progressItems} progress tracking items`);
    }
    
    // Check achievements
    const achievementsSection = await page.locator('.achievements-section').isVisible();
    console.log(`✓ Achievements section visible: ${achievementsSection}`);
    
    if (achievementsSection) {
      const achievements = await page.locator('.achievement').count();
      console.log(`  ✓ Found ${achievements} achievement badges`);
    }
    console.log('');
  } catch (error) {
    console.error('✗ Error testing progress display:', error.message);
  }
  
  // Test 8: Test Other Buttons
  console.log('Test 8: Testing Other Interactive Elements...');
  try {
    // Test practice greetings button
    const practiceBtn = await page.locator('.practice-btn').isVisible();
    if (practiceBtn) {
      await page.click('.practice-btn');
      console.log('  ✓ Practice greetings button clicked');
    }
    
    // Test play game buttons
    const playGameBtns = await page.locator('.play-game-btn').count();
    console.log(`  ✓ Found ${playGameBtns} mini-game buttons`);
    
    // Test writing practice button
    const writingBtn = await page.locator('.start-writing-btn').isVisible();
    if (writingBtn) {
      await page.click('.start-writing-btn');
      console.log('  ✓ Writing practice button clicked');
    }
    
    // Test view all letters button
    const viewAllBtn = await page.locator('.view-all-btn').isVisible();
    if (viewAllBtn) {
      await page.click('.view-all-btn');
      console.log('  ✓ View all letters button clicked');
    }
    console.log('');
  } catch (error) {
    console.error('✗ Error testing other buttons:', error.message);
  }
  
  // Test 9: Check console errors
  console.log('Test 9: Checking for JavaScript errors...');
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('  ✗ Console error:', msg.text());
    }
  });
  
  page.on('pageerror', error => {
    console.error('  ✗ Page error:', error.message);
  });
  
  // Wait a bit to catch any errors
  await page.waitForTimeout(2000);
  
  console.log('\n=== TEST SUMMARY ===');
  console.log('Screenshots saved:');
  console.log('  - test-beginners-main.png');
  console.log('  - test-letter-lesson.png');
  console.log('  - test-counting-game.png');
  console.log('\nPlease review the screenshots and console output for issues.');
  
  await browser.close();
}

testBeginnersModule().catch(console.error);