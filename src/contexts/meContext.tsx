"use client";
import { createContext, useContext } from "react";
import { MeState, useGetMe } from "@/hooks/useGetMe";

type UpdateContextType = () => void;

const initialRefetchMe = () => {};
const initialMeState = undefined;
const MeContext = createContext<MeState | undefined>(initialMeState);
const MeUpdateContext = createContext<UpdateContextType>(initialRefetchMe);

// Meをrefetchする用のContext
export const useUpdateMeContext = (): UpdateContextType =>
  useContext(MeUpdateContext);
// Meのデータを扱う用のContext
export const useMeContext = () => useContext(MeContext);

export const MeContextProvider = ({ children }: { children: JSX.Element }) => {
  const { state: meState, refetch: refetchMe } = useGetMe();

  return (
    <MeContext.Provider value={meState}>
      <MeUpdateContext.Provider value={refetchMe}>
        {children}
      </MeUpdateContext.Provider>
    </MeContext.Provider>
  );
};
