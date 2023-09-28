'use client';

import React from 'react';
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import useGetUserDetails from '@/hooks/useGetUserDetails';

const Reactions = ({ reacts, postId }: { reacts: number; postId: string }) => {
  // integration of custom hooks here
  const { user } = useGetUserDetails();

  // rendering the reactions component here
  return (
    <div className='flex justify-between items-center px-4'>
      <p className='text-sm text-primary-dark-gray'>
        {reacts
          ? `${reacts} people reacted on this`
          : 'Be the first to react on this'}
      </p>
      <div className='flex items-center space-x-5'>
        {!user?.likedPosts.includes(postId) ? (
          <AiOutlineHeart className='h-7 w-7 text-primary-dark-gray hover:opacity-60 hover:scale-125 duration-300 cursor-pointer' />
        ) : (
          <AiFillHeart className='h-7 w-7 text-primary-red hover:opacity-60 hover:scale-125 duration-300 cursor-pointer' />
        )}
        <FaRegComment className='h-6 w-6 text-primary-dark-gray hover:opacity-60 hover:scale-125 duration-300 cursor-pointer' />
      </div>
    </div>
  );
};

export default Reactions;
