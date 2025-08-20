'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
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

      // Если мы в самом начале страницы (от 0 до 16px), обязательно показываем хедер
      if (y <= 16) {
        setIsShowHeader(true);
        scrollUpDistance.current = 0;
        lastScrollY.current = y;
        return;
      }

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
      data-theme="white"
      className={cn(
        'bg-gray-0 dark:bg-gray-100 fixed top-0 z-100 flex w-full justify-center transition-all duration-700 ease-in-out',
        isShowHeader ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <div className="bg-transparent z-10 py-6 pl-6 pr-6 justify-between w-full flex gap-0 lg:gap-12 relative items-center max-w-[1600px] md:mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Link href="/" className="w-[216px] h-[48px] relative inline-flex items-center gap-4">
            <Image
              src="/logoforwhite.svg"
              alt="logo"
              width={216}
              height={48}
              className="block dark:hidden transition-opacity duration-500 ease-in-out"
            />
            <Image
              src="/logofordark.svg"
              alt="logo"
              width={216}
              height={48}
              className="hidden dark:block transition-opacity duration-500 ease-in-out"
            />
          </Link>
        </motion.div>
        <Navigation />
        {/* <Button
            asChild
            className="w-[214px] dark:hidden flex bg-brand-0 hover:bg-brand-0
            text-brand-100 hover:text-brand-80 rounded-xl transition-all duration-500 ease-in-out"
            variant="ghost"
          >
            <Link href="https://app.sovlium.ru/signup">Зарегистрироваться</Link>
          </Button>
          <Button
            asChild
            className="w-[214px] dark:flex hidden bg-transparent hover:bg-transparent
            active:bg-transparent focus:bg-transparent text-gray-10 hover:text-gray-20
            rounded-xl transition-all duration-500 ease-in-out"
            variant="secondary"
          >
            <Link href="https://app.sovlium.ru/signup">Зарегистрироваться</Link>
          </Button>
          <Button
            asChild
            className="w-[96px] dark:text-gray-0 rounded-xl transition-all duration-500 ease-in-out"
          >
            <Link href="https://app.sovlium.ru/signin">Войти</Link>
          </Button> */}

        <MobileNavigation />
      </div>
    </header>
  );
};
