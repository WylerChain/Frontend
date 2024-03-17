"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
// import type { User } from "@firebase/auth";
// import { onAuthStateChanged } from "@firebase/auth";
// import { auth } from "@/libs/firebase";
const User = () => {
  return null;
};
/** NULL if the user is not logged in. If the observe process has not yet been completed, it will be undefined. */
export type UserState = User | null | undefined;
export type AuthContextType = {
  user: UserState;
};
const initialState: UserState = undefined;
const AuthContext = createContext<AuthContextType>({ user: initialState });

type Props = { children: ReactNode };

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserState>(initialState);

  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(auth, (user) => {
    //   setUser(user);
    // });
    // return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
