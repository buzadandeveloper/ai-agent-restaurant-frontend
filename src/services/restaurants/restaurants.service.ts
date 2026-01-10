import { createQueryKeys } from "@lukemorales/query-key-factory";
import { request } from "@/lib/request";
import type { RestaurantData } from "@/services/restaurants/restaurants.types";

class RestaurantsService {
  getRestaurants = (): Promise<RestaurantData[]> => request.get("/api/restaurant/my-restaurants");

  getRestaurantById = (id: number): Promise<RestaurantData> => request.get(`/api/restaurant/${id}`);

  createRestaurant = (data: FormData): Promise<{ message: string; restaurant: RestaurantData }> =>
    request.post("/api/restaurant/create", data);

  updateRestaurant = (
    id: number,
    data: FormData
  ): Promise<{ message: string; restaurant: RestaurantData }> =>
    request.put(`/api/restaurant/${id}`, data);

  deleteRestaurant = (id: number): Promise<{ message: string; restaurantId: number }> =>
    request.delete(`/api/restaurant/${id}`);
}

export const restaurantsService = new RestaurantsService();

export const restaurantsQueryKeys = createQueryKeys("restaurants", {
  getRestaurants: () => ({
    queryKey: ["myRestaurants"],
    queryFn: () => restaurantsService.getRestaurants()
  }),
  getRestaurantById: (id: number) => ({
    queryKey: ["restaurant", id],
    queryFn: () => restaurantsService.getRestaurantById(id)
  })
});
