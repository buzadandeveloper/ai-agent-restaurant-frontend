import type { RestaurantData } from "@/services/restaurants/restaurants.types";

export interface RestaurantDialogData {
  mode: "create" | "edit" | null;
  data: RestaurantData | null;
}
