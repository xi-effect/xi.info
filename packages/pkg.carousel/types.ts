/* eslint-disable @typescript-eslint/no-explicit-any */
import { Transition } from 'motion';
import { ReactNode } from 'react';

export type CarouselContextTypeT = {
  index: number;
  setIndex: (newIndex: number) => void;
  itemsCount: number;
  setItemsCount: (newItemsCount: number) => void;
  disableDrag: boolean;
};

export type CarouselProviderPropsT = {
  children: ReactNode;
  initialIndex?: number;
  disableDrag?: boolean;
};

export type CarouselPropsT = {
  children: ReactNode;
  initialIndex?: number;
  index?: number;
  disableDrag?: boolean;
};

export type CarouselContentPropsT = {
  children: any;
  className?: string;
  transition?: Transition;
  overflow?: string;
};

export type CarouselItemPropsT = {
  children: any;
  className?: string;
};
