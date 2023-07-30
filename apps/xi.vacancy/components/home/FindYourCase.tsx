import Image from 'next/image';
import { useRouter } from 'next/navigation';

const FindYourCase = () => {
  const router = useRouter();

  return (
    <section className="p-[16px] sm:p-8 sm:mb-8 2xl:mb-[110px] 2xl:p-[48px]">
      <div className="flex mb-[16px] sm:mb-8 2xl:mb-[47px]">
        <Image
          width={128}
          height={128}
          quality={100}
          alt="male-memojis"
          src="/home/male-memojis.svg"
          className="w-[96px] h-[96px] 2xl:w-[128px] 2xl:h-[128px]"
        />

        <Image
          width={128}
          height={128}
          quality={100}
          alt="female-memojis"
          src="/home/female-memojis.svg"
          className="ml-[-16px] 2xl:ml-[-32px] w-[96px] h-[96px] 2xl:w-[128px] 2xl:h-[128px]"
        />

        <Image
          width={128}
          height={128}
          quality={100}
          alt="male-memojis"
          src="/home/male-memojis-2.svg"
          className="ml-[-16px] 2xl:ml-[-32px] w-[96px] h-[96px] 2xl:w-[128px] 2xl:h-[128px]"
        />

        <Image
          width={128}
          height={128}
          quality={100}
          alt="female-memojis"
          src="/home/female-memojis-2.svg"
          className="ml-[-16px] 2xl:ml-[-32px] w-[96px] h-[96px] 2xl:w-[128px] 2xl:h-[128px]"
        />
      </div>

      <h1 className="mb-[16px] text-[32px] font-bold leading-[130%] tracking-[-0.32px] sm:text-[48px] 2xl:text-[96px] 2xl:mb-[48px] sm:mb-[28px]">
        Найди любимое дело
      </h1>

      <button
        type="button"
        onClick={() => router.push('/vacancy')}
        className="bg-brand-80 text-[16px] text-gray-0 rounded-[8px] 2xl:rounded-[12px] mb-[16px] w-full py-[12px] sm:w-[46%] sm:mb-0 sm:mr-[32px] sm:max-w-[302px] 2xl:text-[27px] 2xl:py-[16px] 2xl:h-[72px]"
      >
        Смотреть вакансии
      </button>

      <button
        type="button"
        className="bg-transparent text-[16px] text-gray-100 rounded-[8px] 2xl:rounded-[12px] w-full py-[12px] border-2 border-gray-30 sm:w-[46%] sm:max-w-[302px] 2xl:text-[27px] 2xl:py-[16px] 2xl:h-[72px]"
      >
        Отправить резюме
      </button>
    </section>
  );
};

export default FindYourCase;
