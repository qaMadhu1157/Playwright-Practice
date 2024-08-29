const {test,expect} = require('@playwright/test');
test('Home page',async({page})=>{
await page.goto('https://www.demoblaze.com/')
const pageTitle=page.title();
console.log('page Title is:',pageTitle);
expect(page).toHaveTitle('STORE');
const pageURL=page.url();
console.log('page URL is:',pageURL);
await expect(page).toHaveURL('https://www.demoblaze.com/');
await page.close();
} )
