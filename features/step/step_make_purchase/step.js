const { setDefaultTimeout, Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { Faker } = require('@faker-js/faker');
const { HomePage } = require('../../pages/create_account/criar_conta/home_page');
const { SignUpPage } = require('../../pages/create_account/logar_conta/sign_up_page');
const { MyAccountPage } = require('../../pages/create_account/criar_conta/my_account_page');
const { CategorySelectorPage } = require('../../pages/make_purchase/category_selector_page');
const { CartPage } = require('../../pages/make_purchase/cart_page');
const { OrderHistoryPage } = require('../../pages/make_purchase/order_history_page');

setDefaultTimeout(60 * 10000);
const homePage = new HomePage();
const signUpPage = new SignUpPage();
const myAccountPage = new MyAccountPage();
const categorySeletorPage = new CategorySelectorPage();
const orderHistoryPage = new OrderHistoryPage();
const cartPage = new CartPage();
const email = "jeansouza03@outlook.com";
const pass = "12345";

//Scenario1 Efetuar Compra
Given('que esteja na home do site', async function () {
    await homePage.acessarWebsite();

});

When('eu clico em already registered', async function () {
    await signUpPage.logarConta(email, pass);
});

When('acesso a categoria Women selecionando {string}', async function (categoria) {
    await myAccountPage.acessarMenu(categoria);
});

When('seleciono o produto a ser comprado Printed Chiffon Dress', async function () {
    await categorySeletorPage.selecionarProduto();
    await categorySeletorPage.cartMessage();
});

Then('redireciona para carrinho para finalizar a compra', async function () {
    await cartPage.finalizarCompra();
});

Then('em histórico de compras envio uma mensagem de agradecimento ao fornecedor do produto {string}', async function (message) {
    await orderHistoryPage.historicoCompras();
    await orderHistoryPage.enviarMensagem(message);
});