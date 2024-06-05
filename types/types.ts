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

export const HostFormSchema = z.object({
  eventName: z.string().min(1),
  venue: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  price: z.number().min(1),
  quantityAvailable: z.number().min(0),
  imageFile: z.any(),
});

export type HostFormFields = z.infer<typeof HostFormSchema>;

export const BuyerFormSchema = z.object({
  eventName: z.string().min(1),
  venue: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  price: z.number().min(1),
  quantity: z.number().min(1),
  imageFile: z.any(),
});

export type BuyerFormFields = z.infer<typeof BuyerFormSchema>;

export const ListItemSchema = z.object({
  item: z.string().min(1),
  quantity: z.number().min(1),
  imageFile: z.any(),
});

export type ListItemFields = z.infer<typeof ListItemSchema>;
