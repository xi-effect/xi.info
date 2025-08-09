import React, { ReactNode } from 'react';

import { Hero } from 'components/main';

export default function HeroLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Hero />
      {children}
    </>
  );
}
