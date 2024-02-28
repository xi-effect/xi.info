'use client';
import React, { useState, useEffect } from 'react';

const AboutTrust = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleClickSlide = (id: number) => {
    const element = document.getElementById(`${id}`) as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setCurrentSlide(id);
  };

  const swapTimeSlide = () => {
    const el = document.getElementById('slider');
    if (el) {
      if (currentSlide === 3) {
        el.scroll({ left: 0, behavior: 'smooth' });
        setCurrentSlide(0);
        return;
      }
      el.scrollBy({ left: 100, behavior: 'smooth' });
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(swapTimeSlide, 10000);
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className="flex h-full gap-[145px] bg-brand-60 xl:px-[160px] w-full z-10">
      <div className="max-[1440px]:hidden block">
        <div className="w-[400px] h-[calc(400px/2)] rounded-[0_0_50%_50%_/_0_0_100%_100%] bg-brand-80"></div>
        <div className="size-[400px] rounded-full bg-brand-80"></div>
        <div className="w-[400px] h-[calc(400px/2)] rounded-[0_0_50%_50%_/_0_0_100%_100%] bg-brand-80 rotate-180"></div>
      </div>
      <div className="w-full px-4 sm:px-8 py-8 xl:py-[160px]">
        <div className="flex flex-col sm:gap-8 2xl:gap-16 h-full">
          <h4 className="text-[16px] sm:text-[24px] leading-[31px] text-gray-0 font-medium">
            Доверяют xi.effect
          </h4>
          <div className="flex gap-8 flex-1 2xl:max-w-[50vw]">
            <div
              className="transition-transform duration-500 flex"
              id="slider"
              style={{
                scrollSnapType: 'x mandatory',
                overflowX: 'hidden',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className={`flex-[0_0_auto] w-full snap-start scroll-mt-[40vh] 2xl:scroll-mt-[30vh] flex flex-col gap-4`}
                  id={index.toString()}
                >
                  <p className="text-ellipsis text-wrap whitespace-pre-wrap text-[24px] sm:text-[32px] 2xl:text-[48px] leading-[48px] font-medium text-gray-0 flex-1">
                    Xi.effect позволил ускорить работу в 5 раз {index}
                  </p>
                  <p className="text-[14px] sm:text-[16px] 2xl:text-[24px] text-gray-0 leading-[48px] font-medium">
                    Кто сказал (Иванова А. Г.)
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            {[0, 1, 2, 3].map((item) => (
              <button
                key={item}
                onClick={() => handleClickSlide(item)}
                className={`size-3 sm:size-4 2xl:size-6 rounded-full ${
                  item === currentSlide ? 'bg-brand-0' : 'bg-brand-20'
                }`}
                disabled={item === currentSlide}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutTrust;
