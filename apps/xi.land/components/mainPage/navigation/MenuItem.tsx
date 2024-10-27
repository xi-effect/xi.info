import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type MenuItemPropsT = {
  setActive: (item: string) => void;
  active?: string | null;
  item: string;
  href?: string;
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

export const MenuItem = ({ setActive, active, item, children, href }: MenuItemPropsT) => (
  <li
    onMouseEnter={() => setActive(item)}
    className="text-xl flex items-center hover:underline underline-offset-4 decoration-1 hover:ease-in transition decoration-gray-40 hover:decoration-gray-100"
  >
    {href ? (
      <Link href={href} className="py-2.5">
        {item}
      </Link>
    ) : (
      <span className="py-2.5 cursor-pointer">{item}</span>
    )}
    {!href && active !== null && active === item && (
      <motion.div
        transition={transition}
        className="absolute top-[80%] left-1/2 transform -translate-x-1/2 pt-8"
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
