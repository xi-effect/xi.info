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
    '@xipkg/utils',
    '@xipkg/button',
    '@xipkg/modal',
    '@xipkg/form',
    '@xipkg/input',
    '@xipkg/routerurl',
    '@xipkg/label',
    '@xipkg/select',
    '@xipkg/tabs',
    '@xipkg/tailwind',
    '@xipkg/fileuploader',
    '@xipkg/badge',
    'pkg.landing.footer',
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
      'sovlium.ru:5000',
      'sovlium.ru',
    ],
  },
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  typescript: { ignoreBuildErrors: true },
};

module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfig);
