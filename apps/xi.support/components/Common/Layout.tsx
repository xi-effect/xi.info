import { ReactNode } from 'react';
import { Footer } from 'pkg.landing.footer';

interface SectionLink {
  link: string;
  title: string;
}

interface Section {
  title: string;
  links: SectionLink[];
}

const sections: Section[] = [
  {
    title: 'Продукт',
    links: [
      { link: 'https://sovlium.ru/calendar', title: 'Расписание' },
      { link: 'https://sovlium.ru/calls', title: 'Видеозвонки' },
      { link: 'https://sovlium.ru/whiteboard', title: 'Онлайн-доска' },
      { link: 'https://sovlium.ru/materials', title: 'Материалы' },
      { link: 'https://sovlium.ru/payments', title: 'Оплаты' },
    ],
  },
  {
    title: 'Клиентам',
    links: [
      { link: 'https://sovlium.ru/prices', title: 'Тарифы' },
      { link: 'https://support.sovlium.ru/', title: 'Поддержка' },
      { link: 'https://t.me/sovlium_support_bot', title: 'Написать в Telegram' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { link: 'https://sovlium.ru/about', title: 'О нас' },
      { link: 'https://sovlium.ru/blog', title: 'Блог' },
      { link: 'https://sovlium.ru/legal/terms', title: 'Документы' },
      { link: 'https://vacancy.sovlium.ru/', title: 'Вакансии' },
    ],
  },
  {
    title: 'Социальные сети',
    links: [{ link: 'https://t.me/sovlium', title: 'Telegram' }],
  },
];

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <main className="w-screen">{children}</main>
    <Footer
      topContent={<></>}
      sections={sections}
      logoPath="/logofordark.svg"
      classNameFooter="bg-gray-100 rounded-t-[32px] xl:rounded-t-[64px]"
    />
  </>
);
