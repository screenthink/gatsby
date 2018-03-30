const path = require('path');

module.exports = {
  extends: ['react-app', 'eslint-config-airbnb', 'eslint-config-prettier'],
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    graphql: true,
  },
  settings: {
    'import/resolver': { node: { paths: [path.resolve('src/')] } },
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [],
      },
    ],
    'react/no-danger': 0,
    'react/jsx-filename-extension': 0,
  },
};
