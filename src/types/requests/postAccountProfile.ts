import { FORMATTED_FULL_PHONE_NUMBER_REGEX, DATE_FORMAT_REGEX } from "@/utils/regex";
import { z } from "zod";

const addressSchema = z.object({
  default: z.boolean(),
  postal_code: z.string(),
  country: z.string(),
  state: z.string().nullable(),
  city: z.string(),
  street: z.string(),
  others: z.string().nullable(),
  phone_number: z.string().refine((value) => FORMATTED_FULL_PHONE_NUMBER_REGEX.test(value), {
    message: "Invalid phone number. Please use a format like +819011112222.",
  }),
});

export const postAccountProfileRequestSchema = z.object({
  birthdate: z.string().refine((value) => DATE_FORMAT_REGEX.test(value), {
    message: "Invalid date format. Please use the yyyy-mm-dd format.",
  }),
  first_name: z.string(),
  last_name: z.string(),
  username: z.string(),
  addresses: z.array(addressSchema),
});

export type PostAccountProfileRequest = z.infer<typeof postAccountProfileRequestSchema>;
