
// User datatype declared here
type User = {
    _id?: string;
    email: string;
    password: string | null;
    name: string;
    image: string | null;
    university: string | null;
    address: string | null;
    likedPosts: string[],
    provider: string;
}

// User Response datatype declared here
type UserRes = {
    status: number;
    message: string;
    user: User | null;
}

// Post Response datatype declared here
type PostRes = {
    status: number;
    message: string;
    post: Post | null;
}

// Posts Response datatype declared here
type PostsRes = {
    status: number;
    message: string;
    posts: Post[] | null;
}

// Common Response datatype declared here
type CommonRes = {
    status: number;
    message: string;
}

// comment datatype declared here
interface IComment {
    comment: string;
    createdBy: Partial<User>;
    createdAt: string;
}

// Post datatype declared here
type Post = {
    _id?: string;
    text: string;
    postImageUrl: string;
    reacts: number,
    comments: Array<IComment> | [];
    createdBy: Partial<User>;
    createdAt: string;
}