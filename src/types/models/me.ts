import { z } from "zod";
import { accountStatusSchema } from "./account";
import { profileSchema } from "./profile";

export const meSchema = z.object({
  id: z.string(),
  uid: z.string(),
  email: z.string(),
  status: accountStatusSchema,
  email_verified: z.boolean(),
  has_base_certificates: z.boolean(),
  profile: profileSchema.nullable(),
});
