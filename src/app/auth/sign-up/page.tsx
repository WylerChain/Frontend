"use client";
import { useRoutingHandler } from "@/hooks/useRoutingHandler";
import { usePathname } from "next/navigation";
import { SignUpForm } from "@/features/auth/components/SignUpForm/index.container";
import { useMeContext } from "@/contexts/meContext";

const AuthSignUpPage = () => {
  const user = useMeContext();
  const pathname = usePathname();
  useRoutingHandler(user, pathname);

  return <SignUpForm />;
};
export default AuthSignUpPage;
