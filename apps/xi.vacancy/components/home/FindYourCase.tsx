import { useRouter } from 'next/navigation';
import { Button } from '@xipkg/button';
import SendResumeModal from 'components/modal/SendResumeModal';
import Memoji from '../common/Memoji';

const FindYourCase = () => {
  const router = useRouter();

  return (
    <section className="p-[16px] sm:p-8 sm:mb-8 2xl:mb-[110px] 2xl:p-[48px]">
      <Memoji
        wrapperClassName="mb-[16px] sm:mb-8 2xl:mb-[47px] 2xl:px-[32px]"
        imageClassName="w-[96px] h-[96px] 2xl:w-[128px] 2xl:h-[128px] 2xl:ml-[-32px]"
      />

      <h1 className="mb-[16px] text-[32px] font-bold leading-[130%] tracking-[-0.32px] sm:text-[48px] 2xl:text-[96px] 2xl:mb-[48px] sm:mb-[28px]">
        Найди любимое дело
      </h1>
      <div className="flex flex-col sm:flex-row">
        <button
          type="button"
          onClick={() => router.push('/vacancy')}
          className="bg-brand-80 text-[16px] text-gray-0 rounded-[8px] 2xl:rounded-[12px] mb-[16px] w-full py-[12px] sm:w-[46%] sm:mb-0 sm:mr-[32px] sm:max-w-[307px] 2xl:text-[24px] 2xl:h-[72px]"
        >
          Смотреть вакансии
        </button>
        <SendResumeModal>
          <Button variant="secondary" className="w-full 2xl:h-[72px] 2xl:text-[24px] sm:w-[299px]">Отправить резюме</Button>
        </SendResumeModal>
      </div>
    </section>
  );
};

export default FindYourCase;
