'use client';

import dynamic from 'next/dynamic';
import { useSyncExternalStore } from 'react';
import {
  getMobileNavOpenSnapshot,
  subscribeMobileNavOpen,
} from 'components/navigation/mobileNavState';
import { useCookieBanner } from './hooks/useCookieBanner';

const CookieBanner = dynamic(
  () => import('./CookieBanner').then((mod) => ({ default: mod.CookieBanner })),
  { ssr: false },
);

export function CookieBannerWrapper() {
  const { isOpen, acceptCookies } = useCookieBanner();
  const isMobileNavOpen = useSyncExternalStore(
    subscribeMobileNavOpen,
    getMobileNavOpenSnapshot,
    () => false,
  );

  if (!isOpen || isMobileNavOpen) return null;

  return <CookieBanner acceptCookies={acceptCookies} />;
}
