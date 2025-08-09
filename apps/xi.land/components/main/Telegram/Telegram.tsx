/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client';

import React from 'react';
import { Button } from '@xipkg/button';
import { Link } from '@xipkg/link';

const TgIcon = () => (
  <svg
    width="599"
    height="388"
    viewBox="0 0 599 388"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="hidden md:flex absolute bottom-0 right-0 z-0"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M63.3174 251.734C206.431 189.381 301.863 148.274 349.613 128.414C485.947 71.7075 514.277 61.8571 532.741 61.5318C536.802 61.4602 545.883 62.4667 551.764 67.2394C560.57 74.3842 560.543 89.6569 559.572 99.8603C552.184 177.487 520.216 365.866 503.953 452.809C497.071 489.598 483.521 501.933 470.403 503.14C441.894 505.764 420.246 484.3 392.634 466.2C349.426 437.876 325.016 420.245 283.076 392.607C234.606 360.666 266.027 343.111 293.65 314.421C300.879 306.913 426.489 192.66 428.921 182.296C429.225 181 429.507 176.168 426.636 173.616C423.766 171.065 419.529 171.937 416.472 172.631C412.138 173.615 343.114 219.238 209.398 309.5C189.805 322.953 172.059 329.508 156.159 329.165C138.63 328.786 104.913 319.254 79.847 311.106C49.1029 301.113 24.6681 295.829 26.7958 278.856C27.904 270.016 40.0779 260.975 63.3174 251.734Z"
      fill="#7580D7"
    />
  </svg>
);

export const Telegram = () => (
  <section className="relative flex flex-col items-center justify-center z-0 bg-gray-0 dark:bg-gray-100 h-100dvh min-h-100dvh w-full md:px-8 px-4 py-8 transition-all duration-700 ease-in-out">
    <div className="relative bg-brand-80 rounded-4xl lg:rounded-[64px] w-full max-w-[1600px] p-8 lg:p-16 flex flex-col items-start justify-center gap-2">
      <TgIcon />
      <h3 className="z-5 text-gray-0 text-[32px] sm:text-h3 xl:text-h2 font-medium whitespace-pre-line">
        Присоединяйтесь к сообществу
        <br />
        репетиторов в Telegram
      </h3>
      <p className="z-5 text-gray-0 text-l-base">
        Обменивайтесь опытом и лайфхаками, читайте полезные статьи
        <br />
        и просто общайтесь с коллегами
      </p>
      <Link href="https://t.me/sovlium" className="z-5" target="_blank">
        <Button
          variant="ghost"
          size="l"
          className="mt-2 z-5 text-brand-100 text-l-base rounded-2xl font-medium bg-brand-0"
        >
          Перейти в Telegram
        </Button>
      </Link>
    </div>
  </section>
);
