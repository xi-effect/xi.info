'use client';

import dynamic from 'next/dynamic';
import { useMediaQuery } from '@xipkg/utils';
import { MessagesMobile } from './MessagesMobile';

// Десктопная версия тянет gsap + ScrollTrigger — загружаем лениво
const Messages = dynamic(() => import('./Messages').then((m) => m.Messages), {
  ssr: false,
  loading: () => (
    <section
      className="relative flex min-h-[100dvh] w-full max-w-400 items-center justify-center bg-gray-0 md:mx-auto"
      aria-hidden
    >
      <div className="h-[75vh] w-full max-w-md animate-pulse rounded-xl bg-gray-10/30" />
    </section>
  ),
});

export const MessagesBlock = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return isMobile ? <MessagesMobile /> : <Messages />;
};
