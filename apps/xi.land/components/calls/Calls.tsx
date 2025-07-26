'use client';

import Image from 'next/image';
import { Button } from '@xipkg/button';

import { VerticalFeatureCard } from 'components/main/shared';

export const Calls = () => (
  <div className="w-full max-w-[1600px] mx-auto bg-gray-0 grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-16">
    <VerticalFeatureCard
      title="Быстрое подключение"
      description="Ссылка на видеозвонок — в карточке занятия. Остаётся только вовремя подключиться"
      imageSrcDesktop="/assets/calls/lessonCard.svg"
      imageSrcMobile="/assets/calls/lessonCard.svg"
      imageClassName="sm:p-8 md:px-8 md:pt-2 md:absolute md:top-4 lg:relative lg:top-0 lg:p-0"
      imageBlockClassName="h-[250px] sm:h-[450px]"
    />

    <VerticalFeatureCard
      title="Всё в одном окне"
      description="Легко переключайтесь между видеозвонком, онлайн-доской и материалами"
      imageSrcDesktop="/assets/calls/videoCall.webp"
      imageSrcMobile="/assets/calls/videoCall.webp"
      imageClassName="absolute left-0 h-full w-full object-cover object-right-top md:pt-2 md:top-4 lg:pr-8 lg:top-8 lg:pt-0"
      imageBlockClassName="h-[300px] sm:h-[450px]"
    />

    <div className="col-span-2">
      <div className="px-4 py-8 items-center">
        <h3 className="text-h6 sm:text-h5 2xl:text-h3 font-medium text-center">
          Создано специально для репетиторов
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
      <div className="px-4 py-8  flex flex-col gap-8 justify-center items-center">
        <p className="text-xl-base text-center">
          Подарите себе больше свободных минут с видеозвонками от sovlium
        </p>
        <Button className="w-auto sm:text-l-base rounded-xl sm:rounded-2xl px-6 sm:px-8 sm:h-14">
          Попробовать бесплатно
        </Button>
      </div>
    </div>
  </div>
);
