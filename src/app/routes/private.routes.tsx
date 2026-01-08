import { ProtectedRoutes } from "@/app/routes/protected-routes";
import { UserPage } from "@/features/user";
import { PrivateLayout } from "@/layouts/private-layout";

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
