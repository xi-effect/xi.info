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
};
