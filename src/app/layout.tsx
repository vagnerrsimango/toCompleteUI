import type { Metadata } from "next";
import { Inter, Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "@/providers/AuthProvider";
import { CookiesProvider } from 'react-cookie';

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To Complete",
  description: "Soluções Eficazes para Resultados Completos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={nunito.className}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
   
  );
}
