module.exports = { default: {
  requireModule: ['ts-node/register'],
  require: ['src/fixture/customWorld.ts', 'src/hooks/hooks.ts', 'src/step-definitions/**/*.ts'],
  format: ['progress', 'html:artifacts/cucumber-report.html', 'json:artifacts/cucumber-report.json'],
  paths: ['src/features/**/*.feature'], publishQuiet: true
}};
