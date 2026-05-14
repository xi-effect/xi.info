export type HeroCardT = {
  id: number;
  title: string;
  image: string;
};

export const HERO_CONTENT = {
  title: 'Учите, рутину берем на себя',
  subtitle: 'Все что нужно репетитору - на одной платформе',
  secondaryButtonLabel: 'Подробнее о возможностях',
  primaryButtonLabel: 'Попробовать бесплатно',

  cards: [
    {
      id: 1,
      title: 'видеозвонки',
      image: '/assets/main/Hero/videocalls.png',
    },
    {
      id: 2,
      title: 'автоматические напоминания',
      image: '/assets/main/Hero/reminders.png',
    },
    {
      id: 3,
      title: 'онлайн-доски',
      image: '/assets/main/Hero/whiteboard.png',
    },
    {
      id: 4,
      title: 'расписание',
      image: '/assets/main/Hero/calendar.png',
    },
  ] satisfies readonly HeroCardT[],
} as const;
