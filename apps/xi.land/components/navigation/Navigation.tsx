'use client';

import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@xipkg/dropdown';
import { cn } from '@xipkg/utils';

import { MenuItem } from './MenuItem';

export const Navigation = () => {
  const [active, setActive] = useState<string | null>(null);

  const classDropdownMenuContent = cn(
    'flex flex-col w-[250px] rounded-[16px] border-1 px-1 py-2 shadow-md shadow-gray-100/10 border-gray-10 gap-2',
  );

  const classDropdownMenuItem = cn(
    'w-full text-gray-100 text-m-base font-normal py-2 px-3 hover:bg-gray-100/10',
  );

  return (
    <nav onMouseLeave={() => setActive(null)} className="z-10 hidden md:block">
      <ul className="flex lg:gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-transparent">
            <MenuItem setActive={setActive} active={active} item="Инструменты" href="#" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className={classDropdownMenuContent}>
            <DropdownMenuItem className={classDropdownMenuItem}>Видеозвонки</DropdownMenuItem>
            <DropdownMenuItem className={classDropdownMenuItem}>Белая доска</DropdownMenuItem>
            <DropdownMenuItem className={classDropdownMenuItem}>Оплаты</DropdownMenuItem>
            <DropdownMenuItem className={classDropdownMenuItem}>Расписание</DropdownMenuItem>
            <DropdownMenuItem className={classDropdownMenuItem}>Материалы</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <MenuItem setActive={setActive} active={active} item="Тарифы" href="/prices" />
        <MenuItem setActive={setActive} active={active} item="Блог" href="/blog" />
        <MenuItem
          setActive={setActive}
          active={active}
          item="База знаний"
          target="_blank"
          href="#"
        />
      </ul>
    </nav>
  );
};
