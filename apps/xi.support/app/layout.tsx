import { ReactNode } from 'react';

import '../index.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'База знаний sovlium - документация и поддержка',
  description:
    'Документация платформы sovlium для репетиторов. Руководства по использованию функций, ответы на вопросы и полезные материалы.',
  manifest: '/manifest.webmanifest',
  keywords: [
    'sovlium',
    'совлиум',
    'платформа для репетиторов',
    'документация',
    'поддержка',
    'support',
    'sovlium support',
    'база знаний',
    'руководство',
    'онлайн уроки',
    'видеозвонки',
    'онлайн доска',
    'расписание уроков',
    'контроль оплат',
    'репетиторство',
    'дистанционное обучение',
    'EdTech',
    'образовательная платформа',
  ],
  authors: [{ name: 'Sovlium Team' }],
  creator: 'Sovlium',
  publisher: 'Sovlium',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://support.sovlium.ru'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'База знаний sovlium - документация и поддержка',
    description:
      'Документация платформы sovlium для репетиторов. Руководства по использованию функций, ответы на вопросы и полезные материалы.',
    url: 'https://support.sovlium.ru',
    siteName: 'Sovlium Support',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://support.sovlium.ru/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Sovlium Support - База знаний',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'База знаний sovlium - документация и поддержка',
    description:
      'Документация платформы sovlium для репетиторов. Руководства по использованию функций, ответы на вопросы и полезные материалы.',
    images: ['https://support.sovlium.ru/web-app-manifest-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
    <html lang="ru" className={inter.variable}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
