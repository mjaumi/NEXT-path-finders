import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import axios from 'axios';

// declaring the authentication options here
export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),

        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { type: 'text' },
                password: { type: 'password' },
            },

            async authorize(credentials): Promise<any> {
                try {
                    const body = {
                        email: credentials?.email,
                        password: credentials?.password,
                    }

                    const response = await axios.post(`http://localhost:3000/api/login`, body);

                    const { message, status, user }: UserRes = response.data;

                    console.log(user);

                    if (status !== 200) {
                        throw new Error('Invalid Credentials');
                    }

                    return Promise.resolve(user);
                } catch (error) {
                    return null;
                }
            }
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async signIn({ user, account }): Promise<any> {
            if (account?.provider === 'google') {
                const { name, email } = user;

                const body: User = {
                    email: email as string,
                    name: name as string,
                    password: '',
                    image: user.image as string,
                    university: '',
                    address: '',
                    likedPosts: [],
                    provider: account.provider,
                }

                try {
                    const { data }: { data: UserRes } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/new-user`, body);

                    console.log(data);

                    if (data.status === 200 || data.status === 201) {
                        return data.user;
                    } else {
                        return null;
                    }
                } catch (error) {
                    return null;
                }
            } else if (account?.provider === 'credentials') {
                return user;
            }
        },
        jwt: async ({ token, user }) => {
            user && (token.user = user)
            return token;
        },
        session: async ({ session, token }) => {
            const user = token.user as User;
            session.user = user;
            return session;
        },
    }
}