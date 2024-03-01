import { pageConfig } from 'components/common/pageConfig';

export const dynamicParams = false; // true | false,

export async function generateStaticParams() {
  return pageConfig.map((item) => ({
    section: item.showAllLink,
  }));
}

const SectionPage = ({ params: { section }, children }) => {
  console.log('sectionId', section);

  return children;
};

export default SectionPage;
