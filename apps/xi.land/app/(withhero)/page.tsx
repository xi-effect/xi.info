// import { ScrollSection } from 'components/main/ScrollSection';
import { FeaturesBlock, Telegram, Text, Faq } from 'components/main';
// import { StickyGsap } from 'components/main/StickyGSAP';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Проводите уроки онлайн. Платформа для репетиторов sovlium',
  description:
    'Видеозвонки, онлайн-доски, расписание и контроль оплат. Делитесь знаниями с комфортом, а рутину оставьте нам. Попробуйте sovlium бесплатно.',
  keywords: [
    'онлайн уроки',
    'платформа для репетиторов',
    'видеозвонки',
    'онлайн доска',
    'расписание уроков',
    'контроль оплат',
    'дистанционное обучение',
    'репетиторство онлайн',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Проводите уроки онлайн. Платформа для репетиторов sovlium',
    description:
      'Видеозвонки, онлайн-доски, расписание и контроль оплат. Делитесь знаниями с комфортом, а рутину оставьте нам. Попробуйте sovlium бесплатно.',
    url: 'https://sovlium.ru',
    siteName: 'Sovlium',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://sovlium.ru/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Sovlium - Платформа для репетиторов',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Проводите уроки онлайн. Платформа для репетиторов sovlium',
    description:
      'Видеозвонки, онлайн-доски, расписание и контроль оплат. Делитесь знаниями с комфортом, а рутину оставьте нам.',
    images: ['https://sovlium.ru/web-app-manifest-512x512.png'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Sovlium',
  description:
    'Платформа для репетиторов с видеозвонками, онлайн-досками, расписанием и контролем оплат',
  url: 'https://sovlium.ru',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'RUB',
    description: 'Бесплатная пробная версия',
  },
  provider: {
    '@type': 'Organization',
    name: 'Sovlium',
    url: 'https://sovlium.ru',
  },
  featureList: [
    'Видеозвонки',
    'Онлайн-доски',
    'Расписание уроков',
    'Контроль оплат',
    'Цифровая библиотека материалов',
  ],
  screenshot: 'https://sovlium.ru/web-app-manifest-512x512.png',
};

export default function MainPage() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Text
          className="text-balance text-center"
          theme="light"
          text="Мы создали sovlium — платформу для репетиторов, которая помогает оптимизировать процессы"
        />
        <FeaturesBlock />
        <Faq />
        <Telegram />
        <section className="sr-only">
          <h2>Расписание всегда под контролем</h2>
          <p>Планируйте работу на день, неделю, месяц и год вперёд вместе с sovlium</p>

          <h2>Видеозвонки, которые не хочется заканчивать</h2>
          <p>Ваш идеальный цифровой класс. Слушайте. Показывайте. Объясняйте. Просто и быстро</p>

          <h2>Бесконечный холст для ваших идей</h2>
          <p>Готовьте уроки заранее или рисуйте на доске прямо во время видеозвонка</p>

          <h2>Собственная цифровая библиотека</h2>
          <p>Одна платформа вместо десяти сервисов: храните все материалы в sovlium</p>

          <h2>Наглядная статистика заработка</h2>
          <p>Больше не нужно записывать каждую оплату отдельно. Sovlium подсчитает всё за вас</p>

          <h2>Работа с компьютера, телефона и планшета</h2>
          <p>Дома, в парке или на пляже — проводите уроки там, где удобно именно вам</p>
        </section>
      </main>
    </>
  );
}
