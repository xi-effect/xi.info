import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Условия использования | Sovlium',
  description: 'Условия использования платформы Sovlium для проведения онлайн-уроков.',
  openGraph: {
    title: 'Условия использования | Sovlium',
    description: 'Условия использования платформы Sovlium для проведения онлайн-уроков.',
    url: 'https://sovlium.ru/legal/terms',
    siteName: 'Sovlium',
    type: 'website',
  },
};

export default async function TermsPage() {
  const { default: TermsContent } = await import('../../../markdown/terms.mdx');

  return <TermsContent />;
}
