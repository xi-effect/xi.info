'use client';

import { ArrowRight } from '@xipkg/icons';
import { useSupportModal } from './SupportModalContext';

type SupportAboutLinkProps = {
  title: string;
  description: string;
};

export const SupportAboutLink = ({ title, description }: SupportAboutLinkProps) => {
  const { open } = useSupportModal();

  return (
    <button
      type="button"
      onClick={open}
      className="group flex w-full cursor-pointer items-center justify-between gap-6 bg-transparent py-6 text-left md:py-7"
    >
      <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-8">
        <p className="w-full shrink-0 text-xl font-medium leading-7 text-gray-100 sm:w-48">
          {title}
        </p>
        <p className="font-manrope text-base leading-7 text-gray-900/70">{description}</p>
      </div>
      <ArrowRight className="size-5 shrink-0 fill-gray-100 transition-transform group-hover:translate-x-1" />
    </button>
  );
};
