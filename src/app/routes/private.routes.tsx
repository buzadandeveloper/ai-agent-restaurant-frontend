import { ProtectedRoutes } from "@/app/routes/protected-routes";
import { PrivateLayout } from "@/layouts/private-layout";
import { UserPage } from "@/features/user";

export const privateRoutes = [
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <PrivateLayout />,
        children: [
          {
            path: "user",
            element: <UserPage />
          }
        ]
      }
    ]
  }
];
