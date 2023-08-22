'use client';

import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { object, string, mixed } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../common/Input';
import Memoji from '../common/Memoji';
import Portal from '../common/Portal';
import Select from './Select';
import UploadFile, { FileListT } from './UploadFile';

type SendResumeButtonT = {
  className?: string;
  label?: string;
};

export type FormDataT = {
  email: string;
  social: string;
  vacancy: string;
  username: string;
  file: FileListT[] | null | undefined;
  message: string | null | undefined;
};

const schema = object().shape({
  file: mixed<FileListT[]>().nullable().notRequired(),
  message: string().nullable().notRequired(),
  username: string().required('Введите имя!'),
  social: string().required('Оставьте ссылку на ваши соцсети!'),
  vacancy: string().required('Выберите интересующую вакансию!'),
  email: string().email('Невалидный адрес!').required('Оставьте вашу почту!'),
});

const SendResumeButton: FC<SendResumeButtonT> = (props) => {
  const { className, label } = props;

  const [mounted, setMounted] = useState<boolean>(false);

  const [transition, setTransition] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormDataT>({
    defaultValues: { file: null, message: null },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormDataT> = (data) => console.log(data);

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

      <Portal transition={transition} mounted={mounted}>
        <div className="cursor-default my-auto resume-form bg-gray-0 rounded-[24px] w-full relative sm:w-[556px] xl:w-[1000px] xl:flex">
          <button
            type="button"
            onClick={closeModal}
            className="bg-gray-80 p-2 rounded-full w-[40px] h-[40px] absolute top-[28px] right-[14px] sm:top-[24px] sm:right-[-56px]"
          >
            <Image width={24} height={24} alt="close modal" src="/icons/close.svg" />
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
              title="Имя"
              id="username"
              error={!!errors.username}
              helperText={errors.username?.message}
              className="mb-[16px] sm:mb-[24px]"
              {...register('username', { required: true })}
            />

            <Input
              id="email"
              title="Email"
              type="email"
              error={!!errors.email}
              className="mb-[16px] sm:mb-[24px]"
              {...register('email')}
            />

            <Select
              control={control}
              error={!!errors.social}
              helperText={errors.vacancy?.message}
            />

            <Input
              id="social"
              error={!!errors.social}
              className="mb-[16px] sm:mb-[24px]"
              helperText={errors.social?.message}
              title="Ссылка на github или соцсети"
              {...register('social')}
            />

            <UploadFile control={control} />

            <label htmlFor="area" className="flex flex-col text-[16px] mb-4 sm:mb-[24px]">
              Сообщение
              <textarea
                id="area"
                {...register('message')}
                className="h-[70px] mt-2 p-[12px] resize-none rounded-[8px] border-2 border-gray-30"
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
