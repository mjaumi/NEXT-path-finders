'use client';

import { Formik, Form } from 'formik';
import { TbCameraPlus } from 'react-icons/tb';
import React from 'react';

// declaration of new post type here
type NewPost = {
  text: string;
  imgUrl: string;
};

const AddPost = () => {
  // handler function to handle creating new post
  const addPostHandler = (value: NewPost) => {
    console.log(value);
  };
  // rendering add post component here
  return (
    <section className='w-3/5 mx-auto bg-primary-white p-5 rounded-xl shadow-finder-shadow'>
      <div>
        <p>add post</p>
      </div>

      <div>
        <Formik
          initialValues={{
            text: '',
            imgUrl: '',
          }}
          onSubmit={addPostHandler}
        >
          <Form className='space-y-3'>
            <textarea
              className='w-full h-[100px] py-2 outline-none text-primary-black font-medium resize-none'
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
    </section>
  );
};

export default AddPost;
