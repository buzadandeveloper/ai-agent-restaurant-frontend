import type { RestaurantData } from "@/types/index";

export interface RestaurantDialogData {
  mode: "create" | "edit" | null;
  data: RestaurantData | null;
}
