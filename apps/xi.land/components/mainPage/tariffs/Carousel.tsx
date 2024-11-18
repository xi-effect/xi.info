/* eslint-disable consistent-return */

'use client';

import {
  Children,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { motion, Transition, useMotionValue } from 'framer-motion';

type CarouselContextTypeT = {
  index: number;
  setIndex: (newIndex: number) => void;
  itemsCount: number;
  setItemsCount: (newItemsCount: number) => void;
  disableDrag: boolean;
};

const CarouselContext = createContext<CarouselContextTypeT | undefined>(undefined);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within an CarouselProvider');
  }
  return context;
}

type CarouselProviderPropsT = {
  children: ReactNode;
  initialIndex?: number;
  onIndexChange?: (newIndex: number) => void;
  disableDrag?: boolean;
};

function CarouselProvider({
  children,
  initialIndex = 0,
  onIndexChange,
  disableDrag = false,
}: CarouselProviderPropsT) {
  const [index, setIndex] = useState<number>(initialIndex);
  const [itemsCount, setItemsCount] = useState<number>(0);

  const handleSetIndex = (newIndex: number) => {
    setIndex(newIndex);
    onIndexChange?.(newIndex);
  };

  const contextValue = useMemo(
    () => ({
      index,
      setIndex: handleSetIndex,
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
}

type CarouselPropsT = {
  children: ReactNode;
  initialIndex?: number;
  index?: number;
  onIndexChange?: (newIndex: number) => void;
  disableDrag?: boolean;
};

function Carousel({
  children,
  initialIndex = 0,
  index: externalIndex,
  onIndexChange,
  disableDrag = false,
}: CarouselPropsT) {
  const [internalIndex, setInternalIndex] = useState<number>(initialIndex);
  const isControlled = externalIndex !== undefined;
  const currentIndex = isControlled ? externalIndex : internalIndex;

  const handleIndexChange = (newIndex: number) => {
    if (!isControlled) {
      setInternalIndex(newIndex);
    }
    onIndexChange?.(newIndex);
  };

  return (
    <CarouselProvider
      initialIndex={currentIndex}
      onIndexChange={handleIndexChange}
      disableDrag={disableDrag}
    >
      {children}
    </CarouselProvider>
  );
}

type CarouselContentPropsT = {
  children: ReactNode;
  className?: string;
  transition?: Transition;
  overflow?: string;
};

function CarouselContent({
  children,
  className,
  transition,
  overflow = 'overflow-auto',
}: CarouselContentPropsT) {
  const { index, setIndex, setItemsCount, itemsCount, disableDrag } = useCarousel();
  const [visibleItemsCount, setVisibleItemsCount] = useState(1);
  const [containerPadding, setContainerPadding] = useState(0);
  const dragX = useMotionValue(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemsLength = Children.count(children);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePaddingRight = () => {
    if (containerRef.current) {
      const computedStyle = getComputedStyle(containerRef.current);
      const rightPadding = parseFloat(computedStyle.paddingRight) || 0;
      setContainerPadding(rightPadding);
    }
  };

  useEffect(() => {
    if (!contentRef.current) {
      return;
    }

    const options = {
      root: contentRef.current,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleCount = entries.filter((entry) => entry.isIntersecting).length;
      setVisibleItemsCount(visibleCount);
    }, options);

    const childNodes = contentRef.current.children;
    Array.from(childNodes).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [children, setItemsCount]);

  useEffect(() => {
    if (!itemsLength) {
      return;
    }

    setItemsCount(itemsLength);
  }, [itemsLength, setItemsCount]);

  useEffect(() => {
    updatePaddingRight();

    const resizeObserver = new ResizeObserver(() => {
      updatePaddingRight();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [children]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -10 && index < itemsLength - 1) {
      setIndex(index + 1);
    } else if (x >= 10 && index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className={`group/hover relative, ${className}`} ref={containerRef}>
      <div className={overflow}>
        <motion.div
          drag={disableDrag ? false : 'x'}
          dragConstraints={
            disableDrag
              ? undefined
              : {
                  left: 0,
                  right: 0,
                }
          }
          dragMomentum={disableDrag ? undefined : false}
          style={{
            x: disableDrag ? undefined : dragX,
          }}
          animate={{
            translateX: `calc(-${index * (100 / visibleItemsCount)}% + ${
              index === itemsCount - 1 ? containerPadding : 0
            }px)`,
          }}
          onDragEnd={disableDrag ? undefined : onDragEnd}
          transition={
            transition || {
              damping: 18,
              stiffness: 90,
              type: 'spring',
              duration: 0.2,
            }
          }
          className={`flex ${!disableDrag && 'cursor-grab active:cursor-grabbing'}`}
          ref={contentRef}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

type CarouselItemPropsT = {
  children: ReactNode;
  className?: string;
};

function CarouselItem({ children, className }: CarouselItemPropsT) {
  return <div className={`min-w-0 shrink-0 grow-0 overflow-hidden ${className}`}>{children}</div>;
}

export { Carousel, CarouselContent, CarouselItem, useCarousel };
