'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ProfessionsT, vacancyList } from '../common/const';
import NavOfSpecialties from '../common/NavOfSpecialties';

const VacancyList = () => {
  const [profession, setProfession] = useState<ProfessionsT>('development');

  const vacancyCard = vacancyList[profession].map((p, i) => (
    <Link href={`/vacancy/${profession}_${p.id}`}>
      <article className={i !== vacancyList[profession].length - 1 ? 'mb-[32px] sm:mb-[64px]' : ''}>
        <h2 className="leading-[120%] text-[24px] mb-[8px] sm:text-[32px] xl:text-[64px]">
          {p.title}
        </h2>

        <div className="flex leading-[120%] text-[16px] sm:text-[20px] xl:text-[24px]">
          <span className="mr-[22px] min-[390px]:mr-[32px]">Удалённо</span>

          <time className="text-gray-60 mr-[22px] min-[390px]:mr-[32px]">{p.date}</time>

          <address className="text-gray-60">{p.author.tg}</address>
        </div>
      </article>
    </Link>
  ));

  return (
    <section className="px-4 py-[20px] sm:p-8 sm:pb-0 xl:p-[48px] xl:pb-0">
      <h1 className="leading-[130%] font-bold mb-[24px] xl:mb-[40px] text-[32px] sm:text-[48px] xl:text-[96px]">
        Вакансии
      </h1>

      <NavOfSpecialties
        className="mb-[48px] sm:mb-16 xl:mb-[105px]"
        setProfession={setProfession}
        profession={profession}
      />

      {vacancyList[profession].length ? (
        vacancyCard
      ) : (
        <h3 className="text-[24px] sm:text-[32px] xl:text-[64px]">Вакансии отсутствуют</h3>
      )}
    </section>
  );
};

export default VacancyList;
