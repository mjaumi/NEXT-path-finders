import React from 'react';
import Avatar from '../shared/Avatar';

const CommentItem = () => {
  // rendering comment item component here
  return (
    <div className='flex items-start space-x-2'>
      <div>
        <Avatar src='https://friendkit.cssninja.io/assets/img/avatars/jenna.png' />
      </div>

      <div className='bg-primary-light-gray px-3 py-2 rounded-xl w-fit text-sm text-primary-black'>
        <h6 className='font-semibold'>Ema Jackson</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris consequat.
        </p>
      </div>
    </div>
  );
};

export default CommentItem;
