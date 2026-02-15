import { sectionsConfig } from '@/config/sectionsConfig';
import { Footer } from './Footer';
import { CallToAction } from './CallToAction';
import { Card } from './Card';

export default function HomePage() {
  return (
    <div className="w-full flex justify-center items-center flex-col z-10 gap-12">
      <div className="w-full grid grid-cols-2 justify-center items-center z-10 gap-5">
        {sectionsConfig.map((sectionItem) => (
          <Card
            key={sectionItem.pageUrl}
            title={sectionItem.title}
            href={`/${sectionItem.pageUrl}`}
            description={sectionItem.description}
          />
        ))}
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
}
