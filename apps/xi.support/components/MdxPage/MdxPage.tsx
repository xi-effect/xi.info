import dynamic from 'next/dynamic';

type MdxPageT = {
  sectionId: string;
  mdxId: string;
};

export const MdxPage = ({ sectionId, mdxId }: MdxPageT) => {
  const MDX = dynamic(() => import(`markdown/${sectionId}/${mdxId}.mdx`));

  return <MDX />;
};
