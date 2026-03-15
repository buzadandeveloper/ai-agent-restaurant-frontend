export type RegisterData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type LoginData = Pick<RegisterData, "email" | "password">;

export type ResetPasswordData = {
  resetToken: string;
  newPassword: string;
};

export type VerifyResetCodeData = {
  email: string;
  code: string;
};
