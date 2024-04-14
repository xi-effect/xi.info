type PageConfigItemT = {
  section: string;
  page: string;
  updateDate: string;
  anchors: { title: string; link: string }[];
  relatedLinks: { title: string; link: string }[];
};

export const pagesConfig: PageConfigItemT[] = [
  {
    section: 'work-begining',
    page: 'signup',
    anchors: [
      { title: 'Регистрация', link: 'signup' },
      { title: 'Ошибки', link: 'errors' },
      { title: 'Такое имя пользователя уже занято', link: 'username-error' },
      { title: 'Аккаунт с такой почтой уже зарегистрирован', link: 'email-error' },
      { title: 'Такой пароль легко взломать', link: 'password-error' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'work-begining',
    page: 'signin',
    anchors: [
      { title: 'Вход в приложение', link: 'signin' },
      { title: 'Возможные проблемы', link: 'errors' },
      { title: 'Не удалось найти аккаунт', link: 'username-error' },
      { title: 'Неправильный пароль', link: 'password-error' },
      { title: 'Ошибка сервера', link: 'server-error' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'work-begining',
    page: 'about-interface',
    anchors: [
      { title: 'Обзор интерфейса', link: 'about-interface' },
      { title: 'Главное меню', link: 'main-menu' },
      { title: 'Меню сообщества', link: 'community-menu' },
      { title: 'Категории', link: 'categories' },
      { title: 'Каналы', link: 'channels' },
      { title: 'Настойки пользователя', link: 'user-settings' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'work-begining',
    page: 'signup-invite',
    anchors: [
      { title: 'Страница Регистрации', link: 'signup-invite' },
      { title: 'Сообщества', link: 'community' },
      { title: 'Приглашение не действительно', link: 'errors' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'work-begining',
    page: 'welcome',
    anchors: [
      {
        title: 'Профиль',
        link: 'profile',
      },
      {
        title: 'Создание сообщества',
        link: 'community-create',
      },
      {
        title: 'Присоединение к сообществу',
        link: 'community-invite',
      },
      {
        title: 'Окончание настройки профиля',
        link: 'final',
      },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'work-begining',
    page: 'device-info',
    anchors: [
      { title: 'Информация об устройствах', link: 'device-info' },
      { title: 'Использование с ноутбука или компьютера', link: 'laptop-pc-use' },
      { title: 'Установка приложения на ноутбук или компьютер', link: 'laptop-pc-install' },
      { title: 'Использование со cмартфона или планшета', link: 'mobile-use' },
      { title: 'Установка приложения на cмартфон или планшет', link: 'mobile-install' },
      {
        title: 'Политика устранения ошибок в зависимости от версии браузера',
        link: 'bug-fix-policy',
      },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'work-begining',
    page: 'password-recovery',
    anchors: [
      { title: 'Восстановление пароля', link: 'password-recovery' },
      { title: 'Не удалось найти аккаунт', link: 'username-error' },
      { title: 'Сброс пароля', link: 'password-reset' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  // account
  {
    section: 'account',
    page: 'user-settings',
    anchors: [
      { title: 'Создание', link: 'first' },
      // { title: 'Редактирование', link: 'second' },
      // { title: 'Удаление', link: 'third' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
      // { title: 'Создание', link: 'first' },
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'account',
    page: 'user-settings',
    anchors: [
      { title: 'Создание', link: 'first' },
      // { title: 'Редактирование', link: 'second' },
      // { title: 'Удаление', link: 'third' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
      // { title: 'Создание', link: 'first' },
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'account',
    page: 'where-i-can-find-user-settings',
    anchors: [
      { title: 'Создание', link: 'first' },
      // { title: 'Редактирование', link: 'second' },
      // { title: 'Удаление', link: 'third' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
      // { title: 'Создание', link: 'first' },
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'account',
    page: 'where-i-can-find-user-settings',
    anchors: [
      { title: 'Создание', link: 'first' },
      // { title: 'Редактирование', link: 'second' },
      // { title: 'Удаление', link: 'third' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
      // { title: 'Создание', link: 'first' },
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'account',
    page: 'how-change-email',
    anchors: [
      { title: 'Создание', link: 'first' },
      // { title: 'Редактирование', link: 'second' },
      // { title: 'Удаление', link: 'third' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
      // { title: 'Создание', link: 'first' },
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'account',
    page: 'how-change-email',
    anchors: [
      { title: 'Создание', link: 'first' },
      // { title: 'Редактирование', link: 'second' },
      // { title: 'Удаление', link: 'third' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
      // { title: 'Создание', link: 'first' },
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'community',
    page: 'how-change-email',
    anchors: [
      { title: 'Создание', link: 'first' },
      // { title: 'Редактирование', link: 'second' },
      // { title: 'Удаление', link: 'third' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
      // { title: 'Создание', link: 'first' },
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
];
