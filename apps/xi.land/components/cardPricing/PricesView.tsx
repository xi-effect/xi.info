'use client';

import { useState } from 'react';
import { cn, useMediaQuery } from '@xipkg/utils';
import { ChevronSmallBottom } from '@xipkg/icons';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'pkg.accordion';

import { CardPricing } from './CardPricing';
import { plansPricing, pricingFaq, comparisonSections } from './dataForPricing';

const sectionClass = 'w-full px-4 sm:px-8 md:px-6';
const containerClass = 'mx-auto w-full max-w-[1320px]';

const sectionId = (title: string) => `cmp-${title}`;

const ComparisonSoonBadge = () => (
  <span className="inline-flex shrink-0 rounded-full border border-gray-20 px-2 py-0.5 text-[11px] leading-none font-semibold text-gray-70">
    Скоро
  </span>
);

const chipClass = (active: boolean) =>
  cn(
    'shrink-0 rounded-full border px-3 py-1.5 text-s-base transition-colors',
    active
      ? 'border-brand-80 bg-white text-brand-80'
      : 'border-gray-20 bg-white text-gray-80 hover:border-brand-80 hover:text-brand-80',
  );

const fadeUp = (reduceMotion: boolean | null, delay = 0) =>
  reduceMotion
    ? { initial: false as const, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: {
          type: 'spring' as const,
          stiffness: 380,
          damping: 28,
          delay,
        },
      };

