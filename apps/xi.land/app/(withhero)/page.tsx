import dynamic from 'next/dynamic';
import {
  CapabilitiesBlock,
  CommunityBlock,
  DevicesBlock,
  Hero,
  MessagesBlock,
  TutorIdeasBlock,
} from 'components/main';

import { JsonLd } from 'components/seo/JsonLd';
import { graphJsonLd, softwareApplicationJsonLd } from 'lib/seo/jsonld';
import { createPageMetadata } from 'lib/seo/metadata';

const Faq = dynamic(() => import('components/main').then((m) => m.Faq), { ssr: true });

export const metadata = createPageMetadata('/');

export default function MainPage() {
  return (
    <>
      <JsonLd data={graphJsonLd(softwareApplicationJsonLd)} />
      <main>
        <Hero />
        <CapabilitiesBlock />
        <TutorIdeasBlock />
        <DevicesBlock />
        <MessagesBlock />
        <CommunityBlock />
        <Faq />
      </main>
    </>
  );
}
