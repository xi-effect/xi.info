import { createMDX } from 'fumadocs-mdx/next';
import { fileURLToPath } from 'url';
import path from 'path';

const withMDX = createMDX();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
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
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  typescript: { ignoreBuildErrors: true },
};

export default withMDX(config);
