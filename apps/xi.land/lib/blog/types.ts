export type BlogPostTag = 'Инструменты' | 'Онлайн-уроки' | 'Советы';

export type BlogPostFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  tags: BlogPostTag[];
  readingTimeMinutes: number;
  relatedFeature?: {
    href: string;
    label: string;
  };
  ogImage?: string;
  faq?: BlogPostFaq[];
  hidden?: boolean;
};
