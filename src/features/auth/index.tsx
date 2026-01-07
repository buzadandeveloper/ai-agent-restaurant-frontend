import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Register, Login } from "@/features/auth/components";

export const AuthPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 p-4">
      <div className="w-full max-w-md">
        <Tabs defaultValue="register" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="register">Register</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <Register />
          <Login />
        </Tabs>
      </div>
    </div>
  );
};
