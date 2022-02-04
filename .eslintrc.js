const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
};

module.exports = {
  env: {
    es6: true,
    node: true
  },
  root: true,
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'next',
    sourceType: 'module'
  },
  rules: {
    'no-console': RULES.WARN,
    'no-multiple-empty-lines': RULES.ERROR,
    '@typescript-eslint/explicit-module-boundary-types': RULES.OFF,
    '@typescript-eslint/naming-convention': RULES.ERROR
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': [RULES.WARN],
        '@typescript-eslint/no-this-alias': [RULES.WARN],
        '@typescript-eslint/no-non-null-assertion': [RULES.OFF],
        '@typescript-eslint/array-type': [RULES.WARN, { default: 'generic' }],
        '@typescript-eslint/no-unused-vars': RULES.OFF
      }
    }
  ],
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.ts']
      }
    }
  }
};
