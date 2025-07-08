'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@xipkg/button';
import Image from 'next/image';
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
      className={`bg-transparent flex justify-center w-full top-0 fixed z-10 transition-transform duration-700 ${isShowHeader ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="bg-gray-100 z-10 py-6 pl-8 pr-5 justify-between w-full md:w-auto flex gap-6 lg:gap-16 relative items-center">
        <Link href="/" className="w-[216px] h-[64px] relative inline-flex items-center gap-4">
          <div className="bg-gray-0 rounded-[16px] p-0">
            <Image src="/logo.svg" alt="logo" width={64} height={64} />
          </div>
          <Image src="/sovliumLight.svg" alt="logo" width={114} height={24} />
        </Link>

        <Navigation />

        <div className="gap-4 hidden md:flex">
          <Button
            asChild
            className="rounded-md px-4 lg:px-6 border-2 border-gray-30 bg-transparent text-gray-10 hover:bg-transparent focus:bg-transparent active:bg-transparent hover:opacity-75 transition-opacity duration-300"
            size="m"
            variant="ghost"
          >
            <Link href="#">Зарегистрироваться</Link>
          </Button>

          <Button asChild className="px-4 lg:px-6 rounded-md" size="m">
            <Link href="https://app.xieffect.ru/signin">Войти</Link>
          </Button>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
};
