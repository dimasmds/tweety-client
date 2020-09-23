module.exports = {
  verbose: true,
  transformIgnorePatterns: [
    '/node_modules/(?!lit-element|lit-html|@open-wc)',
  ],
  testMatch: [
    '**/?(*.)+(spec|test).+(ts|js)',
  ],
};
