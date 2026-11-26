export interface LoginTestData { validUsername: string; validPassword: string; }
export const testData: LoginTestData = {
  validUsername: process.env.TEST_USERNAME ?? 'Admin', validPassword: process.env.TEST_PASSWORD ?? 'admin123'
};
