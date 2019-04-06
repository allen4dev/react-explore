const path = require('path');

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react-hooks', 'cypress', 'prettier'],
  env: {
    'cypress/globals': true,
  },
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'no-debugger': 'warn',
  },
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: 'src',
      },
    },
  },
  overrides: [
    {
      files: ['**/__tests__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, 'jest.config.js'),
          },
        },
      },
    },
  ],
};
