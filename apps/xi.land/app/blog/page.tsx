import { BlogView } from 'components/blog';
import { JsonLd } from 'components/seo/JsonLd';
import { blogJsonLd, breadcrumbJsonLd, graphJsonLd, webPageJsonLd } from 'lib/seo/jsonld';
import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/blog');

export default function BlogPage() {
  return (
    <>
      <JsonLd data={graphJsonLd(webPageJsonLd('/blog'), breadcrumbJsonLd('/blog'), blogJsonLd())} />
      <BlogView />
    </>
  );
}
