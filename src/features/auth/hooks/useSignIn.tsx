import { useState, useCallback, useEffect } from "react";
import {
  RequestManageState,
  createLoadingState,
  createFailState,
  createSuccessState,
} from "@/types/utils/managedRequest";
// import { auth } from "@/libs/firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { FirebaseError } from "@firebase/util";
// import { firebaseErrorMessageHandler } from "@/utils/firebaseErrorHandler";
import { useTranslation } from "@/i18n/client";
import { LANGUAGE_OPTIONS } from "@/i18n/settings";
import { useUpdateMeContext } from "@/contexts/meContext";

const successResponse = { status: "success" };
export type UseSignInResultType = {
  request: (
    email: string,
    password: string
  ) => Promise<RequestManageState<typeof successResponse>>;
};

export const useSignIn = (): UseSignInResultType => {
  const { t } = useTranslation(LANGUAGE_OPTIONS.ENGLISH);
  const refetchMe = useUpdateMeContext();

  const request = useCallback(
    async (email: string, password: string) => {
      try {
        // await signInWithEmailAndPassword(auth, email, password);
        // // NOTE: meの値を更新するためにreloadする（refetch前は401が返るが、refetch後はデータが返却されるようになる）
        // await refetchMe();
        return createSuccessState({ status: "success" });
      } catch (error) {
        console.log(error);
        // if (error instanceof FirebaseError) {
        //   const errorMessage = firebaseErrorMessageHandler(error.code);
        //   return createFailState(errorMessage);
        // } else {
        //   console.error(error);
        //   return createFailState(t("errors.unexpected"));
        // }
      }
    },
    [t, refetchMe]
  );

  return { request };
};
