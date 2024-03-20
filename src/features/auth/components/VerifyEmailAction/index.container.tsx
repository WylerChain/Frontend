import React, { FC, useEffect, useRef, useState } from "react";
// import { auth } from "@/libs/firebase";
// import { applyActionCode } from "firebase/auth";
import { useRouter } from "next/navigation";
import { VerifyEmailAction as VerifyEmailActionPresentationComponent } from "./index.presentation";
// import { FirebaseError } from "firebase/app";
// import { firebaseErrorMessageHandler } from "@/utils/firebaseErrorHandler";
import { useSnackbar } from "@/contexts/snackbarContext";
import { useTranslation } from "@/i18n/client";
import { LANGUAGE_OPTIONS, NAMESPACE_OPTIONS } from "@/i18n/settings";
import { useUpdateMeContext } from "@/contexts/meContext";

export type VerifyEmailProps = {
  actionCode: string;
};

export type Result =
  | { type: "loading" }
  | { type: "success" }
  | { type: "error"; message: string };

export const VerifyEmailAction: React.FC<VerifyEmailProps> = ({
  actionCode,
}) => {
  const refetchMe = useUpdateMeContext();
  const router = useRouter();
  const showSnackbar = useSnackbar();
  const { t: authT } = useTranslation(
    LANGUAGE_OPTIONS.ENGLISH,
    NAMESPACE_OPTIONS.auth
  );
  const { t } = useTranslation(LANGUAGE_OPTIONS.ENGLISH);
  /** Strict Modeがtrueであってもmount回数を1回だけに制御するためのref */
  const mountedRef = useRef(false);
  const [result, setResult] = useState<Result>({ type: "loading" });

  useEffect(() => {
    const handleActionCode = async () => {
      try {
        // await applyActionCode(auth, actionCode);
        // NOTE: meのemail_verifiedの更新を反映させるためにreloadする。
        // 尚、非ログイン状態の場合は、後続のsign inのタイミングでemail_verifiedの更新がされる。
        // await refetchMe();
        showSnackbar({
          newMessage: authT("message.verificationEmailSucceeded"),
          newSeverity: "success",
        });
        setResult({ type: "success" });
      } catch (error) {
        // if (error instanceof FirebaseError) {
        //   const errorMessage = firebaseErrorMessageHandler(error.code);
        //   showSnackbar({ newMessage: errorMessage, newSeverity: "error" });
        //   setResult({ type: "error", message: errorMessage });
        // } else {
        //   console.error(error);
        //   showSnackbar({ newMessage: t("errors.unexpected"), newSeverity: "error" });
        //   setResult({ type: "error", message: t("errors.unexpected") });
        // }
      }
    };

    // NOTE: 現状、冪等性が担保されてない処理であるため、
    // 必ず一回だけ実行するようにeffectを設定しておく。
    if (!mountedRef.current) {
      mountedRef.current = true;
      handleActionCode();
    }
  }, [actionCode]); // NOTE: actionCodeが変更されることは想定していない

  return (
    <VerifyEmailActionPresentationComponent authT={authT} result={result} />
  );
};
