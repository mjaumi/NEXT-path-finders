'use client';

import React from 'react';
import AddPostForm from './AddPostForm';
import UserInfo from '../UserInfo/UserInfo';
import LinkButton from '../shared/LinkButton';
import useGetUserDetails from '@/hooks/useGetUserDetails';

const AddPost = () => {
  // integration of custom hook here
  const { user } = useGetUserDetails();

  // rendering add post component here
  return (
    <section className='relative w-3/5 mx-auto bg-primary-white p-5 rounded-xl shadow-finder-shadow overflow-hidden'>
      <UserInfo
        imgUrl={`${user?.image && user.image}`}
        userName={`${user?.name ? user.name : 'Ema Jackson'}`}
        timestamp='MMM DD YYYY, HH:MM'
      />

      <AddPostForm />

      {!user && (
        <div className='absolute h-full w-full bg-primary-white/30 top-0 left-0 backdrop-blur-sm flex justify-center items-center text-primary-black font-semibold'>
          <div className='flex items-center space-x-2'>
            <p>Please, </p>
            <LinkButton href='/signin'>Sign In</LinkButton>
            <p>To Your Account To Share A Post.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AddPost;
