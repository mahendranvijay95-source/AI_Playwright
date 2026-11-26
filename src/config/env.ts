export interface EnvironmentConfig { baseUrl: string; dashboardUrl: string; headless: boolean; }
export const env: EnvironmentConfig = {
  baseUrl: process.env.BASE_URL ?? 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  dashboardUrl: process.env.BASE_URL ? process.env.BASE_URL.replace('/auth/login', '/dashboard/index') : 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
  headless: process.env.HEADLESS !== 'false'
};
