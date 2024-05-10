'use client';

import { Link } from '@xipkg/link';
import Image from 'next/image';

type SectionsT = {
  sections: any;
  sectionName: string;
};

const Sections = ({ sections, sectionName }: SectionsT) => (
  <div className="w-full p-4 md:p-8 2xl:py-16 2xl:px-40 flex justify-center items-center flex-row z-10">
    <div className="flex flex-col w-full max-w-[1920px] gap-[64px]">
      {sections.map((section, index) => (
        <section id={section.link} className="flex flex-col" key={index.toString()}>
          <Link
            variant="hover"
            href={`/${sectionName}/${section.pageUrl}`}
            className="font-medium text-[24px] md:text-[32px] 2xl:text-[48px]"
          >
            {section.pageTitle}
          </Link>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-y-6 md:gap-x-8">
            {section.items.map((item, i) => (
              <div className="flex flex-col" key={i.toString()}>
                <Link
                  href={`/${sectionName}/${section.pageUrl}#${item.link}`}
                  className="relative flex justify-center items-center bg-gray-10 aspect-[520/250] rounded-[12px] md:rounded-[24px] p-1"
                >
                  <Image
                    alt={item.title}
                    src={`/assets/sections/${sectionName}/${item.image}`}
                    width={item.width ?? 0}
                    height={item.height ?? 0}
                  />
                </Link>
                <Link
                  variant="hover"
                  href={`/${sectionName}/${section.pageUrl}#${item.link}`}
                  className="mt-4 font-medium text-[16px] md:text-[24px] 2xl:text-[32px]"
                >
                  {item.title}
                </Link>
                <span className="text-[16px] md:text-[24px] 2xl:text-[24px] text-gray-70">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  </div>
);

export default Sections;
