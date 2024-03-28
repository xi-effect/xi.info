import { Button } from '@xipkg/button';
import { ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalTitle } from '@xipkg/modal';
import { motion } from 'framer-motion';
import { Close } from '@xipkg/icons';
import Image from 'next/image';
import NextLink from 'next/link';
import { LinkMenuItem } from './HeaderWhite';

interface IPropMobileHeader {
  links: LinkMenuItem[];
  toggleBurgerMenu: () => void;
}

export const MobileMenu = ({ links, toggleBurgerMenu }: IPropMobileHeader) => (
  <ModalContent className="h-[100dvh]" variant="full">
    <ModalHeader className="border-none">
      <ModalCloseButton
        onClick={() => toggleBurgerMenu()}
        className="h-10 w-10 ml-auto sm:absolute bg-transparent flex p-2 sm:top-0 xl:top-0 right-[16px] sm:right-0 xl:right-[-56px]"
        variant="full"
      >
        <Close />
      </ModalCloseButton>
      <ModalTitle>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <Image alt="xieffect logo" src="/xieffectlight.webp" height={24} width={202} />
        </motion.div>
      </ModalTitle>
    </ModalHeader>
    <div className="px-7">
      {links &&
        [
          {
            label: 'Главная',
            link: '/',
          },
          ...links,
        ].map((item) => (
          <motion.div
            key={item.link}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="w-full md:w-fit flex flex-col sm:flex-row gap-4 mb-8 "
          >
            <NextLink className="opacity-40 text-[24px]" href={item.link}>
              {item.label}
            </NextLink>
          </motion.div>
        ))}
    </div>
    <ModalFooter className="border-none flex flex-col align-bottom justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="flex items-center w-full gap-10"
      >
        <div className="w-2/6">
          <Button className="w-full p-5" size="s" asChild>
            <NextLink href="https://app.xieffect.ru/signin/">Войти</NextLink>
          </Button>
        </div>
        <div className="w-4/6">
          <Button size="s" className="w-full p-5" variant="secondary" asChild>
            <NextLink href="https://app.xieffect.ru/signup/">Зарегистрироваться</NextLink>
          </Button>
        </div>
      </motion.div>
    </ModalFooter>
  </ModalContent>
);
