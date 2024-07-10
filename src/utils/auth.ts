import GitHub from "@auth/core/providers/github";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./db";

export const {
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    GitHub({
      clientId: "9b2e50166a21d930eb10",
      clientSecret: "d62c7badde7c1f3b08d765b703cbdb993adc090d",
    }),
  ],
  debug: true,
  adapter: PrismaAdapter(db),
  callbacks: {
    async session({ session, user }: any) {
      if (session & user) {
        session.id = user.id;
      }
      return session;
    },
  },
});
