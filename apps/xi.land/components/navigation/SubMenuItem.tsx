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
    className="flex text-m-base py-2 px-3 text-gray-100 dark:text-gray-0 hover:underline underline-offset-4 decoration-1 hover:ease-in transition decoration-gray-40 hover:decoration-gray-100 rounded-[2px]"
  >
    {title}
  </Link>
);
