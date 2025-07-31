import Link from 'next/link';

export const SubMenuItem = ({
  title,
  href,
  setActive,
}: {
  title: string;
  href: string;
  setActive: (item: string | null) => void;
}) => (
  <Link
    href={href}
    onClick={() => setActive(null)}
    className="flex text-m-base py-2 px-3 text-gray-100 dark:text-gray-0 hover:underline underline-offset-4 transition-colors duration-200 rounded-[2px]"
  >
    {title}
  </Link>
);
