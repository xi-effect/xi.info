export type MainNavLinkT = {
  title: string;
  href: string;
  external?: boolean;
};

/** Пункты выпадающего меню «Возможности» */
export const subMenu = [
  {
    title: 'Расписание',
    href: '/calendar',
  },
  {
    title: 'Видеозвонки',
    href: '/calls',
  },
  {
    title: 'Онлайн-доска',
    href: '/whiteboard',
  },
  {
    title: 'Материалы',
    href: '/materials',
  },
  {
    title: 'Оплаты',
    href: '/payments',
  },
];

export const mainNavLinks: readonly MainNavLinkT[] = [
  { title: 'Тарифы', href: '/prices' },
  { title: 'Поддержка', href: 'https://t.me/sovlium_support_bot', external: true },
  { title: 'База знаний', href: 'https://support.sovlium.ru/', external: true },
  { title: 'О нас', href: '/about' },
];
