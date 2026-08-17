import { AboutView } from 'components/about';
import { Metadata } from 'next';

import { ABOUT_SEO } from 'components/about/about_content';

export const metadata: Metadata = {
  title: ABOUT_SEO.title,
  description: ABOUT_SEO.description,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: ABOUT_SEO.title,
    description: ABOUT_SEO.description,
    url: 'https://sovlium.ru/about',
    siteName: 'sovlium',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://sovlium.ru/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Sovlium',
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
