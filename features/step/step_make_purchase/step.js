const { setDefaultTimeout, Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { Faker } = require('@faker-js/faker');
const { HomePage } = require('../../pages/create_account/criar_conta/home_page');
const { SignUpPage } = require('../../pages/create_account/logar_conta/sign_up_page');

setDefaultTimeout(60 * 10000);
const homePage = new HomePage();
const signUpPage = new SignUpPage();
const email = "jeansouza03@outlook.com";
const pass = "12345";

Given('que esteja na home do site', async function () {
    await homePage.acessarWebsite();
    
});

When('eu clico em already registered', async function () {
    await signUpPage.logarConta(email, pass);
});

When('acesso a categoria Women selecionando {string}', async function (categoria) {
    await page.hover('xpath=//*[@id="block_top_menu"]/ul/li[1]/a');
    await page.locator('xpath=//*[@id="block_top_menu"]/ul/li[1]/ul/li[2]/ul/li[3]/a').click();
    await expect (page.locator('xpath=//*[@id="center_column"]/div[1]/div/div/span')).toContainText(categoria);
});

When('seleciono o produto a ser comprado {string}', async function (produto) {
    await page.locator('xpath=//*[@id="layered_id_attribute_group_2"]').check();
    await page.locator('xpath=//*[@id="layered_id_attribute_group_15"]').click();
    await page.waitForTimeout(10000);
    await page.hover('[id*=center_column] ul[class*=product_list] li div div[class*=right-block] h5 a[title*="Printed Chiffon Dress"]');
    //await expect (page.locator('[id*=center_column] ul[class*=product_list] li div div[class*=right-block] h5 a[title*="Printed Chiffon Dress"]')).toContainText(` 							${produto}						`);
    await page.locator('xpath=//*[@id="center_column"]/ul/li/div/div[2]/div[2]/a[1]').click();
    await page.pause();
    await expect (page.locator('xpath=//*[@id="layer_cart"]/div[1]/div[1]/h2')).toContainText('Product successfully added to your shopping cart'
    ); 
    await page.locator('xpath=//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a').click();
});

Then('redireciona para carrinho para finalizar a compra', async function () {
    await page.locator('xpath=//*[@id="center_column"]/p[2]/a[1]').click();
    await page.locator('xpath=//*[@id="center_column"]/form/p/button').click();
    await page.locator('xpath=//*[@id="cgv"]').check();
    await page.locator('xpath=//*[@id="form"]/p/button').click();
    await expect (page.locator('xpath=//*[@id="center_column"]/h1')).toContainText('Please choose your payment method');
    await page.locator('xpath=//*[@id="HOOK_PAYMENT"]/div[1]/div').click();
    await page.locator('xpath=//*[@id="cart_navigation"]/button').click();
    await page.locator('xpath=//*[@id="center_column"]/p/a').click();
});

Then('em histórico de compras envio uma mensagem de agradecimento ao fornecedor do produto {string}', async function (message) {
    await expect (page.locator('xpath=//*[@id="center_column"]/h1')).toContainText('Order history');
    await page.locator('xpath=//*[@id="order-list"]/tbody/tr[1]/td[7]/a[1]/span').click();
    await page.locator('xpath=//*[@id="sendOrderMessage"]/p[2]/select').selectOption('7');
    await page.fill('xpath=//*[@id="sendOrderMessage"]/p[3]/textarea', message);
    await page.locator('xpath=//*[@id="sendOrderMessage"]/div/button').click();
    await page.locator('xpath=//*[@id="center_column"]/ul/li[2]/a').click();
});
