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
    anchors: [{ title: 'Регистрация', link: 'signup' }],
    relatedLinks: [
      { title: 'Настроить профиль', link: 'welcome' },
      { title: 'Пригласить учеников', link: 'invite-students' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'work-beginning',
    page: 'welcome',
    anchors: [
      {
        title: 'Настроить профиль',
        link: 'welcome',
      },
    ],
    relatedLinks: [
      { title: 'Пригласить учеников', link: 'invite-students' },
      { title: 'Назначить занятие', link: 'create-lesson' },
    ],
    updateDate: '07.05.2024',
  },
  // work-beginning - invite-students
  {
    section: 'work-beginning',
    page: 'invite-students',
    anchors: [
      { title: 'Пригласить учеников', link: 'invite' },
      { title: 'Индивидуальные приглашения', link: 'individually' },
      { title: 'Приглашения в группу', link: 'group' },
    ],
    relatedLinks: [
      { title: 'Назначить занятие', link: 'create-lesson' },
      { title: 'Настроить напоминания', link: 'reminders' },
    ],
    updateDate: '07.05.2024',
  },
  // prepare-for-lesson
  {
    section: 'prepare-for-lesson',
    page: 'create-lesson',
    anchors: [{ title: 'Назначить занятие', link: 'create_lesson' }],
    relatedLinks: [
      { title: 'Подготовить материалы', link: 'materials' },
      { title: 'Настроить напоминания', link: 'reminders' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'prepare-for-lesson',
    page: 'materials',
    anchors: [{ title: 'Подготовить материалы', link: 'materials' }],
    relatedLinks: [
      { title: 'Назначить занятие', link: 'create-lesson' },
      { title: 'Настроить напоминания', link: 'reminders' },
    ],
    updateDate: '07.05.2024',
  },
  {
    section: 'prepare-for-lesson',
    page: 'set-reminders',
    anchors: [{ title: 'Настроить напоминания', link: 'reminders' }],
    relatedLinks: [{ title: 'Подготовить материалы', link: 'materials' }],
    updateDate: '07.05.2024',
  },
  // conduct-lesson
  {
    section: 'conduct-lesson',
    page: 'videocall',
    anchors: [
      { title: 'Начать видеозвонок', link: 'videocall' },
      { title: 'Онлайн-доска', link: 'board' },
    ],
    relatedLinks: [{ title: 'Контролировать оплату', link: 'analytics' }],
    updateDate: '07.05.2024',
  },
  // control-payments
  {
    section: 'control-payments',
    page: 'analytics',
    anchors: [
      { title: 'Контролировать оплату', link: 'сontrol_payments' },
      { title: 'Как создать счёт', link: 'invoices' },
      { title: 'Журнал оплат', link: 'jrnl' },
      { title: 'Аналитика', link: 'analytics' },
    ],
    relatedLinks: [
      { title: 'Назначить занятие', link: 'create-lesson' },
      { title: 'Пригласить учеников', link: 'invite-students' },
    ],
    updateDate: '07.05.2024',
  },
];
