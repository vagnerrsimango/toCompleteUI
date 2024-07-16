import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, password } = await request.json();
  console.log("🚀 ~ POST ~ email, password:", email, password);

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    return NextResponse.json({ message: "Signin successful", user });
  } catch (error) {
    if (error instanceof Error) {
      {
        return NextResponse.json(
          { message: "Signin failed", error: error.message },
          { status: 500 }
        );
      }
    }
  }
}
