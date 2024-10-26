import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type MenuItemPropsT = {
  setActive: (item: string) => void;
  active?: string | null;
  item: string;
  isLink?: boolean;
  children?: React.ReactNode;
};

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children, isLink = false }: MenuItemPropsT) => (
  <li onMouseEnter={() => setActive(item)} className="text-xl">
    {isLink ? <Link href="/">{item}</Link> : <span className="cursor-pointer">{item}</span>}
    {!isLink && active !== null && active === item && (
      <motion.div
        transition={transition}
        className="absolute top-[60%] left-1/2 transform -translate-x-1/2 pt-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          layoutId="active"
          className="bg-white backdrop-blur-[48px] rounded-[40px] overflow-hidden border border-gray-30"
        >
          <motion.div layout className="w-max h-full p-8">
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    )}
  </li>
);
