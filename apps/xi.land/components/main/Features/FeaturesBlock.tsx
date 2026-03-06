'use client';

import dynamic from 'next/dynamic';
import { useMediaQuery } from '@xipkg/utils';
import { FeaturesMobile } from './FeaturesMobile';

// Десктопная версия тянет gsap + ScrollTrigger — загружаем лениво, чтобы не блокировать первый экран
const Features = dynamic(() => import('./Features').then((m) => m.Features), {
  ssr: false,
  loading: () => (
    <section
      className="relative flex min-h-[100dvh] w-full items-center justify-center"
      aria-hidden
    >
      <div className="h-[100dvh] w-full max-w-7xl animate-pulse rounded-xl bg-gray-10/30" />
    </section>
  ),
});

export const FeaturesBlock = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return isMobile ? <FeaturesMobile /> : <Features />;
};
