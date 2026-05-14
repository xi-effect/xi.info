export type HeroFeatureIconIdT =
  | 'conference'
  | 'whiteboard'
  | 'calendar'
  | 'materials'
  | 'payments'
  | 'notifications'
  | 'rooms';

export type HeroFeatureT = {
  id: HeroFeatureIconIdT;
  label: string;
  pillClassName: string;
  labelClassName: string;
};

export type HeroParallaxLayerT = {
  src: string;
  alt: string;
  /** Натуральная ширина файла (для сохранения пропорций без crop) */
  width: number;
  /** Натуральная высота файла */
  height: number;
  /** Базовый множитель смещения в px при крайнем положении курсора в секции */
  depth: number;
  /** Лёгкий индивидуальный разброс (фиксированные коэффициенты, без runtime random) */
  depthMultiplier?: number;
  /** Позиция и ширина слоя в процентах от контейнера коллажа (`w-[…%]`, `top/left/…`) */
  className: string;
  /** Внутренняя обёртка — например `-translate-y-1/2` при якоре `top-1/2` у родителя */
  innerClassName?: string;
};

/** Общее усиление «притяжения» слоёв к курсору по секции hero */
export const HERO_PARALLAX_INTENSITY = 1.42;

export const HERO_PARALLAX_LAYERS: readonly HeroParallaxLayerT[] = [
  {
    src: '/assets/main/Hero/main-hero-timer.webp',
    alt: 'Таймер урока',
    width: 789,
    height: 142,
    depth: 24,
    depthMultiplier: 0.93,
    className: 'left-[3%] top-[5%] z-[11] w-[37.2%]',
  },
  {
    src: '/assets/main/Hero/main-hero-tutor.webp',
    alt: 'Курсор и окно преподавателя',
    width: 534,
    height: 186,
    depth: 16,
    depthMultiplier: 1.17,
    className: 'bottom-[6%] left-[10%] z-[12] w-[21%]',
  },
  {
    src: '/assets/main/Hero/main-hero-lesson-card.webp',
    alt: 'Карточка занятия',
    width: 426,
    height: 217,
    depth: 20,
    depthMultiplier: 0.88,
    className: 'right-[4%] top-1/2 z-[13] w-[33.12%]',
    innerClassName: '-translate-y-[calc(50%+64px)]',
  },
  {
    src: '/assets/main/Hero/main-hero-student.webp',
    alt: 'Курсор и окно ученика',
    width: 330,
    height: 186,
    depth: 26,
    depthMultiplier: 1.14,
    className: 'right-[11%] top-[14%] z-[14] w-[14.4%]',
  },
];

export const HERO_CONTENT = {
  title: 'Все инструменты репетитора в одной платформе',
  subtitle:
    'Легко проводите онлайн-занятия с компьютера, телефона или планшета. Рутину мы берём на себя',
  primaryButtonLabel: 'Попробовать бесплатно',
  primaryButtonHref: 'https://app.sovlium.ru/signup',
  heroImageSrc: '/assets/main/Hero/main-hero-1.webp',
  heroImageAlt: 'Интерфейс платформы Sovlium: видеозвонок с онлайн-доской и элементами расписания',

  features: [
    {
      id: 'conference',
      label: 'видеозвонки',
      pillClassName: 'bg-yellow-20',
      labelClassName: 'text-amber-900',
    },
    {
      id: 'whiteboard',
      label: 'онлайн-доски',
      pillClassName: 'bg-green-0',
      labelClassName: 'text-green-80',
    },
    {
      id: 'calendar',
      label: 'расписание',
      pillClassName: 'bg-pink-20',
      labelClassName: 'text-fuchsia-900',
    },
    {
      id: 'materials',
      label: 'хранение учебных материалов',
      pillClassName: 'bg-cyan-20',
      labelClassName: 'text-cyan-100',
    },
    {
      id: 'payments',
      label: 'контроль оплат',
      pillClassName: 'bg-red-0',
      labelClassName: 'text-red-80',
    },
    {
      id: 'notifications',
      label: 'автоматические напоминания о занятиях и оплате',
      pillClassName: 'bg-orange-0',
      labelClassName: 'text-orange-80',
    },
    {
      id: 'rooms',
      label: 'учебные кабинеты',
      pillClassName: 'bg-violet-20',
      labelClassName: 'text-violet-100',
    },
  ] satisfies readonly HeroFeatureT[],
} as const;
