import Image from 'next/image';
import Link from 'next/link';

export const SubMenuItem = ({
  title,
  description,
  href,
  src,
  setActive,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
  setActive: (item: string | null) => void;
}) => (
  <Link
    href={href}
    onClick={() => setActive(null)}
    className="flex gap-8 items-center max-w-[560px] 2xl:max-w-[600px] hover:bg-gray-5 rounded-2xl transition-colors"
  >
    <Image
      src={src}
      width={256}
      height={134}
      alt={title}
      className="2xl:w-[256px] 2xl:h-[134px] w-[200px] h-auto flex-shrink-0 rounded-2xl"
    />
    <div className="flex flex-col gap-2">
      <h4 className="text-xl-base 2xl:text-[32px] 2xl:leading-[41px] -tracking-[.01em] font-medium">
        {title}
      </h4>
      <p className="text-l-base text-gray-80">{description}</p>
    </div>
  </Link>
);
