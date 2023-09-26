import React from 'react';
import Post from '../shared/Post';

const FeaturedPosts = () => {
  // rendering featured posts component here
  return (
    <section className='my-20'>
      <div className='flex justify-center'>
        <h2 className='text-2xl font-semibold text-primary-black border-b-2 border-primary-black px-3'>
          Featured Posts
        </h2>
      </div>

      <div className='mt-10'>
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
};

export default FeaturedPosts;
