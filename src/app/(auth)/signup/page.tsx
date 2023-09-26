import SignUpForm from '@/components/AuthComp/SignUpForm';
import { Metadata } from 'next';

// Media page metadata here
export const metadata: Metadata = {
  title: 'Path Finder || Sign Up',
  description: 'Path Finder social media application sign up page',
};

// rendering the sign in page here
export default function SignUpPage() {
  return (
    <>
      <SignUpForm />
    </>
  );
}
