const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {
    
    async acessarWebsite() {
        await page.goto('http://automationpractice.com/index.php');
        await page.locator('xpath=//*[@id="header"]/div[2]/div/div/nav/div[1]/a').click();
    }
}