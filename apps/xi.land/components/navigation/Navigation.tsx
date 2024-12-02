'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@xipkg/button';
import { MenuItem } from './MenuItem';
import { SubMenuItem } from './SubMenuItem';

const subMenu = [
  {
    title: 'Тесты и задания',
    description: 'Быстро оценивайте знания',
    href: '/product#tasksAndTests',
    image: '/assets/mainPage/navigation/1.webp',
  },
  {
    title: 'Видеозвонки',
    description: 'Проводите уроки',
    href: '/product#videocalls',
    image: '/assets/mainPage/navigation/2.webp',
  },
  {
    title: 'Сообщения',
    description: 'Оставайтесь на связи',
    href: '/product#chats',
    image: '/assets/mainPage/navigation/3.webp',
  },
  {
    title: 'Онлайн-доска',
    description: 'Создавайте интерактивные материалы',
    href: '/product#whiteboard',
    image: '/assets/mainPage/navigation/4.webp',
  },
];

export const Navigation = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav onMouseLeave={() => setActive(null)} className="z-10 hidden md:block">
      <ul className="flex lg:gap-2">
        <MenuItem setActive={setActive} active={active} item="Продукт">
          <div className="grid grid-cols-2 gap-8">
            {subMenu.map((item) => (
              <SubMenuItem
                key={item.title}
                title={item.title}
                description={item.description}
                href={item.href}
                src={item.image}
                setActive={setActive}
              />
            ))}
          </div>
          <div className="mt-8 flex">
            <Button variant="secondary" className="w-full" onClick={() => setActive(null)}>
              <Link href="/product" className="w-full h-full flex justify-center items-center">
                Посмотреть все
              </Link>
            </Button>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Тарифы" href="/prices" />
        <MenuItem setActive={setActive} active={active} item="Блог" href="/blog" />
        <MenuItem
          setActive={setActive}
          active={active}
          item="Руководства"
          target="_blank"
          href="https://support.xieffect.ru/"
        />
      </ul>
    </nav>
  );
};
