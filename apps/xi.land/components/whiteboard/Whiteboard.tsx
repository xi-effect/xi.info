'use client';

import { useRef } from 'react';
import { useInView } from 'motion/react';
import { HorizontalFeatureCard, VerticalFeatureCard } from 'components/main/shared';

export const Whiteboard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const baseMotionConfig = {
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  return (
    <div
      ref={ref}
      className="w-full max-w-[1600px] mx-auto bg-gray-0 grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-16"
    >
      <VerticalFeatureCard
        title="Визуализация материала"
        description="Выделяйте ключевые моменты, легко объясняйте логику и связи"
        imageSrcDesktop="/assets/whiteboard/diagramContainer.svg"
        imageSrcMobile="/assets/whiteboard/diagramContainer.svg"
        imageBlockClassName="h-[250px]"
        motionConfig={{
          ...baseMotionConfig,
          transition: { ...baseMotionConfig.transition, delay: 0.1 },
        }}
      />

      <VerticalFeatureCard
        title="Загрузка изображений"
        description="Делитесь страницами из учебников или полезными картинками"
        imageBlockClassName="h-[300px] sm:h-[450px]"
        imageSrcDesktop="/assets/whiteboard/videoCallInterface.webp"
        imageSrcMobile="/assets/whiteboard/videoCallInterface.webp"
        imageClassName="w-full absolute h-full object-cover"
        motionConfig={{
          ...baseMotionConfig,
          transition: { ...baseMotionConfig.transition, delay: 0.2 },
        }}
      />

      <HorizontalFeatureCard
        title="Пространство вдохновения"
        description="Создавайте интересные и полезные уроки вместе с sovlium"
        imageSrcDesktop="/assets/whiteboard/space.webp"
        imageSrcMobile="/assets/whiteboard/space.webp"
        imageClassName="absolute left-4 top-4 sm:left-8 sm:top-8 w-full object-cover h-full object-left-top"
        isReversed
        isInverted
        textBlockClassName="lg:gap-6"
        imgBlockClassName="sm:h-120.5 h-87.5"
        buttonText="Попробовать бесплатно"
        buttonVariant="secondary"
        className="gap-y-0"
        motionConfig={{
          ...baseMotionConfig,
          transition: { ...baseMotionConfig.transition, delay: 0.3 },
        }}
      />
    </div>
  );
};
