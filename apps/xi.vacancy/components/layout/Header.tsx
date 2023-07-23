import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-8 px-4 sm:py-16 xl:px-16">
      <Link href="/">
        <Image
          width={219}
          height={32}
          quality={100}
          alt="logo xi.effect"
          src="/icons/team.svg"
          className="w-[165px] h-[24px] sm:w-[219px] sm:h-[32px]"
        />
      </Link>

      <nav className="flex items-center hidden md:block">
        <Link
          href="/vacancy"
          className={`
          ${pathname === '/vacancy' ? 'text-brand-80' : 'text-gray-60'}
           transition-colors mr-16 t-xl
           `}
        >
          Вакансии
        </Link>

        <button type="button" className="btn-l bg-brand-80 text-gray-0 text-[22px]">
          Отправить резюме
        </button>
      </nav>
    </header>
  );
};

export default Header;
