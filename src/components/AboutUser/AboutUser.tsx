'use client';

import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import Avatar from '../shared/Avatar';
import Button from '../shared/Button';
import useGetUserDetails from '@/hooks/useGetUserDetails';

const AboutUser = () => {
  // integration of custom hook here
  const { status, user } = useGetUserDetails();

  // rendering about user component here
  return (
    <>
      {status === 'authenticated' && user && (
        <section className='relative w-3/5 mx-auto bg-primary-white p-5 rounded-xl shadow-finder-shadow my-5 space-y-4'>
          <div className='absolute right-5 top-5'>
            <Button type='button' additionalClassNames='flex items-center'>
              <AiFillEdit className='mr-2' />
              Edit
            </Button>
          </div>
          <div className='flex justify-center'>
            <Avatar
              src={user.imgUrl as string}
              height='80px'
              width='80px'
              hasBorder
            />
          </div>

          <div className='text-center text-primary-black'>
            <h4 className='text-3xl font-semibold'>{user.userName}</h4>
            <p className='text-sm text-primary-dark-gray'>{user.email}</p>
          </div>

          <div className='text-center text-primary-black space-y-2'>
            <p className='flex items-center justify-center'>
              <FaUserGraduate className='w-5 h-5 mr-2' />
              {user.university ? user.university : 'N/A'}
            </p>
            <p className='flex items-center justify-center'>
              <MdLocationOn className='w-5 h-5 mr-2' />
              {user.address ? user.address : 'N/A'}
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default AboutUser;
