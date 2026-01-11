import { MenuItems } from "@/app/routes/menu-items";
import { ProtectedRoutes } from "@/app/routes/protected-routes";
import { NotFound } from "@/components/common/404/not-found";
import { RestaurantPage } from "@/features/restaurants";
import { PrivateLayout } from "@/layouts/private-layout";

export const privateRoutes = [
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <PrivateLayout />,
        children: MenuItems
      },
      {
        element: <PrivateLayout />,
        children: [
          {
            path: "restaurants/restaurant",
            element: <RestaurantPage />,
            errorElement: <NotFound />
          }
        ]
      }
    ]
  }
];
