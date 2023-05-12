import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GitHubProvider({
      clientId: <string>process.env.GITHUB_ID,
      clientSecret: <string>process.env.GITHUB_SECRET,

    })
    // CredentialsProvider({
    //   name: "Sign in",
    //   credentials: {
    //     email: {
    //       label: "Email",
    //       type: "email",
    //       placeholder: "example@example.com",
    //     },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     const user = { id: "1", name: "Admin", email: "admin@admin.com" };
    //     return user;
    //   },
    // }),
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };