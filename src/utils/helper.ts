import type { Page } from '@playwright/test';
export async function safeText(page: Page, selector: string): Promise<string> {
  const element = page.locator(selector).first();
  if (!(await element.isVisible().catch(() => false))) return ''; return (await element.textContent())?.trim() ?? '';
}
