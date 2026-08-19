import type { Metadata } from 'next';

import { NotFoundView } from 'components/NotFoundView';

export const metadata: Metadata = {
  title: 'Страница не найдена — Sovlium',
  description: 'Запрашиваемая страница не существует или была удалена.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function Error404() {
  return <NotFoundView />;
}
