export type ProfessionsT = keyof typeof vacancyList;

export const vacancyList = {
  development: [
    {
      title: 'Frontend разработчик',
      author: '@unknownproperty',
      date: '24 мая',
    },
    {
      title: 'Backend разработчик',
      author: '@niqzart',
      date: '24 мая',
    },
    {
      title: 'Тестировщик',
      author: '@unknownproperty',
      date: '24 мая',
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
