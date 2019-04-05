const commonConfig = require('./test/jest.common');

module.exports = {
  ...commonConfig,
  // 1 hour to figure to projects fails only one project is passed
  projects: ['<rootDir>/test/jest.client.js', '<rootDir>/test/jest.lint.js'],
  collectCoverageFrom: ['**/src/**/*.js'],
};
