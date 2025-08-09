/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Inter } from 'next/font/google';
import React, { ReactNode } from 'react';
import { Metadata } from 'next';

import { Footer } from 'pkg.landing.footer';
import { Header } from 'components/Header';
// import YandexMetrika from 'components/YandexMetrika';

import { Toaster } from 'sonner';
// import Script from 'next/script';
import '../index.css';

export const metadata: Metadata = {
  title: 'sovlium',
  description: 'Приложение для репетиторов и малого бизнеса',
  manifest: '/manifest.webmanifest',
  keywords: [
    'sovlium',
    'совлиум',
    'стартап',
    'образование',
    'репетитору',
    'инструмент',
    'бизнес',
    'онлайн',
    'инструмент',
    'для репетитора',
    'видеоконференции',
    'сервис',
    'EdTech',
  ],
  icons: {
    icon: [{ url: '/favicon.svg' }],
  },
  verification: {
    // google: 'VAN7yVAfRqd5NWFpUJlz0MVL1wcv0mdhDY-16-d48-U',
    // yandex: '5896c9df498c0cd0',
  },
  openGraph: {
    title: 'sovlium',
    description: 'Приложение для репетиторов и малого бизнеса',
    url: 'https://sovlium.ru',
    siteName: 'sovlium',
    images: [
      {
        url: 'https://sovlium.ru/web-app-manifest-512x512.png', // Must be an absolute URL
        width: 512,
        height: 512,
      },
    ],
    type: 'website',
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
        {/* @ts-expect-error */}
        <Toaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
