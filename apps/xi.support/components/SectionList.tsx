import { Link } from '@xipkg/link';
import Image from 'next/image';

type SectionListProps = {
  sections: {
    pageTitle: string;
    pageUrl: string;
    items: {
      title: string;
      image: string;
      link: string;
    }[];
  }[];
  sectionName: string;
};

const SectionList = ({ sections, sectionName }: SectionListProps) => (
  <div className="w-full flex flex-col justify-center items-center z-10 gap-10">
    {sections.map((section) => (
      <section className="flex flex-col w-full gap-5" key={section.pageUrl}>
        <Link
          variant="hover"
          href={`/${sectionName}#${section.pageUrl}`}
          className="text-lg no-underline hover:underline"
        >
          {section.pageTitle}
        </Link>
        <div className="grid grid-cols-2 gap-8 w-full">
          {section.items.map((item, i) => (
            <div className="flex flex-col w-full gap-2" key={i.toString()}>
              <Link
                href={`/${sectionName}#${item.link}`}
                className={`relative flex justify-center items-center bg-gray-10 h-60 w-full rounded-[12px] md:rounded-[24px] `}
              >
                <Image
                  alt={item.title}
                  src={`/assets/markdown/${sectionName}/${item.image}`}
                  fill
                  objectFit="contain"
                  className="mt-0 mb-0"
                />
              </Link>
              <Link
                href={`/${sectionName}#${item.link}`}
                className="font-medium text-[16px] text-center no-underline hover:underline"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default SectionList;
