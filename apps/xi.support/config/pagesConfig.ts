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
      // { title: 'Создание', link: 'first' },
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
      // { title: 'Создание', link: 'first' },
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'work-begining',
    page: 'about-interface',
    anchors: [
      { title: 'Создание', link: 'first' },
      { title: 'Редактирование', link: 'second' },
      { title: 'Удаление', link: 'third' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
      // { title: 'Создание', link: 'first' },
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'work-begining',
    page: 'device-info',
    anchors: [
      { title: 'Создание', link: 'first' },
      { title: 'Редактирование', link: 'second' },
      { title: 'Удаление', link: 'third' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
      // { title: 'Создание', link: 'first' },
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
