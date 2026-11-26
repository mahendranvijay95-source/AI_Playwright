import { Before, After, BeforeStep, AfterStep, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, request } from '@playwright/test';
import path from 'node:path'; import fs from 'node:fs';
import { CustomWorld } from '../fixture/customWorld';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';
setDefaultTimeout(60_000);
Before(async function(this: CustomWorld) {
  this.browser = await chromium.launch({ headless: process.env.HEADLESS !== 'false' });
  this.context = await this.browser.newContext({ viewport: { width: 1280, height: 720 } });
  await this.context.tracing.start({ screenshots: true, snapshots: true, sources: true });
  this.page = await this.context.newPage();
  this.apiContext = await request.newContext({ baseURL: process.env.BASE_URL });
  this.loginPage = new LoginPage(this.page); this.dashboardPage = new DashboardPage(this.page);
  this.forgotPasswordPage = new ForgotPasswordPage(this.page);
});
BeforeStep(async function(this: CustomWorld) { await this.page?.waitForLoadState('domcontentloaded').catch(() => undefined); });
AfterStep(async function(this: CustomWorld) { await this.page?.evaluate(() => document.readyState).catch(() => undefined); });
After(async function(this: CustomWorld, hookParameter) {
  const artifacts = path.resolve(process.cwd(), 'artifacts'); fs.mkdirSync(artifacts, { recursive: true });
  const result = hookParameter.result;
  if (result?.status === Status.FAILED) {
    await this.page?.screenshot({ path: path.join(artifacts, 'failure-' + Date.now() + '.png'), fullPage: true }).catch(() => undefined);
    console.error('Scenario failure:', result.message ?? 'Unknown failure');
  }
  await this.context?.tracing.stop({ path: path.join(artifacts, 'trace-' + Date.now() + '.zip') }).catch(() => undefined);
  await this.apiContext?.dispose().catch(() => undefined); await this.context?.close().catch(() => undefined);
  await this.browser?.close().catch(() => undefined);
});
