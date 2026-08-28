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
  legalName: 'Индивидуальный предприниматель Букшев Игорь Владимирович',
  url: SITE_URL,
  logo: absoluteUrl('/logoforwhite.svg'),
  email: SUPPORT_EMAIL,
  taxID: '781102952900',
  identifier: [
    { '@type': 'PropertyValue', name: 'ИНН', value: '781102952900' },
    { '@type': 'PropertyValue', name: 'ОГРНИП', value: '326784700178496' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Санкт-Петербург',
    addressCountry: 'RU',
    postalCode: '193318',
  },
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
    '@type': 'AggregateOffer',
    lowPrice: '0',
    highPrice: '1499',
    priceCurrency: 'RUB',
    offerCount: '2',
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

export const pricesOffersJsonLd = {
  '@type': 'Product',
  name: 'sovlium',
  description:
    'Доступ к функциональности сервиса sovlium для репетиторов: тариф Базовый и тариф Профи.',
  brand: { '@type': 'Brand', name: SITE_NAME },
  offers: [
    {
      '@type': 'Offer',
      name: 'Базовый',
      price: '0',
      priceCurrency: 'RUB',
      url: absoluteUrl('/prices'),
    },
    {
      '@type': 'Offer',
      name: 'Профи',
      price: '1499',
      priceCurrency: 'RUB',
      url: absoluteUrl('/prices'),
    },
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
