/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { cn } from '@xipkg/utils';

type MenuItemPropsT = {
  setActive: (item: string) => void;
  active?: string | null;
  item: string;
  href?: string;
  children?: React.ReactNode;
  target?: '_self' | '_blank';
};

const transition = {
  type: 'spring' as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  href,
  target = '_self',
}: MenuItemPropsT) => (
  <div
    onMouseEnter={() => setActive(item)}
    className={cn(
      'relative text-s-base text-gray-70 dark:text-gray-20 font-normal lg:text-l-base flex items-center',
    )}
  >
    {href ? (
      <Link
        target={target}
        href={href}
        className="py-2.5 px-3 underline-offset-4 decoration-1 hover:underline transition-colors duration-200"
      >
        {item}
      </Link>
    ) : (
      <span className="py-2.5 md:py-3.5 lg:p-2.5 px-3 cursor-pointer">{item}</span>
    )}
    {!href && active !== null && active === item && (
      <motion.div
        transition={transition}
        className="absolute top-6 left-[-10px] transform pt-8 w-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          layoutId="active"
          className="bg-gray-0 dark:bg-gray-100 rounded-2xl overflow-hidden border-2 border-gray-10 dark:border-gray-80"
        >
          <motion.div layout className="w-[250px] h-full p-2">
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    )}
  </div>
);
