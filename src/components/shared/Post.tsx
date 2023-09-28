import Image from 'next/image';
import React from 'react';
import Comments from '../Comments/Comments';
import Avatar from './Avatar';
import UserInfo from '../UserInfo/UserInfo';
import Reactions from './Reactions';

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

      <Reactions reacts={reacts} postId={_id as string} />

      <Comments comments={comments} postId={_id as string} />
    </div>
  );
};

export default Post;
