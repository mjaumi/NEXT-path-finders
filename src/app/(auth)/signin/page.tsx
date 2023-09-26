import SignInForm from '@/components/AuthComp/SignInForm';
import { Metadata } from 'next';

// Media page metadata here
export const metadata: Metadata = {
  title: 'Path Finder || Sign In',
  description: 'Path Finder social media application sign in page',
};

// rendering the sign in page here
export default function SignInPage() {
  return (
    <>
      <SignInForm />
    </>
  );
}
