import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSignUp } from "@/features/auth/hooks/useSignUp";
import { isFailState, isSuccessState } from "@/types/utils/managedRequest";
import { FormValue, SignUpForm as SignUpFormPresentationComponent } from "./index.presentation";
import { useRouter } from "next/navigation";
import { useSnackbar } from "@/contexts/snackbarContext";
import { useTranslation } from "@/i18n/client";
import { LANGUAGE_OPTIONS, NAMESPACE_OPTIONS } from "@/i18n/settings";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/utils/regex";

export const SignUpForm: React.FC = ({}) => {
  const router = useRouter();
  const showSnackbar = useSnackbar();
  const { t: authT } = useTranslation(LANGUAGE_OPTIONS.ENGLISH, NAMESPACE_OPTIONS.auth);
  const { t } = useTranslation(LANGUAGE_OPTIONS.ENGLISH);
  const { request } = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValue>({ mode: "onChange" });

  const [isLoading, setIsLoading] = useState(false);
  /**
   * Description sign upリクエストを行いレスポンスを元にハンドリングを行う
   * @param {string} email
   * @param {string} password
   * @returns {void}
   */
  const signUpRequest = async (email: string, password: string) => {
    const res = await request(email, password);

    if (isSuccessState(res)) {
      showSnackbar({
        newMessage: authT("message.sentVerifyEmailSucceeded"),
        newSeverity: "success",
      });
      router.push("/auth/required-verify-email");
    } else if (isFailState(res)) {
      console.error(res.error);
      showSnackbar({ newMessage: res.error, newSeverity: "error" });
    }
  };

  /**
   * Description user eventとsign upリクエストのハブ。
   * loadingの状態管理と予期せぬ例外のハンドリングを行う。
   * @param {FormValue} values
   * @returns {void}
   */
  const onSubmit = async (values: FormValue) => {
    setIsLoading(true);
    const { email, password } = values;
    try {
      await signUpRequest(email, password);
    } catch (error) {
      console.error(error);
      showSnackbar({ newMessage: t("errors.unexpected"), newSeverity: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SignUpFormPresentationComponent
      onSubmit={handleSubmit(onSubmit)}
      emailTextFieldProps={{
        ...register("email", {
          required: true,
          pattern: {
            value: EMAIL_REGEX,
            message: authT("errors.invalidEmail"),
          },
        }),
        error: Boolean(errors.email),
        helperText: errors.email?.type == "pattern" ? authT("errors.invalidEmail") : "",
      }}
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
      confirmedCheckboxProps={{
        ...register("confirmedPolicy", { required: true }),
      }}
      isValid={isValid}
      isLoading={isLoading}
      authT={authT}
    />
  );
};
