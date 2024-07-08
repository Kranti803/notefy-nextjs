import { z } from "zod";

export const writeNotesSchema = z.object({
  title: z.string().min(10,"Title must le at least 10 characters long").max(30,"Title must less than 50 characters"),
  content: z.string().min(20,"Content must be at least 20 characters long")

});
export type TwriteNotesSchema = z.infer <typeof writeNotesSchema>
