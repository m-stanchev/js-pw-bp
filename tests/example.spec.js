// @ts-check
//const { test, expect } = require('@playwright/test');
//import { test } = require('../helpers/WebFixtures.js');
import { test } from '../helpers/WebFixtures.js';

test('Go to Login page and log in', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.setUsername('Admin');
  await loginPage.setPassword('admin123');
  await loginPage.clickLogin();
  await loginPage.isLoggednIn();

  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
