'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@xipkg/button';

export const HeaderDoc = () => (
  <div className="w-full h-[72px] md:h-[112px] 2xl:h-[176px] p-4 md:p-8 2xl:py-16 2xl:px-40 flex justify-center items-center flex-row z-10">
    <div className="w-full max-w-[1920px] flex flex-row justify-between items-center gap-4">
      <Link href="/">
        <Image
          src="/logoforwhite.svg"
          alt="Sovlium Support logo"
          width={216}
          height={64}
          className="h-[24px] w-auto sm:h-[40px]"
        />
      </Link>
      <div className="hidden md:flex items-center gap-1.5 lg:gap-2.5 xl:gap-4 ml-auto">
        <Button
          asChild
          variant="secondary"
          className="text-sm lg:text-m-base md:px-3 lg:px-auto xl:w-53.5 bg-brand-0 bg-brand-0 dark:text-brand-80 hover:bg-brand-80 hover:text-brand-0 dark:hover:bg-brand-80 active:bg-brand-20 dark:active:bg-brand-20 focus:bg-brand-20 dark:focus:bg-brand-20"
        >
          <Link href="https://app.sovlium.ru/signup">Зарегистрироваться</Link>
        </Button>
        <Button asChild className="text-sm lg:text-m-base md:px-3 lg:px-auto xl:w-24">
          <Link href="https://app.sovlium.ru/signin">Войти</Link>
        </Button>
      </div>
    </div>
  </div>
);
