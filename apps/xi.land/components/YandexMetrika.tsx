/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-ts-comment */

'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    // @ts-ignore
    ym('96659391', 'hit', url);
  }, [pathname, searchParams]);

  return null;
}
