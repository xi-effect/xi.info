// Не поддавайтесь соблазну использовать здесь import

/** @type {import('next').NextConfig} */

const path = require('path');

const withMDX = require('@next/mdx')();

const plugins = [];

plugins.push(withMDX);

const nextConfig = {
  outputFileTracingRoot: path.join(__dirname, '../../'),
  transpilePackages: [
    '@xipkg/typescript',
    '@xipkg/icons',
    '@xipkg/button',
    '@xipkg/input',
    '@xipkg/utils',
    'pkg.landing.footer',
    '@xipkg/link',
  ],
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.discordapp.com' },
      { protocol: 'http', hostname: 'localhost', port: '3000' },
      { protocol: 'http', hostname: 'localhost', port: '5000' },
      { protocol: 'https', hostname: 'sovlium.ru', port: '5000' },
      { protocol: 'https', hostname: 'sovlium.ru' },
    ],
  },
  output: process.env.NODE_ENV === 'development' ? 'standalone' : 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  typescript: { ignoreBuildErrors: true },
};

module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfig);
