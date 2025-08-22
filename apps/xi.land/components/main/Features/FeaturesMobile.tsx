'use client';

import { Button } from '@xipkg/button';
import Link from 'next/link';
import Image from 'next/image';
import { steps } from './content';

export const FeaturesMobile = () =>
  steps.map((item) => (
    <section key={item.id} className="px-4 py-17 sm:py-16 sm:px-8">
      <div className="flex flex-col gap-16 h-full">
        <div className="max-h-[400px] sm:max-h-[500px] h-full relative flex-1 overflow-hidden">
          <Image
            className="w-full h-full object-cover object-left-top"
            src={`/assets/main/Features/${item.id}.webp`}
            width={343}
            height={400}
            alt="features image"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-gray-100 text-xl-base sm:text-h5  leading-[1.2] sm:leading-[1.1] font-semibold sm:font-medium">
            {item.title}
          </h5>
          <p className="text-gray-80 text-m-base sm:text-l-base">{item.desc}</p>
          {item.href && (
            <Link href={item.href} className="mt-2 flex justify-center sm:justify-start">
              <Button
                className="rounded-xl px-6 w-full sm:max-w-80 h-12 text-m-base sm:!text-l-base text-brand-0 shadow-[0px_4px_4px_rgba(69,84,201,0.25)]"
                size="m"
              >
                {item.cta}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  ));
