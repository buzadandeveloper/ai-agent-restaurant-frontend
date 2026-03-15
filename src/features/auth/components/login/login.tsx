import { FormFieldWithTypes } from "@components/common/form/form-field-with-types";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card";
import { Form } from "@components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginData } from "@services/auth/auth-types";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useLogin } from "../../hooks/index";
import { loginSchema } from "../../schemas/auth-schemas";

export const Login = () => {
  const [_, setSearchParams] = useSearchParams();

  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const login = useLogin();

  const handleForgotPassword = () => setSearchParams({ tab: "login", resetPassword: "true" });

  const onSubmit = (data: LoginData) => {
    login.mutate(data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form id="login-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormFieldWithTypes
              form={form}
              type="email"
              name="email"
              label="Email"
              placeholder="m@example.com"
              ariaInvalid={!!form.formState.errors.email}
            />
            <FormFieldWithTypes
              form={form}
              type="password"
              name="password"
              label="Password"
              placeholder="********"
              ariaInvalid={!!form.formState.errors.password}
            />
            <div>
              <div className="flex justify-end">
                <Button variant="link" type="button" onClick={() => handleForgotPassword()}>
                  Forgot password?
                </Button>
              </div>
              <Button className="w-full mt-2" type="submit" disabled={login.isPending}>
                Sign in
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
