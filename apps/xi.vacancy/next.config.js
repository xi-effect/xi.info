// Не поддавайтесь соблазну использовать здесь import

/** @type {import('next').NextConfig} */

const path = require('path');

const withMDX = require('@next/mdx')();

const runtimeCaching = require('next-pwa/cache');

const plugins = [];

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  runtimeCaching,
  mode: 'production',
  reloadOnOnline: true,
  cacheOnFrontEndNav: true,
  disable: process.env.NODE_ENV === 'development',
  skipWaiting: true,
  sw: '/sw.js',
  buildExcludes: [
    /middleware-manifest\.json$/,
    /_middleware\.js$/,
    /_middleware\.js\.map$/,
    /middleware-runtime\.js$/,
    /server\/pages\/_middleware\.js$/,
  ],
});

plugins.push(withPWA, withMDX);

const nextConfig = {
  experimental: {
    mdxRs: true,
    esmExternals: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  transpilePackages: [
    'pkg.theme',
    '@xipkg/typescript',
    '@emotion/styled',
    '@emotion/react',
    '@emotion/cache',
    '@mui/material',
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
  output: 'export',
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      type: 'asset/resource',
    });
    config.module.rules.push({
      test: /\.d.ts?$/,
      use: [
        {
          loader: 'ignore-loader',
        },
      ],
    });

    return config;
  },
};

module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfig);
