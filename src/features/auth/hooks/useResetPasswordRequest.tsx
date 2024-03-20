import { useCallback } from "react";
import {
  RequestManageState,
  createFailState,
  createSuccessState,
} from "@/types/utils/managedRequest";
import { auth } from "@/libs/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { FirebaseError } from "@firebase/util";
import { firebaseErrorMessageHandler } from "@/utils/firebaseErrorHandler";
import { useTranslation } from "@/i18n/client";
import { LANGUAGE_OPTIONS } from "@/i18n/settings";

const successResponse = { status: "success" };
export type UseResetPasswordRequestResultType = {
  request: (email: string) => Promise<RequestManageState<typeof successResponse>>;
};

export const useResetPasswordRequest = (): UseResetPasswordRequestResultType => {
  const { t } = useTranslation(LANGUAGE_OPTIONS.ENGLISH);

  const request = useCallback(
    async (email: string) => {
      try {
        await sendPasswordResetEmail(auth, email);
        return createSuccessState(successResponse);
      } catch (error) {
        if (error instanceof FirebaseError) {
          const errorMessage = firebaseErrorMessageHandler(error.code);
          return createFailState(errorMessage);
        } else {
          console.error(error);
          return createFailState(t("errors.unexpected"));
        }
      }
    },
    [t]
  );

  return { request };
};
