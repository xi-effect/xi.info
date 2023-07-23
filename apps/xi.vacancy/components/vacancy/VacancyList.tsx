'use client';

import { useState } from 'react';
import { ProfessionsT, vacancyList } from '../common/const';
import NavOfSpecialties from '../common/NavOfSpecialties';

const VacancyList = () => {
  const [profession, setProfession] = useState<ProfessionsT>('development');

  const vacancyCard = vacancyList[profession].map((p, i) => (
    <article className={i !== vacancyList[profession].length - 1 ? 'mb-[32px] sm:mb-[64px]' : ''}>
      <h2 className="leading-[120%] text-[32px] mb-[8px] sm:text-[64px] xl:text-[80px]">
        {p.title}
      </h2>

      <div className="flex">
        <span className="text-[14px] leading-[120%] mr-[32px] sm:text-[32px]">Удалённо</span>

        <time className="text-[14px] text-gray-60 leading-[120%] mr-[32px] sm:text-[32px]">
          {p.date}
        </time>

        <address className="text-[14px] text-gray-60 leading-[120%] sm:text-[32px]">
          {p.author}
        </address>
      </div>
    </article>
  ));

  return (
    <section className="px-4 py-8 sm:py-16 sm:pb-8 xl:py-[128px] xl:px-16">
      <h1 className="leading-[120%] font-marker mb-8 text-[40px] sm:text-[80px] xl:text-[128px]  2xl:text-[180px]">
        Вакансии
      </h1>

      <NavOfSpecialties
        className="mb-[90px] sm:mb-[170px] xl:mb-[206px]"
        setProfession={setProfession}
        profession={profession}
      />

      {vacancyList[profession].length ? (
        vacancyCard
      ) : (
        <h3 className="text-[32px]  sm:text-[64px] xl:text-[80px]">Вакансии отсутствуют</h3>
      )}
    </section>
  );
};

export default VacancyList;
