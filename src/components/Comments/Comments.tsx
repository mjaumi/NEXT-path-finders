'use client';

import React from 'react';
import { Formik, Form } from 'formik';
import { BsSendFill } from 'react-icons/bs';
import { useSession } from 'next-auth/react';
import CommentItem from './CommentItem';
import Avatar from '../shared/Avatar';
import moment from 'moment';
import { useAddCommentMutation } from '@/redux/features/post/postApi';

type NewComment = {
  comment: string;
};

const Comments = ({
  comments,
  postId,
}: {
  comments: Array<IComment>;
  postId: string;
}) => {
  // integration of RTK Query hooks here
  const [addComment, { data: addRes }] = useAddCommentMutation();

  // integration of next-auth hooks here
  const { status, data } = useSession();

  // rendering the comments component here
  return (
    <div className='border-t p-2 space-y-5'>
      <div className='space-y-5'>
        {comments.length !== 0 &&
          comments.map((comment: IComment) => (
            <CommentItem key={comment.createdAt} comment={comment} />
          ))}
      </div>

      {status !== 'loading' && data?.user && (
        <div className='flex items-center space-x-2'>
          <Avatar src={data?.user?.image as string} />
          <div className='bg-primary-light-gray rounded-xl p-3 flex-1'>
            <Formik
              initialValues={{
                comment: '',
              }}
              onSubmit={(value: NewComment, { setValues }) => {
                addComment({
                  postId,
                  data: {
                    comment: value.comment,
                    createdBy: {
                      name: data?.user?.name as string,
                      image: data?.user?.image as string,
                    },
                    createdAt: moment().format('MMMM DD YYYY, h:mm:ssa'),
                  },
                });
                setValues({ comment: '' });
              }}
            >
              {({ handleChange, values }) => (
                <Form className='flex items-center'>
                  <input
                    className='outline-none bg-transparent flex-1'
                    name='comment'
                    type='text'
                    placeholder='Write a comment...'
                    value={values.comment}
                    onChange={handleChange}
                  />
                  <button
                    className='hover:opacity-60 hover:scale-125 duration-300'
                    type='submit'
                  >
                    <BsSendFill className='w-5 h-5 text-primary-dark-gray' />
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
