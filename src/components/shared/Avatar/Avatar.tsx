import Image from 'next/image';
import React from 'react';

const Avatar = ({ src }: { src: string }) => {
  // rendering the avatar component here
  return (
    <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
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
