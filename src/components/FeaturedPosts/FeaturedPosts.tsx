'use client';

import React from 'react';
import Post from '../shared/Post';
import { useGetPostsQuery } from '@/redux/features/post/postApi';

const FeaturedPosts = () => {
  // integration of RTK Query hooks here
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
    const posts = [...postsResponse.posts];

    content = (
      <section className='my-20'>
        <div className='flex justify-center'>
          <h2 className='text-2xl font-semibold text-primary-black border-b-2 border-primary-black px-3'>
            Featured Posts
          </h2>
        </div>

        <div className='mt-10'>
          {posts.length > 3
            ? posts
                .sort((a, b) =>
                  !a.reacts && !b.reacts
                    ? 0
                    : !a.reacts
                    ? 1
                    : !b.reacts
                    ? -1
                    : a.reacts < b.reacts
                    ? 1
                    : a.reacts > b.reacts
                    ? -1
                    : 0
                )
                .slice(0, 3)
                .map((post) => <Post key={post._id} post={post} />)
            : posts.map((post) => <Post key={post._id} post={post} />)}
        </div>
      </section>
    );
  }

  // rendering featured posts component here
  return content;
};

export default FeaturedPosts;
