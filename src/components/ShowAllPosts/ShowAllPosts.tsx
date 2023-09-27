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
    content = <p>Loading</p>;
  }

  if (!isLoading && isError) {
    content = <p>Error</p>;
  }

  if (!isLoading && !isError && !postsResponse?.posts?.length) {
    content = <p>No Posts Found!!</p>;
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
