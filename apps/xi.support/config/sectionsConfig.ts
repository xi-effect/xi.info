export const sectionsConfig = [
  {
    title: 'Начало работы',
    links: [
      {
        pageTitle: 'Регистрация',
        pageUrl: 'signup',
        items: [
          {
            title: 'Страница Регистрации',
            image: 'signup-1.png',
            width: 316,
            height: 126,
            description: '',
            link: 'signup',
          },
          {
            title: 'Возможные ошибки',
            image: 'signup-2.png',
            width: 316,
            height: 126,
            description: '',
            link: 'errors',
          },
        ],
      },
      {
        pageTitle: 'Регистрация по ссылке-приглашению',
        pageUrl: 'signup-invite',
        items: [
          {
            title: 'Страница Регистрации',
            image: 'signup-invite-1.png',
            width: 250,
            height: 100,
            description: '',
            link: 'signup-invite',
          },
          {
            title: 'Сообщества',
            image: 'signup-invite-2.png',
            width: 250,
            height: 100,
            description: '',
            link: 'community',
          },
          {
            title: 'Приглашение не действительно',
            image: 'signup-invite-3.png',
            width: 250,
            height: 100,
            description: '',
            link: 'errors',
          },
        ],
      },
      {
        pageTitle: 'Настройка профиля после регистрации',
        pageUrl: 'welcome',
        items: [
          {
            title: 'Профиль',
            image: 'welcome-1.png',
            width: 250,
            height: 100,
            description: '',
            link: 'profile',
          },
          {
            title: 'Создание сообщества',
            image: 'welcome-2.png',
            width: 250,
            height: 100,
            description: '',
            link: 'add-community',
          },
          {
            title: 'Присоединение к сообществу',
            image: 'welcome-3.png',
            width: 250,
            height: 100,
            description: '',
            link: 'community-invite',
          },
          {
            title: 'Окончание настройки профиля',
            image: 'welcome-4.png',
            width: 250,
            height: 100,
            description: '',
            link: 'final',
          },
        ],
      },
      // {
      //   pageTitle: 'Вход',
      //   pageUrl: 'signin',
      //   items: [
      //     {
      //       title: 'Страница Входа',
      //       image: 'signin-1.png',
      //       width: 316,
      //       height: 126,
      //       description: '',
      //       link: '',
      //     },
      //     {
      //       title: 'Возможные ошибки',
      //       image: 'signin-2.png',
      //       width: 316,
      //       height: 126,
      //       description: '',
      //       link: 'errors',
      //     },
      //     {
      //       title: 'Не удалось найти аккаунт',
      //       image: 'signin-3.png',
      //       width: 316,
      //       height: 126,
      //       description: '',
      //       link: 'username-error',
      //     },
      //     {
      //       title: 'Неправильный пароль',
      //       image: 'signin-4.png',
      //       width: 316,
      //       height: 126,
      //       description: '',
      //       link: 'password-error',
      //     },
      //     {
      //       title: 'Ошибка сервера',
      //       image: 'signin-5.png',
      //       width: 316,
      //       height: 126,
      //       description: '',
      //       link: 'server-error',
      //     },
      //   ],
      // },
      // {
      //   pageTitle: 'Восстановление пароля',
      //   pageUrl: 'password-recovery',
      //   items: [
      //     {
      //       title: 'Восстановление пароля',
      //       image: 'password-recovery-1.png',
      //       width: 316,
      //       height: 126,
      //       description: '',
      //       link: 'password-recovery',
      //     },
      //     {
      //       title: 'Не удалось найти аккаунт',
      //       image: 'password-recovery-2.png',
      //       width: 316,
      //       height: 126,
      //       description: '',
      //       link: 'username-error',
      //     },
      //     {
      //       title: 'Сброс пароля',
      //       image: 'password-recovery-3.png',
      //       width: 316,
      //       height: 126,
      //       description: '',
      //       link: 'password-reset',
      //     },
      //   ],
      // },
      // {
      //   pageTitle: 'Обзор интерфейса',
      //   pageUrl: 'about-interface',
      //   items: [
      //     {
      //       title: 'Обзор интерфейса',
      //       image: 'about-interface-1.png',
      //       width: 400,
      //       height: 200,
      //       description: '',
      //       link: 'about-interface',
      //     },
      //     {
      //       title: 'Главное меню',
      //       image: 'about-interface-2.png',
      //       width: 320,
      //       height: 200,
      //       description: '',
      //       link: 'main-menu',
      //     },
      //     {
      //       title: 'Меню сообщества',
      //       image: 'about-interface-3.png',
      //       width: 170,
      //       height: 185,
      //       description: '',
      //       link: 'community-menu',
      //     },
      //     {
      //       title: 'Категории',
      //       image: 'about-interface-4.png',
      //       width: 180,
      //       height: 210,
      //       description: '',
      //       link: 'categories',
      //     },
      //     {
      //       title: 'Каналы',
      //       image: 'about-interface-5.png',
      //       width: 188,
      //       height: 40,
      //       description: '',
      //       link: 'channels',
      //     },
      //     {
      //       title: 'Настойки пользователя',
      //       image: 'about-interface-6.png',
      //       width: 280,
      //       height: 90,
      //       description: '',
      //       link: 'user-settings',
      //     },
      //   ],
      // },
      // {
      //   pageTitle: 'С каких устройств можно пользоваться платформой?',
      //   pageUrl: 'device-info',
      //   items: [
      //     {
      //       title: 'Информация об устройствах',
      //       image: 'device-info-1.png',
      //       width: 210,
      //       height: 140,
      //       description: '',
      //       link: 'device-info',
      //     },
      //     {
      //       title: 'Использование с ноутбука или компьютера',
      //       image: 'device-info-2.png',
      //       width: 210,
      //       height: 140,
      //       description: '',
      //       link: 'laptop-pc-use',
      //     },
      //     {
      //       title: 'Установка приложения на ноутбук или компьютер',
      //       image: 'device-info-3.png',
      //       width: 750,
      //       height: 200,
      //       description: '',
      //       link: 'laptop-pc-install',
      //     },
      //     {
      //       title: 'Использование со cмартфона или планшета',
      //       image: 'device-info-4.png',
      //       width: 100,
      //       height: 190,
      //       description: '',
      //       link: 'mobile-use',
      //     },
      //     {
      //       title: 'Установка приложения на cмартфон или планшет',
      //       image: 'device-info-5.png',
      //       width: 100,
      //       height: 190,
      //       description: '',
      //       link: 'mobile-install',
      //     },
      //     {
      //       title: 'Политика устранения ошибок в зависимости от версии браузера',
      //       image: 'device-info-6.png',
      //       width: 250,
      //       height: 100,
      //       description: '',
      //       link: 'bug-fix-policy',
      //     },
      //   ],
      // },
    ],
    sectionName: 'work-begining',
    icon: 'start-working.svg',
  },
  {
    title: 'Аккаунт',
    links: [
      {
        pageTitle: 'Настройка профиля пользователя',
        pageUrl: 'user-settings',
        items: [
          {
            title: 'Настройка профиля',
            image: 'signup-1.png',
            width: 316,
            height: 126,
            description: '',
            link: 'user-settings',
          },
          {
            title: 'Личные данные',
            image: 'signup-1.png',
            width: 316,
            height: 126,
            description: '',
            link: 'personal-data',
          },
          {
            title: 'Персонализация',
            image: 'signup-1.png',
            width: 316,
            height: 126,
            description: '',
            link: 'personalization',
          },
          {
            title: 'Безопасность',
            image: 'signup-1.png',
            width: 316,
            height: 126,
            description: '',
            link: 'security',
          },
          {
            title: 'Звук и видео',
            image: 'signup-1.png',
            width: 316,
            height: 126,
            description: '',
            link: 'sound-video',
          },
        ],
      },
      {
        pageTitle: 'Редактирование аватара пользователя',
        pageUrl: 'profile-photo-settings',
        items: [
          {
            title: 'Как редактировать аватар пользователя?',
            image: 'signup-1.png',
            width: 316,
            height: 126,
            description: '',
            link: 'profile-photo-settings',
          },
        ],
      },
      {
        pageTitle: 'Изменение адреса электронной почты',
        pageUrl: 'change-email',
        items: [
          {
            title: 'Как поменять почту, привязанную к аккаунту?',
            image: 'signup-1.png',
            width: 316,
            height: 126,
            description: '',
            link: 'change-email',
          },
        ],
      },
      {
        pageTitle: 'Подтверждение адреса электронной почты',
        pageUrl: 'confirm-email',
        items: [
          {
            title: 'Как поменять почту, привязанную к аккаунту?',
            image: 'signup-1.png',
            width: 316,
            height: 126,
            description: '',
            link: 'confirm-email',
          },
        ],
      },
      {
        pageTitle: 'Смена пароля',
        pageUrl: 'change-password',
        items: [
          {
            title: 'Как поменять пароль?',
            image: 'signup-1.png',
            width: 316,
            height: 126,
            description: '',
            link: 'change-password',
          },
        ],
      },
      {
        pageTitle: 'Удаление аккаунта',
        pageUrl: 'delete-account',
        items: [
          {
            title: 'Как удалить аккаунт?',
            image: 'signup-1.png',
            width: 316,
            height: 126,
            description: '',
            link: 'delete-account',
          },
        ],
      },
    ],
    sectionName: 'account',
    icon: 'settings.svg',
  },
  {
    title: 'Сообщества',
    links: [
      {
        pageTitle: 'Создание сообщества',
        pageUrl: 'add-community',
        items: [
          {
            title: 'Как создать сообщество?',
            image: 'add-community-cover.png',
            width: 316,
            height: 126,
            description: '',
            link: 'add-community',
          },
        ],
      },
      {
        pageTitle: 'Настройка сообщества',
        pageUrl: 'community-settings',
        items: [
          {
            title: 'Как настроить сообщество?',
            image: 'communities-settings-cover.png',
            width: 316,
            height: 126,
            description: '',
            link: 'community-settings',
          },
          {
            title: 'Роли',
            image: 'communities-roles-cover.png',
            width: 316,
            height: 126,
            description: '',
            link: 'roles',
          },
          {
            title: 'История активности',
            image: 'communities-activity-history-cover.png',
            width: 316,
            height: 126,
            description: '',
            link: 'activity-history',
          },
          {
            title: 'Участники',
            image: 'community-members-cover.png',
            width: 316,
            height: 126,
            description: '',
            link: 'members',
          },
          {
            title: 'Классы',
            image: 'communities-classes-cover.png',
            width: 316,
            height: 126,
            description: '',
            link: 'classes',
          },
          {
            title: 'Категории',
            image: 'communities-categories-cover.png',
            width: 316,
            height: 126,
            description: '',
            link: 'categories',
          },
          {
            title: 'Приглашения',
            image: 'communities-invitations-cover.png',
            width: 316,
            height: 126,
            description: '',
            link: 'invitations',
          },
          {
            title: 'Удалить сообщество',
            image: 'delete-community-cover.png',
            width: 316,
            height: 126,
            description: '',
            link: 'delete-community',
          },
        ],
      },
    ],
    sectionName: 'communities',
    icon: 'settings.svg',
  },
  // {
  //   title: 'Задания',
  //   links: [
  //     {
  //       pageTitle: 'Создание',
  //       pageUrl: 'first',
  //       items: [
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //       ],
  //     },
  //     {
  //       pageTitle: 'Редактирование',
  //       pageUrl: 'second',
  //       items: [
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //       ],
  //     },
  //     {
  //       pageTitle: 'Удаление',
  //       pageUrl: 'third',
  //       items: [
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //       ],
  //     },
  //   ],
  //   sectionName: 'tasks',
  //   icon: 'assignments.svg',
  // },
  // {
  //   title: 'Тесты',
  //   links: [
  //     {
  //       pageTitle: 'Создание',
  //       pageUrl: 'first',
  //       items: [
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //       ],
  //     },
  //     {
  //       pageTitle: 'Редактирование',
  //       pageUrl: 'second',
  //       items: [
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //       ],
  //     },
  //     {
  //       pageTitle: 'Удаление',
  //       pageUrl: 'third',
  //       items: [
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //       ],
  //     },
  //   ],
  //   sectionName: 'tests',
  //   icon: 'tests.svg',
  // },
  // {
  //   title: 'Чат',
  //   links: [
  //     {
  //       pageTitle: 'Создание',
  //       pageUrl: 'first',
  //       items: [
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //       ],
  //     },
  //     {
  //       pageTitle: 'Редактирование',
  //       pageUrl: 'second',
  //       items: [
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //       ],
  //     },
  //     {
  //       pageTitle: 'Удаление',
  //       pageUrl: 'third',
  //       items: [
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //       ],
  //     },
  //   ],
  //   sectionName: 'chats',
  //   icon: 'chat.svg',
  // },
  {
    title: 'Видеоконференции',
    links: [
      {
        pageTitle: 'О видеоконференциях',
        pageUrl: 'about',
        items: [
          {
            title: 'Что такое сервис видеоконференций?',
            image: 'signup-1.png',
            width: 316,
            height: 126,
            description: '',
            link: 'about',
          },
          {
            title: 'Основные функции сервиса видеоконференций',
            image: 'signup-1.png',
            width: 316,
            height: 126,
            description: '',
            link: 'functionality',
          },
        ],
      },
      {
        pageTitle: 'Присоединиться к видеоконференции',
        pageUrl: 'join-videoconference',
        items: [
          {
            title: 'Как присоединиться к видеоконференции?',
            image: 'signup-1.png',
            width: 316,
            height: 126,
            description: '',
            link: 'join-videoconference',
          },
        ],
      },
    ],
    sectionName: 'videoconference',
    icon: 'video.svg',
  },
  // {
  //   title: 'Объявления',
  //   links: [
  //     {
  //       pageTitle: 'Создание',
  //       pageUrl: 'first',
  //       items: [
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //       ],
  //     },
  //     {
  //       pageTitle: 'Редактирование',
  //       pageUrl: 'second',
  //       items: [
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //       ],
  //     },
  //     {
  //       pageTitle: 'Удаление',
  //       pageUrl: 'third',
  //       items: [
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //       ],
  //     },
  //   ],
  //   sectionName: 'announcements',
  //   icon: 'announcements.svg',
  // },
  // {
  //   title: 'Расписание',
  //   links: [
  //     {
  //       pageTitle: 'Создание',
  //       pageUrl: 'first',
  //       items: [
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //       ],
  //     },
  //     {
  //       pageTitle: 'Редактирование',
  //       pageUrl: 'second',
  //       items: [
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //       ],
  //     },
  //     {
  //       pageTitle: 'Удаление',
  //       pageUrl: 'third',
  //       items: [
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //         {
  //           title: 'Что такое Xi.effect',
  //           image: '',
  //           description: 'Пара слов о  образовательной платформе',
  //           link: '',
  //         },
  //       ],
  //     },
  //   ],
  //   sectionName: 'schedule',
  //   icon: 'schedule.svg',
  // },
];
