import { ProtectedRoutes } from "@app/routes/protected-routes";
import { NotFound } from "@components/common/404/not-found";
import {
  RestaurantPage,
  RestaurantsPage,
  RestaurantsTablesManagementPage,
  RestaurantTablePage,
  RestaurantTablesPage,
  SettingsPage
} from "@features/index";
import { PrivateLayout } from "@layouts/private-layout";

export const privateRoutes = [
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <PrivateLayout />,
        children: [
          {
            path: "restaurants",
            children: [
              { index: true, element: <RestaurantsPage /> },
              {
                path: "restaurant/:restaurantId",
                element: <RestaurantPage />
              }
            ]
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
