import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { showToast } from "@/lib/show-toast";
import { authService } from "@/services/auth/auth.service";
import type { LoginData } from "@/services/auth/auth.types";

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
