"use client";
import { createContext, useContext } from "react";
import { MeState, useGetMe } from "@/hooks/useGetMe";

type UpdateContextType = () => void;

const initialRefetchMe = () => {};
const initialMeState = undefined;
const MeContext = createContext<MeState | undefined>(initialMeState);
const MeUpdateContext = createContext<UpdateContextType>(initialRefetchMe);

// Context for refetching Me
export const useUpdateMeContext = (): UpdateContextType =>
  useContext(MeUpdateContext);
// Context for handling Me data
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
