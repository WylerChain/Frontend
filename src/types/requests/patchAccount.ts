import { z } from "zod";

const statusSchema = z.enum(["under_review"]);

export const patchAccountRequestSchema = z.object({
  status: statusSchema,
});

export type PatchAccountRequest = z.infer<typeof patchAccountRequestSchema>;
