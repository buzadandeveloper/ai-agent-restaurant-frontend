import { orderTablesQueryKeys } from "@services/order-tables/order-tables-service";
import { useQuery } from "@tanstack/react-query";

export const useGetRestaurantsOrderTables = (restaurantId: number) => {
  return useQuery(orderTablesQueryKeys.getRestaurantsOrderTables(restaurantId));
};
