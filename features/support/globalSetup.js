const { setDefaultTimeout, BeforeAll, Before, AfterAll, After } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");

setDefaultTimeout(60 * 100000)

BeforeAll(async() =>{
    global.browser = await chromium.launch({
        headless:false
    });
});

AfterAll(async() => {
    await  global.browser.close();
});

Before(async() => {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
});

After(async() => {
    await global.page.close();
});