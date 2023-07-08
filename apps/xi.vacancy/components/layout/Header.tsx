import Image from 'next/image';

const Header = () => (
  <header className="flex justify-between items-center py-8 lg:px-16">
    <Image src="/icons/team.svg" width={219} height={32} alt="logo xi.effect" />

    <nav className="flex items-center hidden md:block">
      <a href="apps/xi.vacancy/components#" className="mr-16 t-xl text-gray-60">
        Вакансии
      </a>

      <button type="button" className="btn-l bg-brand-80 text-gray-0">
        Отправить резюме
      </button>
    </nav>
  </header>
);

export default Header;
