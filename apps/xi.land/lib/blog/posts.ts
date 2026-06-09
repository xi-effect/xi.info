import type { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'online-doska-dlya-uroka',
    title: 'Онлайн-доска для урока: на что смотреть, прежде чем выбирать',
    description:
      'Разбираем, почему репетиторы уходят с Miro, где ломается урок и какие мелочи на доске реально влияют на понимание ученика.',
    excerpt:
      'Пять лет назад я потерял ученика из‑за доски. Не из‑за цены и не из‑за программы — просто на экране всё плясало, а я пытался объяснить дроби.',
    publishedAt: '2026-05-28',
    tags: ['Инструменты', 'Онлайн-уроки'],
    readingTimeMinutes: 9,
    relatedFeature: { href: '/whiteboard', label: 'Онлайн-доска Sovlium' },
    ogImage: '/assets/whiteboard/videoCallInterface.webp',
    faq: [
      {
        question: 'Нужна ли отдельная доска, если уже есть Zoom?',
        answer:
          'Zoom-аннотации хватает на пять минут. Для математики, схем и совместного рисования нужна полноценная доска с нормальной сеткой и без лагов.',
      },
      {
        question: 'Miro подойдёт репетитору?',
        answer:
          'Для мозговых штурмов — да. Для ежедневных уроков по алгебре — чаще нет: много лишнего, тяжёлый интерфейс и ученик теряется в панелях.',
      },
      {
        question: 'Важен ли стилус?',
        answer:
          'Для точных наук — очень. Мышкой можно, но рукописные формулы выглядят криво, и ученик тратит внимание на расшифровку, а не на смысл.',
      },
    ],
  },
  {
    slug: 'videozvonki-dlya-repetitorov',
    title: 'Видеозвонки для репетиторов: чеклист, который я составил после 200+ уроков',
    description:
      'Практичный список проверок перед уроком: звук, свет, запасной план и те ситуации, о которых не пишут в рекламе платформ.',
    excerpt:
      'У меня есть ритуал за пятнадцать минут до урока. Выглядит занудно, зато за два года ни одного срыва по моей вине.',
    publishedAt: '2026-06-02',
    tags: ['Советы', 'Онлайн-уроки'],
    readingTimeMinutes: 8,
    relatedFeature: { href: '/calls', label: 'Видеозвонки Sovlium' },
    ogImage: '/assets/calls/videoCall.webp',
    faq: [
      {
        question: 'Какой минимальный интернет нужен для урока?',
        answer:
          'Стабильные 10 Мбит/с на аплоад — нижняя граница. Лучше проводное подключение и отключённые обновления Windows на время урока.',
      },
      {
        question: 'Нужно ли записывать уроки?',
        answer:
          'Только с согласия ученика или родителя. Запись полезна для повторения, но это отдельное юридическое и этическое решение.',
      },
      {
        question: 'Что делать, если пропал интернет?',
        answer:
          'Заранее договоритесь о запасном канале: Telegram-звонок, мобильный хотспот, перенос на 15 минут. Главное — не импровизировать в панике.',
      },
    ],
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);

export const getPublishedPosts = () =>
  blogPosts
    .filter((post) => !post.hidden)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const formatBlogDate = (isoDate: string) =>
  new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }).format(
    new Date(isoDate),
  );
