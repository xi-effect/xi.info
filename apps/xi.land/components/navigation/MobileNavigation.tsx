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
import { motion } from 'motion';
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
    label: 'Возможности',
    link: '/product',
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
    label: 'Помощь',
    link: 'https://support.xieffect.ru/',
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
          size="s"
          onClick={toggleBurgerMenu}
          className="z-10 xs:w-12 xs:h-12 p-1 rounded-full m-0 ml-auto md:hidden"
        >
          <Burger className="fill-gray-0 xs:w-8 xs:h-8" />
        </Button>
      </ModalTrigger>
      <ModalContent className="h-[100dvh] flex flex-col" variant="full">
        <ModalHeader className="border-none px-4 py-8 xs:px-8 xs:py-[60px]">
          <ModalCloseButton
            onClick={() => toggleBurgerMenu()}
            className="h-8 w-8 xs:w-12 xs:h-12 sm:right-12 sm:bg-brand-80 sm:top-12 ml-auto xs:right-12 xs:top-12 bg-brand-80 flex items-center justify-center p-1 rounded-full right-8"
            variant="full"
          >
            <Close className="fill-gray-0 xs:w-8 xs:h-8" />
          </ModalCloseButton>
          <ModalTitle className="py-2 xs:p-0 xs:m-0" style={{ margin: 0 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex">
              <Image
                alt="xieffect logo"
                src="/xieffectlight.webp"
                height={16}
                width={135}
                className="xs:w-[202px] xs:h-[24px]"
              />
            </motion.div>
          </ModalTitle>
        </ModalHeader>
        <div className="px-4 xs:px-8 py-6 grow flex flex-col gap-4">
          {arrayOfLinks.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex"
            >
              <Link
                onClick={toggleBurgerMenu}
                className="text-gray-60 text-xl-base py-2 w-full"
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
            className="flex items-center w-full gap-8"
          >
            <Button onClick={toggleBurgerMenu} size="m" className="px-6 xs:w-full" asChild>
              <Link href="https://app.xieffect.ru/signin/">Войти</Link>
            </Button>
            <Button
              onClick={toggleBurgerMenu}
              size="m"
              className="px-6 xs:w-full"
              variant="secondary"
              asChild
            >
              <Link href="https://app.xieffect.ru/signup/">Зарегистрироваться</Link>
            </Button>
          </motion.div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
