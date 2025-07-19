'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@xipkg/button';
import { cn } from '@xipkg/utils';
import { MobileNavigation, Navigation } from './navigation';

const HIDE_AFTER_DOWN = 80; // прячем хедер, если прокрутили вниз дальше 80 px
const SHOW_DELAY_UP = 200; // показываем только после 100 px подъёма

export const Header = () => {
  const [isShowHeader, setIsShowHeader] = useState(true);

  const lastScrollY = useRef(0); // последний Y
  const scrollUpDistance = useRef(0); // сколько подряд проскроллили вверх

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y > lastScrollY.current) {
        /* === ДВИЖЕМСЯ ВНИЗ === */
        scrollUpDistance.current = 0; // обнуляем подъём
        if (!isShowHeader && y < HIDE_AFTER_DOWN) {
          // уже наверху страницы — вернём хедер
          setIsShowHeader(true);
        } else if (y > HIDE_AFTER_DOWN) {
          setIsShowHeader(false); // прячем
        }
      } else if (y < lastScrollY.current) {
        /* === ДВИЖЕМСЯ ВВЕРХ === */
        scrollUpDistance.current += lastScrollY.current - y;

        if (!isShowHeader && scrollUpDistance.current >= SHOW_DELAY_UP) {
          setIsShowHeader(true); // поднимулись ≥100 px — показываем
        }
        // если хедер уже виден, нам не нужно копить расстояние
      }

      lastScrollY.current = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isShowHeader]);

  return (
    <header
      data-theme="dark"
      className={cn(
        'bg-gray-0 dark:bg-gray-100 fixed top-0 z-10 flex w-full justify-center transition-transform duration-700',
        isShowHeader ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      {/* …ваша внутренняя разметка… */}
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
