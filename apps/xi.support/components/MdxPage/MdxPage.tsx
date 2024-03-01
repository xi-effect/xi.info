import dynamic from 'next/dynamic';

type MdxPageT = {
  sectionId: string;
  mdxId: string;
};

export const MdxPage = ({ sectionId, mdxId }: MdxPageT) => {
  const MDX = dynamic(() => import(`markdown/${sectionId}/${mdxId}.mdx`));

  return (
    <section className="p-16">
      MDX
      <div className="xl:basis-[77%] xl:mr-8">
        <MDX />
      </div>
    </section>
  );
};
