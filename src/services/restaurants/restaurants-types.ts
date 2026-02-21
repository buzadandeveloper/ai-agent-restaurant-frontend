import type { RestaurantData } from "@/types/index";

export type RestaurantMenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  isAvailable: boolean;
  tags: string[];
  allergens: string[];
  categoryId: number;
  categoryName: string;
};

export type RestaurantResponse = {
  message: string;
  restaurant: RestaurantData;
};

export type RestaurantIdResponse = {
  restaurantId: number;
  message: string;
};
