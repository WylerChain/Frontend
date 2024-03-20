import { useCallback } from "react";
import {
  RequestManageState,
  createFailState,
  createSuccessState,
} from "@/types/utils/managedRequest";
import { auth } from "@/libs/firebase";
import { verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";
import { FirebaseError } from "@firebase/util";
import { firebaseErrorMessageHandler } from "@/utils/firebaseErrorHandler";
import { useTranslation } from "@/i18n/client";
import { LANGUAGE_OPTIONS } from "@/i18n/settings";

const successResponse = { status: "success" };
export type UseResetPasswordResultType = {
  request: (
    actionCode: string,
    newPassword: string
  ) => Promise<RequestManageState<typeof successResponse>>;
};

export const useResetPassword = (): UseResetPasswordResultType => {
  const { t } = useTranslation(LANGUAGE_OPTIONS.ENGLISH);

  const request = useCallback(
    async (actionCode: string, newPassword: string) => {
      try {
        await verifyPasswordResetCode(auth, actionCode);
        await confirmPasswordReset(auth, actionCode, newPassword);
        return createSuccessState({ status: "success" });
      } catch (error) {
        console.log(error);
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
