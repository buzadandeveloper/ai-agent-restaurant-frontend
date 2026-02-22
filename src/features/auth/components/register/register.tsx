import { FormFieldWithTypes } from "@components/common/form/form-field-with-types";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card";
import { Form } from "@components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { RegisterData } from "@services/auth/auth-types";
import { useForm } from "react-hook-form";
import { useRegister } from "../../hooks/index";
import { registerSchema } from "../../schemas/auth.schema";

export const Register = () => {
  const form = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  });

  const { mutate: register, isPending } = useRegister();

  const onSubmit = (data: RegisterData) => {
    register(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Create a new account to get started</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form id="register-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormFieldWithTypes
              form={form}
              type="text"
              name="firstName"
              label="First name"
              placeholder="John"
              ariaInvalid={!!form.formState.errors.firstName}
            />
            <FormFieldWithTypes
              form={form}
              type="text"
              name="lastName"
              label="Last name"
              placeholder="Doe"
              ariaInvalid={!!form.formState.errors.lastName}
            />
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
              Create account
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
