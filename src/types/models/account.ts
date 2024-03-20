import { ValueOf } from "next/dist/shared/lib/constants";
import { z } from "zod";

export const accountStatusEnum = {
  BeforeReview: "before_review",
  UnderReview: "under_review",
  Approved: "approved",
  Rejected: "rejected",
} as const;

export type AccountStatus = ValueOf<typeof accountStatusEnum>;

export const accountStatusSchema = z.nativeEnum(accountStatusEnum);

export const accountSchema = z.object({
  id: z.string(),
  uid: z.string(),
  email: z.string(),
  status: accountStatusSchema,
  email_verified: z.boolean(),
});
