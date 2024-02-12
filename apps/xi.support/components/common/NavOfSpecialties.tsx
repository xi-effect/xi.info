import React from 'react';
import { professions, ProfessionsT } from './const';

type NavOfSpecialtiesT = {
  className?: string;
  profession: ProfessionsT;
  setProfession: (value: ProfessionsT) => void;
};

const NavOfSpecialties: React.FC<NavOfSpecialtiesT> = (props) => {
  const { profession, setProfession, className } = props;

  const currentStyles = (p: ProfessionsT) => `      
      ${profession === p ? `${professions[p].colors[1]} underline` : 'text-gray-100'}
 
      mx-[16px] sm:mx-[30px] text-[16px] sm:text-[32px] bg-transparent transition-colors `;

  return (
    <div className={`h-[20px] sm:h-[45px] overflow-hidden ${className}`}>
      <div className="flex pb-4 mx-[-16px] sm:mx-[-30px] overflow-x-auto">
        <button
          type="button"
          className={currentStyles('development')}
          onClick={() => setProfession('development')}
        >
          {professions.development.label}
        </button>

        <button
          type="button"
          className={currentStyles('design')}
          onClick={() => setProfession('design')}
        >
          {professions.design.label}
        </button>

        <button
          type="button"
          className={currentStyles('product')}
          onClick={() => setProfession('product')}
        >
          {professions.product.label}
        </button>

        <button
          type="button"
          className={currentStyles('marketing')}
          onClick={() => setProfession('marketing')}
        >
          {professions.marketing.label}
        </button>
      </div>
    </div>
  );
};

export default NavOfSpecialties;
