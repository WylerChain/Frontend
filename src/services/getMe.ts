import initializeAxiosInstance from "@/libs/api/client";
import { GetMeResponse } from "@/types/responses/getMe";
import { validateGetMe } from "@/services/validators/validateGetMe";

const apiClient = initializeAxiosInstance({});

export const getMe = async (): Promise<GetMeResponse> => {
  let response: unknown;

  await apiClient
    .request<GetMeResponse>({
      method: "get",
      url: `me`,
    })
    .then((res) => {
      response = res.data;
    })
    .catch(({ error }) => {
      throw new Error(error);
    });

  let parsedResponse: GetMeResponse;
  try {
    parsedResponse = validateGetMe(response);
  } catch (error) {
    console.error(error);
    throw new Error("invalid reponse.");
  }
  return parsedResponse;
};
