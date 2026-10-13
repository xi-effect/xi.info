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
    slug: 'pochti-god-s-sovlium',
    title: 'Почти год с sovlium: как изменилась платформа за время бета-теста',
    description:
      'За одиннадцать месяцев бета-теста sovlium заметно изменился. Рассказываем, что произошло с доской, видеозвонками, расписанием, материалами, заметками и другими частями платформы.',
    date: '2026-10-11',
    category: 'Новости sovlium',
    tags: ['sovlium', 'репетиторы', 'онлайн-образование', 'EdTech', 'бета-тест', 'обновления'],
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
