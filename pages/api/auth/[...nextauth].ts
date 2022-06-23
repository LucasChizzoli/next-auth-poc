import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
});
