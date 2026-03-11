import { request } from "@lib/api/request";
import type { LoginData, RegisterData } from "./auth-types";

class AuthService {
  register = (payload: RegisterData) => request.post("/api/auth/register", payload);

  login = (payload: LoginData): Promise<{ accessToken: string }> =>
    request.post("/api/auth/login", payload);

  forgotPassword = (payload: { email: string }): Promise<{ message: string }> =>
    request.post("/api/auth/forgot-password", payload);

  verifyResetCode = (payload: {
    email: string;
    code: string;
  }): Promise<{ message: string; resetToken: string }> =>
    request.post("/api/auth/verify-reset-code", payload);

  resetPassword = (payload: {
    resetCode: string;
    newPassword: string;
  }): Promise<{ message: string }> => request.post("/api/auth/reset-password", payload);
}

export const authService = new AuthService();
