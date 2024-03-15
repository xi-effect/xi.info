'use client';

import { Link } from '@xipkg/link';
import Image from 'next/image';

type SectionsT = {
  sections: any;
};

const Sections = ({ sections }: SectionsT) => {
  return (
    <div className="w-full p-4 md:p-8 2xl:py-20 2xl:px-40 flex justify-center items-center flex-row z-10">
      <div className="w-full max-w-[1920px] flex flex-col gap-2">
        <div className="flex flex-col w-full max-w-[1920px] mt-0 2xl:mt-[64px] gap-[64px] 2xl:gap-[256px]">
          {sections.map((group, index) => (
            <section id={group.link} className="flex flex-col" key={index.toString()}>
              <span className="text-[16px] md:text-[24px] 2xl:text-[32px] mt-2">
                {group.subtitle}
              </span>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-12 2xl:gap-8">
                {group.items.map((item, i) => (
                  <div className="flex flex-col 2xl:flex-row" key={i.toString()}>
                    <div className="flex justify-center items-center bg-gray-10 aspect-[520/250] rounded-[12px] md:rounded-[24px] p-1">
                      <Image
                        alt={item.title}
                        src={item.image}
                        width={item.width}
                        height={item.height}
                      />
                    </div>
                    <span className="mt-4 font-medium text-[16px] md:text-[24px] 2xl:text-[32px]">
                      {item.title}
                    </span>
                    <span className="text-[16px] md:text-[24px] 2xl:text-[24px] text-gray-70">
                      {item.content}
                    </span>
                  </div>
                ))}
              </div>
              {!!group.image && (
                <>
                  {group.image === '/assets/productPage/icons/tasksAndTests.webp' ? (
                    <div className="relative h-[32px] md:h-[48px] 2xl:h-[64px] w-[92px] md:w-[144px] 2xl:w-[188px]">
                      <Image alt={group.title} src={group.image} fill />
                    </div>
                  ) : (
                    <div className="relative h-[32px] md:h-[48px] 2xl:h-[64px] w-[32px] md:w-[48px] 2xl:w-[64px]">
                      <Image alt={group.title} src={group.image} fill />
                    </div>
                  )}
                </>
              )}
              <Link
                variant="hover"
                href={`#${group.link}`}
                className="mt-6 font-medium text-[24px] md:text-[48px] 2xl:text-[64px]"
              >
                {group.title}
              </Link>
              <span className="text-[16px] md:text-[24px] 2xl:text-[32px] mt-2">
                {group.subtitle}
              </span>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sections;
