import { tablesQueryKeys } from "@services/tables/tables-service";
import { useQuery } from "@tanstack/react-query";

export const useGetRestaurantTableById = (restaurantId: number, tableId: number) => {
  return useQuery(tablesQueryKeys.getRestaurantTableById(restaurantId, tableId));
};
