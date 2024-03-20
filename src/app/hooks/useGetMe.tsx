import { getMe } from "@/services/getMe";
import { GetMeResponse } from "@/types/responses/getMe";
import {
  RequestManageState,
  createFailState,
  createLoadingState,
  createSuccessState,
} from "@/types/utils/managedRequest";
import { useState, useCallback, useEffect } from "react";

export type MeState = RequestManageState<GetMeResponse>;

export const useGetMe = () => {
  const [state, setState] = useState<MeState>(undefined);

  const fetch = useCallback(async () => {
    setState(createLoadingState());
    try {
      const res = await getMe();
      setState(createSuccessState(res));
    } catch (error) {
      if (error instanceof Error) {
        setState(createFailState(error.message));
      } else {
        setState(createFailState("予期せぬエラーが発生しました。"));
      }
    }
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const refetch = useCallback(() => {
    fetch();
  }, [fetch]);

  return {
    state,
    refetch,
  };
};
