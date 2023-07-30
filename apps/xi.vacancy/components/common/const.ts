export type ProfessionsT = keyof typeof professions;

export type ProfessionOptionsT = {
  id: string;
  date: string;
  grade: string;
  title: string;
  author: {
    tg: string;
    name: string;
    grade: string;
    src: string;
  };
};

type VacancyListT = {
  [key in ProfessionsT]: ProfessionOptionsT[];
};

export const professions = {
  design: 'Дизайн',
  product: 'Продукт',
  marketing: 'Маркетинг',
  development: 'Разработка',
};

export const vacancyList: VacancyListT = {
  development: [
    {
      author: {
        name: 'Игорь Букшев',
        tg: '@unknownproperty',
        grade: 'Frontend lead, co-founder',
        src: '/vacancy/unknownproperty.jpg',
      },
      date: '24 мая',
      grade: 'Junior',
      id: 'frontend-junior',
      title: 'Frontend разработчик',
    },
  ],
  design: [],
  product: [],
  marketing: [],
};

export const vacancyDescription = {
  development: {
    title: 'Разработка',
    for: 'разработчиков',
    paragraph:
      'В Xi.effect продуктовая разработка. Есть куча инженерных задач и технических вызовов для умного человека',
  },
  design: {
    title: 'Дизайн',
    for: 'дизайнеров',
    paragraph:
      'В Xi.effect продуктовая разработка. Есть множество интересных задач и вызовов для дизайнеров',
  },
  product: {
    title: 'Продукт',
    for: 'менеджеров',
    paragraph:
      'В Xi.effect продуктовая разработка. Нужно продумывать то, как будет развиваться продукт',
  },
  marketing: {
    title: 'Маркетинг',
    for: 'менеджеров',
    paragraph:
      'Xi.effect - продуктовая команда. Необходимо развивать общение с клиентами  позиционирование бренда',
  },
};
