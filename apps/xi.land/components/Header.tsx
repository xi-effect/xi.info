'use client';

import NextLink from 'next/link';
import { Button } from '@xipkg/button';
import { Link } from '@xipkg/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BurgerIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5.33331" y="8" width="21.3333" height="2.66667" rx="0.5" fill="var(--xi-gray-0)" />
    <rect
      x="5.33331"
      y="14.667"
      width="21.3333"
      height="2.66667"
      rx="0.5"
      fill="var(--xi-gray-0)"
    />
    <rect
      x="5.33331"
      y="21.333"
      width="21.3333"
      height="2.66667"
      rx="0.5"
      fill="var(--xi-gray-0)"
    />
  </svg>
);

const arrayOfLinks = [
  {
    label: 'Продукт',
  },
  {
    label: 'Тарифы',
  },
  {
    label: 'Блог',
  },
  {
    label: 'Роадмап',
  },
];

const Header = () => {

  return (
    <div className="w-full h-[72px] md:h-[112px] 2xl:h-[176px] p-4 md:p-8 2xl:py-16 2xl:px-40 flex bg-brand-80 flex-row justify-between items-center z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <Image alt="xieffect logo" src="/xieffect.webp" height={24} width={202} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="hidden md:flex flex-row justify-between w-full max-w-[398px] py-0 px-1.5"
      >
        {arrayOfLinks.map((item, index) => (
          <Link href="#" key={index} variant="hover" theme="white" className="text-[20px] pointer">
            {item.label}
          </Link>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <Button
          variant="default"
          className="w-24 z-10 max-sm:hidden text-gray-100 bg-gray-0 hover:bg-gray-5 focus:bg-gray-5 active:bg-gray-5"
          id="to-signin-button"
          data-umami-event="to-signin-button"
          asChild
        >
          <NextLink href="https://app.xieffect.ru/signin/">Войти</NextLink>
        </Button>
        <Button className="h-12 w-12 z-10 p-0 m-0 sm:hidden">
          <BurgerIcon />
        </Button>
      </motion.div>
    </div>
  );
};

export default Header;
