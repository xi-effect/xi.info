'use client';

import Image from 'next/image';
import { messages } from './content';

export const MessagesMobile = () =>
  messages.map((item) => (
    <section key={item.id} className="h-[100lvh] p-8 bg-gray-100">
      <div className="h-full flex flex-col justify-between gap-8">
        <div className="flex-1 relative flex items-center justify-center ">
          <Image
            width={311}
            height={473}
            alt="messages image"
            src={`/assets/main/Messages/${item.id}.webp`}
            className="w-full max-h-[500px] object-contain"
          />
        </div>
        <div className="flex gap-3 items-baseline">
          <span className="text-h5 font-medium text-gray-0 uppercase">в</span>
          <p className="text-h5 font-medium text-gray-0 uppercase">{item.content}</p>
        </div>
      </div>
    </section>
  ));
