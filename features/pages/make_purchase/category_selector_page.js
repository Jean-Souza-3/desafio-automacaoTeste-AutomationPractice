const { expect } = require('@playwright/test');

exports.CategorySelectorPage = class CategorySelectorPage {

    async selecionarProduto() {
        await page.locator('xpath=//*[@id="layered_id_attribute_group_2"]').check();
        await page.locator('xpath=//*[@id="layered_id_attribute_group_15"]').click();
        await page.waitForTimeout(12000);
        await page.hover('[id*=center_column] ul[class*=product_list] li div div[class*=right-block] h5 a[title*="Printed Chiffon Dress"]');
        //await expect (page.locator('[id*=center_column] ul[class*=product_list] li div div[class*=right-block] h5 a[title*="Printed Chiffon Dress"]')).toContainText(` 							${produto}						`);
        await page.locator('xpath=//*[@id="center_column"]/ul/li/div/div[2]/div[2]/a[1]').click();
    }

    async cartMessage() {
        await expect(page.locator('xpath=//*[@id="layer_cart"]/div[1]/div[1]/h2')).toContainText('Product successfully added to your shopping cart'
        );
        await page.locator('xpath=//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a').click();
    }
}