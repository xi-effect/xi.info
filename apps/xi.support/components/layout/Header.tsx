'use client';

import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return <header className="py-[24px] sm:py-[32px] 2xl:py-16">xi.support</header>;
};

export default Header;
