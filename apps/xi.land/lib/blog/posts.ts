export type BlogPostT = {
  slug: string;
  title: string;
  description: string;
  date: string;
  index: boolean;
};

/** Публичные статьи блога. Когда появится первая статья, добавьте `app/blog/[slug]/page.tsx` с generateStaticParams из этого списка. */
export const blogPosts: readonly BlogPostT[] = [];
