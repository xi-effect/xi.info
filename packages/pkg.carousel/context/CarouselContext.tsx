import { createContext } from 'react';
import { CarouselContextTypeT } from '../types';

export const CarouselContext = createContext<CarouselContextTypeT | undefined>(undefined);
