export type SeoPageConfigT = {
  path: string;
  title: string;
  description: string;
  index: boolean;
  follow?: boolean;
  /** Если отличается от SITE_URL + path */
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  /** YYYY-MM-DD, только если страница в sitemap */
  lastmod?: string;
};

export const SEO_PAGES = {
  '/': {
    path: '/',
    title: 'Проводите уроки онлайн. Платформа для репетиторов sovlium',
    description:
      'Видеозвонки, онлайн-доски, расписание и контроль оплат. Делитесь знаниями с комфортом, а рутину оставьте нам. Попробуйте sovlium бесплатно.',
    index: true,
    lastmod: '2026-08-28',
  },
  '/classrooms': {
    path: '/classrooms',
    title: 'Учебные кабинеты для репетиторов — sovlium',
    description:
      'Кабинет на ученика или группу: материалы, расписание, оплаты и кнопка «Начать занятие». Пригласите ученика по ссылке.',
    index: true,
    lastmod: '2026-08-19',
  },
  '/calendar': {
    path: '/calendar',
    title: 'Расписание занятий для репетиторов — sovlium',
    description:
      'Создавайте и переносите уроки из календаря или из кабинета. Ученик получит напоминание. В карточке занятия — материалы и кнопка «Начать».',
    index: true,
    lastmod: '2026-08-19',
  },
  '/calls': {
    path: '/calls',
    title: 'Видеозвонки для репетиторов — sovlium',
    description:
      'Урок из кабинета: проверка устройств, чат, рука, демонстрация экрана. Доску можно открыть, не завершая звонок.',
    index: true,
    lastmod: '2026-08-19',
  },
  '/whiteboard': {
    path: '/whiteboard',
    title: 'Онлайн-доска для репетиторов — sovlium',
    description:
      'Готовьте доску заранее: PDF, картинки, аудио, фреймы и таймер. Откройте её в видеоуроке — звонок не прервётся.',
    index: true,
    lastmod: '2026-08-19',
  },
  '/materials': {
    path: '/materials',
    title: 'Учебные материалы для репетиторов — sovlium',
    description:
      'Библиотека досок и заметок репетитора и то, что видит ученик в кабинете. Доступ: совместная работа, только репетитор или черновик.',
    index: true,
    lastmod: '2026-08-19',
  },
  '/payments': {
    path: '/payments',
    title: 'Контроль оплат для репетиторов — sovlium',
    description:
      'Выставляйте счета из кабинета, ученик получает уведомление, статусы видны в журнале. Перевод за занятия идёт напрямую, платформа фиксирует оплату.',
    index: true,
    lastmod: '2026-08-19',
  },
  '/prices': {
    path: '/prices',
    title: 'Тарифы sovlium',
    description:
      'Бесплатный тариф и тариф Про для репетиторов: кабинеты, хранилище, видеозвонки, домашние задания и другие возможности сервиса sovlium.',
    index: true,
    lastmod: '2026-08-28',
  },
  '/roadmap': {
    path: '/roadmap',
    title: 'План развития sovlium на 2026 год',
    description:
      'Предварительный план, как будет развиваться sovlium: расписание, материалы, релиз, тарифы, домашние задания и приложения.',
    index: true,
    lastmod: '2026-08-19',
  },
  '/about': {
    path: '/about',
    title: 'О нас — команда sovlium',
    description:
      'Независимая команда делает платформу sovlium в России. Для учеников она бесплатна и работает в браузере.',
    index: true,
    lastmod: '2026-08-19',
  },
  '/blog': {
    path: '/blog',
    title: 'Статьи и советы для репетиторов от sovlium',
    description: 'Делимся новостями, кейсами и лайфхаками. Раздел пока в работе.',
    index: false,
    follow: true,
  },
  '/docs': {
    path: '/docs',
    title: 'Документация sovlium переехала в базу знаний',
    description: 'Инструкции по работе с платформой теперь лежат в базе знаний sovlium.',
    canonical: 'https://support.sovlium.ru/',
    index: false,
    follow: true,
  },
  '/legal': {
    path: '/legal',
    title: 'Юридические документы | Sovlium',
    description:
      'Условия использования, оферта, оплата и возврат, политика конфиденциальности, согласия и реквизиты сервиса sovlium.',
    index: true,
    lastmod: '2026-09-01',
  },
  '/legal/terms': {
    path: '/legal/terms',
    title: 'Условия использования | Sovlium',
    description: 'Условия использования платформы Sovlium для проведения онлайн-уроков.',
    index: true,
    lastmod: '2026-09-01',
  },
  '/legal/offer': {
    path: '/legal/offer',
    title: 'Оферта на доступ к сервису sovlium',
    description:
      'Условия оплаты тарифа, предоставления доступа к сервису sovlium, отмены подписки и возврата.',
    index: true,
    lastmod: '2026-09-01',
  },
  '/legal/payment-refund': {
    path: '/legal/payment-refund',
    title: 'Оплата и возврат — sovlium',
    description:
      'Способы оплаты, порядок предоставления доступа к тарифу sovlium, отмена подписки и возврат.',
    index: true,
    lastmod: '2026-09-01',
  },
  '/legal/requisites': {
    path: '/legal/requisites',
    title: 'Реквизиты ИП — sovlium',
    description: 'Реквизиты индивидуального предпринимателя, оказывающего услуги сервиса sovlium.',
    index: true,
    lastmod: '2026-09-01',
  },
  '/legal/privacy': {
    path: '/legal/privacy',
    title: 'Политика конфиденциальности | Sovlium',
    description:
      'Политика конфиденциальности платформы Sovlium. Как мы собираем, используем и защищаем ваши персональные данные.',
    index: true,
    lastmod: '2026-09-01',
  },
  '/legal/consent': {
    path: '/legal/consent',
    title: 'Согласие на обработку персональных данных | Sovlium',
    description:
      'Согласие на обработку персональных данных платформы Sovlium в соответствии с российским законодательством.',
    index: true,
    lastmod: '2026-09-01',
  },
  '/legal/marketing-consent': {
    path: '/legal/marketing-consent',
    title: 'Согласие на рекламные сообщения | Sovlium',
    description: 'Согласие на получение рекламных и информационных сообщений о сервисе Sovlium.',
    index: true,
    lastmod: '2026-08-28',
  },
} as const satisfies Record<string, SeoPageConfigT>;

export type SeoPathT = keyof typeof SEO_PAGES;

export const getSeoPage = (path: SeoPathT): SeoPageConfigT => SEO_PAGES[path];

export const indexableSeoPages = (): SeoPageConfigT[] =>
  Object.values(SEO_PAGES).filter((page) => page.index);
