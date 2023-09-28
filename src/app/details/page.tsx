import PostDetails from '@/components/PostDetails/PostDetails';
import { useGetPostQuery } from '@/redux/features/post/postApi';
import { Metadata } from 'next';

// About page metadata here
export const metadata: Metadata = {
  title: 'Path Finder || Details',
  description: 'Path Finder social media application details page',
};

// post Id datatype here
interface IPostId {
  post: string;
}

// rendering the details page here
export default function DetailsPage({
  searchParams,
}: {
  searchParams: IPostId;
}) {
  console.log(searchParams);

  return (
    <>
      <PostDetails postId={searchParams.post} />
    </>
  );
}
