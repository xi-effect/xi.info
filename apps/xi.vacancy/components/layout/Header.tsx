import Image from 'next/image';

const Header = () => (
  <header className="flex justify-between items-center p-8 sm:p-16">
    <Image
      width={219}
      height={32}
      quality={100}
      alt="logo xi.effect"
      src="/icons/team.svg"
      className="w-[165px] h-[24px] sm:w-[219px] sm:h-[32px]"
    />

    <nav className="flex items-center hidden md:block">
      <a href="apps/xi.vacancy/components#" className="mr-16 t-xl text-gray-60">
        Вакансии
      </a>

      <button type="button" className="btn-l bg-brand-80 text-gray-0 text-[22px]">
        Отправить резюме
      </button>
    </nav>
  </header>
);

export default Header;
