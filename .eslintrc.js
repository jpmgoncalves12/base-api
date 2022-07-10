module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'default-param-last': 'off',
    'operator-linebreak': ['error', 'after'],
    'no-plusplus': 'off',
  },
};
