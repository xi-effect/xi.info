import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from '@xipkg/icons';
import { Button } from '@xipkg/button';

import { SIGNUP_URL } from 'lib/app_urls';
import { ShotPlaceholder } from './ShotPlaceholder';
import type { ProductPageContentT } from './types';

const buttonClassName =
  'inline-flex h-auto min-h-12 w-full shrink-0 self-start rounded-2xl border-0 px-7 py-3.5 text-lg font-semibold leading-6 hover:border-0 sm:w-auto lg:max-w-[304px]';

type FeatureHeroPropsT = {
  content: ProductPageContentT;
};

export const FeatureHero = ({ content }: FeatureHeroPropsT) => (
  <section
    data-theme="white"
    className="w-full overflow-x-clip bg-gray-0 pt-28 pb-14 md:pt-32 lg:pb-20 xl:pt-40"
  >
    <div className="mx-auto flex w-full max-w-[1280px] flex-col items-stretch gap-10 px-4 md:gap-14 md:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
      <div className="flex min-w-0 flex-1 flex-col gap-10 lg:max-w-[650px] lg:justify-between lg:self-stretch xl:gap-14">
        <div className="flex flex-col gap-10 lg:gap-14">
          <div className="flex flex-col gap-6">
            <h1 className="font-nevermind text-[28px] font-medium leading-8 tracking-[-0.01em] text-gray-100/90 sm:text-4xl sm:leading-10 lg:text-4xl lg:leading-10">
              {content.title}
            </h1>
            <p className="font-manrope max-w-xl text-m-base font-medium leading-5 text-slate-800/60 sm:text-lg sm:leading-6">
              {content.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {content.pills
              .filter((pill) => pill.href !== `/${content.slug}`)
              .map((pill) => (
                <Link
                  key={pill.href + pill.label}
                  href={pill.href}
                  className={`inline-flex max-w-full items-center gap-3 rounded-[9.6px] px-3 py-2 transition-opacity hover:opacity-80 ${pill.pillClassName}`}
                >
                  <span
                    className={`text-m-base font-medium leading-5 sm:text-lg sm:leading-6 ${pill.labelClassName}`}
                  >
                    {pill.label}
                  </span>
                </Link>
              ))}
          </div>
        </div>

        <Button asChild variant="primary" className={buttonClassName}>
          <Link href={SIGNUP_URL} className="flex items-center justify-center gap-3">
            Попробовать бесплатно
            <ArrowRight className="size-5 shrink-0 fill-gray-0" />
          </Link>
        </Button>
      </div>

      <div className="relative mx-auto hidden w-full max-w-[600px] shrink-0 overflow-visible md:mx-auto md:block lg:mx-0">
        <div className="relative aspect-[600/520] w-full overflow-hidden rounded-3xl bg-gray-5">
          {content.heroImageNeedsShot === false ? (
            <Image
              src={content.heroImageSrc}
              alt={content.heroImageAlt}
              fill
              sizes="600px"
              className="object-cover object-center"
              priority
            />
          ) : (
            <ShotPlaceholder className="min-h-0 rounded-none bg-transparent" />
          )}
        </div>
      </div>
    </div>
  </section>
);
