import Link from 'next/link';
import { ArrowRight } from '@xipkg/icons';
import { Button } from '@xipkg/button';

import { SIGNUP_URL } from 'lib/app_urls';

type FeatureCtaPropsT = {
  title: string;
  subtitle: string;
  supportHref: string;
  supportLabel: string;
};

export const FeatureCta = ({ title, subtitle, supportHref, supportLabel }: FeatureCtaPropsT) => (
  <section
    data-theme="white"
    className="font-nevermind w-full bg-gray-0 px-4 py-10 md:px-6 md:py-14"
  >
    <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 overflow-hidden rounded-[28px] bg-violet-50 p-6 md:rounded-[48px] md:p-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
      <div className="flex max-w-[640px] flex-col gap-4">
        <h2 className="text-3xl font-medium leading-9 tracking-tight text-gray-900 md:text-4xl md:leading-10">
          {title}
        </h2>
        <p className="font-manrope text-lg font-medium leading-6 text-gray-900/70">{subtitle}</p>
      </div>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
        <Button
          asChild
          variant="primary"
          className="inline-flex h-auto min-h-12 rounded-2xl border-0 px-7 py-3.5 text-lg font-semibold leading-6 hover:border-0"
        >
          <Link href={SIGNUP_URL} className="flex items-center justify-center gap-3">
            Попробовать бесплатно
            <ArrowRight className="size-5 shrink-0 fill-gray-0" />
          </Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="inline-flex h-auto min-h-12 rounded-2xl border-0 bg-white px-7 py-3.5 text-lg font-semibold leading-6 text-gray-100 hover:bg-gray-0"
        >
          <Link href={supportHref} target="_blank" rel="noopener noreferrer">
            {supportLabel}
          </Link>
        </Button>
      </div>
    </div>
  </section>
);
