import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | Sovlium',
  description:
    'Политика конфиденциальности платформы Sovlium. Как мы собираем, используем и защищаем ваши персональные данные.',
  openGraph: {
    title: 'Политика конфиденциальности | Sovlium',
    description:
      'Политика конфиденциальности платформы Sovlium. Как мы собираем, используем и защищаем ваши персональные данные.',
    url: 'https://sovlium.ru/legal/privacy',
    siteName: 'Sovlium',
    type: 'website',
  },
};

export default async function PrivacyPage() {
  const { default: PrivacyContent } = await import('../../../markdown/privacy.mdx');

  return <PrivacyContent />;
}
