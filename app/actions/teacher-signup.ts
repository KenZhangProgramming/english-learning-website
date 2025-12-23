"use server";

import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { Role } from "@prisma/client";

export type SignupState =
    | { success: string; error: null }
    | { error: string; success?: null }
    | null;

export async function signUpAsTeacher(prevState: SignupState, formData: FormData): Promise<SignupState> {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const specialization = formData.get("specialization") as string;
    const gender = formData.get("gender") as string || "Other";
    const city = formData.get("city") as string || "N/A";
    const country = formData.get("country") as string || "N/A";

    if (!name || !email || !password || !specialization) {
        return { error: "Please fill in all required fields." };
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return { error: "An account with this email already exists." };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: Role.TEACHER,
                teacher: {
                    create: {
                        name,
                        email,
                        gender,
                        city,
                        country,
                        specializations: {
                            create: {
                                specialization,
                            },
                        },
                    },
                },
            },
        });

        return { success: "Account created successfully! You can now log in.", error: null };
    } catch (error) {
        console.error("Teacher Signup Error:", error);
        return { error: "Something went wrong. Please try again later." };
    }
}
