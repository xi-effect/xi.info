'use client';

import Image from 'next/image';
import React from 'react';
import { AspectRatio } from '@xipkg/aspect-ratio';
import { Button } from '@xipkg/button';

export const Hero = () => {
  const sectionClass =
    'relative bg-gray-100 h-100vh w-full flex items-center justify-center pt-40 pb-12 px-12 2xl:px-40';

  const wrapperClass = 'w-full h-full flex items-end justify-center';

  const innerClass =
    'relative overflow-hidden bg-brand-80 w-full h-auto rounded-[64px] pt-40 px-12 2xl:pt-[128px] 2xl:px-[128px] flex flex-col items-center gap-16';

  return (
    <section className={sectionClass}>
      <AspectRatio ratio={1600 / 800}>
        <div className={wrapperClass}>
          <div className={innerClass}>
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-4">
                <h1 className="font-medium text-7xl text-gray-0 text-center">
                  Все инструменты репетитора в одной платформе
                </h1>

                <h2 className="font-normal text-[32px] text-gray-20 text-center">
                  Видеозвонки, онлайн-доски и заметки, контроль оплат и автоматические напоминания
                  для учеников
                </h2>
              </div>

              <Button
                variant="ghost"
                size="l"
                className="text-brand-100 text-l-base font-medium bg-brand-0"
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
