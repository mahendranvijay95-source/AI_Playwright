import type { Browser, BrowserContext, APIRequestContext, Page } from '@playwright/test';
export interface CustomWorldData {
  browser: Browser; context: BrowserContext; page: Page; apiContext: APIRequestContext;
  testData: { validUsername: string; validPassword: string };
}
