import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import Avatar from '../shared/Avatar';
import Button from '../shared/Button';

const AboutUser = () => {
  // rendering about user component here
  return (
    <section className='relative w-3/5 mx-auto bg-primary-white p-5 rounded-xl shadow-finder-shadow my-5 space-y-4'>
      <div className='absolute right-5 top-5'>
        <Button type='button' additionalClassNames='flex items-center'>
          <AiFillEdit className='mr-2' />
          Edit
        </Button>
      </div>
      <div className='flex justify-center'>
        <Avatar
          src='https://friendkit.cssninja.io/assets/img/avatars/jenna.png'
          height='100px'
          width='100px'
          hasBorder
        />
      </div>

      <div className='text-center text-primary-black'>
        <h4 className='text-3xl font-semibold'>Ema Jackson</h4>
        <p className='text-sm text-primary-dark-gray'>ema.jackson@gmail.com</p>
      </div>

      <div className='text-center text-primary-black space-y-2'>
        <p className='flex items-center justify-center'>
          <FaUserGraduate className='w-5 h-5 mr-2' />
          Ahsanullah University of Science & Technology
        </p>
        <p className='flex items-center justify-center'>
          <MdLocationOn className='w-5 h-5 mr-2' />
          B-15, G-4 Motijheel, A.G.B Colony, Dhaka-1000.
        </p>
      </div>
    </section>
  );
};

export default AboutUser;
