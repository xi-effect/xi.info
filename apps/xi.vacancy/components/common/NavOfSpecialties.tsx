import React from 'react';
import { ProfessionsT } from './const';

type NavOfSpecialtiesT = {
  className?: string;
  profession: ProfessionsT;
  setProfession: (value: ProfessionsT) => void;
};

const NavOfSpecialties: React.FC<NavOfSpecialtiesT> = (props) => {
  const { profession, setProfession, className } = props;

  const currentStyles = (p: ProfessionsT) => `
      ${profession === p ? 'text-brand-80 underline' : 'text-gray-100'}
      
      mx-[20px] xl:mx-[30px]  text-[24px] sm:text-[48px] bg-transparent transition-colors `;

  return (
    <div className={`h-[35px] sm:h-[65px] overflow-hidden ${className}`}>
      <div className="flex pb-8 mx-[-20px] xl:mx-[-30px] overflow-x-auto">
        <button
          type="button"
          className={currentStyles('development')}
          onClick={() => setProfession('development')}
        >
          Разработка
        </button>

        <button
          type="button"
          className={currentStyles('design')}
          onClick={() => setProfession('design')}
        >
          Дизайн
        </button>

        <button
          type="button"
          className={currentStyles('product')}
          onClick={() => setProfession('product')}
        >
          Продукт
        </button>

        <button
          type="button"
          className={currentStyles('marketing')}
          onClick={() => setProfession('marketing')}
        >
          Маркетинг
        </button>
      </div>
    </div>
  );
};

export default NavOfSpecialties;
