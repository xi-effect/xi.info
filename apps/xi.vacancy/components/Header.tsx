import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-16">
      <Image src="/team.svg" width={219} height={32} alt="logo xi.effect" />

      <nav className="flex items-center">
        <a href="#" className="mr-16 t-xl text-gray-60">
          Вакансии
        </a>

        <button className="btn-l bg-brand-80 text-gray-0">Отправить резюме</button>
      </nav>
    </header>
  );
};

export default Header;
