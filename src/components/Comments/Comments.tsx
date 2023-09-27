'use client';

import React from 'react';
import { Formik, Form } from 'formik';
import { BsSendFill } from 'react-icons/bs';
import CommentItem from './CommentItem';
import Avatar from '../shared/Avatar';

type NewComment = {
  comment: string;
};

const Comments = ({ comments }: { comments: Array<IComment> }) => {
  const commentHandler = (value: NewComment) => {
    console.log(value);
  };

  // rendering the comments component here
  return (
    <div className='border-t p-2 space-y-5'>
      <div className='space-y-5'>
        {comments.length !== 0 &&
          comments.map((comment: IComment) => (
            <CommentItem key={comment.createdAt} />
          ))}
      </div>

      <div className='flex items-center space-x-2'>
        <Avatar src='https://friendkit.cssninja.io/assets/img/avatars/jenna.png' />
        <div className='bg-primary-light-gray rounded-xl p-3 flex-1'>
          <Formik
            initialValues={{
              comment: '',
            }}
            onSubmit={commentHandler}
          >
            <Form className='flex items-center'>
              <input
                className='outline-none bg-transparent flex-1'
                name='comment'
                type='text'
                placeholder='Write a comment...'
              />
              <button
                className='hover:opacity-60 hover:scale-125 duration-300'
                type='submit'
              >
                <BsSendFill className='w-5 h-5 text-primary-dark-gray' />
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Comments;
