'use client';

import React from 'react';
import { Formik, Form } from 'formik';
import { TbCameraPlus } from 'react-icons/tb';

// declaration of new post type here
type NewPost = {
  text: string;
  imgUrl: string;
};

const AddPostForm = () => {
  // handler function to handle creating new post
  const addPostHandler = (value: NewPost) => {
    console.log(value);
  };

  // rendering add post form component here
  return (
    <div className='mt-4'>
      <Formik
        initialValues={{
          text: '',
          imgUrl: '',
        }}
        onSubmit={addPostHandler}
      >
        <Form className='space-y-3'>
          <textarea
            className='w-full h-[100px] py-2 outline-none text-primary-black resize-none text-sm'
            name='text'
            placeholder="What's on your mind..."
          ></textarea>

          <div>
            <label
              className='flex justify-center items-center bg-primary-light-gray w-full h-[350px] rounded-xl cursor-pointer'
              htmlFor='image-file'
            >
              <TbCameraPlus className='h-[200px] w-[200px] text-primary-dark-gray' />
            </label>
            <input id='image-file' type='file' className='hidden' />
          </div>

          <div className='flex justify-end'>
            <button
              type='submit'
              className='bg-primary-blue text-primary-white px-10 py-2 rounded-lg font-medium hover:opacity-60 duration-300'
            >
              Post
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddPostForm;
