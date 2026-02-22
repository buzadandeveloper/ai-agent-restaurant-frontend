import { ProtectedRoutes } from "@app/routes/protected-routes";
import { NotFound } from "@components/common/404/not-found";
import { RestaurantTablePage } from "@features/restaurant-table/index";
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
            children: [
              {
                index: true,
                element: <RestaurantsTablesManagementPage />
              },
              {
                path: "restaurant/:restaurantId",
                element: <RestaurantTablesPage />
              },
              {
                path: "restaurant/:restaurantId/table/:tableId",
                element: <RestaurantTablePage />
              }
            ]
          },
          { path: "settings", element: <SettingsPage /> }
        ],
        errorElement: <NotFound />
      }
    ]
  }
];
