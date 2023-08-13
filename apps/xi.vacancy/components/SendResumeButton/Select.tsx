import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Control, Controller } from 'react-hook-form';
import { FormDataT } from './index';

type SelectT = {
  error?: boolean;
  helperText?: string;
  control: Control<FormDataT, any>;
};

const selectOptions = [
  {
    title: 'Разработка',
    value: 'development',
  },
  {
    title: 'Дизайн',
    value: 'design',
  },
  {
    title: 'Продукт',
    value: 'product',
  },
  {
    title: 'Маркетинг',
    value: 'marketing',
  },
];

const Select: React.FC<SelectT> = (props) => {
  const { control, error, helperText } = props;

  const [open, setOpen] = useState<boolean>(false);

  const [currentVacancy, setCurrentVacancy] = useState<string | null>(null);

  const listener = (e) => {
    const target = e.target as HTMLElement;

    if (!target.closest('.resume-select')) {
      setOpen(false);
    }
  };

  const toggleSelect = () => setOpen((v) => !v);

  useEffect(() => {
    window.addEventListener('click', listener);

    return () => window.removeEventListener('click', listener);
  }, []);

  return (
    <Controller
      name="vacancy"
      control={control}
      render={({ field: { onChange } }) => (
        <div className="relative flex flex-col text-[16px] mb-[16px] sm:mb-[24px] relative">
          <span className="leading-[22px]">Интересующая специализация</span>
          <button
            type="button"
            aria-expanded={!open}
            onClick={toggleSelect}
            className={`
            ${currentVacancy ? 'text-gray-100' : `${helperText ? 'text-red-60' : 'text-gray-30'}`}  
            ${error ? 'border-red-20' : 'border-gray-30 '}
            
            sm:p-[12px] resume-select cursor-pointer flex bg-gray-0 justify-between content-center mt-2 inline-block text-[16px] w-full px-[10px] h-[32px] sm:h-[48px] rounded-[8px] border-2`}
          >
            {helperText || currentVacancy || 'Выберите'}

            <Image
              width={20}
              height={20}
              src="/icons/drop.svg"
              alt={open ? 'list is open' : 'list is closed'}
              className={`${open ? 'rotate-180' : 'rotate-0'} h-full transition-transform`}
            />
          </button>
          <div
            aria-hidden={!open}
            className={` ${
              open ? 'visible opacity-1 top-[83px]' : 'invisible opacity-0 top-[100px]'
            } z-[101] resume-select transition-all absolute w-full  bg-gray-0 p-[12px] rounded-[8px] border-2 border-gray-30`}
          >
            {selectOptions.map(({ value, title }) => {
              const setVacancy = () => {
                setOpen(false);
                setCurrentVacancy(title);
                onChange(value);
              };

              return (
                <button
                  type="button"
                  onClick={setVacancy}
                  className="rounded-[8px] p-[12px] transition-colors focus:text-gray-0 focus:bg-brand-80  hover:text-gray-0 hover:bg-brand-80 w-full bg-gray-0 text-left"
                >
                  {title}
                </button>
              );
            })}
          </div>
        </div>
      )}
    />
  );
};

export default Select;
