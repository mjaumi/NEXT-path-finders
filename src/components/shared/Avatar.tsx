import Image from 'next/image';
import React from 'react';

// interface for avatar datatype here
interface IAvatar {
  src: string;
  height?: string;
  width?: string;
  hasBorder?: boolean;
}

const Avatar = ({
  src,
  height = '40px',
  width = '40px',
  hasBorder,
}: IAvatar) => {
  // rendering the avatar component here
  return (
    <div
      style={{ height: height, width: width }}
      className={`rounded-full overflow-hidden ${
        hasBorder && 'border-2 border-primary-blue'
      }`}
    >
      <Image
        className='w-auto h-auto'
        src={src}
        alt='user image'
        width={0}
        height={0}
        sizes='100%'
      />
    </div>
  );
};

export default Avatar;
