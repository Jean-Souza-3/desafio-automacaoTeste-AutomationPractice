const { expect } = require('@playwright/test');

exports.CartPage = class CartPage {

    async finalizarCompra() {
        await page.locator('xpath=//*[@id="center_column"]/p[2]/a[1]').click();
        await page.locator('xpath=//*[@id="center_column"]/form/p/button').click();
        await page.locator('xpath=//*[@id="cgv"]').check();
        await page.locator('xpath=//*[@id="form"]/p/button').click();
        await expect(page.locator('xpath=//*[@id="center_column"]/h1')).toContainText('Please choose your payment method');
        await page.locator('xpath=//*[@id="HOOK_PAYMENT"]/div[1]/div').click();
        await page.locator('xpath=//*[@id="cart_navigation"]/button').click();
        await page.locator('xpath=//*[@id="center_column"]/p/a').click();
    }
}