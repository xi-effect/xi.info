/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable import/extensions */
/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  relative: true,
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/**/*.{js,ts,jsx,tsx,mdx}',
    '../../node_modules/@xipkg/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [require('@xipkg/tailwind/design-system-preset.js')],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)'],
      mono: ['var(--font-inter)'],
    },
    extend: {
      animation: {
        aurora: 'aurora 60s linear infinite',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
    },
  },
};
