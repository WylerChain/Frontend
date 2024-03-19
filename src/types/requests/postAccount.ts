import { z } from "zod";

export const postAccountRequestSchema = z.object({
  email: z.string(),
  uid: z.string(),
});

export type PostAccountRequest = z.infer<typeof postAccountRequestSchema>;
