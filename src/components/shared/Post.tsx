import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import React from 'react';
import Comments from '../Comments/Comments';
import Avatar from './Avatar';
import UserInfo from '../UserInfo/UserInfo';

const Post = ({ post }: { post: Post }) => {
  // destructuring the post object here
  const { _id, text, postImageUrl, createdBy, createdAt, comments, reacts } =
    post;

  // rendering the post component here
  return (
    <div className='w-3/5 mx-auto bg-primary-white p-5 rounded-xl shadow-finder-shadow my-5 space-y-4'>
      <UserInfo
        imgUrl={createdBy.imgUrl as string}
        userName={createdBy.userName as string}
        timestamp={createdAt}
      />

      <div>
        <p className='text-primary-black text-sm'>{text}</p>
      </div>

      <div className='rounded-xl overflow-hidden'>
        <Image
          className='w-auto h-full'
          src={postImageUrl}
          alt={text}
          width={0}
          height={0}
          sizes='100%'
        />
      </div>

      <div className='flex justify-between items-center px-4'>
        <p className='text-sm text-primary-dark-gray'>
          {reacts
            ? `${reacts} people reacted on this`
            : 'Be the first to react on this'}
        </p>
        <div className='flex items-center space-x-5'>
          <AiOutlineHeart className='h-7 w-7 text-primary-dark-gray hover:opacity-60 hover:scale-125 duration-300 cursor-pointer' />
          <FaRegComment className='h-6 w-6 text-primary-dark-gray hover:opacity-60 hover:scale-125 duration-300 cursor-pointer' />
        </div>
      </div>

      <Comments comments={comments} postId={_id as string} />
    </div>
  );
};

export default Post;
