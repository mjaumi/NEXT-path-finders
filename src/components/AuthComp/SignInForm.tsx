'use client';

import React from 'react';
import { Formik, Form } from 'formik';
import InputField from '../shared/InputField';
import Button from '../shared/Button';
import Link from 'next/link';
import SocialSignIn from './SocialSignIn';

// sign in datatype declared here
type SignInData = {
  email: string;
  password: string;
};

const SignInForm = () => {
  // handler function to handle sign in feature
  const signInHandler = (values: SignInData) => {
    console.log(values);
  };

  // rendering signin form component here
  return (
    <section className='w-2/5 mx-auto bg-primary-white p-5 rounded-xl shadow-finder-shadow my-5 space-y-4 text-primary-black'>
      <div>
        <h1 className='text-2xl font-bold'>Sign In</h1>
        <p className='text-sm mt-2'>Sign into your account</p>
      </div>

      <div>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={signInHandler}
        >
          <Form className='space-y-5'>
            <div>
              <InputField
                name='email'
                type='email'
                placeholder='Your Email Here'
              />
            </div>
            <div>
              <InputField
                name='password'
                type='password'
                placeholder='Your Password Here'
              />
            </div>

            <Button type='submit' additionalClassNames='w-full'>
              Sign In
            </Button>
          </Form>
        </Formik>
      </div>

      <div className='text-center text-sm'>
        <p>
          Do not Have An Account?{' '}
          <Link
            href={'/signup'}
            className='text-primary-blue underline hover:opacity-60 duration-300'
          >
            Create One Here
          </Link>
        </p>
      </div>

      <div className='flex items-center'>
        <div className='h-px bg-primary-blue flex-1'></div>
        <p className='mx-2 text-primary-blue text-xs'>OR</p>
        <div className='h-px bg-primary-blue flex-1'></div>
      </div>

      <SocialSignIn />
    </section>
  );
};

export default SignInForm;
