import { Metadata } from 'next';

// Home page metadata here
export const metadata: Metadata = {
  title: 'Path Finder || Feed',
  description: 'Path Finder social media application feed page',
};

// rendering the feed page here
export default function FeedPage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Feed</h1>
    </main>
  );
}
