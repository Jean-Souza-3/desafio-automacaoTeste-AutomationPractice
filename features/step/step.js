const { setDefaultTimeout, Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { faker } = require ('@faker-js/faker');

setDefaultTimeout(60 * 10000);
const nome = faker.name.firstName();
const sobrenome = faker.name.lastName();
const email = `${nome}${sobrenome}@outlook.com`

Given('que esteja na home do website', async function () {
    await page.goto('http://automationpractice.com/index.php');
    await page.locator('xpath=//*[@id="header"]/div[2]/div/div/nav/div[1]/a').click();
    await page.locator('xpath=//*[@id="create-account_form"]/h3').click();
});

When('eu clico em create account', async function () {
    await page.fill('xpath=//*[@id="email_create"]', email);
    await page.locator('xpath=//*[@id="SubmitCreate"]').click();
});

When('preencho todos os dados do formulário', async function () {
    await page.locator('xpath=//*[@id="id_gender1"]').click();
    await page.fill('xpath=//*[@id="customer_firstname"]', nome);
    await page.fill('xpath=//*[@id="customer_lastname"]', sobrenome);
    await page.fill('xpath=//*[@id="passwd"]', '123456789');
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
});

When('clico no botão registar', async function () {
    await page.locator('xpath=//*[@id="submitAccount"]').click();
    await page.waitForTimeout(5000);
});

Then('o cadastro é realizado com sucesso exibindo a mensagem {string}', async function (string) {
    
});

Then('exibe o o nome do usuário cadastrado no menu', async function () {
    // Write code here that turns the phrase above into concrete actions
    
});
