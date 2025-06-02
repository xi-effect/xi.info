/* eslint-disable consistent-return */

'use client';

import { Children, useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'motion';
import { CarouselContentPropsT } from './types';
import { useCarousel } from './hooks/useCarousel';

export const CarouselContent = ({
  children,
  className,
  transition,
  overflow = 'overflow-auto',
}: CarouselContentPropsT) => {
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
      setIndex(1);
    } else if (x >= 10 && index > 0) {
      setIndex(-1);
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
};
