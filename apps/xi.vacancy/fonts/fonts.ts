import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const marker = localFont({
  src: [
    {
      path: './Marker-Regular.otf',
    },
    {
      path: './Marker-Regular.otf',
    },
    {
      path: './Marker-Regular.woff',
    },
    {
      path: './Marker-Regular.woff2',
    },
  ],
  style: 'normal',
  weight: '400',
  variable: '--font-marker',
});

export { inter, marker };
