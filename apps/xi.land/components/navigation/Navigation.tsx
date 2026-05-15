'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

import { MenuItem } from './MenuItem';
import { SubMenuItem } from './SubMenuItem';
import { mainNavLinks, subMenu } from './nav_config';

export const Navigation = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      onMouseLeave={() => setActive(null)}
      className="z-10 hidden pb-3 md:block"
    >
      <div className="flex items-center gap-12">
        <MenuItem setActive={setActive} active={active} item="Возможности">
          <div className="flex flex-col gap-0 py-1">
            {subMenu.map((item) => (
              <SubMenuItem
                key={item.title}
                title={item.title}
                href={item.href}
                setActive={setActive}
              />
            ))}
          </div>
        </MenuItem>

        {mainNavLinks.map((link) => (
          <MenuItem
            key={link.title}
            setActive={setActive}
            active={active}
            item={link.title}
            href={link.href}
            target={link.external ? '_blank' : '_self'}
          />
        ))}
      </div>
    </motion.nav>
  );
};
