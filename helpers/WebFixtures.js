const base = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginPage');

// Extend base test by providing "LoginPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
exports.test = base.test.extend({
  loginPage: async ({ page }, use) => {
    // Set up the fixture.
    // const loginPage = new LoginPage(page);
    // Use the fixture value in the test.
    await use(new LoginPage(page));
  }
});
exports.expect = base.expect;