'use client';

import React from 'react';
import Image from 'next/image';
import { StickyScroll } from '../shared/StickyScrollReveal';

const content = [
  {
    title: 'Расписание всегда под контролем',
    description: 'Планируйте работу на день, неделю, месяц и год вперёд вместе с sovlium',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/public/assets/ScrollSection/1scroll.svg"
          width={0}
          height={0}
          className="h-full w-full object-cover"
          alt="calendar"
        />
      </div>
    ),
  },
  {
    title: 'Real time changes',
    description:
      'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Version control',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: 'Running out of content',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];

export function ScrollSection() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
