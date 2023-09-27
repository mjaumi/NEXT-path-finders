
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