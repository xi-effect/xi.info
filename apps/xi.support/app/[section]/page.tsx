/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
import { HeaderDoc, Layout } from 'components/Common';
import Sections from 'components/SectionPage/Sections';
import Title from 'components/SectionPage/Title';
import { sectionsConfig } from 'config/sectionsConfig';

export const dynamicParams = false; // true | false,

export async function generateStaticParams() {
  return sectionsConfig.map((item) => ({
    section: item.sectionName,
  }));
}

const SectionPage = ({ params: { section } }) => {
  const sectionItem = sectionsConfig.find((item) => item.sectionName === section);

  if (!sectionItem) return;

  return (
    <Layout>
      <HeaderDoc />
      <Title title={sectionItem.title} />
      <Sections sections={sectionItem.links} sectionName={sectionItem.sectionName} />
    </Layout>
  );
};

export default SectionPage;
