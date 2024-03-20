import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";
import { MeState } from "./useGetMe";
import { AccountStatusType } from "@/constants/accounts";
import { routingManageResult } from "@/utils/routingManager";
import { meStateType as meStateTypeFunc } from "@/utils/me";

/**
 * Description ユーザーの状態と現在のパスを元にしたルーティング制御を行う
 * @param {meState} user
 * @param {string} currentPathname
 * @returns {void}
 */

export const useRoutingHandler = (meState: MeState, currentPathname: string) => {
  const router = useRouter();
  const mountedRef = useRef(false);

  const meStateType: AccountStatusType | undefined = useMemo(() => {
    return meStateTypeFunc(meState);
  }, [meState]);

  useEffect(() => {
    if (meStateType === undefined) return;
    if (mountedRef.current) return;

    mountedRef.current = true;

    const routingManageRes = routingManageResult(meStateType, currentPathname);
    if (!routingManageRes.isAllowed) {
      router.replace(routingManageRes.redirectPath);
    }
  }, [currentPathname, router, meStateType]);

  return;
};
