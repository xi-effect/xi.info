'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@xipkg/button';
import { ArrowBottom, ArrowRight } from '@xipkg/icons';

import { HERO_CONTENT } from './hero_content';

export const Hero = () => {
  return (
    <section
      data-theme="white"
      className="w-full bg-gray-0 py-40"
    >
      <div className="mx-auto flex w-full max-w-[2410px] flex-col items-center gap-8 md:gap-15">
        <div className="flex max-w-[1280px] flex-col items-center gap-4 md:gap-12">
          <h1 className="text-center text-[42px] sm:text-[56px] lg:text-[80px] font-medium leading-[105%] tracking-[-0.01em] text-[#1E1E2B]">
            {HERO_CONTENT.title}
          </h1>

          <p className="text-center text-base font-normal leading-[130%] text-[#5C5E6C] sm:text-xl lg:text-2xl">
            {HERO_CONTENT.subtitle}
          </p>
        </div>

        <div className="h-[385px] w-full flex justify-center items-center gap-5">
          {HERO_CONTENT.cards.map((card) => (
            <div
              key={card.id}
              className="h-[385px] w-[385px] rounded-4xl bg-[rgba(243, 244, 252, 0.6)]"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={385}
                height={385}
                className="object-contain rounded-4xl object-center"
              />
            </div>
          ))}
        </div>

        <div className="flex w-full max-w-[609px] flex-col items-center gap-3 md:flex-row md:justify-center md:gap-6">
          <Button
            variant="ghost"
            className="flex items-center gap-3 h-12 w-full rounded-xl border-0 bg-transparent px-6 text-base font-medium leading-[22px] text-gray-100 hover:bg-[#F3F4FD] hover:border-0"
          >
            <Link href="/roadmap">{HERO_CONTENT.secondaryButtonLabel}</Link>
            <ArrowBottom className="fill-gray-100 size-6" />
          </Button>

          <Button
            variant="primary"
            className="flex items-center gap-3 h-12 w-full rounded-xl border-0 px-6 text-base font-medium leading-[22px] hover:border-0"
          >
            <Link href="https://app.sovlium.ru/signup">{HERO_CONTENT.primaryButtonLabel}</Link>
            <ArrowRight className="fill-brand-0 size-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
