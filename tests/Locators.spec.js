//const {test,expect} = require ('@playwright/test')
import {test,expect} from '@playwright/test'
test ('Locators',async ({page})=>{

    await page.goto ("https://www.demoblaze.com/index.html")

    // click on login button
    //await page.locator('id=login2').click()
    await page.click ('id=login2')

    // provide user name- CSS
    await page.fill('#loginusername','pavanol')
    //await page.type('loginusername')
    
    //provide password- CSS
    await page.fill("input[id='loginpassword']",'test@123')

    // click on login button -xpath
    await page.click ("//button[normalize-space()='Log in']")

    // verify logout link presence
    const Logoutlink=await page.locator("//a[normalize-space()='Log out']")
    await expect(Logoutlink).toBeVisible();
    await page.close()
})