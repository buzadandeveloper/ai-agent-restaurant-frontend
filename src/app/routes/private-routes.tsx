import { ProtectedRoutes } from "@app/routes/protected-routes";
import { NotFound } from "@components/common/404/not-found";
import { RestaurantTablesPage } from "@features/restaurant-tables/index";
import { RestaurantPage, RestaurantsPage } from "@features/restaurants/index";
import { RestaurantsTablesManagementPage } from "@features/restaurants-tables-management/index";
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
          {
            path: "restaurants-tables-management",
            element: <RestaurantsTablesManagementPage />
          },
          {
            path: "restaurants-tables-management/:id",
            element: <RestaurantTablesPage />
          },
          { path: "settings", element: <SettingsPage /> }
        ],
        errorElement: <NotFound />
      }
    ]
  }
];
