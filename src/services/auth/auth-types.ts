export type RegisterData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type LoginData = Pick<RegisterData, "email" | "password">;
