// Basic playwright script
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    console.log("Title: " + await page.title());
    await browser.close();
})();