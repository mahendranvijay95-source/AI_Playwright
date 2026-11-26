import { expect, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  readonly heading = this.page.getByRole('heading', { name: 'Dashboard' });
  readonly profileMenu = this.page.locator('.oxd-userdropdown');
  readonly logoutLink = this.page.getByRole('menuitem', { name: 'Logout' });
  constructor(page: Page) { super(page); }
  async verifyDashboardLoaded(): Promise<void> { await expect(this.heading).toBeVisible(); }
  async verifyUserProfile(): Promise<void> { await expect(this.profileMenu).toBeVisible(); }
  async logout(): Promise<void> { await this.profileMenu.click(); await this.logoutLink.click(); }
}
