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
    lastmod: '2026-08-19',
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
      'Выставляйте счета из кабинета, ученик получает уведомление, статусы видны в журнале. Деньги идут напрямую, платформа фиксирует оплату.',
    index: true,
    lastmod: '2026-08-19',
  },
  '/prices': {
    path: '/prices',
    title: 'Тарифы sovlium — бесплатно на бета-тесте',
    description:
      'Во время бета-тестирования все функции доступны бесплатно. После релиза останется бесплатный базовый тариф и платный PRO.',
    index: true,
    lastmod: '2026-08-19',
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
      'Условия использования, политика конфиденциальности, согласие на обработку персональных данных и согласие на рекламные сообщения платформы Sovlium.',
    index: true,
    lastmod: '2026-08-19',
  },
  '/legal/terms': {
    path: '/legal/terms',
    title: 'Условия использования | Sovlium',
    description: 'Условия использования платформы Sovlium для проведения онлайн-уроков.',
    index: true,
    lastmod: '2026-08-19',
  },
  '/legal/privacy': {
    path: '/legal/privacy',
    title: 'Политика конфиденциальности | Sovlium',
    description:
      'Политика конфиденциальности платформы Sovlium. Как мы собираем, используем и защищаем ваши персональные данные.',
    index: true,
    lastmod: '2026-08-19',
  },
  '/legal/consent': {
    path: '/legal/consent',
    title: 'Согласие на обработку персональных данных | Sovlium',
    description:
      'Согласие на обработку персональных данных платформы Sovlium в соответствии с российским законодательством.',
    index: true,
    lastmod: '2026-08-19',
  },
  '/legal/marketing-consent': {
    path: '/legal/marketing-consent',
    title: 'Согласие на рекламные сообщения | Sovlium',
    description: 'Согласие на получение рекламных и информационных сообщений о сервисе Sovlium.',
    index: true,
    lastmod: '2026-08-19',
  },
} as const satisfies Record<string, SeoPageConfigT>;

export type SeoPathT = keyof typeof SEO_PAGES;

export const getSeoPage = (path: SeoPathT): SeoPageConfigT => SEO_PAGES[path];

export const indexableSeoPages = (): SeoPageConfigT[] =>
  Object.values(SEO_PAGES).filter((page) => page.index);
