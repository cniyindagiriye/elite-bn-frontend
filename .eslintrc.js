module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'linebreak-style': [0, 'windows'],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'default-case': 'off',
    'react/prefer-stateless-function': 0,
    'react/state-in-constructor': 0,
    'react/destructuring-assignment': 0,
    'prefer-destructuring': 'off',
    'function-paren-newline': 'off',
    'global-require': 'off',
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/button-has-type': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/prop-types': 0,
  },
};
