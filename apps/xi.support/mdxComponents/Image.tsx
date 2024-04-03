import ImageNext from 'next/image';

type ImagePropsT = {
  image: string;
  alt: string;
};

const Image = ({ image, alt, ...props }: ImagePropsT) => (
  <div className="flex justify-center items-center w-full bg-gray-10 aspect-[520/250] rounded-[12px] md:rounded-[24px] p-1">
    <ImageNext className="text-gray-10 rounded-xl" alt={alt} src={image} {...props} />
  </div>
);

export default Image;
