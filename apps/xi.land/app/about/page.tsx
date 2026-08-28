import { AboutView } from 'components/about';
import { JsonLd } from 'components/seo/JsonLd';
import { breadcrumbJsonLd, graphJsonLd, webPageJsonLd } from 'lib/seo/jsonld';
import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/about');

export default function AboutPage() {
  return (
    <>
      <JsonLd data={graphJsonLd(webPageJsonLd('/about'), breadcrumbJsonLd('/about'))} />
      <AboutView />
    </>
  );
}
