type PageConfigItemT = {
  section: string;
  page: string;
  updateDate: string;
  anchors: { title: string; link: string }[];
  relatedLinks: { title: string; link: string }[];
};

export const pagesConfig: PageConfigItemT[] = [
  // work-begining
  {
    section: 'work-beginning',
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
    section: 'work-beginning',
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
    section: 'work-beginning',
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
    section: 'work-beginning',
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
    section: 'work-beginning',
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
    section: 'work-beginning',
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
    section: 'work-beginning',
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
  {
    section: 'work-beginning',
    page: 'nickname',
    anchors: [
      { title: 'Что такое имя пользователя?', link: 'nickname' },
      { title: 'Как изменить имя пользователя?', link: 'change-nickname' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '18.07.2024',
  },
  {
    section: 'work-beginning',
    page: 'username',
    anchors: [
      { title: 'Что такое отображаемое имя?', link: 'username' },
      { title: 'Как изменить отображаемое имя?', link: 'change-username' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '18.07.2024',
  },
  // account
  {
    section: 'account',
    page: 'user-settings',
    anchors: [
      { title: 'Где найти настройки аккаунта пользователя?', link: 'user-settings' },
      { title: 'Вкладка «Главная»', link: 'main' },
      { title: 'Личные данные', link: 'personal-data' },
      { title: 'Персонализация', link: 'personalization' },
      { title: 'Безопасность', link: 'security' },
      { title: 'Звук и видео', link: 'sound-video' },
      { title: 'Выйти', link: 'logout' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '18.07.2024',
  },
  {
    section: 'account',
    page: 'profile-photo-settings',
    anchors: [{ title: 'Как редактировать аватар пользователя?', link: 'profile-photo-settings' }],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'account',
    page: 'delete-account',
    anchors: [{ title: 'Как удалить аккаунт?', link: 'delete-account' }],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'account',
    page: 'change-email',
    anchors: [{ title: 'Как поменять почту, привязанную к аккаунту?', link: 'change-email' }],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'account',
    page: 'confirm-email',
    anchors: [
      { title: 'Для чего нужно подтверждать адрес электронной почты?', link: 'why-confirm-email' },
      { title: 'Как подтвердить адрес электронной почты?', link: 'confirm-email' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'account',
    page: 'change-password',
    anchors: [{ title: 'Как поменять пароль?', link: 'change-password' }],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '07.05.2024',
  },
  // community
  {
    section: 'communities',
    page: 'add-community',
    anchors: [{ title: 'Как создать сообщество?', link: 'add-community' }],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '03.05.2024',
  },
  {
    section: 'communities',
    page: 'community-settings',
    anchors: [
      { title: 'Как настроить сообщество?', link: 'community-settings' },
      { title: 'Обзор', link: 'review' },
      { title: 'Роли', link: 'roles' },
      { title: 'История активности', link: 'activity-history' },
      { title: 'Участники', link: 'members' },
      { title: 'Классы', link: 'classes' },
      { title: 'Пример настроенного сообщества', link: 'community-home' },
      { title: 'Удалить сообщество', link: 'delete-community' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '18.07.2024',
  },
  {
    section: 'communities',
    page: 'category',
    anchors: [
      { title: 'Как создать категорию?', link: 'add-category' },
      { title: 'Настройки', link: 'category-settings' },
      { title: 'Классы', link: 'classes' },
      { title: 'Участники', link: 'category-members' },
      { title: 'Как добавить каналы в категорию?', link: 'category-add-channel' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '18.07.2024',
  },
  {
    section: 'communities',
    page: 'invitation',
    anchors: [
      { title: 'Как создать ссылку-приглашение?', link: 'add-invitation' },
      { title: 'Как стать участником сообщества по ссылке-приглашению?', link: 'join-community' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '18.07.2024',
  },
  // videoconference
  {
    section: 'videoconference',
    page: 'about',
    anchors: [
      { title: 'Что такое сервис видеоконференций?', link: 'about' },
      { title: 'Основные функции сервиса видеоконференций', link: 'functionality' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '08.05.2024',
  },
  {
    section: 'videoconference',
    page: 'join-videoconference',
    anchors: [{ title: 'Как присоединиться к видеоконференции?', link: 'join-videoconference' }],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '08.05.2024',
  },
  // test
  {
    section: 'tests-and-tasks',
    page: 'add-test',
    anchors: [
      { title: 'Как создать тест?', link: 'add-test' },
      { title: 'Создание теста', link: 'add-new-test' },
      { title: 'Выбор ответа на вопрос', link: 'questions' },
      { title: 'Настройки', link: 'settings' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '18.07.2024',
  },
  {
    section: 'tests-and-tasks',
    page: 'add-task',
    anchors: [
      { title: 'Как создать задание?', link: 'add-task' },
      { title: 'Настройки', link: 'settings' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '18.07.2024',
  },
  {
    section: 'tests-and-tasks',
    page: 'edit',
    anchors: [{ title: 'Как редактировать задание/тест?', link: 'edit' }],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '19.05.2024',
  },
  {
    section: 'tests-and-tasks',
    page: 'evaluation-system',
    anchors: [
      { title: 'Что такое Модель оценивания?', link: 'evaluation-system' },
      { title: 'Отметки', link: 'grades' },
    ],
    relatedLinks: [
      // { title: 'Создание', link: 'first' },
    ],
    updateDate: '19.05.2024',
  },
];
