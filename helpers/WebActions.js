const { expect } = require("@playwright/test");

exports.WebActions =
class WebActions {

  constructor(page) {
    this.page = page;
  }

  async goTo(url) {
    await this.page.goto(url);
  }

  async setTextByPlaceholder(locator, text) {
    await this.page.getByPlaceholder(locator).fill(text);
  }

  async clickButtonByText(locator) {
    await this.page.getByRole('button', {name: locator}).click();
  }

  async verifyIfHeaderIsVisibleByText(text) {
    await expect.soft(this.page.getByRole('heading', { name: text })).toBeVisible();
  }
}