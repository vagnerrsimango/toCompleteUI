import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch("http://localhost:3000/api/signin", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });
          const response = await res.json();

          if (res.ok && response.user) {
            return response.user;
          }
        } catch (error) {
          console.log("🚀 ~ authorize ~ error:", error);
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  debug: true,

  callbacks: {
    async session({ session, user }: any) {
      if (session & user) {
        session.id = user.id;
      }
      return session;
    },
  },
});
export { handler as GET, handler as POST, handler as auth };
