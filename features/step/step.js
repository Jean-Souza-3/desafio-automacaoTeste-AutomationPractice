const { setDefaultTimeout, Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { faker } = require ('@faker-js/faker');
const { HomePage } = require ('../pages/home_page');
const { SignInPage } = require ('../pages/sign_in_page');
const { AccountCreationPage } = require ('../pages/account_creation_page');
const { MyAccountPage } = require ('../pages/my_account_page');

setDefaultTimeout(60 * 10000);
const nome = faker.name.firstName();
const sobrenome = faker.name.lastName();
const email = `${nome}${sobrenome}@outlook.com`;
const homePage = new HomePage();
const signInPage = new SignInPage();
const accountCreationPage = new AccountCreationPage();
const myAccountPage = new MyAccountPage();

Given('que esteja na home do website', async function () {
    await homePage.acessarWebsite();
});

When('eu clico em create account', async function () {
    await signInPage.criarConta(email);
});

When('preencho todos os dados do formulário', async function () {
    await accountCreationPage.preencherFormulario(nome, sobrenome);
});

When('clico no botão registar', async function () {
    await accountCreationPage.finalizarCadastro();
});

Then('o cadastro é realizado com sucesso exibindo a mensagem {string}', async function (welcome) {
    await myAccountPage.exibirMensagem(welcome);
});

Then('exibe o o nome do usuário cadastrado no menu', async function () {
    await myAccountPage.exibirUsuario(nome, sobrenome);
});
