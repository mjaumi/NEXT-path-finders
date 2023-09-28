import Image from 'next/image';
import React from 'react';
import { FaUser } from 'react-icons/fa';

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
      {src ? (
        // <Image
        //   className='w-auto h-auto'
        //   src={src}
        //   alt='user image'
        //   width={0}
        //   height={0}
        //   sizes='100%'
        // />
        <></>
      ) : (
        <div className='h-full w-full flex justify-center items-center bg-primary-dark-gray'>
          <FaUser className='h-6 w-6 text-primary-light-gray' />
        </div>
      )}
    </div>
  );
};

export default Avatar;
