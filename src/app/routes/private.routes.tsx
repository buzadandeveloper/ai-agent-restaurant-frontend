import { MenuItems } from "@/app/routes/menu-items";
import { ProtectedRoutes } from "@/app/routes/protected-routes";
import { PrivateLayout } from "@/layouts/private-layout";

export const privateRoutes = [
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <PrivateLayout />,
        children: MenuItems
      }
    ]
  }
];
