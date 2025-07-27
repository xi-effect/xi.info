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

type LinkMenuItemT = {
  label: string;
  link: string;
};

const arrayOfLinks: LinkMenuItemT[] = [
  {
    label: 'Инструменты',
    link: '#',
  },
  {
    label: 'Тарифы',
    link: '/prices',
  },
  {
    label: 'Блог',
    link: '/blog',
  },
  {
    label: 'База знаний',
    link: '#',
  },
];

export const MobileNavigation = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setBurgerIsOpen((prev) => !prev);
  };

  const pathname = usePathname();

  // Определяем тему на основе пути
  const isMainPage = pathname === '/';
  const theme = isMainPage ? 'dark' : 'white';

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
        data-theme={theme}
        className="bg-gray-0 dark:bg-gray-100 h-[100dvh] w-[100dvw] flex flex-col"
        variant="full"
      >
        <ModalTitle className="sr-only">Меню</ModalTitle>
        <ModalHeader
          innerClassName="bg-gray-0 dark:bg-gray-100 border-none"
          className="w-full border-none flex justify-between"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-transparent inline-flex items-center gap-4"
          >
            <Link
              href="/"
              className="bg-transparent w-[216px] h-[48px] relative inline-flex items-center gap-4"
            >
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

          <ModalCloseButton
            onClick={() => toggleBurgerMenu()}
            variant="full"
            className="flex items-center justify-center bg-gray-0 dark:bg-gray-100 w-12 h-12 p-1 m-0"
          >
            <Close className="fill-gray-100 dark:fill-gray-0 fill-gray-100 w-8 h-8" />
          </ModalCloseButton>
        </ModalHeader>

        <div className="grow flex flex-col gap-2 w-full mt-4">
          {arrayOfLinks.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex"
            >
              <Link
                onClick={toggleBurgerMenu}
                className="text-gray-70 dark:text-gray-20 text-xl font-normal py-4 px-6 w-full hover:text-gray-100"
                href={item.link}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
        <ModalFooter className="bg-gray-0 dark:bg-gray-100 px-4 xs:px-8 border-none flex flex-col align-bottom justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center w-full gap-4"
          >
            <div className="gap-4 flex w-full">
              <Button
                asChild
                className="w-full dark:hidden flex bg-brand-0 hover:bg-brand-0 text-brand-100 hover:text-brand-80 rounded-xl transition-all duration-500 ease-in-out"
                variant="ghost"
              >
                <Link href="https://app.sovlium.ru/signup">Зарегистрироваться</Link>
              </Button>
              <Button
                asChild
                className="w-full dark:flex hidden bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent text-gray-10 hover:text-gray-20 rounded-xl transition-all duration-500 ease-in-out"
                variant="secondary"
              >
                <Link href="https://app.sovlium.ru/signup">Зарегистрироваться</Link>
              </Button>
              <Button
                asChild
                className="w-full dark:text-gray-0 rounded-xl transition-all duration-500 ease-in-out"
              >
                <Link href="https://app.sovlium.ru/signin">Войти</Link>
              </Button>
            </div>
          </motion.div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
