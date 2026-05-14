'use client';

import Link from 'next/link';
import { Button } from '@xipkg/button';
import { ArrowBottom, ArrowRight } from '@xipkg/icons';
import { cn } from '@xipkg/utils';

import { HERO_CONTENT } from './hero_content';
import { HeroInfiniteSlider } from './HeroInfiniteSlider';

const buttonClassName =
  'flex h-12 w-full rounded-xl border-0 px-6 text-base font-medium leading-[22px] hover:border-0';
const linkButtonClassName = 'flex w-full items-center justify-center gap-3';

export const Hero = () => {
  return (
    <section data-theme="white" className="w-full overflow-hidden bg-gray-0 pt-40 pb-20 lg:pb-40">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center gap-8 sm:gap-10 lg:gap-15">
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-4 sm:gap-6 lg:gap-8">
          <h1 className="max-w-[14ch] text-center text-[42px] font-medium leading-[1.05] tracking-[-0.01em] text-gray-100 sm:text-[56px] lg:max-w-none lg:text-[80px]">
            {HERO_CONTENT.title}
          </h1>

          <p className="max-w-[920px] text-center text-m-base font-normal leading-[1.3] text-[#5C5E6C] sm:text-l-base lg:text-xl-base">
            {HERO_CONTENT.subtitle}
          </p>
        </div>

        <HeroInfiniteSlider cards={HERO_CONTENT.cards} />

        <div className="flex w-full max-w-[610px] flex-col items-center gap-3 sm:max-w-[420px] md:max-w-[610px] md:flex-row md:justify-center md:gap-6">
          <Button
            asChild
            variant="ghost"
            className={cn(buttonClassName, 'bg-transparent text-gray-100 hover:bg-[#F3F4FD]')}
          >
            <Link href="/roadmap" className={linkButtonClassName}>
              {HERO_CONTENT.secondaryButtonLabel}
              <ArrowBottom className="size-6 fill-gray-100" />
            </Link>
          </Button>

          <Button asChild variant="primary" className={buttonClassName}>
            <Link href="https://app.sovlium.ru/signup" className={linkButtonClassName}>
              {HERO_CONTENT.primaryButtonLabel}
              <ArrowRight className="size-6 fill-brand-0" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
