// import { ScrollSection } from 'components/main/ScrollSection';
import { FeaturesBlock, MessagesBlock, Telegram, Text } from 'components/main';
// import { StickyGsap } from 'components/main/StickyGSAP';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Проводите уроки онлайн. Платформа для репетиторов sovlium',
  description:
    'Видеозвонки, онлайн-доски, расписание и контроль оплат. Делитесь знаниями с комфортом, а рутину оставьте нам. Попробуйте sovlium бесплатно.',
  openGraph: {
    title: 'Проводите уроки онлайн. Платформа для репетиторов sovlium',
    description:
      'Видеозвонки, онлайн-доски, расписание и контроль оплат. Делитесь знаниями с комфортом, а рутину оставьте нам. Попробуйте sovlium бесплатно.',
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

export default function MainPage() {
  return (
    <main>
      <Text
        className="text-balance"
        theme="dark"
        text="Переход в онлайн принёс репетиторам новые вызовы"
      />
      <MessagesBlock />
      <Text
        className="text-balance"
        theme="light"
        text="Поэтому мы создали Sovlium — платформу для репетиторов, которая помогает оптимизировать процессы"
      />
      <FeaturesBlock />
      <Telegram />
    </main>
  );
}
