'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from '@xipkg/button';
import { cn } from '@xipkg/utils';
import { AspectRatio } from '@xipkg/aspect-ratio';

export const Hero = () => {
  const sectionClass = cn(
    'relative bg-gray-100 h-100vh w-full',
    'flex items-center justify-center',
    'pt-40 px-6 md:px-8 lg:px-12 2xl:px-40',
  );

  const wrapperClass = 'w-full h-full flex items-end justify-center';

  const innerClass = cn(
    'relative overflow-hidden bg-brand-80 w-full h-auto',
    'rounded-[32px] md:rounded-[48px] lg:rounded-[64px]',
    'pt-20 md:pt-28 lg:pt-40 2xl:pt-[128px] px-6 md:px-8 lg:px-12  2xl:px-[128px]',
    'flex flex-col items-center gap-8 md:gap-12 lg:gap-16',
  );

  return (
    <section className={sectionClass}>
      <AspectRatio ratio={1600 / 800}>
        <div className={wrapperClass}>
          <div className={innerClass}>
            <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8 max-w-[1088px]">
              <div className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4">
                <h1 className="font-medium text-3xl md:text-5xl lg:text-7xl text-gray-0 text-center">
                  Все инструменты репетитора в одной платформе
                </h1>

                <h2 className="font-normal text-lg md:text-2xl lg:text-[32px] text-gray-20 text-center">
                  Видеозвонки, онлайн-доски и заметки, контроль оплат и автоматические напоминания
                  для учеников
                </h2>
              </div>

              <Button
                variant="ghost"
                size="l"
                className="text-brand-100 text-base md:text-lg lg:text-l-base font-medium bg-brand-0"
              >
                Стать бета-тестером
              </Button>
            </div>

            <Image
              src="/assets/mainPage/hero/hero.svg"
              alt="screenshot of the site"
              width={1344}
              height={756}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </AspectRatio>
    </section>
  );
};
