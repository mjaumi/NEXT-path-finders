'use client';

import React from 'react';
import { Formik, Form } from 'formik';
import InputField from '../shared/InputField';
import Button from '../shared/Button';
import Link from 'next/link';
import SocialSignIn from './SocialSignIn';

// sign up datatype declared here
type SignUpData = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = () => {
  // handler function to handle sign up feature
  const signUpHandler = (values: SignUpData) => {
    console.log(values);
  };

  // rendering sign up form component here
  return (
    <section className='w-2/5 mx-auto bg-primary-white p-5 rounded-xl shadow-finder-shadow my-5 space-y-4 text-primary-black'>
      <div>
        <h1 className='text-2xl font-bold'>Sign Up</h1>
        <p className='text-sm mt-2'>Create a new account</p>
      </div>

      <div>
        <Formik
          initialValues={{
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={signUpHandler}
        >
          <Form className='space-y-5'>
            <div>
              <InputField
                name='userName'
                type='text'
                placeholder='Your User Name Here'
              />
            </div>
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
            <div>
              <InputField
                name='confirmPassword'
                type='password'
                placeholder='Retype Your Password Here'
              />
            </div>

            <Button type='submit' additionalClassNames='w-full'>
              Sign Up
            </Button>
          </Form>
        </Formik>
      </div>

      <div className='text-center text-sm'>
        <p>
          Already Have An Account?{' '}
          <Link
            href={'/signin'}
            className='text-primary-blue underline hover:opacity-60 duration-300'
          >
            Sign In Here
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

export default SignUpForm;
