const commonConfig = require('./jest.common');

module.exports = {
  ...commonConfig,
  displayName: 'client',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
};
