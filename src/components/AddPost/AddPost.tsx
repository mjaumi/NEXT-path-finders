import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import AddPostForm from './AddPostForm';

const AddPost = () => {
  // rendering add post component here
  return (
    <section className='w-3/5 mx-auto bg-primary-white p-5 rounded-xl shadow-finder-shadow'>
      <UserInfo
        imgUrl='https://friendkit.cssninja.io/assets/img/avatars/jenna.png'
        userName='Ema Jackson'
        timestamp='MMM DD YYYY, HH:MM'
      />

      <AddPostForm />
    </section>
  );
};

export default AddPost;
