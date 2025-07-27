'use client';

import { usePathname } from 'next/navigation';

export const MainForm = () => {
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) return null;

  return <div>MainForm</div>;
};
