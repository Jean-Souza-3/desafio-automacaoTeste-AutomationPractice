const { expect } = require('@playwright/test');

exports.MyAccountPage = class MyAccountPage {

    async exibirMensagem(welcome) {
        await expect(page.locator('xpath=//*[@id="center_column"]/p')).toContainText(welcome);
    }

    async exibirUsuario(nome, sobrenome) {
        await expect(page.locator('xpath=//*[@id="header"]/div[2]/div/div/nav/div[1]/a/span')).toContainText(`${nome} ${sobrenome}`);
        await page.waitForTimeout(5000);
    }
}