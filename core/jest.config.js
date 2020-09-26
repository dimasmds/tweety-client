const { resolve } = require('path');

module.exports = {
  verbose: true,
  transformIgnorePatterns: [
    '/node_modules/(?!lit-element|lit-html|@open-wc)',
  ],
  testMatch: [
    '**/?(*.)+(spec|test).+(ts|js)',
  ],
  setupFiles: [
    resolve(__dirname, '__mocks__/@react-native-community/async-storage.js'),
  ],
};
