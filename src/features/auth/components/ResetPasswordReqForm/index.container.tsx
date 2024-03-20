// React
import { useState } from "react";
import * as React from "react";
import { useForm } from "react-hook-form";
import {
  FormValue,
  ResetPasswordReqForm as ResetPasswordFormPresentationComponent,
} from "./index.presentation";
import { ResetPasswordReqFormSent as ResetPasswordReqFormSentPresentationComponent } from "./sent.presentation";
import { isFailState, isSuccessState } from "@/types/utils/managedRequest";
import { useRouter } from "next/navigation";
import { useSnackbar } from "@/contexts/snackbarContext";
import { useTranslation } from "@/i18n/client";
import { LANGUAGE_OPTIONS, NAMESPACE_OPTIONS } from "@/i18n/settings";
import { useResetPasswordRequest } from "@/features/auth/hooks/useResetPasswordRequest";
import { EMAIL_REGEX } from "@/utils/regex";

export type ResetPasswordReqFormProps = {};

export const ResetPasswordReqForm: React.FC<ResetPasswordReqFormProps> = ({}) => {
  const showSnackbar = useSnackbar();
  const { t: authT } = useTranslation(LANGUAGE_OPTIONS.ENGLISH, NAMESPACE_OPTIONS.auth);
  const { t } = useTranslation(LANGUAGE_OPTIONS.ENGLISH);
  const router = useRouter();
  const { request } = useResetPasswordRequest();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValue>({ mode: "onChange" });

  const [isLoading, setIsLoading] = useState(false);
  const [isSentMail, setIsSentMail] = useState(false);
  const [email, setEmail] = useState<string | undefined>(undefined);

  /**
   * Description Reset Password Requestリクエストを行い、レスポンスを元にハンドリングを行う
   * @param {string} email
   * @param {string} password
   * @returns {void}
   */
  const resetPasswordReqRequest = async (email: string) => {
    const res = await request(email);

    if (isSuccessState(res)) {
      showSnackbar({
        newMessage: authT("message.sentResetPasswordEmailSucceeded"),
        newSeverity: "success",
      });
      router.push("/");
    } else if (isFailState(res)) {
      console.error(res.error);
      showSnackbar({ newMessage: res.error, newSeverity: "error" });
    }
  };

  /**
   * Description user eventとReset Password Request リクエストのハブ。
   * loadingの状態管理と予期せぬ例外のハンドリングを行う。
   * @param {FormValue} values
   * @returns {void}
   */
  const onSubmit = async (values: FormValue) => {
    setIsLoading(true);
    const { email } = values;
    try {
      await resetPasswordReqRequest(email);
      setIsSentMail(true);
      setEmail(email);
    } catch (error) {
      console.error(error);
      showSnackbar({ newMessage: t("errors.unexpected"), newSeverity: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      {isSentMail && email ? (
        <ResetPasswordReqFormSentPresentationComponent email={email} authT={authT} />
      ) : (
        <ResetPasswordFormPresentationComponent
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
          isValid={isValid}
          isLoading={isLoading}
          authT={authT}
        />
      )}
    </React.Fragment>
  );
};
