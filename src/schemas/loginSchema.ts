import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email({ message: "Enter a valid email" }),
  password: z
  .string()
  .trim()
  .min(8, { message: "Password must be greater than 8 characters" })
  .max(16, { message: "Password must be less tah 16 characters" }),
});
export type TloginSchema =z.infer< typeof loginSchema>;
