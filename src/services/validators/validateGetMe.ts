import { GetMeResponse, getMeResponseSchema } from "@/types/responses/getMe";

export const validateGetMe = (data: unknown): GetMeResponse => {
  const parsed = getMeResponseSchema.parse(data);
  return parsed;
};
