import ImageNext from 'next/image';

type ImagePropsT = {
  image: string;
  alt: string;
};

const Image = ({ image, alt }: ImagePropsT) => (
  <div className="flex justify-center items-center w-full bg-gray-10 aspect-[520/250] rounded-[12px] md:rounded-[24px] p-1">
    <ImageNext className="text-gray-10" alt={alt} src={image} fill />
  </div>
  );

export default Image;
