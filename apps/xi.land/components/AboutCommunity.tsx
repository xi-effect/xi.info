'use client';
import Image from 'next/image';

interface OuterAndInnerCircle {
  src: string;
  alt: string;
  className: string;
}
const outerCircleList: OuterAndInnerCircle[] = [
  {
    src: '/assets/OuterCircle/User_1.svg',
    alt: 'user_1',
    className: `
      top-[calc(0%-(41px/2))] right-[calc(50%-(41px/2))]
      sm:top-[calc(0%-(68px/2))] sm:right-[calc(50%-(68px/2))]
      2xl:top-[calc(0%-(128px/2))] 2xl:right-[calc(50%-(128px/2))]
      `,
  },
  {
    src: '/assets/OuterCircle/User_2.svg',
    alt: 'user_2',
    className: `
      top-[calc(5%-(41px/2))] right-[calc(25%-(41px/2))]
      sm:top-[calc(7%-(68px/2))] sm:right-[calc(25%-(68px/2))]
      2xl:top-[calc(7%-(128px/2))] 2xl:right-[calc(25%-(128px/2))]
      `,
  },
  {
    src: '/assets/OuterCircle/User_3.svg',
    alt: 'user_3',
    className: `
      top-[calc(25%-(41px/2))] right-[calc(5%-(41px/2))]
      sm:top-[calc(25%-(68px/2))] sm:right-[calc(5%-(68px/2))]
      2xl:top-[calc(25%-(128px/2))] 2xl:right-[calc(5%-(128px/2))]
      `,
  },
  {
    src: '/assets/OuterCircle/User_4.svg',
    alt: 'user_4',
    className: `
      right-[calc(0%-(41px/2))] top-[calc(50%-(41px/2))]
      sm:right-[calc(0%-(68px/2))] sm:top-[calc(50%-(68px/2))]
      2xl:right-[calc(0%-(128px/2))] 2xl:top-[calc(50%-(128px/2))]
      `,
  },
  {
    src: '/assets/OuterCircle/User_5.svg',
    alt: 'user_5',
    className: `
      right-[calc(5%-(41px/2))] bottom-[calc(25%-(41px/2))]
      sm:right-[calc(7%-(68px/2))] sm:bottom-[calc(25%-(68px/2))]
      2xl:right-[calc(7%-(128px/2))] 2xl:bottom-[calc(25%-(128px/2))]
      `,
  },
  {
    src: '/assets/OuterCircle/User_6.svg',
    alt: 'user_6',
    className: `
      right-[calc(25%-(41px/2))] bottom-[calc(5%-(41px/2))]
      sm:right-[calc(25%-(68px/2))] sm:bottom-[calc(5%-(68px/2))]
      2xl:right-[calc(25%-(128px/2))] 2xl:bottom-[calc(5%-(128px/2))]
      `,
  },
  {
    src: '/assets/OuterCircle/User_7.svg',
    alt: 'user_7',
    className: `
      bottom-[calc(0%-(41px/2))] right-[calc(50%-(41px/2))]
      sm:bottom-[calc(0%-(68px/2))] sm:right-[calc(50%-(68px/2))]
      2xl:bottom-[calc(0%-(128px/2))] 2xl:right-[calc(50%-(128px/2))]
      `,
  },
  {
    src: '/assets/OuterCircle/User_8.svg',
    alt: 'user_8',
    className: `
      left-[calc(25%-(41px/2))] bottom-[calc(5%-(41px/2))]
      sm:left-[calc(25%-(68px/2))] sm:bottom-[calc(5%-(68px/2))]
      2xl:left-[calc(25%-(128px/2))] 2xl:bottom-[calc(5%-(128px/2))]
      `,
  },
  {
    src: '/assets/OuterCircle/User_9.svg',
    alt: 'user_9',
    className: `
      left-[calc(5%-(41px/2))] bottom-[calc(25%-(41px/2))]
      sm:left-[calc(7%-(68px/2))] sm:bottom-[calc(25%-(68px/2))]
      2xl:left-[calc(7%-(128px/2))] 2xl:bottom-[calc(25%-(128px/2))]
      `,
  },
  {
    src: '/assets/OuterCircle/User_10.svg',
    alt: 'user_10',
    className: `
      left-[calc(0%-(41px/2))] top-[calc(50%-(41px/2))]
      sm:left-[calc(0%-(68px/2))] sm:top-[calc(50%-(68px/2))]
      2xl:left-[calc(0%-(128px/2))] 2xl:top-[calc(50%-(128px/2))]
      `,
  },
  {
    src: '/assets/OuterCircle/User_11.svg',
    alt: 'user_11',
    className: `
      top-[calc(25%-(41px/2))] left-[calc(5%-(41px/2))]
      sm:top-[calc(25%-(68px/2))] sm:left-[calc(5%-(68px/2))]
      2xl:top-[calc(25%-(128px/2))] 2xl:left-[calc(5%-(128px/2))]
      `,
  },
  {
    src: '/assets/OuterCircle/User_12.svg',
    alt: 'user_12',
    className: `
      top-[calc(5%-(41px/2))] left-[calc(25%-(41px/2))]
      sm:top-[calc(7%-(68px/2))] sm:left-[calc(25%-(68px/2))]
      2xl:top-[calc(7%-(128px/2))] 2xl:left-[calc(25%-(128px/2))]
      `,
  },
];

