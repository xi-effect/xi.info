import React, { FC } from 'react';
import Image from 'next/image';

type MemojiT = {
  wrapperClassName: string;
  imageClassName: string;
};

const Memoji: FC<MemojiT> = (props) => {
  const { imageClassName, wrapperClassName } = props;

  return (
    <div className={`flex ${wrapperClassName}`}>
      <Image
        width={512}
        height={512}
        quality={100}
        alt="male-memojis"
        src="/home/male-memojis.svg"
        className={imageClassName}
      />

      <Image
        width={512}
        height={512}
        quality={100}
        alt="female-memojis"
        src="/home/female-memojis.svg"
        className={`ml-[-16px] ${imageClassName}`}
      />

      <Image
        width={512}
        height={512}
        quality={100}
        alt="male-memojis"
        src="/home/male-memojis-2.svg"
        className={`ml-[-16px] ${imageClassName}`}
      />

      <Image
        width={512}
        height={512}
        quality={100}
        alt="female-memojis"
        src="/home/female-memojis-2.svg"
        className={`ml-[-16px] ${imageClassName}`}
      />
    </div>
  );
};

export default Memoji;
