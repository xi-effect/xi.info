'use client';

import NextLink from 'next/link';
import { Button } from '@xipkg/button';
import { Link } from '@xipkg/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Modal, ModalTrigger } from '@xipkg/modal';
import { MobileMenu } from './MobileMenu';

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

export type LinkMenuItem = {
  label: string;
  link: string;
};

const arrayOfLinks: LinkMenuItem[] = [
  {
    label: 'Продукт',
    link: '/product',
  },
  {
    label: 'Поддержка',
    link: 'https://support.xieffect.ru/',
  },
  {
    label: 'О нас',
    link: '/about-us',
  },
];

const HeaderWhite = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setBurgerIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-[72px] md:h-[112px] 2xl:h-[176px] p-4 md:p-8 2xl:py-16 2xl:px-40 flex justify-center items-center bg-brand-80 flex-row z-10">
      <div className="w-full max-w-[1920px] flex flex-row justify-between items-center">
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
          className="hidden md:flex flex-row justify-center gap-8"
        >
          {arrayOfLinks.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              variant="hover"
              theme="white"
              className="text-[20px] pointer"
            >
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
          <Modal open={burgerIsOpen}>
            <MobileMenu toggleBurgerMenu={toggleBurgerMenu} links={arrayOfLinks} />
            <ModalTrigger asChild>
              <Button onClick={toggleBurgerMenu} className="h-12 w-12 z-10 p-0 m-0 sm:hidden">
                <BurgerIcon />
              </Button>
            </ModalTrigger>
          </Modal>
        </motion.div>
      </div>
    </div>
  );
};

export default HeaderWhite;
