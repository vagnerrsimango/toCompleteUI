// app/api/signup/route.ts
import { NextResponse } from "next/server";
import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcrypt";
import { z } from "zod";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  //   const { email, password, name } = await request.json();

  const inputSchema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z.string(),
    name: z.string(),
  });

  const inputs = inputSchema.safeParse(await request.json());

  if (inputs.error) {
    throw new Error("Invalid input");
  }

  const { email, password, name } = inputs.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return NextResponse.json({ message: "Signup successful", user: newUser });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        // Unique constraint failed
        return NextResponse.json(
          { message: "Email already in use" },
          { status: 400 }
        );
      }
      return NextResponse.json(
        { message: "Signup failed", error: error.message },
        { status: 500 }
      );
    }
  }
}
