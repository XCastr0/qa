
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    // Antes de cada teste, você pode definir algumas configurações iniciais
    await page.goto('https://magento.softwaretestingboard.com');
});

module.exports = { test, expect };
