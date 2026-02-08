import { ProtectedRoutes } from "@app/routes/protected-routes";
import { NotFound } from "@components/common/404/not-found";
import { RestaurantPage, RestaurantsPage } from "@features/restaurants/index";
import { SettingsPage } from "@features/settings/index";
import { PrivateLayout } from "@layouts/private-layout";

export const privateRoutes = [
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <PrivateLayout />,
        children: [
          { path: "restaurants", element: <RestaurantsPage /> },
          {
            path: "restaurants/restaurant",
            element: <RestaurantPage />
          },
          { path: "settings", element: <SettingsPage /> }
        ],
        errorElement: <NotFound />
      }
    ]
  }
];
