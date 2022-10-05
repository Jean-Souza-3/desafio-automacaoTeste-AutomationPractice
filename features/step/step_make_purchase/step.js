const { setDefaultTimeout, Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { HomePage } = require('../../pages/create_account/criar_conta/home_page');
const { SignUpPage } = require('../../pages/create_account/logar_conta/sign_up_page');

setDefaultTimeout(60 * 10000);
const homePage = new HomePage();
const signUpPage = new SignUpPage();
const email = "jeansouza03@outlook.com";
const pass = "12345";

Given('que esteja na home do site', async function () {
    await homePage.acessarWebsite();
    await page.pause();
});

When('eu clico em already registered', async function () {
    await signUpPage.logarConta(email, pass);
    await page.pause();
});

When('acesso a categoria {string} selecionando {string}', async function (categoria, subcategoria) {
    await page.locator('xpath=//*[@id="block_top_menu"]/ul/li[1]/a').click();
    await expect (page.locator('xpath=//*[@id="center_column"]/div[1]/div/div/span')).toContainText(categoria);
    await page.locator('xpath=//*[@id="categories_block_left"]/div/ul/li[2]/span').click();
    await page.locator('xpath=//*[@id="categories_block_left"]/div/ul/li[2]/ul/li[3]/a').click();
    await expect (page.locator('xpath=//*[@id="center_column"]/div[1]/div/div/span')).toContainText(subcategoria);
    await page.pause();
});

When('seleciono o produto a ser comprado {string}', async function (produto) {
    await page.locator(`div[class*=right-block] h5 a[title*='${produto}']`).click();
    await page.locator('xpath=//*[@id="group_1"]').selectOption('2');
    await page.locator('xpath=//*[@id="add_to_cart"]/button/span').click();
    await page.locator('xpath=//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a').click();
    //const copia = await page.content();
    //const fs = require('fs');
    //fs.writeFileSync('summer_dresses.html', copia);
    await page.pause();
});

Then('redireciona para carrinho para finalizar a compra', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
    await page.pause();
});

Then('em histórico de compras envio uma mensagem de agradrcimento ao fornecedor do produto {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
    await page.pause();
});
