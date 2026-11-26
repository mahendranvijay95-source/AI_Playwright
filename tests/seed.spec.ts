import { test } from '@playwright/test';
import { spawnSync } from 'node:child_process';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    void page;
    spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['install'], {
      cwd: process.cwd(), stdio: 'inherit', shell: false
    });
  });
});
