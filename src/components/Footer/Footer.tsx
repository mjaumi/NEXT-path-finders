import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

const Footer = () => {
  // rendering footer component here
  return (
    <footer className='bg-primary-white py-5'>
      <div className='w-[70%] mx-auto flex justify-between items-center text-primary-black text-sm'>
        <p>© Path Finders, 2023.</p>
        <p className='flex items-center'>
          Made with
          <AiFillHeart className='mx-2 text-primary-red' />
          by Milhan Joardar Aumi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
