'use client';

import { Button } from '@xipkg/button';
import { motion } from 'motion/react';
import NextLink from 'next/link';

interface ICookieBannerProps {
  acceptCookies: () => void;
}

const CookieBanner = ({ acceptCookies }: ICookieBannerProps) => {
  return (
    <motion.div
      initial={{ y: 220 }}
      animate={{ y: 0 }}
      exit={{ y: 220 }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 100,
        duration: 0.5,
      }}
      className="max-[498px]:left-4 right-4 left-auto bottom-4 sm:left-auto sm:right-8 sm:bottom-8 fixed bg-gray-0 rounded-2xl z-50 max-w-[450px] min-h-[180px] p-4 border-2 border-gray-20"
    >
      <p className="mb-2 text-2xl font-semibold">Мы используем файлы куки 🍪</p>
      <p className="text-s-base mb-4">
        Продолжая пользоваться нашим сайтом, вы соглашаетесь на обработку персональных данных в
        соответствии с{' '}
        <NextLink href="/legal/privacy" target="_blank" className="text-brand-80 underline">
          политикой конфиденциальности
        </NextLink>
      </p>
      <Button size={'s'} className="w-full sm:w-auto" onClick={acceptCookies}>
        Принимаю
      </Button>
    </motion.div>
  );
};

export { CookieBanner };
