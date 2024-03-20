"use client";
import { useRoutingHandler } from "@/hooks/useRoutingHandler";
import { usePathname } from "next/navigation";
import { SignInForm } from "@/features/auth/components/SignInForm/index.container";
import { useMeContext } from "@/contexts/meContext";

const AuthSignInPage = () => {
  const user = useMeContext();
  const pathname = usePathname();
  useRoutingHandler(user, pathname);

  return <SignInForm />;
};
export default AuthSignInPage;
