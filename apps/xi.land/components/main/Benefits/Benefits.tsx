import { Sticker } from './Sticker';

export const Benefits = () => {
  return (
    <section className="bg-emerald-300 relative w-full m-h-[915px] overflow-hidden px-4 py-8 xs:px-6 sm:px-12 sm:py-20 lg:px-16 flex items-center justify-center">
      <div className="bg-gray-100 h-full w-full grid grid-cols-1 grid-rows-3 gap-[10px] sm:grid-cols-3 sm:grid-rows-2 sm:gap-6 items-stretch sm:place-content-center">
        <Sticker className="bg-pink-500 row-start-1">pink</Sticker>

        <Sticker className="bg-green-500 col-start-2 row-start-2 xs:row-start-3 xs:col-start-1 sm:row-start-2 sm:col-start-2 sm:-translate-y-[20%] lg:-translate-y-[50%]">
          green
        </Sticker>

        <Sticker className="bg-yellow-500 row-start-3 xs:row-start-2 xs:col-start-2 sm:row-start-1 sm:col-start-3">
          yellow
        </Sticker>
      </div>
    </section>
  );
};
