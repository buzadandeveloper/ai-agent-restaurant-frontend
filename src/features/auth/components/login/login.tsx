import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormFieldWithTypes } from "@/components/common/form/form-field-with-types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useLogin } from "@/features/auth/hooks";
import { loginSchema } from "@/features/auth/schemas/auth.schema";
import type { LoginData } from "@/services/auth/auth.types";

export const Login = () => {
  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const { mutate: login, isPending } = useLogin();

  const onSubmit = (data: LoginData) => {
    login(data);
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
            <Button className="w-full mt-2" type="submit" disabled={isPending}>
              Sign in
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
