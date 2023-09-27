import { apiSlice } from '../apiSlice';

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
    }),
});

export const {
    useCreatePostMutation,
    useGetPostsQuery,
} = postsApi;