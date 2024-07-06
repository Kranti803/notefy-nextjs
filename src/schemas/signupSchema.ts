import { z } from "zod";

export const signupSchema = z.object({
    email: z.string().trim().email({ message: "Enter a valid email" }),
    password:z.string().trim().min(8,{message:"Password must be less greater than 8 characters"}).max(16,{message:"Password must be less than 16 characters"}),
    confirmPassword:z.string().trim().min(8,{message:"Password must be greater than 8 characters"}).max(16,{message:"Password must be lessa than 16 characters"})
}).refine(data=>data.password === data.confirmPassword,{
    message:"Password must match",
    path:['confirmPassword']
});
export type TsignupSchema =z.infer< typeof signupSchema>