import type { Metadata } from 'next';

import { absoluteUrl, SITE_NAME, SITE_URL } from './site';
import { getSeoPage, type SeoPathT } from './pages';

export const createPageMetadata = (path: SeoPathT): Metadata => {
  const page = getSeoPage(path);
  const canonical = page.canonical ?? absoluteUrl(page.path);
  const ogTitle = page.ogTitle ?? page.title;
  const ogDescription = page.ogDescription ?? page.description;
  const index = page.index;
  const follow = page.follow ?? true;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical,
    },
    robots: {
      index,
      follow,
      googleBot: {
        index,
        follow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'ru_RU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
    },
    metadataBase: new URL(SITE_URL),
  };
};
