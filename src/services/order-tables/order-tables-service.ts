import { request } from "@lib/api/request";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import type { RestaurantTablesResponse } from "./order-tables-types";

class OrderTablesService {
  getRestaurantsOrderTables(restaurantId: number): Promise<RestaurantTablesResponse> {
    return request.get(`/api/order-tables/restaurant/${restaurantId}/tables`);
  }
}

export const orderTablesService = new OrderTablesService();

export const orderTablesQueryKeys = createQueryKeys("order-tables", {
  getRestaurantsOrderTables: (restaurantId: number) => ({
    queryKey: ["getRestaurantsOrderTables", restaurantId],
    queryFn: () => orderTablesService.getRestaurantsOrderTables(restaurantId)
  })
});
