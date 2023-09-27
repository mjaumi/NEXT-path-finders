'use client';

import React from 'react';
import Button from '../shared/Button';
import { signIn } from 'next-auth/react';
import { AiFillGoogleCircle } from 'react-icons/ai';

const SocialSignIn = () => {
  // handler function to handle sign in with google
  const signInWithGoogleHandler = () => {
    signIn('google');
  };

  // rendering social sign in component here
  return (
    <div>
      <Button
        onClick={signInWithGoogleHandler}
        type='button'
        additionalClassNames='w-full flex items-center justify-center'
      >
        <AiFillGoogleCircle className='h-5 w-5 mr-2' />
        Sign In With Google
      </Button>
    </div>
  );
};

export default SocialSignIn;
