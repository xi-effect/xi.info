'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@xipkg/button';

import { SIGNUP_URL } from 'lib/app_urls';

export const SubscribeView = () => {
  const [marketingConsent, setMarketingConsent] = useState(false);

  // TODO: после подключения эквайринга проверить точные названия статусов/терминов в API Точки.
  // TODO: после подключения эквайринга проверить точное наименование платёжного партнёра в договоре/личном кабинете Точки.
  // TODO: после подключения эквайринга заменить переход на защищённую платёжную страницу и передавать marketingConsent в биллинг-поток.
  const paymentHref = SIGNUP_URL;

  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-0">
      <section className="w-full px-4 pt-28 pb-16 sm:px-8 lg:pt-32">
        <div className="mx-auto flex max-w-[640px] flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-[28px] leading-[1.2] font-semibold text-gray-100 sm:text-h3">
              Оплата тарифа Профи
            </h1>
            <p className="text-m-base leading-7 text-gray-80 sm:text-l-base">
              Вы оплачиваете доступ к функциональности сервиса sovlium на выбранный период. sovlium
              не оказывает образовательные услуги и не является стороной отношений между репетитором
              и учеником.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-4xl border border-gray-10 bg-gray-0 p-6 sm:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-xl-base-size font-semibold text-gray-100">Профи</h2>
              <p className="text-xl-base-size font-semibold text-gray-100">1 499 ₽ / месяц</p>
            </div>
            <p className="text-s-base leading-6 text-gray-60">
              1 499 ₽ / месяц. Подписка продлевается автоматически каждый месяц, пока вы её не
              отмените.
            </p>
            <ul className="flex list-disc flex-col gap-2 pl-5 text-m-base text-gray-80 sm:text-l-base">
              <li>До 30 кабинетов</li>
              <li>20 ГБ хранилища</li>
              <li>ВКС без ограничений</li>
              <li>Расширенные домашние задания</li>
            </ul>
          </div>

          <label className="flex items-start gap-3 text-m-base leading-6 text-gray-80">
            <input
              type="checkbox"
              checked={marketingConsent}
              onChange={(event) => setMarketingConsent(event.target.checked)}
              className="mt-1 size-4 shrink-0 accent-brand-80"
            />
            <span>
              Хочу получать новости, полезные материалы и предложения sovlium.{' '}
              <Link
                href="/legal/marketing-consent"
                className="text-brand-80 underline underline-offset-4"
              >
                Согласие на рекламные сообщения
              </Link>
            </span>
          </label>

          <p className="text-s-base leading-6 text-gray-60 sm:text-m-base">
            Нажимая «Оплатить», вы оформляете подписку Профи за 1 499 ₽/мес. Подписка будет
            автоматически продлеваться каждый месяц до отмены. Вы принимаете{' '}
            <Link href="/legal/offer" className="text-brand-80 underline underline-offset-4">
              Оферту
            </Link>
            ,{' '}
            <Link
              href="/legal/payment-refund"
              className="text-brand-80 underline underline-offset-4"
            >
              условия оплаты и возврата
            </Link>
            , а также соглашаетесь с обработкой персональных данных, необходимых для оплаты,
            фискализации и предоставления доступа к тарифу, в соответствии с{' '}
            <Link href="/legal/consent" className="text-brand-80 underline underline-offset-4">
              Согласием на обработку персональных данных
            </Link>
            .
          </p>

          <Button asChild size="l" className="h-12 w-full rounded-2xl sm:h-14">
            <Link
              href={paymentHref}
              className="inline-flex h-full w-full items-center justify-center"
            >
              Оплатить
            </Link>
          </Button>

          <p className="text-s-base leading-6 text-gray-60">
            Согласие на рекламные сообщения не обязательно для покупки. Оплата проходит через
            защищённую платёжную страницу банка или платёжного партнёра. Данные банковской карты не
            хранятся в sovlium.
          </p>
        </div>
      </section>
    </main>
  );
};
