import { ProtectedRoutes } from "@/app/routes/protected.routes";
import { RouteItems } from "@/app/routes/route-items";
import { NotFound } from "@/components/common/404/not-found";
import { PrivateLayout } from "@/layouts/private-layout";

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
