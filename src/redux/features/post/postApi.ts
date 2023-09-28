import { apiSlice } from '../apiSlice';

interface IAddComment {
    postId: string;
    data: IComment;
}

// initializing the post APIs here
export const postsApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        // POST mutation to create a new post to the server
        createPost: builder.mutation<PostRes, Post>({
            query: data => ({
                url: '/create-post',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['posts'],
        }),

        // GET query to get all the posts from the server
        getPosts: builder.query<PostsRes, null>({
            query: () => '/get-posts',
            providesTags: ['posts'],
        }),

        addComment: builder.mutation<CommentRes, IAddComment>({
            query: ({ postId, data }) => ({
                url: `/post-comment/${postId}`,
                method: 'PATCH',
                body: data,
            }),

            // updating posts into redux store with optimistic approach here
            async onQueryStarted({ postId, data }, { queryFulfilled, dispatch }) {
                let updateResult = dispatch(
                    postsApi.util.updateQueryData('getPosts', null,
                        draftPosts => {
                            if (draftPosts.posts) {
                                const updatePostIndex = draftPosts.posts.findIndex(post => post._id === postId);

                                draftPosts.posts[updatePostIndex].comments.push(data as never);
                            }
                        }
                    ),
                );

                try {
                    await queryFulfilled;
                } catch (error) {
                    updateResult.undo();
                }
            }
        })
    }),
});

export const {
    useAddCommentMutation,
    useCreatePostMutation,
    useGetPostsQuery,
} = postsApi;