import { FormFieldWithTypes } from "@components/common/form/form-field-with-types";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card";
import { Form } from "@components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useForgotPassword } from "../../hooks/index";
import { type ForgotPasswordData, forgotPasswordSchema } from "../../schemas/auth-schemas";

interface ForgotPasswordProps {
  handleForgotPassword: (email: string) => void;
}

export const ForgotPassword = ({ handleForgotPassword }: ForgotPasswordProps) => {
  const form = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ""
    }
  });

  const forgotPassword = useForgotPassword();

  const onSubmit = (data: ForgotPasswordData) => {
    forgotPassword.mutate(data, {
      onSuccess: () => handleForgotPassword(data.email)
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Forgot Password</CardTitle>
        <CardDescription>Enter your email to receive a code</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            id="forgot-password-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <FormFieldWithTypes
              form={form}
              type="email"
              name="email"
              label="Email"
              placeholder="m@example.com"
              ariaInvalid={!!form.formState.errors.email}
            />
            <Button className="w-full mt-2" type="submit" disabled={forgotPassword.isPending}>
              Send code
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
