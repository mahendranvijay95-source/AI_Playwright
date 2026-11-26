import { expect, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly username = this.page.getByRole('textbox', { name: 'Username' });
  readonly password = this.page.getByRole('textbox', { name: 'Password' });
  readonly loginButton = this.page.getByRole('button', { name: 'Login' });
  readonly forgotPassword = this.page.getByText('Forgot your password?', { exact: true });

  constructor(page: Page) { super(page); }
  async open(url: string): Promise<void> { await super.open(url); }
  async enterUsername(username: string): Promise<void> { await this.username.fill(username); }
  async enterPassword(password: string): Promise<void> { await this.password.fill(password); }
  async clickLogin(): Promise<void> { await this.loginButton.click(); }
  async login(username: string, password: string): Promise<void> {
    await this.enterUsername(username); await this.enterPassword(password); await this.clickLogin();
  }
  async submitWithEnter(): Promise<void> { await this.password.press('Enter'); }
  async clickForgotPassword(): Promise<void> { await this.forgotPassword.click(); }
  async verifyLoginPageDisplayed(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(this.username).toBeVisible(); await expect(this.password).toBeVisible();
  }
  async getErrorMessage(): Promise<string> {
    const invalid = this.page.getByText('Invalid credentials', { exact: true });
    await expect(invalid).toBeVisible(); return (await invalid.textContent()) ?? '';
  }
  async verifyPasswordMasked(): Promise<void> { await expect(this.password).toHaveAttribute('type', 'password'); }
}
