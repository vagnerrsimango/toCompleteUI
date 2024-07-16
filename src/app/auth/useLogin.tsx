import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

export default function useLogin() {
  const initInputValues = {
    email: "",
    password: "",
  };

  const [inputs, setInputs] = useState(initInputValues);

  const onChangeText = (target: string, value: any) => {
    setInputs((prev) => ({ ...prev, [target]: value }));
  };

  const handleSignInByUserAndPassword = async (e: FormEvent) => {
    e.preventDefault();

    console.log("inputs", inputs);

    try {
      await signIn("credentials", {
        email: inputs.email,
        password: inputs.password,

        redirect: true,
        callbackUrl: "/",
      });
    } catch (error) {
      console.log("🚀 ~ handleSignInByUserAndPassword ~ error:", error);
    }
  };

  return { inputs, onChangeText, handleSignInByUserAndPassword };
}
