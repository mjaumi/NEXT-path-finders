import Link from 'next/link';
import React from 'react';

// link button datatype declared here
interface ILinkButton {
  href: string;
  children: React.ReactNode;
}

const LinkButton = ({ href, children }: ILinkButton) => {
  // rendering link button component here
  return (
    <Link
      href={href}
      className='font-medium bg-primary-blue text-primary-white px-5 py-2 rounded-lg hover:opacity-60 duration-300'
    >
      {children}
    </Link>
  );
};

export default LinkButton;
