"use client";

import { SessionProvider } from "next-auth/react";
import { CookiesProvider } from "react-cookie";

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  return <CookiesProvider> <SessionProvider> {children}</SessionProvider></CookiesProvider>;
}
