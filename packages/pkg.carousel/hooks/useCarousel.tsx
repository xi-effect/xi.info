import { useContext } from 'react';
import { CarouselContext } from '../context/CarouselContext';

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within an CarouselProvider');
  }
  return context;
};
