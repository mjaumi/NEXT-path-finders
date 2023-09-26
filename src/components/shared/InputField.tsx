'use client';

import React from 'react';
import { useField } from 'formik';

// input datatype declared here
type Input = {
  type: 'text' | 'password' | 'email';
  placeholder: string;
  name: string;
  additionalClassNames?: string;
};

const InputField = ({
  type,
  placeholder,
  name,
  additionalClassNames,
}: Input) => {
  // integration of formik hooks here
  const [field, meta] = useField({ name });

  // rendering input field component here
  return (
    <label htmlFor={`${name}_field`}>
      <input
        className='outline-none w-full bg-primary-light-gray p-3 rounded-xl'
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {meta.error && meta.touched && (
        <span className='text-primary-red text-sm mt-1'>{meta.error}</span>
      )}
    </label>
  );
};

export default InputField;
