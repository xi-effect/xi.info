import config from 'common.eslint';

export default [
  ...config,
  {
    settings: {
      next: {
        rootDir: ['apps/*/'],
      },
    },
  },
];
