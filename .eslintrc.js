const WARN = 'warn';
const OFF = 'off';

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': WARN,
    'no-console': OFF,
    'no-debugger': OFF,
    // 类成员之间加空行
    'lines-between-class-members': [WARN, 'always'],
  },
};
