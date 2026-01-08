import { useEffect, useState, use } from "react";
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Login, Register } from "@/features/auth/components";
import { showToast } from "@/lib/show-toast";
import type { ToastData } from "@/types/toast.types";

export const AuthPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tab, setTab] = useState("register");

  useEffect(() => {
    const tabParam = searchParams.get("tab");

    if (tabParam === "register" || tabParam === "login") {
      setTab(tabParam);
    }
  }, [searchParams]);

  useEffect(() => {
    const status = searchParams.get("status");

    if (status && afterVerifyAccStatus[status]) {
      setSearchParams({ tab: status === "verified" ? "login" : "register" });
      const id = setTimeout(() => {
        showToast(afterVerifyAccStatus[status]);
      }, 0);

      return () => clearTimeout(id);
    }
  }, [searchParams, setSearchParams]);

  const onHandleTabChange = (value: string) => {
    setTab(value);
    setSearchParams({ tab: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 p-4">
      <div className="w-full max-w-md">
        <Tabs value={tab} onValueChange={onHandleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="register">Register</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="register">
            <Register />
          </TabsContent>
          <TabsContent value="login">
            <Login />
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
