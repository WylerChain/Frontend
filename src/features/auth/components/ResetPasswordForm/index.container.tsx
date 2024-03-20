import React, { FC, useState } from "react";
import {
  ResetPasswordForm as ResetPasswordFormPresentationComponent,
  FormValue,
} from "./index.presentation";
import { useRouter } from "next/navigation";
import { useSnackbar } from "@/contexts/snackbarContext";
import { useTranslation } from "@/i18n/client";
import { LANGUAGE_OPTIONS, NAMESPACE_OPTIONS } from "@/i18n/settings";
import { useResetPassword } from "../../hooks/useResetPassword";
import { useForm } from "react-hook-form";
import { isFailState, isSuccessState } from "@/types/utils/managedRequest";
import { PASSWORD_REGEX } from "@/utils/regex";

export type ResetPasswordFormProps = {
  actionCode: string;
};

export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ actionCode }) => {
  const router = useRouter();
  const showSnackbar = useSnackbar();
  const { t: authT } = useTranslation(LANGUAGE_OPTIONS.ENGLISH, NAMESPACE_OPTIONS.auth);
  const { t } = useTranslation(LANGUAGE_OPTIONS.ENGLISH);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValue>({ mode: "onChange" });

  const [isLoading, setIsLoading] = useState(false);
  const { request } = useResetPassword();

  /**
   * Description reset passwordリクエストを行いレスポンスを元にハンドリングを行う
   * @param {string} newPassword
   * @returns {void}
   */
  const resetPasswordRequest = async (newPassword: string) => {
    const res = await request(actionCode, newPassword);

    if (isSuccessState(res)) {
      showSnackbar({
        newMessage: authT("message.resetPasswordSucceeded"),
        newSeverity: "success",
      });
      router.push("/auth/sign-in");
    } else if (isFailState(res)) {
      console.error(res.error);
      showSnackbar({ newMessage: res.error, newSeverity: "error" });
    }
  };

  /**
   * Description user eventとreset passwordリクエストのハブ。
   * loadingの状態管理と予期せぬ例外のハンドリングを行う。
   * @param {FormValue} values
   * @returns {void}
   */
  const onSubmit = async (values: FormValue) => {
    setIsLoading(true);
    const { password } = values;
    try {
      await resetPasswordRequest(password);
    } catch (error) {
      console.error(error);
      showSnackbar({ newMessage: t("errors.unexpected"), newSeverity: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ResetPasswordFormPresentationComponent
      onSubmit={handleSubmit(onSubmit)}
      passwordTextFieldProps={{
        ...register("password", {
          required: true,
          pattern: {
            value: PASSWORD_REGEX,
            message: authT("errors.invalidPassword"),
          },
        }),
        error: Boolean(errors.password),
        helperText: errors.password?.type == "pattern" ? authT("errors.invalidPassword") : "",
      }}
      isValid={isValid}
      isLoading={isLoading}
      authT={authT}
    />
  );
};
