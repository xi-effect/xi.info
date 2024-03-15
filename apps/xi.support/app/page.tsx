'use client';

import { CallToAction, Hero, Parts } from 'components/HomePage';
import { Layout, HeaderMain } from 'components/Common';

const Page = () => (
  <Layout>
    <HeaderMain />
    <Hero />
    <Parts />
    <CallToAction />
  </Layout>
);

export default Page;
