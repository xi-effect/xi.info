'use client';

import { Button } from '@xipkg/button';
import SendResumeModal from 'components/modal/SendResumeModal';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Memoji from '../common/Memoji';

const FindYourCase = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="p-[16px] sm:mb-8 sm:p-8 2xl:mb-[110px] 2xl:p-[48px]">
      <Memoji
        wrapperClassName="mb-[16px] sm:mb-8 2xl:mb-[47px] 2xl:px-[32px]"
        imageClassName="w-[96px] h-[96px] 2xl:w-[128px] 2xl:h-[128px] 2xl:ml-[-32px]"
      />

      <h1 className="mb-[16px] text-[32px] leading-[130%] font-bold tracking-[-0.32px] sm:mb-[28px] sm:text-[48px] 2xl:mb-[48px] 2xl:text-[96px]">
        Найди любимое дело
      </h1>
      <div className="flex flex-col sm:flex-row">
        <button
          type="button"
          onClick={() => router.push('/vacancy')}
          className="bg-brand-80 text-gray-0 mb-[16px] w-full rounded-[8px] py-[12px] text-[16px] sm:mr-[32px] sm:mb-0 sm:w-[46%] sm:max-w-[306px] 2xl:h-[72px] 2xl:rounded-[12px] 2xl:text-[24px]"
        >
          Смотреть вакансии
        </button>
        <SendResumeModal open={openModal} onOpenChange={setOpenModal}>
          <Button variant="secondary" className="w-full sm:w-[300px] 2xl:h-[72px] 2xl:text-[24px]">
            Отправить резюме
          </Button>
        </SendResumeModal>
      </div>
    </section>
  );
};

export default FindYourCase;
