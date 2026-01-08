import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { showToast } from "@/lib/show-toast";
import { authService } from "@/services/auth/auth.service";
import type { RegisterData } from "@/services/auth/auth.types";

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: RegisterData) => authService.register(data),
    onError: (error: AxiosError<any>) => {
      if (error.status === 409) {
        showToast({
          title: "Registration Error",
          description: error.response?.data?.message,
          variant: "destructive"
        });
      }
    },
    onSuccess: () => {
      showToast({
        title: "Success",
        description: "Registration successful! Please check your email to verify your account.",
        variant: "default"
      });
    }
  });
};
