'use client';

import Image from 'next/image';
import React from 'react';

const AboutChat = () => {
  return (
    <div className="flex flex-col justify-start items-start py-8 px-4 sm:p-8 xl:p-[160px] xl:pb-20 w-full bg-gray-0 z-10">
      <div>
        <Image
          alt="xieffect logo"
          src="/assets/ChatIcon.svg"
          className="w-8 h-8 sm:w-12 sm:h-12 xl:w-16 xl:h-16"
          height={0}
          width={0}
        />
      </div>
      <h2 className="mt-4 text-[24px] sm:text-[32px] 2xl:text-[64px] text-gray-70 font-medium leading-[130%] tracking-[-0.96px]">
        Больше нравится текстовый формат общения? <br /> Чаты в помощь.
      </h2>
      <h3 className="mt-4 text-[14px] sm:text-[20px] 2xl:text-[40px] text-gray-70 leading-[130%] tracking-[-0.96px]">
        Неограниченное общение во встроенном чате с возможностью обмена файлами.
      </h3>
      <div className="mt-12 w-full h-full max-h-[900px] max-w-[1600px] rounded-3xl shadow-2xl">
        <Image
          style={{
            width: '100%',
            height: 'auto',
          }}
          alt="xieffect logo"
          src="/assets/ChatImage.svg"
          height={900}
          width={1600}
          priority={false}
        />
      </div>
    </div>
  );
};

export default AboutChat;
