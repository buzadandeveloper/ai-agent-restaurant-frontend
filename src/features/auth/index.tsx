import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import {
  ForgotPassword,
  Login,
  Register,
  ResetPassword,
  VerifyResetCode
} from "@features/auth/components";
import { showToast } from "@lib/show-toast";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { ToastData } from "@/types/index";

export const AuthPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [tab, setTab] = useState(() => {
    const tabParam = searchParams.get("tab");
    return tabParam === "login" || tabParam === "register" ? tabParam : "register";
  });
  const [resetPasswordStep, setResetPasswordStep] = useState<"email" | "otp" | "password">("email");
  const [resetEmail, setResetEmail] = useState("");
  const [resetToken, setResetToken] = useState("");

  useEffect(() => {
    const status = searchParams.get("status");
    if (!status || !afterVerifyAccStatus[status]) return;

    const nextTab = status === "verified" ? "login" : "register";
    setTab(nextTab);
    setSearchParams({ tab: nextTab }, { replace: true });

    const id = setTimeout(() => {
      showToast(afterVerifyAccStatus[status]);
    }, 0);

    return () => clearTimeout(id);
  }, [searchParams, setSearchParams]);

  const isResetPassword = searchParams.get("resetPassword") === "true";

  const onHandleTabChange = (value: string) => {
    setTab(value);
  };

  const handleForgotPassword = (email: string) => {
    setResetEmail(email);
    setResetPasswordStep("otp");
  };

  const handleVerifyCode = (token: string) => {
    setResetToken(token);
    setResetPasswordStep("password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 p-4">
      <div className="w-full max-w-md">
        <Tabs value={tab} onValueChange={onHandleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="register" disabled={isResetPassword}>
              Register
            </TabsTrigger>
            <TabsTrigger value="login" disabled={isResetPassword}>
              Login
            </TabsTrigger>
          </TabsList>
          <TabsContent value="register">
            <Register />
          </TabsContent>
          <TabsContent value="login">
            {isResetPassword ? (
              <>
                {resetPasswordStep === "email" && (
                  <ForgotPassword handleForgotPassword={handleForgotPassword} />
                )}
                {resetPasswordStep === "otp" && (
                  <VerifyResetCode email={resetEmail} handleVerifyCode={handleVerifyCode} />
                )}
                {resetPasswordStep === "password" && <ResetPassword resetToken={resetToken} />}
              </>
            ) : (
              <Login />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const afterVerifyAccStatus: Record<string, ToastData> = {
  invalidToken: {
    title: "Invalid verification",
    description: "Please request a new verification email.",
    variant: "destructive"
  },
  tokenExpired: {
    title: "Verification link expired",
    description: "Please request a new verification email.",
    variant: "destructive"
  },
  verified: {
    title: "Account verified",
    description: "Your account has been successfully verified. You can now log in.",
    variant: "default"
  }
};
