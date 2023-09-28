import AboutUser from '@/components/AboutUser/AboutUser';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

// About page metadata here
export const metadata: Metadata = {
  title: 'Path Finder || About',
  description: 'Path Finder social media application about page',
};

// rendering the about page here
export default async function AboutPage() {
  // checking the session data here
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect('/signin');
  }

  return (
    <>
      <AboutUser />
    </>
  );
}
