'use client';

import { Link } from '@xipkg/link';
import Image from 'next/image';

type SectionsT = {
  sections: any;
};

const Sections = ({ sections }: SectionsT) => {
  return (
    <div className="w-full p-4 md:p-8 2xl:py-16 2xl:px-40 flex justify-center items-center flex-row z-10">
      <div className="flex flex-col w-full max-w-[1920px] gap-[64px]">
        {sections.map((group, index) => (
          <section id={group.link} className="flex flex-col" key={index.toString()}>
            <span className="text-[16px] md:text-[24px] 2xl:text-[32px] mt-2">
              {group.pageTitle}
            </span>
            <div className="mt-6 grid grid-cols-1 2xl:grid-cols-2 gap-4 md:gap-12 2xl:gap-8">
              {group.items.map((item, i) => (
                <div className="flex flex-col gap-2" key={i.toString()}>
                  <div className="flex justify-center items-center w-full bg-brand-20 aspect-[520/250] rounded-[12px] md:rounded-[24px] p-1">
                    <Image
                      className='text-gray-10'
                      alt={item.title}
                      src={item.image}
                      width={item.width}
                      height={item.height}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="mt-1 font-medium text-[16px] md:text-[24px] 2xl:text-[32px]">
                      {item.title}
                    </span>
                    <span className="text-[14px] xl:text-[20px] text-gray-80">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Sections;
