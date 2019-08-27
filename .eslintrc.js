module.exports = {
  extends: ['airbnb-base'],
  overrides: [{
    files: ['*.vue'],
    rules: {
      indent: 'off'
    }
  }],
  plugins: ['import', 'node', 'promise'],
  rules: {
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'max-len': ['error', { 'code': 120 }],
    'no-console': ['warn', { allow: ['warn', 'error']}],
    'no-unresolved': ['off'],
    'no-return-assign': 'off',
    quotes: ['error', 'single'],
    semi: 'off',
    'space-before-function-paren': 'off',
  },
};
