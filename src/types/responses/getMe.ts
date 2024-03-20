import { z } from "zod";
import { meSchema } from "../models/me";

export const getMeResponseSchema = meSchema;

export type GetMeResponse = z.infer<typeof getMeResponseSchema>;
