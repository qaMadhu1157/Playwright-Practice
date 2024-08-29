const {test, expect} = require('@playwright/test');
//const data = JSON.parse(JSON.stringify(require("../testdata/login.json"))); // json data converting into javs script object  -- Json - >String ->java script object
 

test('First Playwright Script', async ({browser}) =>  {
    // Create a new incognito browser context
    const context = await browser.newContext();  // cookies, prxoxy details
    // Create a new page inside context.
    const page = await context.newPage();
        await page.goto('https://www.automationexercise.com/')

});
test('Login User', async ({page}) => {
await page.goto('https://www.amazon.in/ref=nav_logo')
}
);