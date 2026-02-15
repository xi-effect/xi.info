import { sectionsConfig } from '@/config/sectionsConfig';
import SectionList from './SectionList';
import { Link } from '@xipkg/link';
import { Footer } from './Footer';
import { CallToAction } from './CallToAction';

export default function DocsHomeSections() {
  return (
    <div className="w-full flex justify-center items-center flex-col z-10 gap-20">
      {sectionsConfig.map((sectionItem) => (
        <section key={sectionItem.pageUrl} className="flex flex-col gap-5 w-full">
          <Link
            variant="hover"
            href={`/${sectionItem.pageUrl}`}
            className="font-medium text-2xl text-brand-100 no-underline hover:underline"
          >
            {sectionItem.title}
          </Link>
          <SectionList sections={sectionItem.links} sectionName={sectionItem.pageUrl} />
        </section>
      ))}
      <CallToAction />
      <Footer />
    </div>
  );
}
