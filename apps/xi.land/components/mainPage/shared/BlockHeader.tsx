type BlockHeaderPropsT = {
  title: string;
  subTitle: string;
};

export const BlockHeader = ({ title, subTitle }: BlockHeaderPropsT) => (
  <div className="flex flex-col gap-2 text-center">
    <h5 className="text-h5 xs:text-h2 font-medium">{title}</h5>
    <p className="text-l-base xs:text-h6 text-gray-80">{subTitle}</p>
  </div>
);
