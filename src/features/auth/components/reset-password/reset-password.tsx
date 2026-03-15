import { FormFieldWithTypes } from "@components/common/form/form-field-with-types";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card";
import { Form } from "@components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useResetPassword } from "../../hooks/index";
import { type ResetPasswordData, resetPasswordSchema } from "../../schemas/auth-schemas";

interface ResetPasswordProps {
  resetToken: string;
}

export const ResetPassword = ({ resetToken }: ResetPasswordProps) => {
  const form = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      resetToken,
      newPassword: "",
      confirmPassword: ""
    }
  });

  const resetPassword = useResetPassword();

  const onSubmit = (data: ResetPasswordData) => {
    const { confirmPassword, ...payload } = data;

    resetPassword.mutate(payload);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reset Password</CardTitle>
        <CardDescription>Enter your new password</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            id="reset-password-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <FormFieldWithTypes
              form={form}
              type="password"
              name="newPassword"
              label="New Password"
              placeholder="********"
              ariaInvalid={!!form.formState.errors.newPassword}
            />
            <FormFieldWithTypes
              form={form}
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              placeholder="********"
              ariaInvalid={!!form.formState.errors.confirmPassword}
            />
            <Button className="w-full mt-2" type="submit" disabled={resetPassword.isPending}>
              Reset Password
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
