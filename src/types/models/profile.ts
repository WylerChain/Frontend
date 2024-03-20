import { z } from "zod";

export const profileSchema = z.object({
  id: z.string(),
  birthdate: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  username: z.string(),
});