const innerCircleList: OuterAndInnerCircle[] = [
  {
    src: '/assets/InnerCircle/Tasks.svg',
    alt: 'tasks',
    className: `
      top-[calc(0%-(41px/2))] right-[calc(50%-(41px/2))]
      sm:top-[calc(0%-(68px/2))] sm:right-[calc(50%-(68px/2))]
      2xl:top-[calc(0%-(128px/2))] 2xl:right-[calc(50%-(128px/2))]
      `,
  },
  {
    src: '/assets/InnerCircle/Test.svg',
    alt: 'test',
    className: `
      top-[calc(25%-(41px/2))] right-[calc(7%-(41px/2))]
      sm:top-[calc(25%-(68px/2))] sm:right-[calc(7%-(68px/2))]
      2xl:top-[calc(25%-(128px/2))] 2xl:right-[calc(7%-(128px/2))]
      `,
  },
  {
    src: '/assets/InnerCircle/Timetable.svg',
    alt: 'timetable',
    className: `
      bottom-[calc(25%-(41px/2))] right-[calc(7%-(41px/2))]
      sm:bottom-[calc(25%-(68px/2))] sm:right-[calc(7%-(68px/2))]
      2xl:bottom-[calc(25%-(128px/2))] 2xl:right-[calc(7%-(128px/2))]
      `,
  },
  {
    src: '/assets/InnerCircle/Conference.svg',
    alt: 'conference',
    className: `
      bottom-[calc(0%-(41px/2))] right-[calc(50%-(41px/2))]
      sm:bottom-[calc(0%-(68px/2))] sm:right-[calc(50%-(68px/2))]
      2xl:bottom-[calc(0%-(128px/2))] 2xl:right-[calc(50%-(128px/2))]
      `,
  },
  {
    src: '/assets/InnerCircle/Announce.svg',
    alt: 'announce',
    className: `
      bottom-[calc(25%-(41px/2))] left-[calc(7%-(41px/2))]
      sm:bottom-[calc(25%-(68px/2))] sm:left-[calc(7%-(68px/2))]
      2xl:bottom-[calc(25%-(128px/2))] 2xl:left-[calc(7%-(128px/2))]
      `,
  },
  {
    src: '/assets/InnerCircle/Chat.svg',
    alt: 'chat',
    className: `
      top-[calc(25%-(41px/2))] left-[calc(7%-(41px/2))]
      sm:top-[calc(25%-(68px/2))] sm:left-[calc(7%-(68px/2))]
      2xl:top-[calc(25%-(128px/2))] 2xl:left-[calc(7%-(128px/2))]
      `,
  },
];

const AboutCommunity = () => {
  return (
    <div className="flex flex-col gap-10 justify-start items-start mb-[50px] 2xl:mb-[144px] px-4 sm:p-8 2xl:p-[160px] 2xl:pb-20 w-full z-10">
      <div className="flex w-full sm:pb-[35px] 2xl:pb-[112px]">
        <h2 className="text-[24px] sm:text-[32px] 2xl:text-[64px] text-center w-full text-gray-70 font-medium leading-[130%] p-5">
          А главное — <span className="text-brand-80">сообщество.</span>
        </h2>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="left-0 size-[260px] sm:size-[430px] 2xl:size-[820px] animate-[spin_30s_linear_infinite]  rounded-full bg-transparent border-[1.5px] sm:border-[2.5px] 2xl:border-4 border-solid relative border-gray-30 flex justify-center items-center">
          {outerCircleList.map((item: OuterAndInnerCircle) => (
            <Image
              width={0}
              key={item.alt}
              height={0}
              alt={item.alt}
              src={item.src}
              className={`size-[41px] sm:size-[68px] 2xl:size-[128px] absolute ${item.className} animate-[spin_30s_linear_infinite_reverse]`}
              priority={false}
            />
          ))}
        </div>
        <div className="absolute">
          <div className="left-0 size-[160px] sm:size-[270px] 2xl:size-[512px] animate-[spin_30s_linear_infinite_reverse] rounded-full bg-transparent border-[1.5px] sm:border-[2.5px] 2xl:border-4 border-solid border-gray-30 relative">
            {innerCircleList.map((item: OuterAndInnerCircle) => (
              <Image
                key={item.alt}
                width={0}
                height={0}
                alt={item.alt}
                src={item.src}
                className={`size-[41px] sm:size-[68px] 2xl:size-[128px] absolute ${item.className} animate-[spin_30s_linear_infinite]`}
                priority={false}
              />
            ))}
          </div>
        </div>
        <div className="absolute">
          <Image
            width={0}
            height={0}
            className="size-[80px] sm:size-[133px] 2xl:size-[250px]"
            alt="xieffect logo"
            src="/assets/InnerLogo.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCommunity;
