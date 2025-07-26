'use client';

import { CarouselItemPropsT } from './types';

export const CarouselItem = ({ children, className }: CarouselItemPropsT) => (
  <div className={`min-w-0 shrink-0 grow-0 overflow-hidden ${className}`}>{children}</div>
);
