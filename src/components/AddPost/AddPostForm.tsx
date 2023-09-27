'use client';

import Image from 'next/image';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import { useSession } from 'next-auth/react';
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
  const [showToast, setShowToast] = useState<boolean>(true);

  // handler function for handling new post uploading feature
  const addNewPostHandler = (values: NewPost) => {
    console.log(values);
    setShowToast(true);
    createNewPost({
      text: values.text,
      postImageUrl: imageUrl,
      comments: [],
      createdBy: {
        userName: data?.user?.name as string,
        imgUrl: data?.user?.image as string,
      },
      createdAt: moment().format('MMMM DD YYYY, h:mma'),
    });
  };

  // integration of formik hooks here
  const addNewPostForm = useFormik({
    initialValues: {
      text: '',
      imgUrl: '',
    },
    onSubmit: addNewPostHandler,
  });

  if (createNewPostFlags.isSuccess && showToast) {
    console.log('post uploaded successfully!!');
    addNewPostForm.resetForm({ values: { text: '', imgUrl: '' } });
    setImageUrl('');
    setShowToast(false);
  }

  // rendering add post form component here
  return (
    <div className='mt-4'>
      <form onSubmit={addNewPostForm.handleSubmit} className='space-y-3'>
        <textarea
          className='w-full h-[100px] py-2 outline-none text-primary-black resize-none text-sm'
          name='text'
          placeholder="What's on your mind..."
          defaultValue={addNewPostForm.values.text}
          onChange={addNewPostForm.handleChange}
        ></textarea>

        {!imageUrl ? (
          <ImageUploader
            setImageUrl={setImageUrl}
            addNewPostForm={addNewPostForm}
          />
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
            className='bg-primary-blue text-primary-white px-10 py-2 rounded-lg font-medium hover:opacity-60 duration-300'
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPostForm;
