'use client';

import { Button } from '@xipkg/button';
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '@xipkg/modal';
import { motion } from 'motion/react';
import { Close, Burger } from '@xipkg/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { subMenu } from './Navigation';

// type LinkMenuItemT = {
//   label: string;
//   link: string;
// };

// const arrayOfLinks: LinkMenuItemT[] = [
//   {
//     label: 'Инструменты',
//     link: '#',
//   },
//   {
//     label: 'Тарифы',
//     link: '/prices',
//   },
//   {
//     label: 'Блог',
//     link: '/blog',
//   },
//   {
//     label: 'База знаний',
//     link: '#',
//   },
// ];

export const MobileNavigation = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setBurgerIsOpen((prev) => !prev);
  };

  return (
    <Modal open={burgerIsOpen} onOpenChange={setBurgerIsOpen}>
      <ModalTrigger asChild>
        <Button
          className="z-10 w-12 h-12 p-1 m-0 ml-auto md:hidden bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
          variant="ghost"
        >
          <Burger className="dark:fill-gray-0 fill-gray-100 w-8 h-8" />
        </Button>
      </ModalTrigger>

      <ModalContent
        data-theme="white"
        className="z-100 bg-gray-0 dark:bg-gray-100 h-[100dvh] w-[100dvw] flex flex-col"
        variant="full"
      >
        <ModalTitle className="sr-only">Меню</ModalTitle>
        <ModalHeader
          innerClassName="dark:bg-gray-100 border-none"
          className="w-full border-none flex justify-between"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-transparent inline-flex items-center gap-4"
          >
            <Link href="/" className="w-[216px] h-[64px] relative inline-flex items-center gap-4">
              <Image
                src="/logoforwhite.svg"
                alt="logo"
                width={216}
                height={48}
                className="block transition-opacity duration-500 ease-in-out"
              />
            </Link>
          </motion.div>

          <ModalCloseButton
            onClick={() => toggleBurgerMenu()}
            variant="full"
            className="flex items-center justify-center bg-gray-0 dark:bg-gray-100 w-12 h-12 p-1 m-0 top-8"
          >
            <Close className="dark:fill-gray-0 fill-gray-100 w-8 h-8" />
          </ModalCloseButton>
        </ModalHeader>

        <div className="grow flex flex-col gap-2 w-full mt-4">
          {subMenu.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex"
            >
              <Link
                onClick={toggleBurgerMenu}
                className="text-gray-70 dark:text-gray-20 text-xl font-normal py-4 px-6 w-full hover:text-gray-100 dark:hover:text-gray-0"
                href={item.href}
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </div>
        <ModalFooter className="bg-gray-0 dark:bg-gray-100 px-4 xs:px-8 border-none flex flex-col align-bottom justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-3 sm:grid-cols-2 justify-center items-center w-full gap-8"
          >
            <Button
              asChild
              variant="secondary"
              className="col-span-2 sm:col-span-1 bg-brand-0 dark:text-brand-80 hover:bg-brand-80 hover:text-brand-0 dark:hover:bg-brand-80 active:bg-brand-20 dark:active:bg-brand-20 focus:bg-brand-20 dark:focus:bg-brand-20"
            >
              <Link href="https://app.sovlium.ru/signup" onClick={toggleBurgerMenu}>
                Зарегистрироваться
              </Link>
            </Button>
            <Button asChild className="col-span-1">
              <Link href="https://app.sovlium.ru/signin" onClick={toggleBurgerMenu}>
                Войти
              </Link>
            </Button>
          </motion.div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
