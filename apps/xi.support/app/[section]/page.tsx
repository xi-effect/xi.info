import { HeaderDoc, Layout } from 'components/Layout';
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

  console.log('section', sectionItem);

  return (
    <Layout>
      <HeaderDoc />
      <Title title={sectionItem.title} />
    </Layout>
  );
};

export default SectionPage;
