export type ProfessionsT = keyof typeof professions;

export type ProfessionOptionsT = {
  label: string;
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

export const professions = {
  design: {
    label: 'Дизайн',
    colors: ['bg-green-80', 'text-green-80'],
  },
  product: {
    label: 'Продукт',
    colors: ['bg-red-80', 'text-red-80'],
  },
  marketing: {
    label: 'Маркетинг',
    colors: ['bg-orange-80', 'text-orange-80'],
  },
  development: {
    label: 'Разработка',
    colors: ['bg-brand-80', 'text-brand-80'],
  },
};

export const vacancyList: ProfessionOptionsT[] = [
  {
    label: 'Разработка',
    author: {
      name: 'Игорь',
      tg: '@unknownproperty',
      grade: 'Frontend Lead, Сo-Founder',
      src: '/vacancy/unknownproperty.jpg',
    },
    date: '27 апреля',
    grade: 'Junior, Middle',
    id: 'development-frontend',
    title: 'Frontend разработчик',
  },
  {
    label: 'Разработка',
    author: {
      name: 'Николай',
      tg: '@niqzart',
      grade: 'Backend Lead, Сo-Founder',
      src: '/vacancy/niqzart.jpg',
    },
    date: '26 апреля',
    grade: 'Junior, Middle',
    id: 'development-backend',
    title: 'Backend разработчик',
  },
  {
    label: 'Дизайн',
    author: {
      name: 'Игорь',
      tg: '@unknownproperty',
      grade: 'CEO, Сo-Founder',
      src: '/vacancy/unknownproperty.jpg',
    },
    date: '30 апреля',
    grade: 'Junior, Middle',
    id: 'design-graphic',
    title: 'Графический дизайнер',
  },
  {
    label: 'Product manager',
    author: {
      name: 'Игорь',
      tg: '@unknownproperty',
      grade: 'CEO, Сo-Founder',
      src: '/vacancy/unknownproperty.jpg',
    },
    date: '29 апреля',
    grade: 'Junior, Middle, Senior',
    id: 'product-pm',
    title: 'Product manager',
  },
  {
    label: 'SMM',
    author: {
      name: 'Игорь',
      tg: '@unknownproperty',
      grade: 'CEO, Сo-founder',
      src: '/vacancy/unknownproperty.jpg',
    },
    date: '28 апреля',
    grade: 'Intern, Junior',
    id: 'marketing-smm',
    title: 'SMM-specialist',
  },
  {
    label: 'Marketing',
    author: {
      name: 'Игорь',
      tg: '@unknownproperty',
      grade: 'CEO, Сo-Founder',
      src: '/vacancy/unknownproperty.jpg',
    },
    date: '28 апреля',
    grade: 'Intern, Junior',
    id: 'marketing-marketing',
    title: 'Marketing-specialist',
  },
  {
    label: 'Copywriter/Editor',
    author: {
      name: 'Игорь',
      tg: '@unknownproperty',
      grade: 'CEO, Сo-Founder',
      src: '/vacancy/unknownproperty.jpg',
    },
    date: '28 апреля',
    grade: 'Intern, Junior',
    id: 'marketing-copywriter-editor',
    title: 'Copywriter/Editor',
  },
];

export const vacancyDescription = {
  development: {
    title: 'Разработка',
    for: 'разработчиков',
    paragraph:
      'В xi.effect продуктовая разработка. Есть куча инженерных задач и технических вызовов для умного человека',
  },
  design: {
    title: 'Дизайн',
    for: 'дизайнеров',
    paragraph:
      'В xi.effect продуктовая разработка. Есть множество интересных задач и вызовов для дизайнеров',
  },
  product: {
    title: 'Продукт',
    for: 'менеджеров',
    paragraph:
      'В xi.effect продуктовая разработка. Нужно продумывать то, как будет развиваться продукт',
  },
  marketing: {
    title: 'Маркетинг',
    for: 'менеджеров',
    paragraph:
      'xi.effect - продуктовая команда. Необходимо развивать общение с клиентами и позиционирование бренда',
  },
};
