/* eslint-disable no-undef */
import path from 'path';
import createMDX from '@next/mdx';
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ['remark-gfm'],
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx', 'js', 'jsx'],
});

const plugins = [withBundleAnalyzer, withMDX];

const nextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  outputFileTracingRoot: path.join(process.cwd(), '../../'),
  transpilePackages: [
    '@xipkg/link',
    '@xipkg/button',
    '@xipkg/tailwind',
    '@xipkg/utils',
    '@xipkg/icons',
    '@xipkg/tabs',
    '@xipkg/form',
    '@xipkg/input',
    'pkg.landing.footer',
  ],
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: process.env.NODE_ENV === 'development' ? 'standalone' : 'export',
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      type: 'asset/resource',
    });

    return config;
  },
};

export default () => plugins.reduce((acc, next) => next(acc), nextConfig);
