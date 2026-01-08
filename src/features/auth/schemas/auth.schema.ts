import { z } from "zod";

const emailSchema = z.email({ message: "Invalid email address" });

export const registerSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters"),
  email: emailSchema,
  password: z.string().min(8, "Password must be at least 8 characters long")
});

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required")
});
