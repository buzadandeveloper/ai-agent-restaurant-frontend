import { request } from "@/lib/requset";
import type { LoginProps, RegisterProps } from "@/services/auth/auth.types";

class AuthService {
  register = (payload: RegisterProps) => request.post("/api/auth/register", payload);

  login = (payload: LoginProps) => request.post("/api/auth/login", payload);
}

export const authService = new AuthService();
