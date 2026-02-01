import { showToast } from "@lib/show-toast";
import { authService } from "@services/auth/auth-service";
import type { LoginData, RegisterData } from "@services/auth/auth-types";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginData) => authService.login(data),
    onSuccess: (response) => {
      localStorage.setItem("token", response.accessToken);
      navigate("/dashboard");
      showToast({ title: "Success", description: "Login successful!", variant: "default" });
    }
  });
};

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
