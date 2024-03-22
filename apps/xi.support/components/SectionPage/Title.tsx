'use client';

type TitlePropsT = {
  title: string;
};

const Title = ({ title }: TitlePropsT) => (
  <div className="w-full p-4 md:p-8 2xl:py-20 2xl:px-40 flex justify-center items-center flex-row z-10">
    <div className="w-full max-w-[1920px] flex flex-col gap-2">
      {/* <div>1</div> */}
      <h1 className="font-medium text-[32px] md:text-[48px] 2xl:text-[64px]">{title}</h1>
    </div>
  </div>
);

export default Title;
