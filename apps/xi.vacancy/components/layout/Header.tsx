import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-[24px] px-4 sm:py-[32px] sm:px-8 2xl:py-16 2xl:px-[48px]">
      <Link href="/">
        <Image
          width={219}
          height={32}
          quality={100}
          alt="logo xi.effect"
          src="/icons/team.svg"
          className="w-[165px] h-[24px]"
        />
      </Link>

      <nav className="flex items-center hidden sm:block">
        <Link
          href="/vacancy"
          className={`
          ${pathname === '/vacancy' ? 'text-brand-80' : 'text-gray-60'}
           transition-colors mr-[24px] text-[20px] 2xl:mr-16
           `}
        >
          Вакансии
        </Link>

        <button
          type="button"
          className="rounded-[8px] py-[12px] px-[24px] bg-brand-80 text-gray-0 text-[17.5px]"
        >
          Отправить резюме
        </button>
      </nav>
    </header>
  );
};

export default Header;
