const { test, expect } = require('@playwright/test');
const { SignupPage } = require('../../pages/SignupPage');
const users = require('../../test-data/users.json');

test.describe('Signup Module', () => {

  test('@smoke Verify user can access signup page', async ({ page }) => {
    const signup = new SignupPage(page);

    await signup.navigateToSignup();

    await expect(page).toHaveURL(/account/);
  });

});
