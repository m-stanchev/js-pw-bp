import { WebActions } from '../helpers/WebActions.js';

export class LoginPage {
  url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

  constructor(page) {
    this.page = page;
    this.webActions = new WebActions(page);
    this.usernamePlaceholder = 'Username';
    this.passwordPlaceholder = 'Password';
    this.loginButton = 'Login';
    this.mainMenu = 'Dashboard';
  }

  async goto() {
    await this.webActions.goTo(this.url);
  }

  async setUsername(username) {
    await this.webActions.setTextByPlaceholder(this.usernamePlaceholder,username)
  }

  async setPassword(password) {
    await this.webActions.setTextByPlaceholder(this.passwordPlaceholder,password)
  }

  async clickLogin() {
    await this.webActions.clickButtonByText(this.loginButton);
  }

  async isLoggednIn() {
    await this.webActions.verifyIfHeaderIsVisibleByText(this.mainMenu);
  }
}