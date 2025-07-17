'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@xipkg/button';
import Image from 'next/image';
import { cn } from '@xipkg/utils';
import { MobileNavigation, Navigation } from './navigation';

export const Header = () => {
  const [isShowHeader, setIsShowHeader] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsShowHeader(false);
      } else {
        setIsShowHeader(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      data-theme="dark"
      className={cn(
        'bg-gray-0 dark:bg-gray-100 flex justify-center w-full top-0 fixed z-10 transition-transform duration-700',
        isShowHeader ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <div className="bg-transparent z-10 py-6 pl-6 pr-6 justify-between md:w-full w-auto flex gap-0 lg:gap-12 relative items-center max-w-[1600px] mx-auto">
        <Link href="/" className="w-[216px] h-[48px] relative inline-flex items-center gap-4">
          <Image
            src="/logoforwhite.svg"
            alt="logo"
            width={216}
            height={48}
            className="block dark:hidden"
          />
          <Image
            src="/logofordark.svg"
            alt="logo"
            width={216}
            height={48}
            className="hidden dark:block"
          />
        </Link>

        <Navigation />

        <div className="gap-4 hidden md:flex">
          <Button
            asChild
            className="w-[214px] dark:hidden flex bg-brand-0 hover:bg-brand-0 text-brand-100 hover:text-brand-80 rounded-xl"
            variant="ghost"
          >
            <Link href="https://app.sovlium.ru/signup">Зарегистрироваться</Link>
          </Button>
          <Button
            asChild
            className="w-[214px] dark:flex hidden bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent text-gray-10 hover:text-gray-20 rounded-xl"
            variant="secondary"
          >
            <Link href="https://app.sovlium.ru/signup">Зарегистрироваться</Link>
          </Button>

          <Button asChild className="w-[96px] dark:text-gray-0 rounded-xl">
            <Link href="https://app.sovlium.ru/signin">Войти</Link>
          </Button>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
};
