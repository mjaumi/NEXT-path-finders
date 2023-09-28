'use client'

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useLazyGetCurrentUserQuery } from '@/redux/features/user/userApi';

interface IUserReturn {
    status: 'loading' | 'authenticated' | 'unauthenticated';
    user: User;
}

// custom hook to get user details
const useGetUserDetails = (): IUserReturn => {
    // integration of RTK Query hooks here
    const [getCurrentUser, { data: userResponse }] = useLazyGetCurrentUserQuery();

    // integration of next-auth hooks here
    const { status, data } = useSession();

    // integration of react hooks here
    const [hasUserDetails, setHasUserDetails] = useState<boolean>(false);

    // fetching user details here
    if (status === 'authenticated' && !hasUserDetails) {
        getCurrentUser(data.user?.email as string);
        setHasUserDetails(true);
    }

    return {
        user: userResponse?.user as User,
        status,
    };
}

export default useGetUserDetails;