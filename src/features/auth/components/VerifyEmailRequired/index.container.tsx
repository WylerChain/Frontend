import React, { FC } from "react";
import { VerifyEmailRequired as VerifyEmailRequiredPresentationComponent } from "./index.presentation";
// import { sendEmailVerification } from "firebase/auth";
// import { useAuthContext } from "@/contexts/authContext";
import { useSnackbar } from "@/contexts/snackbarContext";
// import { FirebaseError } from "firebase/app";
// import { firebaseErrorMessageHandler } from "@/utils/firebaseErrorHandler";
import { useTranslation } from "@/i18n/client";
import { LANGUAGE_OPTIONS, NAMESPACE_OPTIONS } from "@/i18n/settings";

export const VerifyEmailRequired: React.FC = () => {
  // const { user } = useAuthContext();
  const showSnackbar = useSnackbar();
  const { t } = useTranslation(
    LANGUAGE_OPTIONS.ENGLISH,
    NAMESPACE_OPTIONS.auth
  );

  const onClickResendMail = async () => {
    // TODO: userが無い場合の処理を適切にハンドリングする
    // 現状、onClickResendMailの処理とフックとなるcomponentはuser初期化完了時までrenderされないので、
    // 問題はない。
    // if (!user) throw new Error("userの初期化に失敗");
    // try {
    //   await sendEmailVerification(user);
    //   showSnackbar({ newMessage: t("message.sentVerifyEmailSucceeded"), newSeverity: "success" });
    // } catch (error) {
    //   if (error instanceof FirebaseError) {
    //     const errorMessage = firebaseErrorMessageHandler(error.code);
    //     showSnackbar({ newMessage: errorMessage, newSeverity: "error" });
    //   } else {
    //     console.error(error);
    //     showSnackbar({ newMessage: t("errors.sentVerifyEmailFailed"), newSeverity: "error" });
    //   }
    // }
  };

  return (
    <VerifyEmailRequiredPresentationComponent
      user={{}}
      onClickResendMail={onClickResendMail}
    />
  );
};