export const PricesView = () => {
  const reduceMotion = useReducedMotion();
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)');
  const [openSections, setOpenSections] = useState<Set<string>>(
    () => new Set(comparisonSections.map((section) => section.title)),
  );

  const allOpen = openSections.size === comparisonSections.length;

  const toggleSection = (title: string) => {
    setOpenSections((current) => {
      const next = new Set(current);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  const toggleAllSections = () => {
    setOpenSections(
      allOpen ? new Set() : new Set(comparisonSections.map((section) => section.title)),
    );
  };

  return (
    <main className="font-nevermind flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-0">
      <section className={cn(sectionClass, 'pt-28 pb-12 sm:pt-32 lg:pt-36 lg:pb-16')}>
        <div className={containerClass}>
          <motion.div
            className="mx-auto mb-10 flex max-w-[720px] flex-col items-center gap-4 text-center lg:mb-14"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: 'easeOut' }}
          >
            <p className="text-s-base font-semibold tracking-[0.08em] text-brand-80 uppercase">
              Тарифы
            </p>
            <h1 className="text-pretty text-[28px] leading-[1.15] font-semibold tracking-tight text-gray-100 sm:text-[40px] lg:text-[48px]">
              Выберите формат работы с sovlium
            </h1>
          </motion.div>

          <div className="mx-auto flex max-w-[1080px] flex-col gap-5 md:grid md:grid-cols-2 md:grid-rows-[auto_auto_auto_auto_auto_auto_1fr] md:gap-x-6 md:gap-y-0 lg:gap-x-6">
            {plansPricing.map((plan, index) => (
              <CardPricing key={plan.id} appearIndex={index} {...plan} />
            ))}
          </div>

          <motion.aside
            id="basic-plan-note"
            className="mx-auto mt-8 max-w-[1080px] scroll-mt-28 rounded-[28px] border border-gray-20 bg-white px-5 py-5 sm:mt-10 sm:rounded-4xl sm:px-8 sm:py-7"
            {...fadeUp(reduceMotion, 0.12)}
            viewport={{ once: true, amount: 0.35 }}
          >
            <p className="text-s-base font-semibold tracking-[0.08em] text-brand-80 uppercase">
              Про Базовый тариф
            </p>
            <h2 className="mt-3 text-pretty text-[22px] leading-7 font-medium tracking-tight text-gray-100 sm:text-[28px] sm:leading-9">
              Мы специально не стали прятать функции
            </h2>
            <p className="mt-3 text-pretty text-m-base leading-7 text-gray-80 sm:text-l-base sm:leading-8">
              Лимиты на Базовом касаются нагрузки, а не самого инструмента. Так вы можете
              попробовать платформу целиком: от интерактивных упражнений на доске до свободных окон
              в расписании, куда ещё помещается урок, от таймкодов в аудировании до готовых задач из
              банка заданий.
            </p>
          </motion.aside>
        </div>
      </section>

      <section className={cn(sectionClass, 'pb-16 lg:pb-20')}>
        <div className={containerClass}>
          <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <motion.div
              className="flex max-w-[640px] flex-col gap-3"
              {...fadeUp(reduceMotion)}
              viewport={{ once: true, amount: 0.4 }}
            >
              <h2 className="text-[24px] leading-8 font-medium tracking-tight text-gray-100 sm:text-[32px] sm:leading-10 lg:text-[40px] lg:leading-10">
                Возможности платформы
              </h2>
              <p className="text-pretty text-m-base leading-7 text-gray-80">
                Все функции sovlium — в одном списке. Лимиты тарифов указаны в карточках выше.
              </p>
            </motion.div>
            <button
              type="button"
              onClick={toggleAllSections}
              className={cn(chipClass(false), 'inline-flex w-fit items-center gap-1.5 font-medium')}
            >
              <ChevronSmallBottom
                className={cn(
                  'size-4 fill-current transition-transform duration-200',
                  allOpen && 'rotate-180',
                )}
              />
              {allOpen ? 'Свернуть все' : 'Раскрыть все'}
            </button>
          </div>

          <div className="min-w-0 overflow-hidden rounded-[20px] border border-gray-20 bg-white">
            {comparisonSections.map((section, index) => {
              const isOpen = openSections.has(section.title);

              return (
                <div key={section.title} className={cn(index > 0 && 'border-t border-gray-20')}>
                  <button
                    type="button"
                    id={sectionId(section.title)}
                    aria-expanded={isOpen}
                    onClick={() => toggleSection(section.title)}
                    className={cn(
                      'flex w-full min-w-0 scroll-mt-28 items-center justify-between gap-3 bg-transparent px-4 py-4 text-left text-m-base font-semibold transition-colors sm:px-6 sm:text-l-base',
                      isOpen ? 'text-brand-80' : 'text-gray-100 hover:text-brand-80',
                    )}
                  >
                    <span className="min-w-0 wrap-break-word">{section.title}</span>
                    <ChevronSmallBottom
                      className={cn(
                        'size-4 shrink-0 fill-current transition-transform duration-200',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>

                  {isOpen
                    ? section.rows.map((row, rowIndex) => (
                        <div
                          key={row.feature}
                          className={cn(
                            'flex items-start justify-between gap-3 border-t border-gray-10 px-4 py-3 sm:px-6',
                            rowIndex % 2 === 1 ? 'bg-brand-0' : 'bg-transparent',
                          )}
                        >
                          <div className="min-w-0">
                            <p className="text-pretty text-s-base leading-6 text-gray-100 sm:text-m-base">
                              {row.feature}
                            </p>
                            {row.hint ? (
                              <p className="mt-0.5 text-pretty text-xs-base leading-5 text-gray-60 sm:text-s-base">
                                {row.hint}
                              </p>
                            ) : null}
                          </div>
                          {row.soon ? <ComparisonSoonBadge /> : null}
                        </div>
                      ))
                    : null}
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { href: '/classrooms', label: 'Кабинеты' },
              { href: '/calendar', label: 'Расписание' },
              { href: '/calls', label: 'Видеозвонки' },
              { href: '/whiteboard', label: 'Онлайн-доска' },
              { href: '/materials', label: 'Материалы' },
              { href: '/payments', label: 'Оплаты' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className={chipClass(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={cn(sectionClass, 'pb-12 sm:pb-16 lg:pt-4 lg:pb-16')}>
        <div
          className={cn(
            containerClass,
            'flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-x-[100px]',
          )}
        >
          <h2 className="text-2xl leading-[29px] font-medium text-pretty text-gray-100 sm:max-w-[488px] sm:text-[32px] sm:leading-[48px] lg:max-w-none lg:self-start lg:text-[40px] lg:leading-[40px]">
            Вопросы о тарифах
          </h2>
          <div className="relative w-full min-w-0">
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              {pricingFaq.map((item, index) => (
                <AccordionItem key={item.title} value={`item-${index + 1}`}>
                  <AccordionTrigger className="min-w-0 py-5 font-manrope text-[18px] leading-7 font-semibold text-gray-100 hover:text-brand-80 hover:no-underline sm:py-8 sm:text-[24px] sm:leading-8 sm:font-bold">
                    <span className="min-w-0 flex-1 text-left text-pretty wrap-break-word">
                      {item.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-[14px] leading-6 text-pretty text-gray-60 sm:text-[16px]">
                    <p>{item.text}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section
        className={cn(sectionClass, 'border-t border-gray-10 pt-10 pb-16 lg:pt-12 lg:pb-20')}
      >
        <div className={containerClass}>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: 'Что вы оплачиваете',
                highlight: false,
                body: (
                  <p className="text-s-base leading-6 text-gray-80 sm:text-m-base sm:leading-7">
                    Вы оплачиваете доступ к функциональности сервиса sovlium на выбранный период.
                    sovlium не оказывает образовательные услуги, не является стороной отношений
                    между репетитором и учеником и не отвечает за результат обучения.
                  </p>
                ),
              },
              {
                title: 'Оплата',
                highlight: false,
                body: (
                  <>
                    <p className="text-s-base leading-6 text-gray-80 sm:text-m-base sm:leading-7">
                      К оплате принимаются банковские карты платёжных систем МИР, Visa и Mastercard,
                      выпущенные российскими банками, а также СБП, если такой способ доступен на
                      странице оплаты.
                    </p>
                    <p className="text-s-base leading-6 text-gray-80 sm:text-m-base sm:leading-7">
                      Оплата проходит через защищённую платёжную страницу банка или платёжного
                      партнёра. Данные банковской карты не передаются и не хранятся в sovlium.
                    </p>
                  </>
                ),
              },
              {
                title: 'Отмена подписки',
                highlight: false,
                body: (
                  <p className="text-s-base leading-6 text-gray-80 sm:text-m-base sm:leading-7">
                    Подписку можно отменить в любой момент в приложении или через поддержку. После
                    отмены доступ к тарифу Про сохранится до конца оплаченного периода.
                  </p>
                ),
              },
              {
                title: 'Уже пользуетесь sovlium?',
                highlight: true,
                body: (
                  <p className="text-s-base leading-6 text-gray-80 sm:text-m-base sm:leading-7">
                    Если вы уже пользуетесь sovlium, мы заранее предупредим об изменениях в тарифах
                    и ограничениях. Данные и кабинеты не будут удалены внезапно: перед применением
                    новых лимитов мы дадим время подготовиться или перейти на подходящий тариф.
                  </p>
                ),
              },
            ].map((card, index) => (
              <motion.article
                key={card.title}
                className={cn(
                  'flex min-w-0 flex-col gap-3 rounded-3xl p-5 sm:p-6',
                  card.highlight ? 'bg-brand-0' : 'bg-gray-5',
                )}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={reduceMotion || !canHover ? undefined : { y: -4 }}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 28,
                  delay: reduceMotion ? 0 : 0.06 * index,
                }}
              >
                <h2 className="text-l-base font-semibold text-gray-100 sm:text-xl-base-size">
                  {card.title}
                </h2>
                {card.body}
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
