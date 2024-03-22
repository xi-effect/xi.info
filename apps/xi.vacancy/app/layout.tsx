import { ReactNode } from 'react';

import '@xipkg/tailwind/index.css';
import '../public/global.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'xi.vacancy',
  description:
    'Рассказываем о вакансиях стартапа xi.effect - разработка, дизайн, тестирование, менеджмент',
  manifest: '/manifest.webmanifest',
  keywords: [
    'xi.effect',
    'кси эффект',
    'эффект',
    'стартап',
    'вакансии',
    'работа',
    'vacancy',
    'xi.vacancy',
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
          data-website-id="89ce725a-1b31-457a-a5cb-b3bbbded1748"
          src="https://analytics.xieffect.ru/umami.js"
        />
        {children}
      </body>
    </html>
  );
}
