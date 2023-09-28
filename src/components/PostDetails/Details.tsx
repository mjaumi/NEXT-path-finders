import Image from 'next/image';
import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import Comments from '../Comments/Comments';

const Details = ({ post }: { post: Post }) => {
  // destructing the post object here
  const { postImageUrl, createdBy, createdAt, comments } = post || {};

  return (
    <div>
      <div className='h-[80vh]'>
        <Image
          className='w-full h-full'
          src={postImageUrl}
          height={0}
          width={0}
          sizes='100%'
          alt='posted image'
        />
      </div>
      <div className='w-2/5 bg-primary-white p-5'>
        <UserInfo
          imgUrl={createdBy.image as string}
          userName={createdBy.name as string}
          timestamp={createdAt}
        />

        <Comments
          postId={post._id as string}
          comments={comments as IComment[]}
        />
      </div>
    </div>
  );
};

export default Details;
