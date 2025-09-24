import type { Config } from 'tailwindcss';
import designSystemPreset from '@xipkg/tailwind/design-system-preset.js';

const config: Config = {
  presets: [designSystemPreset],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@xipkg/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@xipkg/**/*.{js,ts,jsx,tsx}',
    '../../packages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'marker-hand': ['var(--font-marker-hand)', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;
