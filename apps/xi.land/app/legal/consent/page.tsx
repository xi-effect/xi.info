import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Согласие на обработку персональных данных | Sovlium',
  description:
    'Согласие на обработку персональных данных платформы Sovlium в соответствии с российским законодательством.',
  openGraph: {
    title: 'Согласие на обработку персональных данных | Sovlium',
    description:
      'Согласие на обработку персональных данных платформы Sovlium в соответствии с российским законодательством.',
    url: 'https://sovlium.ru/legal/consent',
    siteName: 'Sovlium',
    type: 'website',
  },
};

export default async function ConsentPage() {
  const { default: ConsentContent } = await import('../../../markdown/consent.mdx');

  return <ConsentContent />;
}
