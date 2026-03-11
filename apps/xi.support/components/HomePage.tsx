import { sectionsConfig } from '@/config/sectionsConfig';
import { CallToAction } from './CallToAction';
import { Card } from './Card';

export const HomePage = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-10 md:gap-20">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-5">
        {sectionsConfig.map(({ title, description, pageUrl }) => (
          <Card key={pageUrl} title={title} href={`/${pageUrl}`} description={description} />
        ))}
      </div>
      <CallToAction />
    </div>
  );
};
