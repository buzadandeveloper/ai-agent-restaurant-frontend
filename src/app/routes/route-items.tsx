import { AuthPage } from "@/features/auth";
import { RestaurantPage, RestaurantsPage } from "@/features/restaurants";
import { SettingsPage } from "@/features/settings";

export const RouteItems = {
  public: [
    {
      path: "authenticate",
      element: <AuthPage />
    }
  ],
  private: [
    { path: "restaurants", element: <RestaurantsPage /> },
    {
      path: "restaurants/restaurant",
      element: <RestaurantPage />
    },
    { path: "settings", element: <SettingsPage /> }
  ]
};
