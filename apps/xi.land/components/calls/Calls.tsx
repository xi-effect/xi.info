/* eslint-disable no-irregular-whitespace */
'use client';

import { useRef } from 'react';
import { useInView } from 'motion/react';
import Image from 'next/image';
import { VerticalFeatureCard } from 'components/main/shared';
import { Button } from '@xipkg/button';

export const Calls = () => {
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
        title="Быстрое подключение"
        description="Ссылка на видеозвонок — в карточке занятия. Остаётся только вовремя подключиться"
        imageSrcDesktop="/assets/calls/lessonCard.svg"
        imageSrcMobile="/assets/calls/lessonCard.svg"
        imageClassName="sm:p-8 md:px-8 md:pt-2 md:absolute md:top-4 lg:relative lg:top-0 lg:p-0"
        imageBlockClassName="h-[250px] sm:h-[450px]"
        motionConfig={{
          ...baseMotionConfig,
          transition: { ...baseMotionConfig.transition, delay: 0.1 },
        }}
      />

      <VerticalFeatureCard
        title="Всё в одном окне"
        description="Легко переключайтесь между видеозвонком, онлайн-доской и материалами"
        imageSrcDesktop="/assets/calls/videoCall.webp"
        imageSrcMobile="/assets/calls/videoCall.webp"
        imageClassName="absolute left-0 h-full w-full object-cover object-right-top md:pt-2 md:top-4 lg:pr-8 lg:top-8 lg:pt-0"
        imageBlockClassName="h-[300px] sm:h-[450px]"
        motionConfig={{
          ...baseMotionConfig,
          transition: { ...baseMotionConfig.transition, delay: 0.2 },
        }}
      />

      <div className="col-span-2">
        <div className="px-8 py-8 items-center">
          <h3 className="text-xl-base sm:text-h5 md:text-h3 font-semibold sm:font-medium text-center text-gray-100 leading-[1.2] sm:!leading-[1.1] md:!leading-[1.3]">
            Создано специально для репетиторов
          </h3>
        </div>
        <div className="flex flex-col gap-12 px-4 py-8 items-center md:gap-2 md:flex-row-reverse md:justify-around md:items-start">
          <Image
            src="/assets/calls/conferenceSteps.svg"
            width={320}
            height={380}
            alt="Обычные видеоконференции"
            className="w-full max-w-[572px]"
          />
          <Image
            src="/assets/calls/videoCallSteps.svg"
            width={320}
            height={380}
            alt="Обычные видеоконференции"
            className="w-full max-w-[572px]"
          />
        </div>
        <div className="flex flex-col items-center p-8 gap-8">
          <h3 className="text-xl-base sm:text-h5 md:text-xl-base sm:leading-[1.1] leading-[1.2] font-semibold sm:font-medium md:font-normal text-center text-gray-80">
            Подарите себе больше свободных минут с видеозвонками от sovlium
          </h3>
          <Button
            className="w-70.25 sm:w-85 md:w-116 rounded-xl font-medium !text-brand-0 sm:rounded-2xl border-none sm:h-14 text-m-base sm:text-l-base md:text-xl-base md:px-8 shadow-[0px_4px_4px_rgba(69,84,201,0.25)]"
            variant={'default'}
            size="m"
            onClick={() => {
              const el = document.getElementById('become-tester');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Попробовать бесплатно
          </Button>
        </div>
      </div>
    </div>
  );
};
