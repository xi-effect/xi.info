import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/legal/marketing-consent');

export default async function MarketingConsentPage() {
  const { default: MarketingConsentContent } =
    await import('../../../markdown/marketing-consent.mdx');

  return <MarketingConsentContent />;
}
