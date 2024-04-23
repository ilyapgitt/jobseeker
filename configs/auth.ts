import { AuthOptions, User } from "next-auth";
import Google from 'next-auth/providers/google';
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true},
        password: { label: 'password', type: 'password', required: true},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const storedCredentials = localStorage.getItem('credentials');
        if(!storedCredentials) {
          return null;
        }

        const parsedCredentials = JSON.parse(storedCredentials);

        if(parsedCredentials.email === credentials.email && parsedCredentials.password === credentials.password) {
          const userWithoutPass = { email: parsedCredentials.email};
          return userWithoutPass as User;
        }

        return null;
      }
    })
  ]
}