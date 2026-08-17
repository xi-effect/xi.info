import Link from 'next/link';
import { ArrowRight } from '@xipkg/icons';
import { cn } from '@xipkg/utils';

import type { RelatedModuleT } from './types';

type ProductLinksPropsT = {
  title: string;
  related: readonly RelatedModuleT[];
};

export const ProductLinks = ({ title, related }: ProductLinksPropsT) => (
  <section
    data-theme="white"
    className="font-nevermind w-full bg-gray-0 px-4 py-10 md:px-6 md:py-14"
  >
    <div className="mx-auto w-full max-w-[1440px] rounded-[28px] bg-violet-50 p-6 md:rounded-[48px] md:p-14">
      <div className="flex flex-col gap-10">
        <h2 className="max-w-[720px] text-3xl font-medium leading-9 tracking-tight text-gray-900/90 sm:text-4xl sm:leading-10">
          {title}
        </h2>
        <div
          className={cn(
            'grid gap-5 sm:grid-cols-2',
            related.length > 2 ? 'xl:grid-cols-4' : 'xl:grid-cols-2',
          )}
        >
          {related.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col gap-3 rounded-[20px] bg-white px-6 py-6 transition-colors hover:bg-gray-0"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xl font-medium leading-7 text-gray-100">{item.title}</p>
                <ArrowRight
                  className="size-5 shrink-0 fill-fuchsia-500 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </div>
              <p className="font-manrope text-base leading-7 text-gray-900/70">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);
