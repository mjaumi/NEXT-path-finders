import React from 'react';
import Button from '../shared/Button';
import { AiFillGoogleCircle } from 'react-icons/ai';

const SocialSignIn = () => {
  // rendering social sign in component here
  return (
    <div>
      <Button
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
