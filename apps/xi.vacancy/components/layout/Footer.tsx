import Image from 'next/image';

const Footer = () => (
  <footer>
    <div className="my-8 p-8 md:p-16 sm:my-16  xl:pr-[650px] bg-gray-10 rounded-[32px] relative">
      <h2 className="leading-[110%] text-[32px] sm:text-[64px] xl:text-7xl 2xl:text-[80px] font-semibold mb-4 sm:mb-16 xl:mb-[76px]">
        Приходи работать вместе
      </h2>

      <p className="leading-[110%] mb-4 sm:mb-16 text-[16px] sm:text-[40px] 2xl:text-5xl">
        Напиши пару слов о себе и о том, какая вакансия может быть вам интересна
      </p>

      <button
        type="button"
        className="bg-brand-80 text-[22px] xl:text-[43px] text-gray-0 xl:px-16 xl:py-6 xl:rounded-3xl t-l btn-l xl:h-[112px] "
      >
        Отправить резюме
      </button>

      <Image
        width={660}
        height={764}
        quality={100}
        alt="team working"
        src="/home/work-together.jpg"
        className="absolute top-0 right-0 object-cover w-[440px] 2xl:w-[600px] h-full rounded-r-3xl hidden xl:block"
      />
    </div>

    <div className="px-4 py-8 md:p-16 flex flex-wrap flex-col sm:flex-row md:items-center justify-between">
      <Image
        width={220}
        height={32}
        quality={100}
        src="/icons/team.svg"
        alt="logo xi.effect"
        className="w-[165px] h-[24px] sm:w-[219px] sm:h-[32px]"
      />

      <span className="t-xl text-gray-60 mt-4 md:mt-0">
        &copy; xieffect.ru
        {new Date().getFullYear()}
      </span>
    </div>
  </footer>
);

export default Footer;
