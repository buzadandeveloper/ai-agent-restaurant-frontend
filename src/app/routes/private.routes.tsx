import { NotFound } from "@/components/common/404/not-found";
import { PrivateLayout } from "@/layouts/private-layout";
import { ProtectedRoutes } from "./protected.routes";
import { RouteItems } from "./route-items";

export const privateRoutes = [
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <PrivateLayout />,
        children: RouteItems.private,
        errorElement: <NotFound />
      }
    ]
  }
];
