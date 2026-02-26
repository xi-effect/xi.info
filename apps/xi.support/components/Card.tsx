import { Link } from '@xipkg/link';

interface CardProps {
  title: string;
  href: string;
  description: string;
}

export const Card = ({ title, href, description }: CardProps) => {
  return (
    <Link
      href={href}
      className={`flex flex-col gap-2 
        no-underline p-4 h-full rounded-[18px] 
        border border-gray-10 dark:border-gray-80 shadow-xs 
        bg-gray-5 hover:bg-gray-10 
        dark:bg-gray-90 dark:hover:bg-gray-100
        transition-all duration-300 ease-in-out`}
    >
      <p className="mt-0 mb-0 font-medium text-lg text-brand-80 dark:text-brand-60">{title}</p>
      <p className="mt-0 mb-0 text-sm text-gray-80 dark:text-gray-20">{description}</p>
    </Link>
  );
};
