
// User datatype declared here
type User = {
    _id?: string;
    email: string;
    password: string | null;
    userName: string;
    imgUrl: string | null;
    university: string | null;
    address: string | null;
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

// comment datatype declared here
type Comment = {
    _id?: string;
    comment: string;
    createdBy: Partial<User>;
}

// Post datatype declared here
type Post = {
    _id?: string;
    text: string;
    postImageUrl: string;
    comments: Array<Comment> | [];
    createdBy: Partial<User>;
    createdAt: string;
}