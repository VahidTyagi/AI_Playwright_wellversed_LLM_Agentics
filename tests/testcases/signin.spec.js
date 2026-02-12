const { test, expect } = require('@playwright/test');
const { SigninPage } = require('../../pages/SigninPage');
const users = require('../../test-data/users.json');

test.describe('Signin Module', () => {

  test('@regression Verify invalid login shows error', async ({ page }) => {
    const signin = new SigninPage(page);

    await signin.navigateToSignin();
    await signin.login(users.invalidUser.email, users.invalidUser.password);

    await expect(page.locator('text=Invalid')).toBeVisible();
  });

});
