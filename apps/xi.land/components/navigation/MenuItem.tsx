import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ChevronSmallBottom } from '@xipkg/icons';
import { cn } from '@xipkg/utils';

type MenuItemPropsT = {
  setActive: (item: string | null) => void;
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
      'relative flex items-center pb-1 text-base font-medium leading-5 text-gray-80 dark:text-gray-20',
    )}
  >
    {href ? (
      <Link
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        href={href}
        className="px-0 py-1 transition-colors duration-200 hover:text-gray-100 dark:hover:text-gray-0"
      >
        {item}
      </Link>
    ) : (
      <span className="flex cursor-pointer items-center gap-1 px-0 py-1">
        <span>{item}</span>
        <ChevronSmallBottom
          aria-hidden
          className={cn(
            'size-4 shrink-0 fill-current opacity-80 transition-transform duration-200',
            active === item && 'rotate-180',
          )}
        />
      </span>
    )}
    {!href && active !== null && active === item && (
      <motion.div
        transition={transition}
        className="absolute left-0 top-full z-60 w-auto min-w-[232px] -mt-3 pt-3"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          layoutId="active"
          className="overflow-hidden rounded-2xl border-2 border-gray-10 bg-gray-0 dark:border-gray-80 dark:bg-gray-100"
        >
          <motion.div layout className="h-full w-full p-2">
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    )}
  </div>
);
