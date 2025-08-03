'use client';

import React, { useState } from 'react';

import { MenuItem } from './MenuItem';
// import { SubMenuItem } from './SubMenuItem';

const subMenu = [
  {
    title: 'Видеозвонки',
    href: '/calls',
  },
  {
    title: 'Белая Доска',
    href: '/whiteboard',
  },
  {
    title: 'Оплаты',
    href: '/payments',
  },
  {
    title: 'Расписание',
    href: '/calendar',
  },
  {
    title: 'Материалы',
    href: '/materials',
  },
];

export const Navigation = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav onMouseLeave={() => setActive(null)} className="z-10 hidden md:block">
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
          <MenuItem setActive={setActive} active={active} item={item.title} href={item.href} />
        ))}

        {/* <MenuItem setActive={setActive} active={active} item="Тарифы" href="/prices" />
        <MenuItem setActive={setActive} active={active} item="Блог" href="/blog" /> */}
        {/* <MenuItem
          setActive={setActive}
          active={active}
          item="База знаний"
          target="_blank"
          href="https://support.xieffect.ru/"
        /> */}
      </div>
    </nav>
  );
};
