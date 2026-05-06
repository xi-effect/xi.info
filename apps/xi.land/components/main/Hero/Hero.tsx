'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@xipkg/button';
import { ArrowBottom, ArrowRight } from '@xipkg/icons';
import { cn } from '@xipkg/utils';

import { HERO_CONTENT } from './hero_content';

export const Hero = () => {
  return (
    <section
      data-theme="white"
      className="w-full bg-gray-0 py-40"
    >
      <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center gap-10 sm:gap-12 lg:gap-15">
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-6 sm:gap-8 lg:gap-12">
          <h1 className="text-center text-[42px] font-medium leading-[1.05] tracking-[-0.01em] text-gray-100 sm:text-[56px] lg:text-[80px]">
            {HERO_CONTENT.title}
          </h1>

          <p className="max-w-[920px] text-center text-m-base font-normal leading-[1.3] text-[#5C5E6C] sm:text-xl-base">
            {HERO_CONTENT.subtitle}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-5">
          {HERO_CONTENT.cards.map((card) => (
            <div
              key={card.id}
              className="relative aspect-square overflow-hidden rounded-2xl bg-gray-5 sm:rounded-4xl"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1279px) calc((100vw - 80px) / 2), 20vw"
                className={cn('object-contain object-center', card.imageClassName)}
              />
            </div>
          ))}
        </div>

        <div className="flex w-full max-w-[610px] flex-col items-center gap-3 md:flex-row md:justify-center md:gap-6">
          <Button
            asChild
            variant="ghost"
            className="flex h-12 w-full rounded-xl border-0 bg-transparent px-6 text-base font-medium leading-[22px] text-gray-100 hover:border-0 hover:bg-[#F3F4FD]"
          >
            <Link href="/roadmap" className="flex w-full items-center justify-center gap-3">
              {HERO_CONTENT.secondaryButtonLabel}
              <ArrowBottom className="size-6 fill-gray-100" />
            </Link>
          </Button>

          <Button
            asChild
            variant="primary"
            className="flex h-12 w-full rounded-xl border-0 px-6 text-base font-medium leading-[22px] hover:border-0"
          >
            <Link
              href="https://app.sovlium.ru/signup"
              className="flex w-full items-center justify-center gap-3"
            >
              {HERO_CONTENT.primaryButtonLabel}
              <ArrowRight className="size-6 fill-brand-0" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
