export type TutorIdeaCardT = {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  bgClassName: string;
  badgeTextClassName: string;
};

export const TUTOR_IDEAS_TITLE = 'Собираем идеи от самих репетиторов';

export const TUTOR_IDEAS_SUBTITLE = 'Вот что добавили недавно:';

/** Для aria и подписей к карточкам */
export const TUTOR_IDEAS_TITLE_FULL = `${TUTOR_IDEAS_TITLE}. ${TUTOR_IDEAS_SUBTITLE}`;

export const TUTOR_IDEA_CARDS: readonly TutorIdeaCardT[] = [
  {
    id: 'pdf',
    title: 'Работа с PDF на доске',
    imageSrc: '/assets/main/Features/main-features-pdf.webp',
    imageAlt: 'Работа с PDF на доске: загрузка материалов в PDF на онлайн-доску',
    bgClassName: 'bg-red-600',
    badgeTextClassName: 'text-red-800',
  },
  {
    id: 'audio',
    title: 'Аудиофайлы на доске',
    imageSrc: '/assets/main/Features/main-features-audio.webp',
    imageAlt: 'Аудиофайлы на онлайн-доске',
    bgClassName: 'bg-brand-80',
    badgeTextClassName: 'text-brand-80',
  },
  {
    id: 'chat',
    title: 'Чат в видеозвонке',
    imageSrc: '/assets/main/Features/main-features-chat.webp',
    imageAlt: 'Чат во время видеозвонка',
    bgClassName: 'bg-amber-400',
    badgeTextClassName: 'text-amber-700',
  },
  {
    id: 'raise-hand',
    title: 'Кнопка «Поднять руку»',
    imageSrc: '/assets/main/Features/main-features-raise-hand.webp',
    imageAlt: 'Кнопка поднять руку в видеозвонке',
    bgClassName: 'bg-sky-300',
    badgeTextClassName: 'text-slate-600',
  },
  {
    id: 'frames',
    title: 'Фреймы',
    imageSrc: '/assets/main/Features/main-features-frames.webp',
    imageAlt: 'Фреймы на онлайн-доске',
    bgClassName: 'bg-lime-400',
    badgeTextClassName: 'text-lime-700',
  },
  {
    id: 'timer',
    title: 'Таймер',
    imageSrc: '/assets/main/Features/main-features-timer.webp',
    imageAlt: 'Таймер урока на доске',
    bgClassName: 'bg-fuchsia-500',
    badgeTextClassName: 'text-purple-800',
  },
];
