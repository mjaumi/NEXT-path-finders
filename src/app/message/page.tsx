import { Metadata } from 'next';

// Message page metadata here
export const metadata: Metadata = {
  title: 'Path Finder || Message',
  description: 'Path Finder social media application message page',
};

// rendering the message page here
export default function MessagePage() {
  return (
    <>
      <h1 className='text-center text-3xl text-primary-red'>
        No Messages To Show! <br /> Coming Soon!
      </h1>
    </>
  );
}
