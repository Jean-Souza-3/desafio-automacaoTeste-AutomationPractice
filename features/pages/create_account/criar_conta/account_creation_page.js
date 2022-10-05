const { expect } = require('@playwright/test');

exports.AccountCreationPage = class AccountCreationPage {

    async preencherFormulario(nome, sobrenome, pass) {
        await page.locator('xpath=//*[@id="id_gender1"]').click();
        await page.fill('xpath=//*[@id="customer_firstname"]', nome);
        await page.fill('xpath=//*[@id="customer_lastname"]', sobrenome);
        await page.fill('xpath=//*[@id="passwd"]', pass);
        await page.locator('xpath=//*[@id="days"]').selectOption('3');
        await page.locator('xpath=//*[@id="months"]').selectOption('6');
        await page.locator('xpath=//*[@id="years"]').selectOption('2003');
        await page.locator('xpath=//*[@id="newsletter"]').check();
        await page.fill('xpath=//*[@id="firstname"]', nome);
        await page.fill('xpath=//*[@id="lastname"]', sobrenome);
        await page.fill('xpath=//*[@id="company"]', 'NextQA');
        await page.fill('xpath=//*[@id="address1"]', 'Rua Projetada A');
        await page.fill('xpath=//*[@id="city"]', 'Ribeirão Branco');
        await page.locator('xpath=//*[@id="id_state"]').selectOption('2');
        await page.fill('xpath=//*[@id="postcode"]', '00011');
        await page.fill('xpath=//*[@id="phone_mobile"]', '15996719509');
    }

    async finalizarCadastro() {
        await page.locator('xpath=//*[@id="submitAccount"]').click();
    }
}