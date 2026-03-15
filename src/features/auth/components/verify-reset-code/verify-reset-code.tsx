import { Button } from "@components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import type { VerifyResetCodeData } from "@services/auth/auth-types";
import { useForm } from "react-hook-form";
import { useVerifyResetCode } from "../../hooks/index";
import { verifyResetCodeSchema } from "../../schemas/auth-schemas";

interface VerifyResetCodeProps {
  email: string;
  handleVerifyCode: (token: string) => void;
}

export const VerifyResetCode = ({ email, handleVerifyCode }: VerifyResetCodeProps) => {
  const form = useForm<VerifyResetCodeData>({
    resolver: zodResolver(verifyResetCodeSchema),
    defaultValues: {
      email,
      code: ""
    }
  });

  const verifyResetCode = useVerifyResetCode();

  const onSubmit = (data: VerifyResetCodeData) => {
    verifyResetCode.mutate(data, {
      onSuccess: (data) => handleVerifyCode(data.resetToken)
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Verify Reset Code</CardTitle>
        <CardDescription>Enter the 6-digit code sent to your email</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            id="verify-reset-code-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verification Code</FormLabel>
                  <FormControl>
                    <div className="flex justify-center">
                      <InputOTP maxLength={6} value={field.value} onChange={field.onChange}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full mt-2" type="submit" disabled={verifyResetCode.isPending}>
              Verify Code
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
