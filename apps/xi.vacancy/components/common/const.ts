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

export const professions = [
  {
    type: 'development',
    label: 'Разработка',
    color: 'brand-80',
  },
  {
    type: 'qa',
    label: 'Тестирование',
    color: 'violet-100',
  },
  {
    type: 'design',
    label: 'Дизайн',
    color: 'green-80',
  },
  {
    type: 'product',
    label: 'Продукт',
    color: 'red-80',
  },
  {
    type: 'marketing',
    label: 'Маркетинг',
    color: 'orange-80',
  },
];

export const vacancyList: ProfessionOptionsT[] = [
  {
    label: 'Разработка',
    author: {
      name: 'Игорь',
      tg: '@unknownproperty',
      grade: 'Frontend Lead, Сo-Founder',
      src: '/vacancy/unknownproperty.jpg',
    },
    date: '27 января',
    grade: 'Junior+, Middle, Senior',
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
    date: '28 января',
    grade: 'Junior, Middle, Senior',
    id: 'development-backend',
    title: 'Backend разработчик',
  },
  // {
  //   label: 'Тестирование',
  //   author: {
  //     name: 'Николай',
  //     tg: '@niqzart',
  //     grade: 'Backend Lead, Сo-Founder',
  //     src: '/vacancy/niqzart.jpg',
  //   },
  //   date: '15 ноября',
  //   grade: 'Junior, Middle, Senior',
  //   id: 'qa-manual',
  //   title: 'QA Engineer (Тестировщик)',
  // },
  // {
  //   label: 'Тестирование',
  //   author: {
  //     name: 'Николай',
  //     tg: '@niqzart',
  //     grade: 'Backend Lead, Сo-Founder',
  //     src: '/vacancy/niqzart.jpg',
  //   },
  //   date: '3 марта',
  //   grade: 'Middle+, Senior',
  //   id: 'qa-lead',
  //   title: 'QA Lead (Тестлид)',
  // },
  {
    label: 'Тестирование',
    author: {
      name: 'Николай',
      tg: '@niqzart',
      grade: 'Backend Lead, Сo-Founder',
      src: '/vacancy/niqzart.jpg',
    },
    date: '25 января',
    grade: 'Junior, Middle, Senior',
    id: 'qa-automation',
    title: 'Automation QA (Автотестер)',
  },
  // {
  //   label: 'Дизайн',
  //   author: {
  //     name: 'Игорь',
  //     tg: '@unknownproperty',
  //     grade: 'CEO, Сo-Founder',
  //     src: '/vacancy/unknownproperty.jpg',
  //   },
  //   date: '26 января',
  //   grade: 'Junior, Middle',
  //   id: 'design-graphic',
  //   title: 'Графический дизайнер',
  // },
  {
    label: 'Дизайн',
    author: {
      name: 'Игорь',
      tg: '@unknownproperty',
      grade: 'CEO, Сo-Founder',
      src: '/vacancy/unknownproperty.jpg',
    },
    date: '26 января',
    grade: 'Junior+, Middle',
    id: 'design-uiux',
    title: 'UI/UX дизайнер',
  },
  // {
  //   label: 'Product manager',
  //   author: {
  //     name: 'Игорь',
  //     tg: '@unknownproperty',
  //     grade: 'CEO, Сo-Founder',
  //     src: '/vacancy/unknownproperty.jpg',
  //   },
  //   date: '2 февраля',
  //   grade: 'Junior, Middle',
  //   id: 'product-pm',
  //   title: 'Product manager',
  // },
  // {
  //   label: 'Business analyst',
  //   author: {
  //     name: 'Игорь',
  //     tg: '@unknownproperty',
  //     grade: 'CEO, Сo-Founder',
  //     src: '/vacancy/unknownproperty.jpg',
  //   },
  //   date: '26 января',
  //   grade: 'Junior, Middle',
  //   id: 'product-ba',
  //   title: 'Business analyst',
  // },
  {
    label: 'SMM',
    author: {
      name: 'Игорь',
      tg: '@unknownproperty',
      grade: 'CEO, Сo-founder',
      src: '/vacancy/unknownproperty.jpg',
    },
    date: '27 января',
    grade: 'Intern, Junior, Middle',
    id: 'marketing-smm',
    title: 'SMM-specialist',
  },
  // {
  //   label: 'Marketing',
  //   author: {
  //     name: 'Игорь',
  //     tg: '@unknownproperty',
  //     grade: 'CEO, Сo-Founder',
  //     src: '/vacancy/unknownproperty.jpg',
  //   },
  //   date: '24 января',
  //   grade: 'Junior+, Middle, Senior',
  //   id: 'marketing-marketing',
  //   title: 'Marketing-specialist',
  // },
  {
    label: 'Marketing',
    author: {
      name: 'Игорь',
      tg: '@unknownproperty',
      grade: 'CEO, Сo-Founder',
      src: '/vacancy/unknownproperty.jpg',
    },
    date: '24 января',
    grade: 'Junior, Middle',
    id: 'marketing-motion-design',
    title: 'Motion Designer',
  },
  // {
  //   label: 'Copywriter/Editor',
  //   author: {
  //     name: 'Игорь',
  //     tg: '@unknownproperty',
  //     grade: 'CEO, Сo-Founder',
  //     src: '/vacancy/unknownproperty.jpg',
  //   },
  //   date: '22 января',
  //   grade: 'Intern, Junior',
  //   id: 'marketing-copywriter',
  //   title: 'Copywriter/Editor',
  // },
];

export const vacancyDescription = {
  development: {
    title: 'Разработка',
    for: 'разработчиков',
    paragraph:
      'В xi.effect продуктовая разработка. Есть куча инженерных задач и технических вызовов для умного человека',
  },
  qa: {
    title: 'Тестирование',
    for: 'тестировщиков',
    paragraph:
      'В xi.effect продуктовая разработка. Есть множество интересных задач и вызовов для тестирования',
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
