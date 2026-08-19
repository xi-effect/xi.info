import { calendarContent } from 'components/product/content/calendar';
import { callsContent } from 'components/product/content/calls';
import { classroomsContent } from 'components/product/content/classrooms';
import { materialsContent } from 'components/product/content/materials';
import { paymentsContent } from 'components/product/content/payments';
import { whiteboardContent } from 'components/product/content/whiteboard';

import { absoluteUrl, SITE_NAME, SITE_URL, SOCIAL_PROFILES, SUPPORT_EMAIL } from './site';
import { getSeoPage, type SeoPathT } from './pages';

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#app`;

export const organizationJsonLd = {
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl('/logoforwhite.svg'),
  email: SUPPORT_EMAIL,
  sameAs: [...SOCIAL_PROFILES],
};

export const websiteJsonLd = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: 'ru-RU',
  publisher: { '@id': ORGANIZATION_ID },
};

export const softwareApplicationJsonLd = {
  '@type': 'SoftwareApplication',
  '@id': APP_ID,
  name: SITE_NAME,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web Browser',
  url: SITE_URL,
  description:
    'Платформа для репетиторов с видеозвонками, онлайн-досками, расписанием и контролем оплат',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'RUB',
    description: 'Бесплатная пробная версия',
  },
  provider: { '@id': ORGANIZATION_ID },
  featureList: [
    classroomsContent.title,
    calendarContent.title,
    callsContent.title,
    whiteboardContent.title,
    materialsContent.title,
    paymentsContent.title,
  ],
};

export const graphJsonLd = (...nodes: Record<string, unknown>[]) => ({
  '@context': 'https://schema.org',
  '@graph': nodes,
});

export const breadcrumbJsonLd = (path: SeoPathT) => {
  const page = getSeoPage(path);
  const home = getSeoPage('/');

  const items =
    path === '/'
      ? [
          {
            '@type': 'ListItem',
            position: 1,
            name: home.title,
            item: SITE_URL,
          },
        ]
      : [
          {
            '@type': 'ListItem',
            position: 1,
            name: SITE_NAME,
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: page.title,
            item: absoluteUrl(page.path),
          },
        ];

  return {
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
};

export const webPageJsonLd = (path: SeoPathT) => {
  const page = getSeoPage(path);

  return {
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: absoluteUrl(page.path),
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': APP_ID },
  };
};
