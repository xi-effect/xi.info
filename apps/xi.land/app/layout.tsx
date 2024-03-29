/* eslint-disable react/jsx-no-useless-fragment */

import { Inter } from 'next/font/google';
import React, { ReactNode, Suspense } from 'react';
import { Metadata } from 'next';

import '@xipkg/tailwind/index.css';

import Script from 'next/script';
import { Toaster } from 'sonner';
import YandexMetrika from 'components/YandexMetrika';

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
        {process.env.NODE_ENV === 'development' ? (
          <></>
        ) : (
          <>
            <Script id="metrika-counter" strategy="afterInteractive">
              {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
              ym("96659391", "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`}
            </Script>
            <Suspense fallback={<></>}>
              <YandexMetrika />
            </Suspense>
          </>
        )}
        <Script
          async
          defer
          data-website-id="e9570b38-1176-44ac-854c-5b7ad4380a47"
          src="https://analytics.xieffect.ru/umami.js"
        />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
