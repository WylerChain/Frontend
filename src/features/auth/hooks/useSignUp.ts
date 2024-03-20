import { useState, useCallback, useEffect } from "react";
import {
  RequestManageState,
  createLoadingState,
  createFailState,
  createSuccessState,
} from "@/types/utils/managedRequest";
// import { auth } from "@/libs/firebase";
// import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
// import { FirebaseError } from "@firebase/util";
// import { firebaseErrorMessageHandler } from "@/utils/firebaseErrorHandler";
import { useTranslation } from "@/i18n/client";
import { LANGUAGE_OPTIONS } from "@/i18n/settings";
// import { postAccount } from "@/services/postAccount";
import { useUpdateMeContext } from "@/contexts/meContext";

const successResponse = { status: "success" };
export type UseSignUpResultType = {
  request: (
    email: string,
    password: string
  ) => Promise<RequestManageState<typeof successResponse>>;
};

export const useSignUp = (): UseSignUpResultType => {
  const { t } = useTranslation(LANGUAGE_OPTIONS.ENGLISH);
  const refetchMe = useUpdateMeContext();

  const request = useCallback(
    async (email: string, password: string) => {
      try {
        // const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // await sendEmailVerification(userCredential.user);
        // await postAccount({ uid: userCredential.user.uid, email });
        // NOTE: meの値を更新するためにreloadする（refetch前は401が返るが、refetch後はデータが返却されるようになる）
        // await refetchMe();
        return createSuccessState(successResponse);
      } catch (error) {
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
