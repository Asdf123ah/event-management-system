import { z } from "zod";

// Auth || Create User Schema

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/)
    .regex(/[!@#$%^&*(),.?":{}|<>]/),
});

export const SignUpFormSchema = z.object({
  name: z.string().min(1, "Name should not be Empty"),
  email: z.string().email().min(1, "Please provide an email"),
  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/)
    .regex(/[!@#$%^&*(),.?":{}|<>]/),
  confirmPassword: z.string().min(8),
});

export type LoginFormFields = z.infer<typeof LoginFormSchema>;
export type SignUpFormFields = z.infer<typeof SignUpFormSchema>;
