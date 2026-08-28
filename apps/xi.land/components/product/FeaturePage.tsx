import { JsonLd } from 'components/seo/JsonLd';
import { breadcrumbJsonLd, graphJsonLd, webPageJsonLd } from 'lib/seo/jsonld';
import type { SeoPathT } from 'lib/seo/pages';

import type { ProductPageContentT } from './types';
import { FeatureHero } from './FeatureHero';
import { JourneySteps } from './JourneySteps';
import { FeatureHighlights } from './FeatureHighlights';
import { ProductLinks } from './ProductLinks';
import { FeatureFaq } from './FeatureFaq';
import { FeatureCta } from './FeatureCta';

type FeaturePagePropsT = {
  content: ProductPageContentT;
};

export const FeaturePage = ({ content }: FeaturePagePropsT) => {
  const path = `/${content.slug}` as SeoPathT;

  return (
    <main>
      <JsonLd data={graphJsonLd(webPageJsonLd(path), breadcrumbJsonLd(path))} />
      <FeatureHero content={content} />
      <JourneySteps
        title={content.journeyTitle}
        subtitle={content.journeySubtitle}
        steps={content.steps}
      />
      <FeatureHighlights title={content.highlightsTitle} highlights={content.highlights} />
      <ProductLinks title={content.relatedTitle} related={content.related} />
      <FeatureFaq items={content.faq} />
      <FeatureCta
        title={content.ctaTitle}
        subtitle={content.ctaSubtitle}
        supportHref={content.supportHref}
        supportLabel={content.supportLabel}
      />
    </main>
  );
};
