/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client';

import Link from 'next/link';
import { Tabs } from '@xipkg/tabs';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import useVacancyDates from 'hooks/useVacancyDates';
import { professions, vacancyList } from '../common/const';
import SendResumeButton from '../modal/SendResumeButton';

const VacancyList = () => {
  const searchParams = useSearchParams();
  const [tabsValue, setTabsValue] = useState(searchParams.get('type') ?? 'development');

  const listOnType = vacancyList.filter(
    (vacancy) => vacancy.id.includes(tabsValue ?? '') && !vacancy.hidden,
  );

  const dates = useVacancyDates(vacancyList);

  const vacancyCard = listOnType.map((vacancy, index) => (
    <Link className="group" key={index} href={`/vacancy/${vacancy.id}`}>
      <article className={index !== listOnType.length - 1 ? 'mb-[32px] sm:mb-[64px]' : ''}>
        <h2 className="leading-[120%] text-[24px] mb-[8px] sm:text-[32px] xl:text-[64px] group-hover:underline transition-all ease-in decoration-3 duration-500">
          {vacancy.title}
        </h2>

        <div className="flex leading-[120%] text-[16px] sm:text-[20px] xl:text-[24px]">
          <span className="mr-[22px] min-[390px]:mr-[32px]">Удалённо</span>

          <time className="text-gray-60 mr-[22px] min-[390px]:mr-[32px]">
            {dates[vacancy.id] || ''}
          </time>

          <address className="text-gray-60">{vacancy.author.tg}</address>
        </div>
      </article>
    </Link>
  ));

  const currentProfession = professions.filter((el) => el.type === tabsValue);

  return (
    <section className="px-4 py-[20px] sm:p-8 sm:pb-0 xl:p-[48px] xl:pb-0">
      <h1 className="leading-[130%] font-bold mb-[24px] xl:mb-[40px] text-[32px] sm:text-[48px] xl:text-[96px]">
        Вакансии
      </h1>

      <div className="mt-8 overflow-auto pb-2 md:pb-6">
        <Tabs.Root onValueChange={(value) => setTabsValue(value)} value={tabsValue}>
          <Tabs.List
            className="border-0 gap-6 md:gap-12"
            classNameShadow={`h-0.5 rounded-none bg-${currentProfession[0].color}`}
          >
            {professions.map((el, index) => (
              <Tabs.Trigger
                style={{
                  color: tabsValue === el.type ? `var(--xi-${professions[index].color})` : '',
                }}
                className="text-[16px] md:leading-[17.6px] md:text-[32px] leading-[35.2px] grow-0 pb-0 md:pb-2 transition-colors"
                key={index}
                value={el.type}
              >
                {el.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>
      </div>
      <div
        className={`${
          listOnType.length ? 'max-h-[640px] duration-700' : 'py-[50px] duration-500'
        } transition-all`}
      >
        {listOnType.length ? (
          vacancyCard
        ) : (
          <>
            <h3 className="leading-[120%] mb-2 text-[32px] xl:text-[64px]">Вакансии отсутствуют</h3>

            <span className="text-[24px] leading-[120%]">Посмотрите другие разделы или</span>

            <SendResumeButton
              label="заполните форму"
              className="ml-[10px] text-[24px] bg-transparent underline border-none"
            />
          </>
        )}
      </div>
    </section>
  );
};

export default VacancyList;
