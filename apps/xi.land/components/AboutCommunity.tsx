'use client';
import Image from 'next/image';


const AboutCommunity = () => {
  return (
    <div className="flex flex-col gap-10 justify-start items-start mb-[50px] 2xl:mb-[144px] px-4 sm:p-8 2xl:p-[160px] 2xl:pb-20 w-full z-10">
      <div className="flex w-full sm:pb-[35px] 2xl:pb-[112px]">
        <h2 className="text-[24px] sm:text-[32px] 2xl:text-[64px] text-center w-full text-gray-70 font-medium leading-[130%] p-5">
          А главное — <span className="text-brand-80">сообщество.</span>
        </h2>
      </div>

    </div>
  );
};

export default AboutCommunity;
