const { expect } = require('@playwright/test');

exports.SignInPage = class SignInPage {
    
    async criarConta(email) {
        await page.locator('xpath=//*[@id="create-account_form"]/h3').click();
        await page.fill('xpath=//*[@id="email_create"]', email);
        await page.locator('xpath=//*[@id="SubmitCreate"]').click();
    }
}