type Section = {
  title: string;
  description: string;
  pageUrl: string;
  icon: string;
};

const sharedTail: Section[] = [
  {
    title: 'Профиль и настройки',
    description: 'Имя, почта, уведомления, звук на занятии и технический отчёт',
    pageUrl: 'profile-settings',
    icon: 'chat.svg',
  },
  {
    title: 'Установка и помощь',
    description: 'Как открыть sovlium с устройства и куда написать, если что-то не открывается',
    pageUrl: 'install-and-help',
    icon: 'announcements.svg',
  },
  {
    title: 'Устранение неполадок',
    description: 'Нет видео или звука, не грузится файл, не пришло письмо, не открылся счёт',
    pageUrl: 'troubleshooting',
    icon: 'tests.svg',
  },
  {
    title: 'Технический отчёт',
    description: 'Как скопировать данные браузера и передать их в поддержку',
    pageUrl: 'profile-settings/support-tech-report',
    icon: 'report.svg',
  },
  {
    title: 'Очистка сохранённых данных',
    description: 'Как сбросить данные сайта в браузере и открыть актуальную версию страницы',
    pageUrl: 'install-and-help/clear-browser-cache',
    icon: 'settings.svg',
  },
];

export const tutorSections: Section[] = [
  {
    title: 'Начало работы',
    description: 'Регистрация, вход, почта и пароль',
    pageUrl: 'getting-started',
    icon: 'start-working.svg',
  },
  {
    title: 'Кабинеты',
    description: 'Список кабинетов, приглашение ученика и вкладки кабинета',
    pageUrl: 'classrooms',
    icon: 'team.svg',
  },
  {
    title: 'Расписание и занятия',
    description: 'Главная, расписание и назначение занятия',
    pageUrl: 'lessons-and-schedule',
    icon: 'schedule.svg',
  },
  {
    title: 'Доски и заметки',
    description: 'Где лежат доски и заметки и как открыть их из кабинета',
    pageUrl: 'board-and-notes',
    icon: 'assignments.svg',
  },
  {
    title: 'Видеозвонок',
    description: 'Кнопка «Начать занятие», устройства, экран и чат',
    pageUrl: 'video-lesson',
    icon: 'video.svg',
  },
  {
    title: 'Счета и оплаты',
    description: 'Как выставить счёт и отметить оплату',
    pageUrl: 'payments',
    icon: 'settings.svg',
  },
  ...sharedTail,
];

export const studentSections: Section[] = [
  {
    title: 'Начало работы',
    description: 'Регистрация, вход, почта и пароль',
    pageUrl: 'getting-started',
    icon: 'start-working.svg',
  },
  {
    title: 'Кабинеты',
    description: 'Как принять приглашение и что видно в кабинете',
    pageUrl: 'classrooms',
    icon: 'team.svg',
  },
  {
    title: 'Расписание и занятия',
    description: 'Где смотреть занятия, которые назначил репетитор',
    pageUrl: 'lessons-and-schedule',
    icon: 'schedule.svg',
  },
  {
    title: 'Доски и заметки',
    description: 'Где в кабинете лежат доски и заметки',
    pageUrl: 'board-and-notes',
    icon: 'assignments.svg',
  },
  {
    title: 'Видеозвонок',
    description: 'Как присоединиться к занятию и проверить камеру',
    pageUrl: 'video-lesson',
    icon: 'video.svg',
  },
  {
    title: 'Счета и оплаты',
    description: 'Где смотреть счета от репетитора',
    pageUrl: 'payments',
    icon: 'settings.svg',
  },
  ...sharedTail,
];

export function sectionsForRole(role: 'tutor' | 'student') {
  const sections = role === 'student' ? studentSections : tutorSections;
  return sections.map((section) => ({
    ...section,
    href: `/${role}/${section.pageUrl}`,
  }));
}
