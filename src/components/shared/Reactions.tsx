'use client';

import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import useGetUserDetails from '@/hooks/useGetUserDetails';
import { useAlterReactionsMutation } from '@/redux/features/post/postApi';
import Link from 'next/link';

const Reactions = ({ reacts, postId }: { reacts: number; postId: string }) => {
  // integration of custom hooks here
  const { user } = useGetUserDetails();

  // integration of RTK Query hooks here
  const [alterReaction, { data }] = useAlterReactionsMutation();

  // handler function to handler reacting feature
  const alterReactionHandler = () => {
    if (user) {
      alterReaction({
        postId,
        email: user.email,
        reacts,
      });
    }
  };

  // rendering the reactions component here
  return (
    <div className='flex justify-between items-center px-4'>
      <p className='text-sm text-primary-dark-gray'>
        {reacts
          ? `${reacts} people reacted on this`
          : 'Be the first to react on this'}
      </p>
      <div className='flex items-center space-x-5'>
        <button onClick={alterReactionHandler}>
          {!user?.likedPosts.includes(postId) ? (
            <AiOutlineHeart className='h-7 w-7 text-primary-dark-gray hover:opacity-60 hover:scale-125 duration-300' />
          ) : (
            <AiFillHeart className='h-7 w-7 text-primary-red hover:opacity-60 hover:scale-125 duration-300' />
          )}
        </button>
        {/* <Link
          href={`/details?${new URLSearchParams({
            post: postId,
          })}`}
          title='View Details'
        >
          <MdMoreHoriz className='h-6 w-6 text-primary-dark-gray hover:opacity-60 hover:scale-125 duration-300 cursor-pointer' />
        </Link> */}
      </div>
    </div>
  );
};

export default Reactions;
