import { apiSlice } from '../apiSlice';

// initializing the user APIs here
export const userApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        // GET query to get the current logged in user
        getCurrentUser: builder.query<UserRes, string>({
            query: email => ({
                url: `/current-user/${email}`
            }),
        }),
    }),
});

export const {
    useLazyGetCurrentUserQuery,
} = userApi;