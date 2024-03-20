"use client";
import React from "react";
import { LinearProgress } from "@mui/material";
import { useTranslation } from "@/i18n/client";
import { LANGUAGE_OPTIONS, NAMESPACE_OPTIONS } from "@/i18n/settings";
import {
  useAuthAction,
  AUTH_ACTION_MODES,
} from "@/features/auth/hooks/useAuthAction";
import { VerifyEmailAction } from "@/features/auth/components/VerifyEmailAction/index.container";
import { ResetPasswordForm } from "@/features/auth/components/ResetPasswordForm/index.container";

const AuthActionPage = () => {
  const { actionState } = useAuthAction();
  const { t: authT } = useTranslation(
    LANGUAGE_OPTIONS.ENGLISH,
    NAMESPACE_OPTIONS.auth
  );
  return (
    <React.Fragment>
      {actionState?.mode === AUTH_ACTION_MODES.VERIFY_EMAIL ? (
        <VerifyEmailAction actionCode={actionState.actionCode} />
      ) : actionState?.mode === AUTH_ACTION_MODES.RESET_PASSWORD ? (
        <ResetPasswordForm actionCode={actionState.actionCode} />
      ) : actionState == undefined ? (
        <LinearProgress />
      ) : (
        // custom hooksでエラーをスローしているので、下記は現状想定していないレンダリング
        <div>{authT("errors.invalidActionUrl")}</div>
      )}
    </React.Fragment>
  );
};
export default AuthActionPage;
