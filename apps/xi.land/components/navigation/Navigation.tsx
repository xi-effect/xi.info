'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

import { MenuItem } from './MenuItem';
// import { SubMenuItem } from './SubMenuItem';

export const subMenu = [
  {
    title: 'Расписание',
    href: '/calendar',
  },
  {
    title: 'Видеозвонки',
    href: '/calls',
  },
  {
    title: 'Онлайн-доска',
    href: '/whiteboard',
  },
  {
    title: 'Материалы',
    href: '/materials',
  },
  {
    title: 'Оплаты',
    href: '/payments',
  },
];

export const Navigation = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      onMouseLeave={() => setActive(null)}
      className="z-10 hidden md:block"
    >
      <div className="flex lg:gap-2">
        {/* <MenuItem setActive={setActive} active={active} item="Возможности">
          <div className="flex flex-col gap-0">
            {subMenu.map((item) => (
              <SubMenuItem
                key={item.title}
                title={item.title}
                href={item.href}
                setActive={setActive}
              />
            ))}
          </div>
        </MenuItem> */}

        {subMenu.map((item) => (
          <MenuItem
            key={item.title}
            setActive={setActive}
            active={active}
            item={item.title}
            href={item.href}
          />
        ))}

        {/* <MenuItem setActive={setActive} active={active} item="Тарифы" href="/prices" />
        <MenuItem setActive={setActive} active={active} item="Блог" href="/blog" /> */}
        {/* <MenuItem
          setActive={setActive}
          active={active}
          item="База знаний"
          target="_blank"
          href="https://support.sovlium.ru/"
        /> */}
      </div>
    </motion.nav>
  );
};
