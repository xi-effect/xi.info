/* eslint-disable no-alert */
// @ts-nocheck

'use client';

import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../common/Input';
import Memoji from '../common/Memoji';
import Portal from '../common/Portal';
import Select from './Select';

type SendResumeButtonT = {
  className?: string;
  label?: string;
};

export type FormDataT = {
  name: string;
  telegram: string;
  position: string;
  link: string;
  message: string | null | undefined;
};

const schema = object().shape({
  name: string().nullable().required(),
  telegram: string().required(),
  position: string().required(),
  link: string().required(),
  message: string().notRequired(),
});

const SendResumeButton: FC<SendResumeButtonT> = (props) => {
  const { className, label } = props;

  const [mounted, setMounted] = useState<boolean>(false);

  const [transition, setTransition] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormDataT>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormDataT> = async (data) => {
    reset();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL_BACKEND}/api/vacancy-applications/`,
      {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );

    if (response.ok) {
      alert(
        'Спасибо, мы получили ваше резюме! В ближайшее время мы с ним ознакомимся и при необходимости свяжемся с Вами.',
      );
    } else {
      alert(`Ошибка HTTP: ${response.status}`);
    }
  };

  const openModal = () => {
    setMounted(true);

    setTimeout(() => setTransition(true));
  };

  const closeModal = () => {
    setTransition(false);

    setTimeout(() => setMounted(false), 200);
  };

  const listener = (e) => {
    const target = e.target as HTMLElement;

    if (!target.closest('.resume-form') && !target.closest('.resume-btn')) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('click', listener);

    return () => window.removeEventListener('click', listener);
  }, []);

  return (
    <>
      <button
        onClick={openModal}
        type="button"
        className={
          className
            ? `${className} resume-btn`
            : 'resume-btn rounded-[8px] py-[12px] px-[24px] bg-brand-80 text-gray-0 text-[16.5px]'
        }
      >
        {label || 'Отправить резюме'}
      </button>

      <Portal mounted={mounted} transition={transition}>
        <div className="cursor-default my-auto resume-form bg-gray-0 rounded-[24px] w-full relative sm:w-[556px] xl:w-[1000px] xl:flex">
          <button
            type="button"
            onClick={closeModal}
            className="bg-gray-80 p-2 rounded-full w-[40px] h-[40px] absolute top-[28px] right-[14px] sm:top-[24px] sm:right-[-56px]"
          >
            <Image width={24} height={24} alt="close modal" src="/iconssite/close.svg" />
          </button>

          <div className="p-[16px] sm:p-[24px]  xl:p-[48px] xl:basis-2/4">
            <Memoji imageClassName="w-[64px] h-[64px]" wrapperClassName="mb-2 sm:mb-[16px]" />

            <h2 className="text-[24px] font-medium mb-2 sm:text-[32px] sm:mb-[16px]">
              Отправить резюме
            </h2>

            <p className="text-[16px] font-medium w-[90%] leading-[130%] sm:w-full">
              Напиши пару слов о себе и о том, какая вакансия может быть вам интересна
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-[16px] bg-[#F7F7F7] rounded-b-[24px] xl:rounded-l-none xl:rounded-r-[24px] sm:p-[24px] xl:p-[48px] xl:basis-2/4"
          >
            <Input
              tabIndex={0}
              title="Имя *"
              id="name"
              error={!!errors.name}
              className="mb-[16px] sm:mb-[24px]"
              {...register('name')}
            />

            <Input
              id="telegram"
              title="Telegram *"
              type="link"
              error={!!errors.telegram}
              className="mb-[16px] sm:mb-[24px]"
              {...register('telegram')}
            />

            <Select
              control={control}
              error={!!errors.position}
              helperText={errors.position?.message}
            />

            <Input
              id="link"
              error={!!errors.link}
              className="mb-[16px] sm:mb-[24px]"
              title="Ссылка на резюме *"
              {...register('link')}
            />
            <label htmlFor="area" className="flex flex-col text-[16px] mb-4 sm:mb-[24px]">
              Сообщение
              <textarea
                id="area"
                {...register('message')}
                className="h-[70px] mt-2 resize-none rounded-[8px] border-2 border-gray-30 p-[12px]"
              />
            </label>

            <button
              type="submit"
              className="text-gray-0 w-full px-[16px] py-[5px] sm:px-[24px] sm:py-[12px] rounded-[8px] bg-brand-80 text-[16px]"
            >
              Отправить резюме
            </button>
          </form>
        </div>
      </Portal>
    </>
  );
};

export default SendResumeButton;
