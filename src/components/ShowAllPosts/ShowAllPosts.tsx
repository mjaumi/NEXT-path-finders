'use client';

import React from 'react';
import Post from '../shared/Post';
import { useGetPostsQuery } from '@/redux/features/post/postApi';

const ShowAllPosts = () => {
  // integration of RTK query hooks here
  const { data: postsResponse, isLoading, isError } = useGetPostsQuery(null);

  // deciding what to render
  let content = null;

  if (isLoading) {
    content = <p className='text-center mt-10'>Loading</p>;
  }

  if (!isLoading && isError) {
    content = <p className='text-center mt-10'>Error</p>;
  }

  if (!isLoading && !isError && !postsResponse?.posts?.length) {
    content = <p className='text-center mt-10'>No Posts Found!!</p>;
  }

  if (!isLoading && !isError && postsResponse?.posts?.length) {
    content = (
      <section>
        {postsResponse.posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </section>
    );
  }

  // rendering show all posts component here
  return content;
};

export default ShowAllPosts;
