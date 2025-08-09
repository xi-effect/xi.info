import eslintrc from '@xipkg/eslint';

export default [
  ...eslintrc,
  {
    ignores: ['**/.next/**', '**/node_modules/**', '**/dist/**', '**/build/**'],
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unsafe-function-type': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-wrapper-object-types': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      semi: 'off',
    },
  },
];
