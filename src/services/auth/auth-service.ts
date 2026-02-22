import { request } from "@lib/api/request";
import type { LoginData, RegisterData } from "./auth-types";

class AuthService {
  register = (payload: RegisterData) => request.post("/api/auth/register", payload);

  login = (payload: LoginData): Promise<{ accessToken: string }> =>
    request.post("/api/auth/login", payload);
}

export const authService = new AuthService();
