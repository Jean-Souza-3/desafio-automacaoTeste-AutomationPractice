const { expect } = require('@playwright/test');

exports.OrderHistoryPage = class OrderHistoryPage {

    async historicoCompras() {
        await expect(page.locator('xpath=//*[@id="center_column"]/h1')).toContainText('Order history');
        await page.locator('xpath=//*[@id="order-list"]/tbody/tr[1]/td[7]/a[1]/span').click();
    }

    async enviarMensagem(message) {
        await page.locator('xpath=//*[@id="sendOrderMessage"]/p[2]/select').selectOption('7');
        await page.fill('xpath=//*[@id="sendOrderMessage"]/p[3]/textarea', message);
        await page.locator('xpath=//*[@id="sendOrderMessage"]/div/button').click();
        await page.locator('xpath=//*[@id="center_column"]/ul/li[2]/a').click();
    }
}