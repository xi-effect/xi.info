// import { ScrollSection } from 'components/main/ScrollSection';
import { FeaturesBlock, MessagesBlock, Telegram, Text } from 'components/main';
// import { StickyGsap } from 'components/main/StickyGSAP';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sovlium | приложение для репетиторов',
  description: 'Приложение для репетиторов и малого бизнеса',
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
