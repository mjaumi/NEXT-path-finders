'use client';

import Image from 'next/image';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useCreatePostMutation } from '@/redux/features/post/postApi';
import moment from 'moment';

// declaration of new post type here
type NewPost = {
  text: string;
  imgUrl: string;
};

const AddPostForm = () => {
  // integration of RTK Query hooks here
  const [createNewPost, createNewPostFlags] = useCreatePostMutation();

  // integration of next-auth hooks here
  const { data } = useSession();

  // integration of react hooks here
  const [imageUrl, setImageUrl] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  // handler function for handling new post uploading feature
  const addNewPostHandler = (values: NewPost) => {
    console.log(values);
    setShowToast(true);
    createNewPost({
      text: values.text,
      postImageUrl: values.imgUrl,
      reacts: 0,
      comments: [],
      createdBy: {
        name: data?.user?.name as string,
        image: data?.user?.image as string,
      },
      createdAt: moment().format('MMMM DD YYYY, h:mma'),
    });
  };

  // showing notification based on post creation success
  if (createNewPostFlags.isSuccess && showToast) {
    toast.success('Post Uploaded Successfully!!', {
      toastId: 'post-create-success',
    });
    setImageUrl('');
    setShowToast(false);
  }

  // rendering add post form component here
  return (
    <div className='mt-4'>
      <Formik
        initialValues={{
          text: '',
          imgUrl: '',
        }}
        onSubmit={(values: NewPost, { resetForm }) => {
          addNewPostHandler(values);
          resetForm();
        }}
      >
        {({ handleChange, values }) => (
          <Form className='space-y-3'>
            <textarea
              className='w-full h-[100px] py-2 outline-none text-primary-black resize-none text-sm'
              name='text'
              placeholder="What's on your mind..."
              value={values.text}
              onChange={handleChange}
            ></textarea>

            {!imageUrl ? (
              <ImageUploader setImageUrl={setImageUrl} />
            ) : (
              <div className='w-full rounded-xl overflow-hidden'>
                <Image
                  className='w-full h-auto'
                  src={imageUrl}
                  height={0}
                  width={0}
                  sizes='100%'
                  alt='uploaded image'
                />
              </div>
            )}
            <div className='flex justify-end'>
              <button
                type='submit'
                className='bg-primary-blue text-primary-white px-10 py-2 rounded-lg font-medium hover:opacity-60 duration-300 disabled:opacity-40 disabled:cursor-not-allowed'
                disabled={!values.imgUrl || !values.text}
              >
                Post
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPostForm;
