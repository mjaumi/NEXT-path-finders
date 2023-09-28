'use client';

import { useGetPostQuery } from '@/redux/features/post/postApi';
import Image from 'next/image';
import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import Comments from '../Comments/Comments';
import Details from './Details';

const PostDetails = ({ postId }: { postId: string }) => {
  // integration of RTK Query hooks here
  const { data: post } = useGetPostQuery(postId);

  // rendering post details component here
  return (
    <section className='flex justify-between rounded-xl shadow-finder-shadow overflow-hidden'>
      <Details post={post as Post} />
    </section>
  );
};

export default PostDetails;
