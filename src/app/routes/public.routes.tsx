import { PublicLayout } from "@/components/layouts/public-layout";
import { AuthPage } from "@/features/auth";

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
