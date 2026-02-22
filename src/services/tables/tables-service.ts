import { request } from "@lib/api/request";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import type { RestaurantTablesResponse, TableWithOrders } from "./tables-types";

class TablesService {
  getRestaurantsTables(restaurantId: number): Promise<RestaurantTablesResponse> {
    return request.get(`/api/tables/restaurant/${restaurantId}`);
  }

  getRestaurantTableById(restaurantId: number, tableId: number): Promise<TableWithOrders> {
    return request.get(`/api/tables/restaurant/${restaurantId}/${tableId}`);
  }
}

export const tablesService = new TablesService();

export const tablesQueryKeys = createQueryKeys("order-tables", {
  getRestaurantsTables: (restaurantId: number) => ({
    queryKey: ["getRestaurantsOrderTables", restaurantId],
    queryFn: () => tablesService.getRestaurantsTables(restaurantId)
  }),
  getRestaurantTableById: (restaurantId: number, tableId: number) => ({
    queryKey: ["getRestaurantTableById", restaurantId, tableId],
    queryFn: () => tablesService.getRestaurantTableById(restaurantId, tableId)
  })
});
