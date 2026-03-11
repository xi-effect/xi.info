import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { Footer } from 'pkg.landing.footer';

const supportFooterSections = [
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

export default function Layout({ children }: LayoutProps<'/[[...slug]]'>) {
  return (
    <>
      <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
        {children}
      </DocsLayout>
      <Footer
        classNameFooter="bg-transparent"
        topContent={<></>}
        sections={supportFooterSections}
      />
    </>
  );
}
