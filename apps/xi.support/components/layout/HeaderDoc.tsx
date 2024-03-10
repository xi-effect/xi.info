'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import NextLink from 'next/link';
import { Button } from '@xipkg/button';

const HeaderDoc = () => {

  return (
    <header className="flex flex-row p-2 px-8 justify-center items-center h-[112px] w-full z-10 gap-8">
      <NextLink href="/">
        <Image
          src="/assets/home-page/xisupportlight.webp"
          alt="xi.support logo"
          height={24}
          width={243}
        />
      </NextLink>
      <Button variant="default" className="ml-auto w-24 z-10 max-sm:hidden" asChild>
        <NextLink href="https://app.xieffect.ru/signin">Войти</NextLink>
      </Button>
      <Button variant="secondary" className="w-[214px] z-10 max-sm:hidden border-none" asChild>
        <NextLink href="https://app.xieffect.ru/signup">Зарегистрироваться</NextLink>
      </Button>
    </header>
  );
};

export default HeaderDoc;