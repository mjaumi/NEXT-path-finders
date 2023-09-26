import AddPost from '@/components/AddPost/AddPost';
import { Metadata } from 'next';

// Home page metadata here
export const metadata: Metadata = {
  title: 'Path Finder || Feed',
  description: 'Path Finder social media application feed page',
};

// rendering the feed page here
export default function FeedPage() {
  return (
    <>
      <AddPost />
    </>
  );
}
