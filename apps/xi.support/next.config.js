// Не поддавайтесь соблазну использовать здесь import

/** @type {import('next').NextConfig} */

const path = require('path');

const withMDX = require('@next/mdx')();

const plugins = [];

plugins.push(withMDX);

const nextConfig = {
  experimental: {
    mdxRs: true,
    esmExternals: true,
  },
  outputFileTracingRoot: path.join(__dirname, '../../'),
  transpilePackages: [
    '@xipkg/typescript',
    '@xipkg/icons',
    '@xipkg/button',
    '@xipkg/input',
    '@xipkg/utils',
    'pkg.footer',
    '@xipkg/link',
  ],
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      'cdn.discordapp.com',
      'localhost:3000',
      'localhost:5000',
      'xieffect.ru:5000',
      'xieffect.ru',
    ],
  },
  output: process.env.NODE_ENV === 'development' ? 'standalone' : 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfig);
