import { setWorldConstructor, World, type IWorldOptions } from '@cucumber/cucumber';
import type { Browser, BrowserContext, APIRequestContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';
import { testData } from '../utils/testData';
export class CustomWorld extends World {
  browser!: Browser; context!: BrowserContext; page!: Page; apiContext!: APIRequestContext;
  loginPage!: LoginPage; dashboardPage!: DashboardPage; forgotPasswordPage!: ForgotPasswordPage;
  testData = testData;
  constructor(options: IWorldOptions) { super(options); }
}
setWorldConstructor(CustomWorld);
