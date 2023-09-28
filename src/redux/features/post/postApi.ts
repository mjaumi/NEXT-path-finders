import { apiSlice } from '../apiSlice';
import { userApi } from '../user/userApi';

interface IAddComment {
    postId: string;
    data: IComment;
}

interface IReact {
    postId: string;
    email: string;
    reacts: number;
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

        // PATCH mutation to add comments in a particular post
        addComment: builder.mutation<CommonRes, IAddComment>({
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
        }),

        // PATCH mutation to alter reactions into the server
        alterReactions: builder.mutation<CommonRes, IReact>({
            query: data => ({
                url: '/calculate-reactions',
                method: 'PATCH',
                body: data,
            }),

            // updating posts into redux store after reacting with optimistic approach here
            async onQueryStarted(data, { queryFulfilled, dispatch }) {

                let alterReaction: number = 0;

                let updateResult = dispatch(
                    userApi.util.updateQueryData('getCurrentUser', data.email,
                        draftUser => {
                            if (draftUser.user) {
                                if (draftUser.user.likedPosts.includes(data.postId)) {
                                    const reactedPostIndex = draftUser.user.likedPosts.findIndex(postId => postId === data.postId);

                                    draftUser.user.likedPosts.splice(reactedPostIndex, 1);
                                    alterReaction = -1;
                                } else {
                                    draftUser.user.likedPosts.push(data.postId);
                                    alterReaction = 1;
                                }
                            }
                        }
                    ),
                );

                try {
                    dispatch(postsApi.util.updateQueryData('getPosts', null,
                        draftPosts => {
                            if (draftPosts.posts) {
                                const updatedPostIndex = draftPosts.posts.findIndex(post => post._id === data.postId);

                                draftPosts.posts[updatedPostIndex].reacts = draftPosts.posts[updatedPostIndex].reacts + alterReaction;
                            }
                        }
                    ));

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
    useAlterReactionsMutation,
    useGetPostsQuery,
} = postsApi;