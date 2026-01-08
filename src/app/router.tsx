import { createBrowserRouter } from "react-router-dom";
import { privateRoutes, publicRoutes } from "@/app/routes";
import { NotFound } from "@/components/common/404/not-found";

export const router = createBrowserRouter([
  ...publicRoutes,
  ...privateRoutes,
  {
    path: "*",
    element: <NotFound />
  }
]);
