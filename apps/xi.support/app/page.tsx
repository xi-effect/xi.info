'use client';

import { CallToAction, Hero, Parts } from 'components/HomePage';
import HeaderMain from 'components/layout/HeaderMain';
import Layout from 'components/layout/Layout';

const Page = () => (
  <Layout>
    <HeaderMain />
    <Hero />
    <Parts />
    <CallToAction />
  </Layout>
);

export default Page;
