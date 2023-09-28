'use client';

import React from 'react';
import { signOut } from 'next-auth/react';
import Avatar from '../shared/Avatar';
import Button from '../shared/Button';
import LinkButton from '../shared/LinkButton';
import useGetUserDetails from '@/hooks/useGetUserDetails';

const AuthNavbar = () => {
  // integration of custom hook here
  const { status, user } = useGetUserDetails();

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
            <p className='mr-2'>{user?.name?.split(' ').pop()}</p>
            <Avatar src={user?.image as string} />
          </div>

          <Button onClick={signOutHandler} type='button'>
            Sign Out
          </Button>
        </div>
      ) : (
        <LinkButton href='/signin'>Sing In</LinkButton>
      )}
    </div>
  );
};

export default AuthNavbar;
