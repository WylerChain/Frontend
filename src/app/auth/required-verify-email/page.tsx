"use client";
import { useRoutingHandler } from "@/hooks/useRoutingHandler";
import { usePathname } from "next/navigation";
import { VerifyEmailRequired } from "@/features/auth/components/VerifyEmailRequired/index.container";
import { useMeContext } from "@/contexts/meContext";

const AuthRequiredVerifyEmailPage = () => {
  const user = useMeContext();
  const pathname = usePathname();
  useRoutingHandler(user, pathname);

  return <VerifyEmailRequired />;
};
export default AuthRequiredVerifyEmailPage;
