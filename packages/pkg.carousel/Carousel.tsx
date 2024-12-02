'use client';

import { CarouselProvider } from './CarouselProvider';
import { CarouselPropsT } from './types';

export const Carousel = ({ children, initialIndex = 0, disableDrag = false }: CarouselPropsT) => (
  <CarouselProvider initialIndex={initialIndex} disableDrag={disableDrag}>
    {children}
  </CarouselProvider>
);
