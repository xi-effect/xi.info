import { ReactNode } from 'react';

import '@xipkg/tailwind/index.css';
import '../public/global.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'xi.support',
  description:
    'Страница поддержки пользователей xi.effect - документация приложения и полезные материалы',
  manifest: '/manifest.webmanifest',
  keywords: [
    'xi.effect',
    'кси эффект',
    'эффект',
    'стартап',
    'effect',
    'для репетитора',
    'поддержка',
    'support',
    'xi.support',
    'инструмент',
  ],
  icons: {
    icon: [
      { url: './favicon-for-light.svg' },
      { url: './favicon-for-dark.svg', media: '(prefers-color-scheme: dark)' },
    ],
  },
};

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden">
        <Script
          async
          defer
          data-website-id="26669b29-eea8-41e3-9189-3cfb4cba7966"
          src="https://analytics.xieffect.ru/umami.js"
        />
        {children}
      </body>
    </html>
  );
}
