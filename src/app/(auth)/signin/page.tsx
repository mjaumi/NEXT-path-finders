import SignInForm from '@/components/AuthComp/SignInForm';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';

// Media page metadata here
export const metadata: Metadata = {
  title: 'Path Finder || Sign In',
  description: 'Path Finder social media application sign in page',
};

// rendering the sign in page here
export default async function SignInPage() {
  // checking the session data here
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect('/');
  }

  return (
    <>
      <SignInForm />
    </>
  );
}
