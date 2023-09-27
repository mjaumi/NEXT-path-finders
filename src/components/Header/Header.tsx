import Link from 'next/link';
import React from 'react';
import AuthNavbar from './AuthNavbar';

const Header = () => {
  // rendering header component here
  return (
    <header className='fixed top-0 w-full bg-primary-white py-5'>
      <nav className='w-[70%] mx-auto flex justify-between'>
        <div>
          <Link href={'/'}>
            <h3 className='text-2xl font-bold text-primary-black uppercase'>
              path <span className='text-base font-light'>finder</span>
            </h3>
          </Link>
        </div>

        <div className='flex items-center space-x-5 text-primary-black'>
          <Link
            href={'/media'}
            className='font-medium hover:opacity-60 duration-300'
          >
            Media
          </Link>
          <Link
            href={'/message'}
            className='font-medium hover:opacity-60 duration-300'
          >
            Message
          </Link>
          <Link
            href={'/about'}
            className='font-medium hover:opacity-60 duration-300'
          >
            About
          </Link>

          <AuthNavbar />
        </div>
      </nav>
    </header>
  );
};

export default Header;
