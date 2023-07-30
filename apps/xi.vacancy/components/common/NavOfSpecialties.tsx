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
      
      mx-[16px] sm:mx-[30px] text-[16px] sm:text-[32px] bg-transparent transition-colors `;

  return (
    <div className={`h-[20px] sm:h-[40px] overflow-hidden ${className}`}>
      <div className="flex pb-4 mx-[-16px] sm:mx-[-30px] overflow-x-auto">
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
