import AboutUser from '@/components/AboutUser/AboutUser';
import { Metadata } from 'next';

// About page metadata here
export const metadata: Metadata = {
  title: 'Path Finder || About',
  description: 'Path Finder social media application about page',
};

// rendering the about page here
export default function AboutPage() {
  return (
    <>
      <AboutUser />
    </>
  );
}
