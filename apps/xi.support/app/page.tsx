'use client';

import { CallToAction, Hero, Parts } from 'components/HomePage';
import Layout from 'components/layout/Layout';

const Page = () => (
  <Layout>
    <Hero />
    <Parts />
    <CallToAction />
  </Layout>
);

export default Page;
