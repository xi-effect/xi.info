export type BlogPostT = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: readonly string[];
  index: boolean;
};

export const blogPosts: readonly BlogPostT[] = [
  {
    slug: 'sovlium-zavershenie-testirovaniya-2026',
    title: 'Почти год тестирования sovlium позади. Рассказываем, что изменится дальше',
    description:
      'sovlium завершает почти год тестирования. Рассказываем о бесплатном и платном тарифах, лимите кабинетов, переходном периоде для действующих пользователей и планах развития платформы.',
    date: '2026-09-25',
    category: 'Новости sovlium',
    tags: ['sovlium', 'репетиторы', 'онлайн-образование', 'EdTech', 'тарифы', 'обновления'],
    index: true,
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);

export const formatBlogDate = (date: string) =>
  new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00`));
