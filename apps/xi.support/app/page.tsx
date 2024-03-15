'use client';

import { CallToAction, Hero, Parts } from 'components/HomePage';
import HeaderMain from 'components/Layout/HeaderMain';
import Layout from 'components/Layout/Layout';

const Page = () => (
  <Layout>
    <HeaderMain />
    <Hero />
    <Parts />
    <CallToAction />
  </Layout>
);

export default Page;
