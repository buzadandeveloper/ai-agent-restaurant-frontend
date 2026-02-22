import type { RestaurantData } from "@/types/index";

export type RestaurantDialogData = {
  mode: "create" | "edit" | null;
  data: RestaurantData | null;
};
