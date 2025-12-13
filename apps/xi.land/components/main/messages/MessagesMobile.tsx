'use client';

import Image from 'next/image';
import { messages } from './content';
import { cn } from '@xipkg/utils';

export const MessagesMobile = () => (
  <>
    <div className="px-4 py-6">
      <h2 className="dark:text-gray-0 text-gray-100 text-center text-xl-base leading-[1.2] sm:leading-[1.1] md:leading-[1] xs:text-[40px] md:text-[48px] font-semibold sm:font-medium md:font-semibold">
        Переход в онлайн
        <br />
        изменил всё
      </h2>
    </div>
    {messages.map((item) => (
      <section key={item.id} className="p-4 pt-8 bg-gray-0">
        <div className="h-full flex flex-col justify-between gap-4">
          <div className="relative flex items-center justify-center ">
            <Image width={511} height={734} alt="messages image" src={item.mobileImage} />
          </div>
          <div className="flex gap-3 items-baseline">
            <p className={cn('ml-2 text-[24px] font-medium uppercase', item.className)}>
              {item.content}
            </p>
          </div>
        </div>
      </section>
    ))}
    ;
  </>
);
