const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../pages/HomePage');

test.describe('Homepage Tests', () => {

  test('Verify homepage title', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.navigateToHome();

    await expect(page).toHaveTitle(/Wellversed/);

  });

});
