const { expect } = require('@playwright/test');

exports.SignUpPage = class SignUpPage {
    
    async logarConta(email, pass) {
        await page.locator('xpath=//*[@id="login_form"]/h3').click();
        await page.fill('xpath=//*[@id="email"]', email);
        await page.fill('xpath=//*[@id="passwd"]', pass);
        await page.locator('xpath=//*[@id="SubmitLogin"]').click();
    }
}