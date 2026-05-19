import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Согласие на рекламные сообщения | Sovlium',
  description: 'Согласие на получение рекламных и информационных сообщений о сервисе Sovlium.',
  openGraph: {
    title: 'Согласие на рекламные сообщения | Sovlium',
    description: 'Согласие на получение рекламных и информационных сообщений о сервисе Sovlium.',
    url: 'https://sovlium.ru/legal/marketing-consent',
    siteName: 'Sovlium',
    type: 'website',
  },
};

export default async function MarketingConsentPage() {
  const { default: MarketingConsentContent } =
    await import('../../../markdown/marketing-consent.mdx');

  return <MarketingConsentContent />;
}
