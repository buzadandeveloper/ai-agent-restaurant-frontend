import { tablesQueryKeys } from "@services/tables/tables-service";
import { useQuery } from "@tanstack/react-query";

export const useGetRestaurantsTables = (restaurantId: number) => {
  return useQuery(tablesQueryKeys.getRestaurantsTables(restaurantId));
};

export const useGetRestaurantTableById = (restaurantId: number, tableId: number) => {
  return useQuery(tablesQueryKeys.getRestaurantTableById(restaurantId, tableId));
};
