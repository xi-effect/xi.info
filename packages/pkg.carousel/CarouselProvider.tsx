'use client';

import { useEffect, useMemo, useState } from 'react';
import { CarouselProviderPropsT } from './types';
import { CarouselContext } from './context/CarouselContext';

export const CarouselProvider = ({
  children,
  initialIndex = 0,
  disableDrag = false,
}: CarouselProviderPropsT) => {
  const [index, setIndex] = useState<number>(initialIndex);
  const [itemsCount, setItemsCount] = useState<number>(0);

  const handleChangeIndex = (idx: number) => {
    setIndex((prevIndex) => prevIndex + idx);
  };

  const contextValue = useMemo(
    () => ({
      index,
      setIndex: handleChangeIndex,
      itemsCount,
      setItemsCount,
      disableDrag,
    }),
    [index, itemsCount, disableDrag],
  );

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  return <CarouselContext.Provider value={contextValue}>{children}</CarouselContext.Provider>;
};
