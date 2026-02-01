import { AuthPage } from "@features/auth/index";
import { PublicLayout } from "@layouts/public-layout";

export const publicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "authenticate",
        element: <AuthPage />
      }
    ]
  }
];
