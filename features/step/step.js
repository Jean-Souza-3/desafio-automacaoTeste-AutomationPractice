const { setDefaultTimeout, Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { HomePage } = require('../pages/create_account/criar_conta/home_page');
const { SignInPage } = require('../pages/create_account/criar_conta/sign_in_page');
const { AccountCreationPage } = require('../pages/create_account/criar_conta/account_creation_page');
const { MyAccountPage } = require('../pages/create_account/criar_conta/my_account_page');
const { SignUpPage } = require('../pages/create_account/logar_conta/sign_up_page');

setDefaultTimeout(60 * 10000);
const nome = faker.name.firstName();
const sobrenome = faker.name.lastName();
const pass = faker.word.adjective();
const email = `${nome}${sobrenome}@outlook.com`;
const homePage = new HomePage();
const signInPage = new SignInPage();
const accountCreationPage = new AccountCreationPage();
const myAccountPage = new MyAccountPage();
const signUpPage = new SignUpPage();

//Scenario1 Criar Conta
Given('que esteja na home do website', async function () {
    await homePage.acessarWebsite();
    //await page.pause();
});

When('eu clico em create account', async function () {
    await signInPage.criarConta(email);
    //await page.pause();
});

When('preencho todos os dados do formulário', async function () {
    await accountCreationPage.preencherFormulario(nome, sobrenome, pass);
    //await page.pause();
});

When('clico no botão registar', async function () {
    await accountCreationPage.finalizarCadastro();
    //await page.pause();
});

Then('o cadastro é realizado com sucesso exibindo a mensagem {string}', async function (welcome) {
    await myAccountPage.exibirMensagem(welcome);
    //await page.pause();
});

Then('exibe o nome do usuário cadastrado no menu', async function () {
    await myAccountPage.exibirUsuario(nome, sobrenome);
    //await page.pause();
});

//Scenario2 Logar Conta
Given('que eu esteja na home do website', async function () {
    await homePage.acessarWebsite();
    //await page.pause();
});

When('eu clico em already registered?', async function () {
    await signUpPage.logarConta(email, pass);
    //await page.pause();
});

Then('redireciona para my account com sucesso exibindo a mensagem {string}', async function (welcome) {
    await myAccountPage.exibirMensagem(welcome);
    //await page.pause();
});

Then('exibe o nome do usuário registrado no menu', async function () {
    await myAccountPage.exibirUsuario(nome, sobrenome);
    //await page.pause();
});
