'use client';

import { useRef } from 'react';
import { useInView } from 'motion/react';
import { HorizontalFeatureCard, VerticalFeatureCard } from 'components/main/shared';

export const Materials = () => {
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
        title="Порядок и структура"
        description="Быстро находите нужное"
        imageSrcDesktop="/assets/materials/structure.webp"
        imageSrcMobile="/assets/materials/structure.webp"
        imageClassName="absolute left-8 top-8 w-full"
        imageBlockClassName="h-62.5 pb-0"
        motionConfig={{
          ...baseMotionConfig,
          transition: { ...baseMotionConfig.transition, delay: 0.1 },
        }}
      />

      <VerticalFeatureCard
        title="Хранилище файлов"
        description="Загрузите всё один раз. А потом просто делитесь файлами"
        imageSrcDesktop="/assets/materials/files.webp"
        imageSrcMobile="/assets/materials/files.webp"
        imageClassName="relative md:absolute md:pt-8 md:px-16 lg:px-8"
        imageBlockClassName="h-75 sm:pb-0 sm:p-4"
        motionConfig={{
          ...baseMotionConfig,
          transition: { ...baseMotionConfig.transition, delay: 0.2 },
        }}
      />

      <HorizontalFeatureCard
        title="Редактор статей"
        description="Выходите на новый уровень — пишите учебные статьи с иллюстрациями и создавайте свою методику преподавания"
        imageSrcDesktop="/assets/materials/dropdown.svg"
        imageSrcMobile="/assets/materials/dropdown.svg"
        imageClassName="absolute w-[240px] top-4 sm:top-8 md:relative md:top-0 2xl:absolute xl:bottom-0 xl:top-auto sm:w-[425px]"
        imgBlockClassName="h-[300px] sm:h-[450px] md:items-start"
        className="gap-8"
        motionConfig={{
          ...baseMotionConfig,
          transition: { ...baseMotionConfig.transition, delay: 0.3 },
        }}
      />

      <HorizontalFeatureCard
        title="Удобная рабочая среда"
        description="Облегчите свой труд вместе с sovlium"
        imageSrcDesktop="/assets/materials/workSpace.svg"
        imageSrcMobile="/assets/materials/workSpace_m.svg"
        imageClassName="absolute left-4 top-4 sm:left-8 sm:top-8 w-full object-cover h-full object-left-top rounded-tl-lg sm:rounded-tl-2xl lg:rounded-tl-3xl"
        imgBlockClassName="sm:h-120.5 h-87.5"
        textBlockClassName="lg:gap-6"
        isReversed
        isInverted
        buttonText="Попробовать бесплатно"
        buttonVariant="secondary"
        className="gap-y-0"
        motionConfig={{
          ...baseMotionConfig,
          transition: { ...baseMotionConfig.transition, delay: 0.4 },
        }}
      />
    </div>
  );
};
