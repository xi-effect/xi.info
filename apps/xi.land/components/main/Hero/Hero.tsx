'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from '@xipkg/button';
import { usePathname } from 'next/navigation';
import { config } from './config';

const HeroText = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4">
      <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl text-gray-0 text-center whitespace-pre-line">
        {config[pathname].title}
      </h1>

      <h2 className="font-normal text-lg md:text-xl lg:text-[24px] text-gray-20 text-center whitespace-pre-line">
        {config[pathname].description}
      </h2>
    </div>
  );
};

const Blobs = () => (
  <>
    <div className="absolute -left-[21px] -top-[173px] z-1 w-[512px] h-[512px] bg-gray-0 opacity-50 blur-[256px] flex-none order-0 flex-grow-0" />
    <div className="absolute -right-[226px] bottom-[158px] z-1 w-[512px] h-[512px] bg-[#F3F4FC] opacity-50 blur-[256px] sm:flex hidden flex-none order-1 flex-grow-0" />
  </>
);

export const Hero = () => {
  const pathname = usePathname();

  // Определяем тему на основе пути
  const isMainPage = pathname === '/';
  const theme = isMainPage ? 'dark' : 'white';

  return (
    <section
      data-theme={theme}
      className="relative flex flex-col items-center justify-center z-0 bg-gray-0 dark:bg-gray-100 h-100dvh min-h-100dvh w-full xs:pt-[112px] px-6 pb-12 transition-all duration-700 ease-in-out"
    >
      <div className="w-full max-w-[1600px] h-[500px] sm:h-[calc(100vh-160px)] flex items-start justify-center">
        <div className="relative overflow-hidden bg-brand-80 w-full h-full z-0 rounded-[32px] md:rounded-[48px] lg:rounded-[64px] pt-8 sm:pt-20 pb-8 xs:pb-0 px-6 md:px-8 lg:px-12 2xl:px-[128px] flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
          <Blobs />

          <div className="mb-auto md:mb-0 mt-auto flex flex-col items-center gap-4 md:gap-6 lg:gap-8 md:max-w-[1088px] max-w-[580px]">
            <HeroText />

            <Button
              variant="ghost"
              className="text-brand-100 text-base md:text-lg lg:text-l-base font-medium bg-brand-0"
              onClick={() => {
                const el = document.getElementById('becometester');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {config[pathname].button}
            </Button>
          </div>

          <Image
            src="/assets/main/hero/hero_mobile.svg"
            alt="screenshot of the site"
            width={572}
            height={400}
            className="hidden sm:block md:hidden"
            priority
          />

          <Image
            src="/assets/main/hero/hero.svg"
            alt="screenshot of the site"
            width={1344}
            height={756}
            className="hidden md:block mt-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};
