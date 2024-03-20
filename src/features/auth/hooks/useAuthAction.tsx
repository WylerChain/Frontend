import { useSearchParams } from "next/navigation";
import { useState, useCallback, useEffect, useRef } from "react";

export type UseAuthActionResultType = {
  actionState: AuthActionState;
};

export const AUTH_ACTION_MODES = {
  VERIFY_EMAIL: "verifyEmail",
  RESET_PASSWORD: "resetPassword",
};
export type AuthActionMode = (typeof AUTH_ACTION_MODES)[keyof typeof AUTH_ACTION_MODES];

type AuthActionState =
  | {
      mode: AuthActionMode;
      actionCode: string;
    }
  | undefined;

/**
 * Description Firebaseのメールリンクをparseするcustom hooks
 * @see https://firebase.google.com/docs/auth/custom-email-handler?hl=ja
 * @return {UseAuthActionResultType} actionState
 */
export const useAuthAction = (): UseAuthActionResultType => {
  const [actionState, setActionState] = useState<AuthActionState>(undefined);
  const searchParams = useSearchParams();

  const isValidMode = (mode: string) => {
    return Object.values(AUTH_ACTION_MODES).includes(mode);
  };

  useEffect(() => {
    const mode = searchParams.get("mode");
    const actionCode = searchParams.get("oobCode");

    if (mode == undefined || actionCode == undefined)
      throw new Error(`mode and actionCode is required both`);
    if (!isValidMode(mode)) throw new Error(`${mode} is invalid mode`);

    setActionState({
      mode,
      actionCode,
    });
  }, [searchParams]);

  return {
    actionState,
  };
};
