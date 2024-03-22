'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import { Button } from '@xipkg/button';

export const HeaderDoc = () => (
  <div className="w-full h-[72px] md:h-[112px] 2xl:h-[176px] p-4 md:p-8 2xl:py-16 2xl:px-40 flex justify-center items-center flex-row z-10">
    <div className="w-full max-w-[1920px] flex flex-row justify-between items-center gap-4">
      <NextLink href="/">
        <Image src="/xisupportlight.webp" alt="xi.support logo" height={24} width={243} />
      </NextLink>
      <Button variant="default" className="ml-auto w-24 z-10 max-sm:hidden" asChild>
        <NextLink href="https://app.xieffect.ru/signin">Войти</NextLink>
      </Button>
      <Button
        variant="secondary"
        className="w-[214px] z-10 max-sm:hidden border-2 border-gray-30"
        asChild
      >
        <NextLink href="https://app.xieffect.ru/signup">Зарегистрироваться</NextLink>
      </Button>
    </div>
  </div>
  );
