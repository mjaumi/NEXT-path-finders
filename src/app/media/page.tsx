import Post from '@/components/shared/Post/Post';
import { Metadata } from 'next';

// Media page metadata here
export const metadata: Metadata = {
  title: 'Path Finder || Media',
  description: 'Path Finder social media application media page',
};

// rendering the media page here
export default function MediaPage() {
  return (
    <>
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
}
