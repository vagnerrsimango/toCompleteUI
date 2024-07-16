"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useLogin from "./useLogin";
import FormButton from "@/components/common/FormButton";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);
  const { inputs, onChangeText, handleSignInByUserAndPassword } = useLogin();
  return (
    <main className="flex justify-center items-center h-screen">
      <Card className=" w-[400px]">
        <CardHeader className="flex justify-center items-center">
          <CardTitle className="font-semibold">TO COMPLETE</CardTitle>
          <CardDescription>
            Use as contas do google ou facebook para ter acesso
          </CardDescription>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-1">
          <form className="space-y-4" onSubmit={handleSignInByUserAndPassword}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                required
                id="email"
                placeholder="email@mail.com"
                type="email"
                name="email"
                value={inputs.email}
                onChange={(e) => onChangeText("email", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="password">password</Label>
              <Input
                id="password"
                placeholder="**********"
                type="password"
                name="password"
                required
                value={inputs.password}
                onChange={(e) => onChangeText("password", e.target.value)}
              />
            </div>

            <FormButton text="Login" />
          </form>
        </CardContent>

        <CardFooter></CardFooter>
      </Card>
    </main>
  );
}
