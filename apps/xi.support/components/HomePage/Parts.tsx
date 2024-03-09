import { ChevronRight } from '@xipkg/icons';
import { pageConfig } from '../common/pageConfig';
import Image from 'next/image';
import { Link } from '@xipkg/link';

export const Parts = () => {
  return (
    <section className="flex items-center justify-center p-4 xs:p-8 lg:px-40 md:py-16">
      <div className='w-full max-w-[1920px]'>
        <ul className="grid w-full gap-8 md:gap-y-12 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))]">
          {pageConfig.map((item, index) => (
            <li className="w-full flex" key={index}>
              <Image
                src={`/assets/home-page/${item.icon}`}
                alt={item.icon}
                width={0}
                height={0}
                className="mb-auto size-12 sm:size-16"
              />
              <div className="ml-4 sm:ml-8">
                <h3 className="text-[24px] sm:text-[32px] leading-[31.2px] sm:leading-[41.6px] text-brand-80 font-medium">
                  {item.title}
                </h3>
                <ul className="font-normal text-gray-90 text-[16px] sm:text-[20px] leading-[20.8px] sm:leading-[26px]">
                  {item.links.map((link, index) => (
                    <li className="mt-2" key={index}>
                      <Link
                        className="text-[20px] leading-[26px]"
                        variant="hover"
                        href={`/${item.showAllLink}/${link.linkUrl}`}
                      >
                        {link.linkTitle}
                      </Link>
                    </li>
                  ))}
                  <div className="mt-4 flex items-stretch gap-1">
                    <Link
                      className="text-[20px] leading-[26px]"
                      variant="hover"
                      href={`/${item.showAllLink}`}
                    >
                      Показать все
                    </Link>
                    <ChevronRight className="!size-4 sm:!size-5 mt-[1px] sm:mt-[4px]" />
                  </div>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
