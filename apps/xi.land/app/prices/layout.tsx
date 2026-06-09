import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Тарифы Sovlium — платформа для репетиторов',
  description:
    'Сравните тарифы Sovlium: видеозвонки, онлайн-доска, расписание и контроль оплат. Выберите план под свой формат работы.',
  alternates: {
    canonical: '/prices',
  },
  openGraph: {
    title: 'Тарифы Sovlium — платформа для репетиторов',
    description: 'Сравните тарифы Sovlium: видеозвонки, онлайн-доска, расписание и контроль оплат.',
    url: 'https://sovlium.ru/prices',
    siteName: 'Sovlium',
    type: 'website',
  },
};

type PricesLayoutProps = {
  children: React.ReactNode;
};

export default function PricesLayout({ children }: PricesLayoutProps) {
  return children;
}
