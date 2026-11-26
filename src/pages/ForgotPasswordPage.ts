import { expect, type Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class ForgotPasswordPage extends BasePage {
  readonly heading = this.page.getByRole('heading', { name: 'Reset Password' });
  readonly username = this.page.getByRole('textbox', { name: 'Username' });
  readonly resetButton = this.page.getByRole('button', { name: 'Reset Password' });
  constructor(page: Page) { super(page); }
  async verifyDisplayed(): Promise<void> { await expect(this.heading).toBeVisible(); }
  async enterUsername(username: string): Promise<void> { await this.username.fill(username); }
  async reset(): Promise<void> { await this.resetButton.click(); }
}
