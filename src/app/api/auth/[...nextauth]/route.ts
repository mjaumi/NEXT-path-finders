import NextAuth from 'next-auth/next';
import { authOptions } from './options';

// creating next auth handler here
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };