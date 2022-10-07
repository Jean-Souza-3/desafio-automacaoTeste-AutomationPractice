const { expect } = require('@playwright/test');

exports.MyAccountPage = class MyAccountPage {

    async exibirMensagem(welcome) {
        await expect(page.locator('xpath=//*[@id="center_column"]/p')).toContainText(welcome);
    }

    async exibirUsuario(nome, sobrenome) {
        await expect(page.locator('xpath=//*[@id="header"]/div[2]/div/div/nav/div[1]/a/span')).toContainText(`${nome} ${sobrenome}`);
        await page.waitForTimeout(5000);
    }

    async acessarMenu(categoria) {
        await page.hover('xpath=//*[@id="block_top_menu"]/ul/li[1]/a');
        await page.locator('xpath=//*[@id="block_top_menu"]/ul/li[1]/ul/li[2]/ul/li[3]/a').click();
        await expect(page.locator('xpath=//*[@id="center_column"]/div[1]/div/div/span')).toContainText(categoria);
    }
}