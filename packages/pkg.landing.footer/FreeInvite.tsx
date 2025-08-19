/* eslint-disable no-irregular-whitespace */
'use client';

import { Button } from '@xipkg/button';
import { Link } from '@xipkg/link';
import { usePathname } from 'next/navigation';

export const FreeInvite = () => {
  const pathname = usePathname();

  const isNotMainPage = pathname !== '/';

  if (!isNotMainPage) return null;

  return (
    <div
      id="become-tester"
      className="flex flex-col items-center justify-center gap-6 px-4 py-12 sm:gap-8 sm:px-8 md:py-32"
    >
      <h3 className="text-gray-0 sm:text-h5 md:text-h2 text-center text-[24px] leading-[1.2] font-semibold sm:!leading-[1.1] sm:font-medium md:!leading-[1.3]">
        Начните с бесплатного тарифа
      </h3>
      <Link
        href="https://t.me/sovlium"
        className="z-5 w-full max-w-[343px] sm:max-w-85 md:max-w-116"
        target="_blank"
      >
        <Button
          variant="ghost"
          size="l"
          className="text-brand-80 sm:text-l-base md:text-xl-base bg-brand-0 z-5 h-12 w-full px-4 font-medium shadow-[0px_4px_4px_rgba(69,84,201,0.25)] sm:h-14 sm:w-85 md:w-116"
        >
          Попробовать раньше всех
        </Button>
      </Link>
    </div>
  );
};
