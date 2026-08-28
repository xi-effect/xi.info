'use client';

import { useEffect } from 'react';

import { SUBSCRIBE_PRO_URL } from 'lib/app_urls';

export const SubscribeRedirect = () => {
  useEffect(() => {
    window.location.replace(SUBSCRIBE_PRO_URL);
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-0 px-4">
      <div className="flex max-w-[480px] flex-col items-center gap-4 text-center">
        <h1 className="text-[28px] leading-[1.2] font-semibold text-gray-100">
          Переходим к оформлению подписки
        </h1>
        <p className="text-m-base leading-7 text-gray-80">
          Оплата тарифа Про оформляется в приложении sovlium. Сейчас мы откроем вход, а затем
          страницу подписки.
        </p>
        <a
          href={SUBSCRIBE_PRO_URL}
          className="text-m-base text-brand-80 underline underline-offset-4"
        >
          Продолжить в приложении
        </a>
      </div>
    </main>
  );
};
