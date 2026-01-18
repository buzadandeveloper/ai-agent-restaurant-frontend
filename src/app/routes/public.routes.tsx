import { RouteItems } from "@/app/routes/route-items";
import { PublicLayout } from "@/layouts/public-layout";

export const publicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: RouteItems.public
  }
];
