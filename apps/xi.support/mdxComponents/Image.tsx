import ImageNext from 'next/image';

type ImagePropsT = {
  image: string;
  alt: string;
  noRatio?: boolean;
};

const Image = ({ image, alt, noRatio, ...props }: ImagePropsT) => (
  <div
    className={`flex justify-center items-center w-full bg-gray-10 ${noRatio ? '' : 'aspect-[520/250]'} rounded-[12px] md:rounded-[24px] m-2 p-6`}
  >
    <ImageNext
      className="text-gray-10 rounded-xl"
      alt={alt}
      src={image}
      {...props}
    />
  </div>
);

export default Image;
