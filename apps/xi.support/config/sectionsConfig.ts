export const sectionsConfig = [
  {
    title: 'Начало работы',
    pageUrl: 'work-beginning',
    icon: 'start-working.svg',
    links: [
      {
        pageTitle: 'Регистрация',
        pageUrl: 'регистрация',
        items: [
          {
            title: 'Регистрация',
            image: 'signup.png',
            link: 'регистрация',
          },
        ],
      },
      {
        pageTitle: 'Настройка профиля после регистрации',
        pageUrl: 'настройка-профиля-после-регистрации',
        items: [
          {
            title: 'Настроить профиль',
            image: 'setup_profile.png',
            link: 'настроить-профиль',
          },
          {
            title: 'Настроить уведомления',
            image: 'setup_notifications.png',
            link: 'настроить-уведомления',
          },
        ],
      },
      {
        pageTitle: 'Пригласить учеников',
        pageUrl: 'пригласить-учеников',
        items: [
          {
            title: 'Пригласить учеников',
            image: 'invite_students.png',
            description: '',
            link: 'пригласить-учеников',
          },
          {
            title: 'Индивидуальное приглашение',
            image: 'invite_individual.png',
            description: '',
            link: 'индивидуальное-приглашение',
          },
          {
            title: 'Создать группу',
            image: 'create_group.png',
            description: '',
            link: 'пригласить-учеников',
          },
          {
            title: 'Пригласить в группу',
            image: 'invite_group.png',
            description: '',
            link: 'приглашение-в-группу',
          },
        ],
      },
    ],
  },
  {
    title: 'Подготовка к занятию',
    pageUrl: 'prepare-for-lesson',
    links: [
      {
        pageTitle: 'Назначить занятие',
        pageUrl: 'назначить-занятие',
        items: [
          {
            title: 'Назначить занятие',
            image: '',
            link: 'назначить-занятие',
          },
        ],
      },
      {
        pageTitle: 'Подготовить материалы',
        pageUrl: 'подготовить-материалы',
        items: [
          {
            title: 'Подготовить материалы',
            image: '',
            link: 'подготовить-материалы',
          },
        ],
      },
      {
        pageTitle: 'Настроить напоминания',
        pageUrl: 'настроить-напоминания',
        items: [
          {
            title: 'Настроить напоминания',
            image: 'set_reminders.png',
            link: 'настроить-напоминания',
          },
        ],
      },
    ],
    icon: 'schedule.svg',
  },
  {
    title: 'Проведение занятия',
    pageUrl: 'conduct-lesson',
    icon: 'video.svg',
    links: [
      {
        pageTitle: 'Начать видеозвонок',
        pageUrl: 'начать-видеозвонок',
        items: [
          {
            title: 'Начать видеозвонок',
            image: 'begin_videocall.png',
            link: 'начать-видеозвонок',
          },
          {
            title: 'Онлайн-доска',
            image: 'online_board.png',
            link: 'онлайн-доска',
          },
        ],
      },
    ],
  },
  {
    title: 'Контроль оплат',
    pageUrl: 'control-payments',
    icon: 'settings.svg',
    links: [
      {
        pageTitle: 'Контролировать оплату',
        pageUrl: 'контролировать-оплату',
        items: [
          {
            title: 'Создать счёт',
            image: 'create_invoice.png',
            link: 'как-создать-счёт',
          },
          {
            title: 'Журнал оплат',
            image: 'payment_journal.png',
            link: 'журнал-оплат',
          },
          {
            title: 'Аналитика',
            image: 'analytics.png',
            link: 'аналитика',
          },
        ],
      },
    ],
  },
];
