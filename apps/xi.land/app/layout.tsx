/* eslint-disable react/jsx-no-useless-fragment */

import { Inter } from 'next/font/google';
import React, { ReactNode, Suspense } from 'react';
import { Metadata } from 'next';

import { Footer } from 'pkg.landing.footer';
import { Header } from 'components/Header';
import YandexMetrika from 'components/YandexMetrika';

import { Toaster } from 'sonner';
import Script from 'next/script';
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
    google: 'VAN7yVAfRqd5NWFpUJlz0MVL1wcv0mdhDY-16-d48-U',
    yandex: '5896c9df498c0cd0',
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
            <Script id="vk-pixel" strategy="afterInteractive">
              {`var _tmr = window._tmr || (window._tmr = []);
              _tmr.push({id: "3498815", type: "pageView", start: (new Date()).getTime()});
              (function (d, w, id) {
                if (d.getElementById(id)) return;
                var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
                ts.src = "https://top-fwz1.mail.ru/js/code.js";
                var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
                if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
              })(document, window, "tmr-code");`}
            </Script>
            <Suspense fallback={<></>}>
              <YandexMetrika />
            </Suspense>
          </>
        )}
        <Toaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
