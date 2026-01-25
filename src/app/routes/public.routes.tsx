import { PublicLayout } from "@/layouts/public-layout";
import { RouteItems } from "./route-items";

export const publicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: RouteItems.public
  }
];
