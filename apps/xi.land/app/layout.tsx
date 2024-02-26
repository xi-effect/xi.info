import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import React from 'react';
import { Metadata } from 'next';

import '@xipkg/tailwind/index.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'xi.effect',
  description: 'Гибкий образовательный инструмент для репетиторов и малого бизнеса',
  manifest: '/manifest.webmanifest',
  keywords: [
    'xi.effect',
    'кси эффект',
    'эффект',
    'стартап',
    'образование',
    'репетитору',
    'инструмент',
    'бизнес',
    'онлайн',
    'инструмент',
    'для репетитора',
    'видеоконференции',
    'effect',
    'сервис',
    'EdTech',
  ],
  icons: {
    icon: [
      { url: './favicon-for-light.svg' },
      { url: './favicon-for-dark.svg', media: '(prefers-color-scheme: dark)' },
    ],
  },
  verification: {
    google: 'VAN7yVAfRqd5NWFpUJlz0MVL1wcv0mdhDY-16-d48-U',
    yandex: '5896c9df498c0cd0',
  },
};

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <body>
        <Script
          async
          defer
          data-website-id="e9570b38-1176-44ac-854c-5b7ad4380a47"
          src="https://analytics.xieffect.ru/umami.js"
        />
        {children}
      </body>
    </html>
  );
}
