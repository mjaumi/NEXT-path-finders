'use client';

import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import Avatar from '../shared/Avatar';
import Button from '../shared/Button';

const AuthNavbar = () => {
  // integration of next-auth hooks here
  const { status, data } = useSession();

  // handler function to handle sign out feature
  const signOutHandler = () => {
    signOut();
  };

  // rendering authentication related navbar component here
  return (
    <div className={`${status === 'loading' ? 'invisible' : 'visible'}`}>
      {status === 'authenticated' ? (
        <div className='flex items-center space-x-3'>
          <div className='flex items-center'>
            <p className='mr-2'>{data.user?.name?.split(' ').pop()}</p>
            <Avatar src={data.user?.image as string} />
          </div>

          <Button onClick={signOutHandler} type='button'>
            Sign Out
          </Button>
        </div>
      ) : (
        <Link
          href={'/signin'}
          className='font-medium bg-primary-blue text-primary-white px-5 py-2 rounded-lg hover:opacity-60 duration-300'
        >
          Sign in
        </Link>
      )}
    </div>
  );
};

export default AuthNavbar;
