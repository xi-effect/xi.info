'use client';

import { Button } from '@xipkg/button';
import Link from 'next/link';
import Image from 'next/image';
import { steps } from './content';

export const FeaturesMobile = () =>
  steps.map((item) => (
    <section key={item.id} className="h-[100lvh] px-4 py-16 sm:px-8">
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
        <div className="flex flex-col">
          <h5 className="text-h5 sm:text-h3 font-medium mb-2">{item.title}</h5>
          <p className="text-l-base sm:text-xl-base">{item.desc}</p>
          {item.href && (
            <Link href={item.href} className="mt-4">
              <Button className="rounded-xl px-6" size="m">
                {item.cta}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  ));
