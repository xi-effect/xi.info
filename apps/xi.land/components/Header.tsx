'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@xipkg/button';
import Image from 'next/image';
import { MobileNavigation, Navigation } from './navigation';

export const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`flex justify-center py-4 md:px-0 px-4 xs:px-8 lg:px-8 xs:py-8 w-full top-0 fixed z-10 transition-transform duration-700 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="z-10 justify-between w-full md:w-auto flex gap-6 lg:gap-14 rounded-[40px] relative bg-white bg-opacity-70 backdrop-blur-[48px] py-4 items-center pl-8 pr-4 outline outline-1 outline-gray-30">
        <Link href="/" className="w-[202px] h-[24px] relative">
          <Image src="/xieffectlight.webp" fill alt="xi effect logo" priority />
        </Link>
        <Navigation />
        <div className="gap-2 hidden md:flex">
          <Button asChild variant="ghost" className="px-4 lg:px-6 rounded-full bg-transparent">
            <Link href="https://app.xieffect.ru/signin">Войти</Link>
          </Button>
          <Button asChild className="rounded-full px-4 lg:px-6 bg-brand-80">
            <Link href="https://app.xieffect.ru/signup">Зарегистрироваться</Link>
          </Button>
        </div>
        <MobileNavigation />
      </div>
    </header>
  );
};
