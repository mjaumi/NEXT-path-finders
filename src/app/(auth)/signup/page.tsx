import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import SignUpForm from '@/components/AuthComp/SignUpForm';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

// Media page metadata here
export const metadata: Metadata = {
  title: 'Path Finder || Sign Up',
  description: 'Path Finder social media application sign up page',
};

// rendering the sign in page here
export default async function SignUpPage() {
  // checking the session data here
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect('/');
  }

  return (
    <>
      <SignUpForm />
    </>
  );
}
