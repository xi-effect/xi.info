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
import { motion } from 'framer-motion';
import { Close, Burger } from '@xipkg/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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

  return (
    <Modal open={burgerIsOpen}>
      <ModalTrigger asChild>
        <Button
          size="l"
          onClick={toggleBurgerMenu}
          className="z-10 xs:w-12 xs:h-12 p-1 m-0 ml-auto md:hidden bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
          variant="ghost"
        >
          <Burger className="fill-gray-0 xs:w-8 xs:h-8" />
        </Button>
      </ModalTrigger>

      <ModalContent className="h-[100dvh] flex flex-col" variant="full">
        <ModalHeader className="w-full border-none px-4 xs:px-8 py-6">
          <ModalTitle className="flex  align-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-4"
            >
              <div className="bg-gray-0 rounded-[16px] p-0">
                <Image src="/logo.svg" alt="logo" width={64} height={64} />
              </div>

              <Image alt="logo" src="/sovliumDark.svg" height={24} width={114} />
            </motion.div>

            <ModalCloseButton
              onClick={() => toggleBurgerMenu()}
              variant="noStyle"
              className="bg-transparent"
            >
              <Close className="fill-gray-100" />
            </ModalCloseButton>
          </ModalTitle>
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
                className="text-gray-70 text-xl font-normal py-4 px-6 w-full hover:text-gray-100"
                href={item.link}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
        <ModalFooter className="px-4 xs:px-8 border-none flex flex-col align-bottom justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center w-full gap-4"
          >
            <Button
              onClick={toggleBurgerMenu}
              size="m"
              variant="secondary"
              asChild
              className="flex-1 min-w-0 border-0 bg-brand-0"
            >
              <Link href="#" className="text-s-base sm:text-m-base font-medium text-brand-100">
                Зарегистрироваться
              </Link>
            </Button>

            <Button onClick={toggleBurgerMenu} size="m" asChild className="flex-1 min-w-0">
              <Link href="#" className="text-s-base sm:text-m-base font-medium text-brand-0">
                Войти
              </Link>
            </Button>
          </motion.div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
