import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../fixture/customWorld';
import { env } from '../config/env';

Given('user launches the application', async function(this: CustomWorld) { await this.loginPage.open(env.baseUrl); });
Given('user is on the Login page', async function(this: CustomWorld) { await this.loginPage.verifyLoginPageDisplayed(); });
Given('user logs in with valid credentials', async function(this: CustomWorld) {
  await this.loginPage.open(env.baseUrl); await this.loginPage.login(this.testData.validUsername, this.testData.validPassword);
  await this.dashboardPage.verifyDashboardLoaded();
});
When('user enters valid credentials', async function(this: CustomWorld) {
  await this.loginPage.enterUsername(this.testData.validUsername); await this.loginPage.enterPassword(this.testData.validPassword);
});
When('user enters {string} and {string}', async function(this: CustomWorld, username: string, password: string) {
  await this.loginPage.enterUsername(username); await this.loginPage.enterPassword(password);
});
When('user clicks Login', async function(this: CustomWorld) { await this.loginPage.clickLogin(); });
When('user presses Enter in the password field', async function(this: CustomWorld) { await this.loginPage.submitWithEnter(); });
When('user clicks Forgot your password', async function(this: CustomWorld) { await this.loginPage.clickForgotPassword(); });
When('user logs out', async function(this: CustomWorld) { await this.dashboardPage.logout(); });
When('user navigates directly to the dashboard URL', async function(this: CustomWorld) { await this.page.goto(env.dashboardUrl); });
When('user presses browser Back', async function(this: CustomWorld) { await this.page.goBack(); });
When('user navigates controls using Tab', async function(this: CustomWorld) {
  await this.page.keyboard.press('Tab'); await this.page.keyboard.press('Tab');
});
When('user enters the password', async function(this: CustomWorld) { await this.loginPage.enterPassword(this.testData.validPassword); });
Then('Login page should be displayed', async function(this: CustomWorld) { await this.loginPage.verifyLoginPageDisplayed(); });
Then('Dashboard should be displayed', async function(this: CustomWorld) {
  await this.dashboardPage.verifyDashboardLoaded(); await this.dashboardPage.verifyUserProfile();
});
Then('Forgot Password page should be displayed', async function(this: CustomWorld) { await this.forgotPasswordPage.verifyDisplayed(); });
Then('an invalid credentials message should be displayed', async function(this: CustomWorld) {
  await expect(this.page.getByText('Invalid credentials', { exact: true })).toBeVisible();
});
Then('required field validation should be displayed', async function(this: CustomWorld) {
  await expect(this.page.locator('.oxd-input-field-error-message').first()).toBeVisible();
});
Then('protected Dashboard content should not be accessible', async function(this: CustomWorld) {
  await expect(this.page.getByRole('heading', { name: 'Dashboard' })).not.toBeVisible();
});
Then('login controls should receive visible focus in logical order', async function(this: CustomWorld) {
  await expect(this.loginPage.loginButton).toBeFocused();
});
Then('Password field should mask the entered value', async function(this: CustomWorld) { await this.loginPage.verifyPasswordMasked(); });
