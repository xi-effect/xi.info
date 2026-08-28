import type { Metadata } from 'next';

import { SubscribeRedirect } from 'components/subscribe/SubscribeRedirect';

export const metadata: Metadata = {
  title: 'Оформление подписки — sovlium',
  robots: {
    index: false,
    follow: true,
  },
};

export default function SubscribePage() {
  return <SubscribeRedirect />;
}
