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
  );
}
