import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import React from 'react';

const Post = () => {
  // rendering the post component here
  return (
    <div className='w-3/5 mx-auto bg-primary-white p-5 rounded-xl shadow-finder-shadow my-5 space-y-4'>
      <div className='flex items-center space-x-3'>
        <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
          <Image
            className='w-auto h-auto'
            src={'https://friendkit.cssninja.io/assets/img/avatars/jenna.png'}
            alt='user image'
            width={0}
            height={0}
            sizes='100%'
          />
        </div>

        <div>
          <p className='text-sm text-primary-black font-semibold'>
            Ema Jackson
          </p>
          <span className='block text-xs text-primary-dark-gray'>
            July 19 2018, 19:42pm
          </span>
        </div>
      </div>

      <div>
        <p className='text-primary-black text-sm'>
          Thanks a lot to @Gaelle and @Rolf for this wonderful team lunch. The
          food was really tasty and we had some great laughs. Thanks to all the
          team, you are all awesome !
        </p>
      </div>

      <div className='h-[350px] rounded-xl overflow-hidden'>
        <Image
          className='w-auto h-auto'
          src={'https://friendkit.cssninja.io/assets/img/demo/unsplash/2.jpg'}
          alt='user image'
          width={0}
          height={0}
          sizes='100%'
        />
      </div>

      <div className='flex justify-between px-4'>
        <p className='text-sm text-primary-dark-gray'>30 people liked this</p>
        <div className='flex items-center space-x-5'>
          <AiOutlineHeart className='h-7 w-7 text-primary-dark-gray hover:opacity-60 hover:scale-125 duration-300 cursor-pointer' />
          <FaRegComment className='h-6 w-6 text-primary-dark-gray hover:opacity-60 hover:scale-125 duration-300 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default Post;
