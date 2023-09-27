import GoogleProvider from 'next-auth/providers/google';
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
                    userName: name as string,
                    password: '',
                    imgUrl: user.image as string,
                    university: '',
                    address: '',
                    provider: account.provider,
                }

                try {
                    const { data }: { data: UserRes } = await axios.post(`${process.env.API_URL}/new-user`, body);

                    console.log(data);

                    if (data.status === 200 || data.status === 201) {
                        return data.user;
                    } else {
                        return null;
                    }
                } catch (error) {
                    return null;
                }
            }
        }
    }
}