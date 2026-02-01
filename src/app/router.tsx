import { privateRoutes, publicRoutes } from "@app/routes/index";
import { NotFound } from "@components/common/404/not-found";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  ...publicRoutes,
  ...privateRoutes,
  {
    path: "*",
    element: <NotFound />
  }
]);
